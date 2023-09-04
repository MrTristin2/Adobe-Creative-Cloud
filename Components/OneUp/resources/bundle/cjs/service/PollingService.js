"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _saveFile = _interopRequireDefault(require("../preview/actions/saveFile"));

var _AppConstants = _interopRequireDefault(require("../constants/AppConstants"));

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _AppUtil = require("../util/AppUtil");

var _Events = _interopRequireWildcard(require("../constants/Events"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @class
 * @description
 * Polling service for File Save
 */
class PollingService {
  constructor() {
    this.firstTimePoll = true;
    this.pollingInProgress = false;
    this.filePollCounter = 0;
  }

  /**
   * @method
   * @description
   * polling service is required if either commenting or form filling enabled.
   * initializing the service start once the file preview is done.
   */
  initialize() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    _ServiceRegistry.default.getService("EventsService").registerEventListener(_Events.InternalEvents.PREVIEW_REF_READY, () => {
      const previewConfig = appStore.getActionConfig("preview");

      if (!previewConfig.showAnnotationTools && !previewConfig.enableFormFilling) {
        return;
      }

      if (appStore.configStore.getPollingConfig().keepPolling) {
        _ServiceRegistry.default.getService("EventsService").registerEventListener(_Events.default.APP_RENDERING_DONE, () => {
          this.startPolling();
        });
      }

      appStore.previewRef.getApis("INTEGRATION_CONNECTOR", ["document"]).then(apiObject => apiObject.document.subscribeToPDFEditOperations(() => apiObject.document.isDirty().then(isDirty => {
        if (appStore.isInPreview && !appStore.preventDirtyPDF) {
          if (this.firstTimePoll) {
            this.pollFile();
            this.firstTimePoll = false;
          }

          this.pollingAction(isDirty);
          appStore.setIsDirty(isDirty);
        }
      }))).catch(error => {
        _ServiceRegistry.default.getService("LoggingService").error("PollingService", `Error in calling preview dirty apis: ${JSON.stringify(error)}`);
      });
    });

    if (_ServiceRegistry.default.getService("CommentsApi").isSharedCommentingMode()) {
      _ServiceRegistry.default.getService("CommentsApi").registerCommentsEventListener(event => {
        if ([_Events.AnnotationEvents.ANNOTATION_ADDED, _Events.AnnotationEvents.ANNOTATION_DELETED, _Events.AnnotationEvents.ANNOTATION_UPDATED].indexOf(event) !== -1) {
          if (appStore.isInPreview && !appStore.isDownloadPrintInProgress) {
            if (this.firstTimePoll) {
              this.pollFile();
              this.firstTimePoll = false;
            }

            this.pollingAction(true);
            appStore.setIsDirty(true);
          }
        }
      });
    }
  }

  /**
   * @method
   * @description
   * reset the polling service by restoring counter to zero
   */
  _resetPoller() {
    this.filePollCounter = 0;
    this.pollCounter = 0;
  }
  /**
   * @method
   * @description
   * enable or disable the polling service.
   *
   * @param start polling start if param is true else stop
   */


  pollingAction(start) {
    if (start) {
      this.startPolling();
    } else {
      this.stopPolling();
    }
  }
  /**
   * @method
   * @description
   * start the polling for the file save whether it is modified or not. It also check
   * for the auto save if it cross the time threshold or it is in non focus mode.
   */


  startPolling() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    document.addEventListener("keydown", this.handleKeyDown.bind(this));
    const pollingConfig = appStore.configStore.getPollingConfig();

    this._resetPoller();

    if (!this.poller) {
      this.poller = setInterval(() => {
        this.pollCounter += 1;
        this.filePollCounter += 1; // File Polling

        if (this.filePollCounter === pollingConfig.filePollFrequency && pollingConfig.filePollFrequency > 0) {
          this.pollFile();
        } // AutoSave


        if (this.pollCounter === pollingConfig.autoSaveFrequency && pollingConfig.autoSaveFrequency > 0) {
          (0, _saveFile.default)({}, _AppConstants.default.SAVE_COMMENT_TYPE.AUTO_SAVE_FREQUENCY).catch(() => {});
        } // Focus Polling


        if (!document.hasFocus() && pollingConfig.enableFocusPolling) {
          (0, _saveFile.default)({}, _AppConstants.default.SAVE_COMMENT_TYPE.AUTO_SAVE_FOCUS).catch(() => {});
        }
      }, 1000);
    }
  }
  /**
   * @method
   * @description
   * stop the polling service for file save and reset the counter
   */


  stopPolling() {
    clearInterval(this.poller);
    this.poller = undefined;

    this._resetPoller();
  }

  handleKeyDown(event) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const charCode = String.fromCharCode(event.which).toLowerCase();

    if ((event.metaKey || event.ctrlKey) && charCode === "s") {
      event.preventDefault();

      if (appStore.isInPreview) {
        (0, _saveFile.default)({}, _AppConstants.default.SAVE_COMMENT_TYPE.AUTO_SAVE_KEYDOWN).catch(() => {});
      }
    }

    this._resetPoller();
  }
  /**
   * @method
   * @description
   * it check at regular interval whether the current file is the latest one or not
   */


  pollFile() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const callbackService = _ServiceRegistry.default.getService("CallbackService");

    if (appStore.fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.SAVING || this.pollingInProgress || !callbackService.hasCallback(_CallbackTypes.default.STATUS_API)) {
      return;
    } // eslint-disable-next-line no-unused-vars


    const errorHandler = error => {
      this.pollingInProgress = false; // handler error if needed
    };

    this.pollingInProgress = true;
    const firstTime = this.firstTimePoll;
    const isFileUpdated = callbackService.getCallback(_CallbackTypes.default.STATUS_API);
    isFileUpdated((0, _AppUtil.deepCopyObject)(appStore.fileInfoList[0].metaData)).then(result => {
      this.pollingInProgress = false;

      if (result.code === _ApiConstants.default.API_RESPONSE.FILE_MODIFIED) {
        const event = {
          workflow: "preview",
          subcategory: "updated check",
          type: firstTime ? "GET LATEST FILE" : "CONFLICT"
        };

        _ServiceRegistry.default.getService("AnalyticsProviderService").logEvent(event, {});

        this.stopPolling();
        const shouldShowNewFileDialog = appStore.isIntegration && (result === null || result === void 0 ? void 0 : result.showNewFileDialog);

        if (firstTime || shouldShowNewFileDialog) {
          _ServiceRegistry.default.getService("DialogApi").showNewFileDialog(_objectSpread({}, result.data.modifiedBy));
        } else {
          _ServiceRegistry.default.getService("DialogApi").showConflictDialog(_objectSpread(_objectSpread({}, result.data.modifiedBy), {}, {
            onCancel: () => {
              (0, _saveFile.default)(result, _AppConstants.default.SAVE_COMMENT_TYPE.AUTO_SAVE_CONFLICT_COPY).catch(() => {});
            }
          }));
        }
      } else {
        this.filePollCounter = 0;
      }
    }).catch(errorHandler);
  }

}

exports.default = PollingService;