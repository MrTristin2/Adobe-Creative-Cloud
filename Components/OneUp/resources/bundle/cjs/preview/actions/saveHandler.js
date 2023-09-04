"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = _interopRequireDefault(require("../../constants/AppConstants"));

var _ApiConstants = _interopRequireDefault(require("../../constants/ApiConstants"));

var _AppUtil = require("../../util/AppUtil");

var _ServiceRegistry = _interopRequireDefault(require("../../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../../constants/CallbackTypes"));

var _LoggingService = require("../../service/LoggingService");

var _saveFile = _interopRequireDefault(require("./saveFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const updateFile = (options = {}, saveType = _AppConstants.default.SAVE_COMMENT_TYPE.MANUAL) => new Promise((res, reject) => {
  const appStore = _ServiceRegistry.default.getService("AppStore");

  const fileMetadata = appStore.fileInfoList[0].metaData;

  const pollingService = _ServiceRegistry.default.getService("PollingService");

  pollingService.stopPolling();
  appStore.previewRef.getApis("INTEGRATION_CONNECTOR", ["document"]).then(apiObject => apiObject.document.getUpdatedPDFBuffer(appStore.configStore.getSaveCallbackConfig().incremental).then(buffer => {
    const st = new Date().getTime();
    const size = buffer.length;
    const saveAs = !!options.updated;

    const saveCommentStatusLogging = message => {
      const et = new Date().getTime();

      const _loggingService = _ServiceRegistry.default.getService("LoggingService");

      _loggingService.emit("saveHandler", "info", message, {
        saveAs,
        saveType,
        size,
        st,
        et
      });

      const event = {
        workflow: "pdf",
        subcategory: "annotation",
        type: saveAs ? "conflict" : "save",
        subtype: saveType
      };
      const custom = {
        "adb.event.context.pdfviewer.file_size": size / 1024,
        "adb.event.context.pdfviewer.saveTime": (et - st) / 1000
      };

      _ServiceRegistry.default.getService("AnalyticsProviderService").logEvent(event, custom);
    };

    const callbackService = _ServiceRegistry.default.getService("CallbackService");

    const saveCallback = callbackService.getCallback(_CallbackTypes.default.SAVE_API);
    const params = {};

    if (saveAs) {
      params.saveAs = true;
    }

    saveCallback((0, _AppUtil.deepCopyObject)(fileMetadata), buffer, params).then(response => {
      if (response.code === _ApiConstants.default.API_RESPONSE.SUCCESS) {
        saveCommentStatusLogging(_LoggingService.LoggingConstants.SAVE_COMMENT);

        if (saveAs) {
          const getParent = () => {
            if (response.data && response.data.metaData) {
              return response.data.metaData.parent || {};
            }

            return {};
          };

          const parentData = getParent();
          appStore.setToastInfo({
            type: _AppConstants.default.SHOW_TOAST.CONFLICT,
            data: parentData
          });
        }

        if (appStore.isDirty || appStore.configStore.getPollingConfig().keepPolling) {
          pollingService.startPolling();
        }

        res(response.data.metaData);
      }

      if (response.code === _ApiConstants.default.API_RESPONSE.FILE_MODIFIED) {
        appStore.setShowLoader(false);
        saveCommentStatusLogging(_LoggingService.LoggingConstants.SAVE_COMMENT_CONFLICT);
        const event = {
          workflow: "preview",
          subcategory: "updated save",
          type: "CONFLICT"
        };

        _ServiceRegistry.default.getService("AnalyticsProviderService").logEvent(event, {});

        _ServiceRegistry.default.getService("DialogApi").showConflictDialog(_objectSpread(_objectSpread({}, response.data.modifiedBy), {}, {
          onCancel: () => {
            appStore.setFileStatus(undefined);
            appStore.setIsDirty(true);
            (0, _saveFile.default)({
              updated: true
            }, _AppConstants.default.SAVE_COMMENT_TYPE.AUTO_SAVE_CONFLICT_COPY).catch(err => reject(err));
          }
        }));
      }
    }).catch(error => {
      _ServiceRegistry.default.getService("LoggingService").emit("saveHandler", "INFO", `Save comment failed ${JSON.stringify(error)}`, {});

      saveCommentStatusLogging(_LoggingService.LoggingConstants.SAVE_COMMENT_ERROR);
      reject(error);
    });
  }));
});

var _default = updateFile;
exports.default = _default;