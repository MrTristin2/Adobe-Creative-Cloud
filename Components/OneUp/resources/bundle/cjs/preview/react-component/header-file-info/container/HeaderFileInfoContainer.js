"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _react = _interopRequireWildcard(require("react"));

var _reactIntl = require("react-intl");

var _saveFile = _interopRequireDefault(require("../../../actions/saveFile"));

var _AppConstants = _interopRequireDefault(require("../../../../constants/AppConstants"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _Events = require("../../../../constants/Events");

var _AppUtil = require("../../../../util/AppUtil");

var _ComponentRegistry = _interopRequireDefault(require("../../../../util/ComponentRegistry"));

var _class, _class2, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/**
 * Container component for file info in integration header
 */
let HeaderFileInfoContainer = (0, _mobxReact.observer)(_class = (_class2 = class HeaderFileInfoContainer extends _react.Component {
  constructor(props) {
    super(props);

    _initializerDefineProperty(this, "showFileName", _descriptor, this);

    this._loggingService = _ServiceRegistry.default.getService("LoggingService");
  }

  componentDidMount() {
    _ServiceRegistry.default.getService("EventsService").registerEventListener(_Events.InternalEvents.FILE_NAME_TOAST_VISIBILITY, eventData => this.setShowFileName(!eventData));
  }

  setShowFileName(value) {
    this.showFileName = (0, _AppUtil.isMobileBrowser)() ? false : value;
  }

  render() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.dropinName === "combinepdf" || appStore.dropinName === "signintegration" || appStore.dropinName === "managesignintegration" || appStore.hideHeaderFileInfo) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }

    let status;
    let fileStatus;
    let enableSaveButton = false;
    let showSaveButton = false;
    this.fileMetadata = appStore.fileInfoList && appStore.fileInfoList.length > 0 ? appStore.fileInfoList[0].metaData : undefined;

    if (!this.fileMetadata) {
      return null;
    }

    const previewConfig = appStore.getActionConfig("preview");

    if (!appStore.configStore.isThumbnailView) {
      fileStatus = appStore.fileStatus;
      const isDirty = appStore.isDirty;
      const saveInProgress = fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.SAVING;
      const isEditAllowed = appStore.isInPreview && appStore.isEditAllowed && (previewConfig.showAnnotationTools || previewConfig.enableFormFilling);
      enableSaveButton = isDirty && !saveInProgress;
      showSaveButton = isEditAllowed;

      if (fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.SAVED || appStore.showLoader) {
        fileStatus = undefined;
      }

      if (enableSaveButton && showSaveButton) {
        fileStatus = _AppConstants.default.FILE_PROGRESS_STATUS.EDITED;
      }
    }

    if (previewConfig.showFileStatusInfo || previewConfig.showAnnotationTools || previewConfig.enableFormFilling) {
      if (appStore.hasReadOnlyFile) {
        status = "file.metadata.readonly";
      } else if (appStore.editAllowed === false) {
        status = "file.metadata.protected";
      }
    }

    if (appStore.configStore.getSaveCallbackConfig().showSaveButton === false) {
      showSaveButton = false; // As we are not showing Save button so check if we need to remove status as well

      if (appStore.configStore.getSaveCallbackConfig().showEditStatusInfo === false) {
        fileStatus = undefined;
      }
    }

    if (appStore.showViewMode) {
      fileStatus = undefined;
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, _ComponentRegistry.default.getComponent("HeaderFileInfoView", {
      showFileName: !previewConfig.showFileNameToast && (this.showFileName || appStore.hideFileNameToast),
      fileStatus,
      showSaveButton,
      disableSaveButton: !enableSaveButton,
      onSaveClick: () => (0, _saveFile.default)().catch(() => {}),
      fileMetadata: this.fileMetadata,
      status
    }));
  }

}, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "showFileName", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return !(0, _AppUtil.isMobileBrowser)();
  }
}), _applyDecoratedDescriptor(_class2.prototype, "setShowFileName", [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "setShowFileName"), _class2.prototype)), _class2)) || _class;

var _default = (0, _reactIntl.injectIntl)(HeaderFileInfoContainer);

exports.default = _default;
