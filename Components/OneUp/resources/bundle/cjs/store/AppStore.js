"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _v = _interopRequireDefault(require("uuid/v4"));

var _mobx = require("mobx");

var _AppConstants = _interopRequireDefault(require("../constants/AppConstants"));

var _ViewMode = _interopRequireWildcard(require("../constants/ViewMode"));

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _Events = _interopRequireWildcard(require("../constants/Events"));

var _AppUtil = require("../util/AppUtil");

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _Deferred = _interopRequireDefault(require("../util/Deferred"));

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

/**
 * Only fileName is a mandatory field.
 */
const DEFAULT_FILE_META = {
  fileName: "",
  mimeType: "application/pdf",
  fileSize: "",
  thumbnailLink: "",
  parent: {
    folderName: "",
    folderisIntegrationPresetLink: ""
  },
  modified: "",
  hasReadOnlyAccess: false
};
const APPLICATION_PDF_TYPE = "application/pdf";
let AppStore = (_class = class AppStore {
  constructor() {
    _initializerDefineProperty(this, "appError", _descriptor, this);

    _initializerDefineProperty(this, "previewError", _descriptor2, this);

    _initializerDefineProperty(this, "fileInfoList", _descriptor3, this);

    _initializerDefineProperty(this, "dropinName", _descriptor4, this);

    _initializerDefineProperty(this, "previewRef", _descriptor5, this);

    _initializerDefineProperty(this, "editAllowed", _descriptor6, this);

    _initializerDefineProperty(this, "isDirty", _descriptor7, this);

    _initializerDefineProperty(this, "fileStatus", _descriptor8, this);

    _initializerDefineProperty(this, "appRenderingBlocked", _descriptor9, this);

    _initializerDefineProperty(this, "fileLoaded", _descriptor10, this);

    _initializerDefineProperty(this, "showLoader", _descriptor11, this);

    _initializerDefineProperty(this, "progressText", _descriptor12, this);

    _initializerDefineProperty(this, "sideMenuOpen", _descriptor13, this);

    _initializerDefineProperty(this, "fileLoadingProgress", _descriptor14, this);

    _initializerDefineProperty(this, "searchOpen", _descriptor15, this);

    _initializerDefineProperty(this, "textSelectionEnabled", _descriptor16, this);

    _initializerDefineProperty(this, "previewMetadata", _descriptor17, this);

    _initializerDefineProperty(this, "toastInfo", _descriptor18, this);

    _initializerDefineProperty(this, "inFullScreen", _descriptor19, this);

    _initializerDefineProperty(this, "userInfo", _descriptor20, this);

    _initializerDefineProperty(this, "currentViewMode", _descriptor21, this);

    _initializerDefineProperty(this, "isHidingBranding", _descriptor22, this);

    _initializerDefineProperty(this, "isToolsInactive", _descriptor23, this);

    this.pdfMetadata = {};
    this.isAppReady = false;
    this.isRenditionOnly = false;
    this.intl = void 0;
    this.heightInView = undefined;
    this.windowScrollListener = undefined;
    this.fullScreenIdInHUD = undefined;
    this.isOnDevice = false;
    this.isIOS = false;
    this.showViewMode = false;
    this.documentViewUpdate = {};
    this.preventDirtyPDF = false;
    this.appClosed = false;
    this.legalDialogOpen = false;
    this.linearizationWaitPromise = new _Deferred.default();

    this._sendEvent = (event, data) => {
      _ServiceRegistry.default.getService("EventsService").sendEvent(event, data);
    };

    this.configStore = _ServiceRegistry.default.getService("ConfigStore");
    this.uiActionConfigStore = _ServiceRegistry.default.getService("UIActionConfigStore");
  }

  initialize(data) {
    this.setAppClosed(false);
    this.setConfig(data.config);
    this.setHeightInView(data.heightInView);
    this.setDropinName(data.action);
    this.configStore.setActionConfig("preview", data.actionConfig);
    this.initializeFileInfoList(data.fileInfoList);
    this.setPreviewMetadata(this.fileInfoList[0]);
    this.isRenditionOnly = !this.fileInfoList[0].content;
    this.isOnDevice = (0, _AppUtil.isDeviceBrowser)();
    this.isIOS = (0, _AppUtil.isIOS)();

    if (this.isIOS) {
      this.configStore.setShowDownload(false);
      this.configStore.setShowPrint(false);
    }

    if ((0, _AppUtil.isAndroid)()) {
      this.configStore.setShowPrint(false);
    }

    this.initForPreset();
    this.setUIActionConfig();
    const shouldShowViewMode = this.isIntegration || this.isFWPreset;
    this.showViewMode = shouldShowViewMode && ((0, _AppUtil.isMobileBrowser)() || this.configStore.getActionConfig("preview").showViewMode);

    if (this.showViewMode) {
      this.currentViewMode = this.getActionConfig("preview").defaultViewMode || _ViewMode.default.CONTINUOUS;
    }

    this.isHidingBranding = this.showBrandingInHUD && this.isFWPreset && (!this.configStore.getActionConfig("preview").showPageControls || (0, _AppUtil.isMobileBrowser)());
    this.initForLinearization();
  }

  rejectPromise(code) {
    (0, _AppUtil.rejectAPIPromise)(code);
  }

  initForLinearization() {
    if (this.configStore.getActionConfig("preview").enableLinearization) {
      _ServiceRegistry.default.getService("EventsService").registerEventListener(_Events.default.PDF_VIEWER_READY, () => {
        _ServiceRegistry.default.getService("PerformanceService").setCompleteFileLoadedOn();

        this.linearizationWaitPromise.resolve();
      });
    } else {
      this.linearizationWaitPromise.resolve();
    }
  }

  initForPreset() {
    if (this.isLBPreset) {
      _ServiceRegistry.default.getService("EmbedModeService").LBOpenPDFViewer(this.isIOS);
    } else if (this.isFWPreset) {
      _ServiceRegistry.default.getService("EmbedModeService").FWOpenPDFViewer();
    }

    if (this.configStore.getActionConfig("preview").enableSearchAPIs) {
      const blockSearch = event => {
        if ((event.metaKey || event.ctrlKey) && event.keyCode === 70 || event.keyCode === 114) {
          if (!this.inFullScreen) {
            event.stopImmediatePropagation();
          }
        }
      };

      document.addEventListener("keydown", blockSearch);
    }

    _ServiceRegistry.default.getService("EmbedModeService").pdfViewerOpen();
  }

  setAppClosed(val) {
    this.appClosed = val;

    if (val) {
      this.setFileStatus(undefined);
      this.setIsDirty(false);
    }
  }

  setPDFMetadata(pdfMetadata) {
    this.pdfMetadata = pdfMetadata;
  }

  setConfig(config) {
    this.configStore.init(config);
    this.setShowLoader(this.getConfig().showFileLoadingProgress);
  }

  setUserInfo(userInfo) {
    this.userInfo = userInfo;
  }

  setCurrentViewMode(viewMode) {
    this.currentViewMode = viewMode;
  }

  setUIActionConfig() {
    this.uiActionConfigStore.init(this.configStore.getActionConfig("preview").uiActionConfig);
  }

  getActionConfig(dropinAction) {
    return this.configStore.getActionConfig(dropinAction);
  }

  getUserInfo() {
    return this.userInfo;
  }

  getFileInfoList() {
    return this.fileInfoList;
  }

  setWindowScrollListener(listener) {
    this.windowScrollListener = listener;
  }

  setHeightInView(heightInView) {
    this.heightInView = heightInView;

    if (this.windowScrollListener) {
      const viewTop = heightInView.viewStartH;
      const viewHeight = heightInView.viewEndH - viewTop;
      const data = {
        viewTop,
        viewHeight,
        windowHeight: heightInView.winHeight
      };
      this.windowScrollListener({
        data
      });
    }
  }

  toggleLoaderWithText(show, text) {
    this.setPlainProgressText(text);
    this.setShowLoader(show);
  }

  setInFullScreen(value) {
    if (this.inFullScreen !== value) {
      this.inFullScreen = value;

      _ServiceRegistry.default.getService("FullScreenManager").setFullScreen(value);
    }
  }

  setToastInfo(value) {
    this.toastInfo = value;
  }

  setSearchOpen(value) {
    this.searchOpen = value;

    this._sendEvent(_Events.default.SEARCH_UI_TOGGLE, {
      shown: this.searchOpen
    });
  }

  setTextSelectionEnabled(value) {
    this.textSelectionEnabled = value;
  }

  setSideMenuOpen(value) {
    this.sideMenuOpen = value;
  }

  setAppRenderingBlocked(value) {
    this.rejectPromise(_ApiConstants.default.API_RESPONSE.PREVIEW_RENDERING_FAILED);
    this.appRenderingBlocked = value;

    if (!this.getConfig().showSimpleLoader) {
      this.setShowLoader(false);

      _ServiceRegistry.default.getService("DialogApi").showBlockingDialogWithReload("FILE_PREVIEW_ERROR_TITLE", "FILE_PREVIEW_ERROR_MSG");
    }
  }

  setAppError(appError) {
    if (this.configStore.getSaveCallbackConfig().showError) {
      this.appError = appError;
    }
  }

  setPreviewError(previewError) {
    if (this.configStore.getConfig().showPreviewErrors) {
      this.previewError = previewError;
      this.setShowLoader(false);

      if (this._fileRendertimeoutRef) {
        clearTimeout(this._fileRendertimeoutRef);
      }
    }
  }

  initializeFileInfoList(fileInfoList) {
    const finalFileInfoList = [];
    fileInfoList.forEach((fileInfo, index) => {
      const metaData = _objectSpread(_objectSpread({}, DEFAULT_FILE_META), fileInfo.metaData);

      const newFileInfo = {
        content: fileInfo.content
      };
      newFileInfo.metaData = metaData;
      newFileInfo.metaData.fileName = newFileInfo.metaData.fileName || newFileInfo.metaData.name;

      if (fileInfo.metaData && fileInfo.metaData.type && !fileInfo.metaData.mimeType) {
        newFileInfo.metaData.mimeType = fileInfo.metaData.type;
      }

      newFileInfo.id = metaData.id ? metaData.id : `${index}:${(0, _v.default)()}`;

      if (metaData.hasReadOnlyAccess) {
        this.setEditAllowed(false);
      }

      if (fileInfo.rendition) {
        newFileInfo.rendition = fileInfo.rendition;
      }

      newFileInfo.currentState = _AppConstants.default.STATE.INITIAL;
      finalFileInfoList.push(newFileInfo);
    });
    this.fileInfoList = finalFileInfoList;
  }

  setFileInfoList(fileInfoList) {
    this.fileInfoList = fileInfoList;
  }

  setFileMetadata(fileId, metadata) {
    this.fileInfoList = this.fileInfoList.map(fileInfo => {
      if (fileInfo.id === fileId) {
        const metaData = _objectSpread(_objectSpread({}, DEFAULT_FILE_META), metadata);

        return _objectSpread(_objectSpread({}, fileInfo), {}, {
          metaData
        });
      }

      return fileInfo;
    });
  }

  setPreviewMetadata(info) {
    this.setFileLoaded(false);

    if (info) {
      this.previewMetadata = {
        mimeType: info.metaData.mimeType,
        fileName: info.metaData.fileName,
        id: info.id,
        hasReadOnlyAccess: info.metaData.hasReadOnlyAccess || false
      };
    } else {
      this.previewMetadata = null;
    }
  }

  setFileName(fileName) {
    this.previewMetadata.fileName = fileName;

    if (this.fileInfoList.length > this.previewMetadata.id) {
      this.fileInfoList[this.previewMetadata.id].metaData.fileName = fileName;
    }
  }

  setAppReady(value) {
    // App can't be set back to not ready and it can be ready only once.
    if (value && !this.isAppReady) {
      this.isAppReady = true;

      this._sendEvent(_Events.default.APP_RENDERING_DONE);
    }
  }

  getFileInfoById(fileId) {
    let fInfo = null;
    this.fileInfoList.forEach(fileInfo => {
      if (fileInfo.id === fileId) {
        fInfo = fileInfo;
      }
    });
    return fInfo;
  }

  setDropinName(dropinName) {
    this.dropinName = dropinName;

    if (!this.isInPreview) {
      // Going away from preview
      this.setToastInfo(null);
    }
  } // TODO: remove this logic


  get hideFileNameToast() {
    return (0, _AppUtil.isMobileBrowser)() && (this.isSizedPreset || this.isLBPreset);
  } // TODO: remove this logic


  get hideScrubberInLB() {
    return (0, _AppUtil.isMobileBrowser)() && this.isLBPreset;
  }

  get isInPreview() {
    return this.dropinName && this.dropinName.toLowerCase().indexOf("preview") === 0;
  }

  get isInLinePreset() {
    return this.isInPreview && this.configStore.getActionConfig("preview").embedMode === _ViewMode.Preset.IN_LINE;
  }

  get isFWPreset() {
    return this.isInPreview && this.configStore.getActionConfig("preview").embedMode === _ViewMode.Preset.FULL_WINDOW;
  }

  get isSizedPreset() {
    return this.isInPreview && this.configStore.getActionConfig("preview").embedMode === _ViewMode.Preset.SIZED_CONTAINER;
  }

  get isLBPreset() {
    return this.isInPreview && this.configStore.getActionConfig("preview").embedMode === _ViewMode.Preset.LIGHT_BOX;
  }

  get isIntegration() {
    return this.isInPreview && this.configStore.getActionConfig("preview").embedMode === "INTEGRATION";
  }

  get isEditAllowed() {
    return this.editAllowed && !this.isRenditionOnly && !this.hasReadOnlyFile;
  }

  get hasReadOnlyFile() {
    return this.fileInfoList.filter(fileInfo => fileInfo.metaData.hasReadOnlyAccess).length > 0;
  }

  get isOnlyNonPDF() {
    return this.fileInfoList.length === 1 && this.fileInfoList[0].metaData.mimeType !== APPLICATION_PDF_TYPE;
  }

  get showToast() {
    return this.toastInfo && this.toastInfo.type && (this.toastInfo.type === _AppConstants.default.SHOW_TOAST.ERROR || this.toastInfo.data);
  }

  get showBrandingInHUD() {
    return this.configStore.getConfig().showBranding && (this.isSizedPreset || this.isInLinePreset || this.isFWPreset);
  }

  get showBrandingInHeader() {
    return this.configStore.getConfig().showBranding && !this.showBrandingInHUD;
  }

  setIsHidingBranding(value) {
    if (this.showBrandingInHUD) {
      this.isHidingBranding = value;
    }
  }

  setPreviewRef(ref) {
    this.previewRef = ref;
  }

  setIsDirty(bool) {
    this.isDirty = bool;

    if (!this.configStore.getConfig().showTopBar) {
      if (this.isDirty && this.fileStatus !== _AppConstants.default.FILE_PROGRESS_STATUS.SAVING) {
        this.setFileStatus(_AppConstants.default.FILE_PROGRESS_STATUS.EDITED);
      } else if (this.fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.EDITED) {
        this.setFileStatus(undefined);
      }
    }
  }

  setFileStatus(status) {
    if (this.isDirty && status === _AppConstants.default.FILE_PROGRESS_STATUS.SAVED) {
      this.fileStatus = _AppConstants.default.FILE_PROGRESS_STATUS.EDITED;
    } else {
      this.fileStatus = status;
    }

    if (!this.configStore.getConfig().showTopBar) {
      this._sendEvent(_Events.default.FILE_STATUS, {
        status: _AppConstants.default.FILE_PROGRESS_STATUS_REV[this.fileStatus]
      });
    }
  }

  setIsToolsInactive(value) {
    this.isToolsInactive = value;
  }

  sendActionConfigUpdate() {
    if (!this.previewRef) {
      return;
    }

    this._sendEvent(_Events.InternalEvents.ACTION_CONFIG_UPDATE, {
      editAllowed: this.isEditAllowed,
      showDownload: this.configStore.showDownload,
      showFullScreen: this.configStore.showFullScreen,
      showPrint: this.configStore.showPrint,
      showCommentingToolbar: this.configStore.showCommentingToolbar
    });
  }

  setEditAllowed(value) {
    this.editAllowed = value;
    this.sendActionConfigUpdate();
  }

  setShowLoader(value) {
    this.showLoader = value;
  }

  setPlainProgressText(text) {
    this.progressText = text;
  }

  setFileLoadingProgress(bytesLoaded, totalBytes) {
    if (totalBytes) {
      let loaded = 0;

      if (bytesLoaded) {
        loaded = parseInt(bytesLoaded, 10);
      }

      this.fileLoadingProgress = Math.ceil(loaded / totalBytes * 100);

      this._sendEvent(_Events.InternalEvents.FILE_LOADING_PROGRESS, {
        bytesLoaded,
        totalBytes
      });
    }

    this.showFileLoadingProgress();
  }

  showFileLoadingProgress() {
    if (this.isInPreview && !this.configStore.isThumbnailView) {
      if (this.intl) {
        let progressText = `${this.intl.formatMessage({
          id: "FILE_LOADING"
        })}`;
        progressText = this.configStore.isLinearizationInitiallyEnabled ? progressText : `${progressText} ${this.fileLoadingProgress}%`;
        this.setPlainProgressText(progressText);
      }

      if (this.fileLoadingProgress > 99 && !this._fileRendertimeoutRef && !this.getConfig().showSimpleLoader) {
        _ServiceRegistry.default.getService("PerformanceService").setFileDownloadCompletedOn();

        this._fileRendertimeoutRef = setTimeout(() => {
          if (!this.fileLoaded && !this.appClosed && !this.appRenderingBlocked) {
            const loggingService = _ServiceRegistry.default.getService("LoggingService");

            loggingService.error("AppStore", "Error in preview, file rendering timeout");
            this.setAppRenderingBlocked(true);
          }
        }, 60000);
      }
    }
  }

  setFileLoaded(value, dialogOpen = false) {
    this.fileLoaded = value;

    if (value) {
      this.setShowLoader(false);
      this.setPlainProgressText("");

      if (this._fileRendertimeoutRef) {
        clearTimeout(this._fileRendertimeoutRef);
      }
    }

    this._sendEvent(_Events.InternalEvents.FILE_FIRST_PAGE_LOADING_DONE, {
      pageLoaded: value,
      dialogOpen
    });
  }

  get isHidingHeader() {
    return this.configStore.getConfig().showTopBar && (this.isInLinePreset || this.isSizedPreset || this.isLBPreset);
  }

  get shouldAdjustSearchUIBelowTopBar() {
    const previewConfig = this.configStore.getActionConfig("preview");

    if (previewConfig.showAnnotationTools && !(0, _AppUtil.isMobileBrowser)() && this.editAllowed && this.configStore.getConfig().showTopBar) {
      return previewConfig.adjustSearchUIBelowTopBar;
    }

    return false;
  }

  get shouldHideAnnotationTools() {
    return (0, _AppUtil.isMobileBrowser)() || !this.isEditAllowed || !this.configStore.showCommentingToolbar || !this.getActionConfig("preview").showAnnotationTools;
  }

  setIntl(intl) {
    this.intl = intl;
    this.showFileLoadingProgress();
  }

  getConfig() {
    // eslint-disable-line class-methods-use-this
    return this.configStore.getConfig();
  }

  getConfigStore() {
    // eslint-disable-line class-methods-use-this
    return this.configStore;
  }

  getUIActionConfig() {
    return this.uiActionConfigStore;
  }

  getAnnotationFlag() {
    const config = this.getActionConfig("preview");

    if (config.selectivelyRenderAnnotsFlag) {
      return config.selectivelyRenderAnnotsFlag;
    }

    if (!config.showAnnotationTools) {
      return undefined;
    }

    const commentsApi = _ServiceRegistry.default.getService("CommentsApi");

    if (config.enableFormFilling && commentsApi.isFreetextEnabled()) {
      return "4293899514";
    }

    if (!config.enableFormFilling && commentsApi.isFreetextEnabled()) {
      return "4294948090";
    }

    if (config.enableFormFilling && !commentsApi.isFreetextEnabled()) {
      return "4294948094";
    }

    return "4293899518";
  }

  getLinearizationWaitPromise() {
    return this.linearizationWaitPromise.promise;
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "appError", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "previewError", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "fileInfoList", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "dropinName", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "previewRef", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor6 = _applyDecoratedDescriptor(_class.prototype, "editAllowed", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor7 = _applyDecoratedDescriptor(_class.prototype, "isDirty", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor8 = _applyDecoratedDescriptor(_class.prototype, "fileStatus", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor9 = _applyDecoratedDescriptor(_class.prototype, "appRenderingBlocked", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor10 = _applyDecoratedDescriptor(_class.prototype, "fileLoaded", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor11 = _applyDecoratedDescriptor(_class.prototype, "showLoader", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor12 = _applyDecoratedDescriptor(_class.prototype, "progressText", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return "";
  }
}), _descriptor13 = _applyDecoratedDescriptor(_class.prototype, "sideMenuOpen", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor14 = _applyDecoratedDescriptor(_class.prototype, "fileLoadingProgress", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return 0;
  }
}), _descriptor15 = _applyDecoratedDescriptor(_class.prototype, "searchOpen", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor16 = _applyDecoratedDescriptor(_class.prototype, "textSelectionEnabled", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor17 = _applyDecoratedDescriptor(_class.prototype, "previewMetadata", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor18 = _applyDecoratedDescriptor(_class.prototype, "toastInfo", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return null;
  }
}), _descriptor19 = _applyDecoratedDescriptor(_class.prototype, "inFullScreen", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _descriptor20 = _applyDecoratedDescriptor(_class.prototype, "userInfo", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return {};
  }
}), _descriptor21 = _applyDecoratedDescriptor(_class.prototype, "currentViewMode", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor22 = _applyDecoratedDescriptor(_class.prototype, "isHidingBranding", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
}), _descriptor23 = _applyDecoratedDescriptor(_class.prototype, "isToolsInactive", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return false;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setUserInfo", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setUserInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setCurrentViewMode", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setCurrentViewMode"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setInFullScreen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setInFullScreen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setToastInfo", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setToastInfo"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSearchOpen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSearchOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setTextSelectionEnabled", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setTextSelectionEnabled"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setSideMenuOpen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setSideMenuOpen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAppRenderingBlocked", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAppRenderingBlocked"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setAppError", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setAppError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPreviewError", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPreviewError"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "initializeFileInfoList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "initializeFileInfoList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileInfoList", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileInfoList"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileMetadata", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileMetadata"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPreviewMetadata", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPreviewMetadata"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileName", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setDropinName", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setDropinName"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideFileNameToast", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "hideFileNameToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hideScrubberInLB", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "hideScrubberInLB"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isInPreview", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isInPreview"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isInLinePreset", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isInLinePreset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isFWPreset", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isFWPreset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isSizedPreset", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isSizedPreset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isLBPreset", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isLBPreset"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isIntegration", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isIntegration"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isEditAllowed", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isEditAllowed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "hasReadOnlyFile", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "hasReadOnlyFile"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isOnlyNonPDF", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isOnlyNonPDF"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showToast", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "showToast"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showBrandingInHUD", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "showBrandingInHUD"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "showBrandingInHeader", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "showBrandingInHeader"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setIsHidingBranding", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setIsHidingBranding"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPreviewRef", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPreviewRef"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setIsDirty", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setIsDirty"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileStatus", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileStatus"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setIsToolsInactive", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setIsToolsInactive"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setEditAllowed", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setEditAllowed"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setShowLoader", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setShowLoader"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setPlainProgressText", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setPlainProgressText"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileLoadingProgress", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileLoadingProgress"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setFileLoaded", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setFileLoaded"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "isHidingHeader", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "isHidingHeader"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shouldAdjustSearchUIBelowTopBar", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "shouldAdjustSearchUIBelowTopBar"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "shouldHideAnnotationTools", [_mobx.computed], Object.getOwnPropertyDescriptor(_class.prototype, "shouldHideAnnotationTools"), _class.prototype)), _class);
exports.default = AppStore;
