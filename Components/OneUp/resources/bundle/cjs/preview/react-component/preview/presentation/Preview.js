"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _Events = require("../../../../constants/Events");

var _AppUtil = require("../../../../util/AppUtil");

var _AppConstants = _interopRequireDefault(require("../../../../constants/AppConstants"));

var _AnalyticsConstants = _interopRequireDefault(require("../../../../constants/AnalyticsConstants"));

var _ViewMode = _interopRequireWildcard(require("../../../../constants/ViewMode"));

var _ApiConstants = _interopRequireDefault(require("../../../../constants/ApiConstants"));

var _Branding = _interopRequireDefault(require("../../header/presentation/branding/Branding"));

var _class, _class2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

let Preview = (0, _mobxReact.observer)(_class = (_class2 = class Preview extends _react.default.Component {
  constructor(props) {
    super(props);
    this._className = "Preview";
    this._loggingService = _ServiceRegistry.default.getService("LoggingService");
    this.setPreviewRef = this.setPreviewRef.bind(this);
    this.isHUDBrandingSet = false;
  }

  rejectPromise(code) {
    return (0, _AppUtil.rejectAPIPromise)(code);
  }
  /**
   * @method
   * @description
   * It initialise the reference for preview dropin and provide interface for interaction
   */


  setPreviewRef(previewRef) {
    if (previewRef) {
      const appStore = _ServiceRegistry.default.getService("AppStore");

      this.dialogOpened = false;
      appStore.setPreviewRef(previewRef);
      setTimeout(() => {
        _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.InternalEvents.PREVIEW_REF_READY);
      }, 20);
      const previewConfig = appStore.getActionConfig("preview");
      previewRef.getPublicApis().then(api => {
        api.document.getMetadata().then(pdfMetadata => {
          const fileName = appStore.previewMetadata.fileName || "";
          const metadata = Object.assign(pdfMetadata, {
            pdfTitle: pdfMetadata.pdfTitle || fileName.replace(".pdf", "")
          });
          appStore.setPDFMetadata(metadata);
        }).catch(error => {
          this._loggingService.error(this._className, "Error in fetching PDF Metadata", JSON.stringify(error));
        });

        if (appStore.isInLinePreset) {
          api.app.customizeUIControl("DOWNLOAD", {
            visible: previewConfig.showDownloadPDF
          });
          api.app.customizeUIControl("PRINT", {
            visible: previewConfig.showPrintPDF
          });
        }

        if (appStore.isSizedPreset) {
          api.hud.dock(previewConfig.dockPageControls);
        }

        if (appStore.hideScrubberInLB) {
          api.app.customizeUIControl("SCRUBBER", {
            visible: false
          });
        }

        if (appStore.showBrandingInHUD && !this.isHUDBrandingSet) {
          api.hud.addUIControl(_Branding.default, "LEFT");
          this.isHUDBrandingSet = true;
        }
      });
      previewRef.getApis("INTEGRATION_CONNECTOR", ["hud"]).then(apiObject => {
        apiObject.hud.setFitPageModeVisibility(previewConfig.showFitPageButton);
        apiObject.hud.setFitWidthModeVisibility(previewConfig.showFitWidthButton);
      }).catch(error => this._loggingService.error(this._className, "Error in calling hud apis ", error));
      previewRef.getApis("INTEGRATION_CONNECTOR", ["documentState", "documentEvents"]).then(apiObject => {
        apiObject.documentState.initialPageLoaded().then(() => {
          this.postFileLoaded(apiObject);
        }).catch(error => {
          this._loggingService.error(this._className, "Error in initial page load ", JSON.stringify(error));

          this.rejectPromise(_ApiConstants.default.API_RESPONSE.PREVIEW_RENDERING_FAILED);
          appStore.setEditAllowed(false);
          appStore.setFileLoaded(true);
        });
        apiObject.documentEvents.on("findUIStatus", bool => {
          appStore.setSearchOpen(bool);

          if (bool) {
            this.correctSearchUI();
          }
        });
        apiObject.documentState.dialogOpened().then(() => {
          appStore.setFileLoaded(true, true);
          this.dialogOpened = true;
          this.applyViewMode();

          _ServiceRegistry.default.getService("PerformanceService").setPreviewDialogOpened();

          this._loggingService.info(this._className, "File preview dialog shown.");
        });
        apiObject.documentState.firstPageLoaded().then(() => {
          this.postFileLoaded(apiObject);
        }).catch(error => {
          this.rejectPromise(_ApiConstants.default.API_RESPONSE.PREVIEW_RENDERING_FAILED);

          this._loggingService.error(this._className, "Error in first page load ", JSON.stringify(error));

          appStore.setEditAllowed(false);
          appStore.setFileLoaded(true);
        });
      }); // eslint-disable-next-line max-len

      if (previewConfig.saveBeforeUnload && (previewConfig.showAnnotationTools || previewConfig.enableFormFilling)) {
        window.addEventListener("beforeunload", e => {
          if (appStore.isDirty || appStore.fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.SAVING) {
            const confirmationMessage = "To save all edits into the original" + "file, click Save.";
            (e || window.event).returnValue = confirmationMessage; // Gecko + IE

            return confirmationMessage; // Gecko + Webkit, Safari, Chrome etc.
          }

          return undefined;
        });
      }

      _ServiceRegistry.default.getService("EventsService").initialize(previewRef);
    }
  }
  /**
   * @method
   * @description
   * It handles the position of search UI component once search icon is clicked.
   */


  correctSearchUI() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const previewConfig = appStore.getActionConfig("preview");

    if (this._searchInterval || !appStore.shouldAdjustSearchUIBelowTopBar && !previewConfig.adjustSearchUI) {
      return;
    }

    this._searchInterval = setInterval(() => {
      if (appStore.searchOpen && document.querySelector(".SearchInputUI__SearchInputUITopBar___13Dx6")) {
        const se = document.querySelector(".SearchInputUI__SearchInputUITopBar___13Dx6");
        const divId = appStore.getConfig().divId;
        const divElement = document.getElementById(divId);
        const rect = divElement.getBoundingClientRect();
        const top = Math.floor(rect.top);
        const right = Math.floor(rect.right - divElement.clientWidth);

        if (appStore.shouldAdjustSearchUIBelowTopBar) {
          if (se.style.width && se.style.width === "100%") {
            se.style.top = `${top + 47}px`;
            se.style.right = `${right}px`;
          } else {
            se.style.top = `${top + 42}px`;

            if (appStore.isIntegration) {
              se.style.right = `${right + 130}px`;
            } else {
              se.style.right = `${right + 50}px`;
            }
          }
        } else if (previewConfig.adjustSearchUI) {
          se.style.top = `${top}px`;
          se.style.right = `${right}px`;
          se.style.maxWidth = `${divElement.clientWidth}px`;
        }
      }
    }, 10);
  }

  getDefaultViewMode() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const previewConfig = appStore.getActionConfig("preview");
    const {
      defaultViewMode
    } = previewConfig;

    if ((appStore.isLBPreset || appStore.isIntegration || appStore.isFWPreset) && (0, _AppUtil.isValidMobileViewMode)(defaultViewMode) && !appStore.showViewMode) {
      return "";
    }

    return defaultViewMode;
  }

  applyViewMode() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const previewConfig = appStore.getActionConfig("preview");
    const {
      defaultViewMode
    } = previewConfig;

    if (defaultViewMode === _ViewMode.default.FIT_PAGE || defaultViewMode === _ViewMode.default.FIT_WIDTH || appStore.showViewMode && (defaultViewMode === _ViewMode.default.SINGLE_PAGE || defaultViewMode === _ViewMode.default.CONTINUOUS)) {
      appStore.previewRef.getPublicApis().then(api => api.document.setViewMode(_ViewMode.InternalViewMode[defaultViewMode] || defaultViewMode));
    }
  }
  /**
   * @method
   * @description
   * It handles the post file preview operation like file permissions, view mode, background color.
   */


  postFileLoaded(apiObject) {
    const appStore = _ServiceRegistry.default.getService("AppStore"); // Check at every page load event


    const previewConfig = appStore.getActionConfig("preview");

    if (!this.previewMetadata.hasReadOnlyAccess) {
      apiObject.documentState.getDocumentSecurityInformation().then(docPermissions => {
        appStore.setEditAllowed((0, _AppUtil.calculateIsEditAllowed)(docPermissions, previewConfig.showAnnotationTools, previewConfig.enableFormFilling));
        const isPrintAllowed = (0, _AppUtil.calculateIsPrintAllowed)(docPermissions);

        if (!isPrintAllowed) {
          appStore.configStore.setShowPrint(false);
        }
      });
    }

    if (appStore.fileLoaded && !this.dialogOpened) {
      // Right now preview dropin is sending it twice.
      return;
    }

    this.applyViewMode();

    const applyBGColor = () => {
      const docView = document.querySelector(".DocumentView__DocumentView___1NM7b");

      if (docView && docView.style) {
        docView.style.backgroundColor = appStore.getConfig().backgroundColor;
      }
    };

    applyBGColor();
    let counter = 0;
    this.bgInterval = setInterval(() => {
      if (counter < 200) {
        applyBGColor();
        counter += 1;
      } else if (this.bgInterval) {
        clearInterval(this.bgInterval);
      }
    }, 10);

    _ServiceRegistry.default.getService("AnalyticsProviderService").sendEvent(_AnalyticsConstants.default.FILE_PREVIEW, null);

    _ServiceRegistry.default.getService("PerformanceService").setPreviewLoaded();

    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.InternalEvents.FILE_PREVIEW_READY);

    appStore.setFileLoaded(true);
    appStore.setAppReady(true);
    this.dialogOpened = false;
  }

  getProps(previewConfig) {
    return {
      disableContextMenuAutoTrigger: previewConfig.disableContextMenuAutoTrigger,
      shouldDisableDownloadInContextMenu: previewConfig.shouldDisableDownloadInContextMenu,
      shouldCustomizeGlobalNavBar: false,
      alternateAssetUri: previewConfig.alternateAssetUri,
      isViewerDropinContext: false,
      // TODO:: Don't pass it at all
      fixedWidthLeftMargin: previewConfig.fixedWidthLeftMargin,
      fixedWidthRightMargin: previewConfig.fixedWidthRightMargin,
      hudBottomMargin: previewConfig.hudBottomMargin,
      enableLowResolutionRendition: !_ServiceRegistry.default.getService("FileApi").hasRenditions(),
      shouldUseModernViewer: previewConfig.shouldUseModernViewer,
      editDeepLink: previewConfig.editDeepLink
    };
  }

  getDCAPIConfig(previewConfig) {
    return {
      dcapiRenditionSize: previewConfig.dcapiRenditionSize,
      dcapiRenditionFormat: previewConfig.dcapiRenditionFormat
    };
  }

  render() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    let scrollEventObj;

    if (appStore.isInLinePreset) {
      scrollEventObj = {
        on: (type, fn) => appStore.setWindowScrollListener(fn),
        unregister: () => appStore.setWindowScrollListener(undefined)
      };
    }

    const previewConfig = appStore.getActionConfig("preview");
    this.previewMetadata = appStore.previewMetadata;

    if (!this.previewMetadata) {
      return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
    }

    const uiControlsConfig = {
      ROTATE_VIEW_CONTROL: {
        visible: previewConfig.showRotateViewControl
      },
      ZOOM_CONTROL: {
        visible: previewConfig.showZoomControl
      },
      PAGE_NAVIGATION_CONTROL: {
        visible: previewConfig.showPageNavigationControl
      },
      UNSUPPORTED_FEATURE_ALERT: {
        visible: !previewConfig.disableUnsupportedFeatureAlert
      }
    };

    if (typeof previewConfig.showFileNameToast === "boolean") {
      uiControlsConfig.FILE_NAME_TOAST = {
        visible: previewConfig.showFileNameToast
      };
    } else if (appStore.hideFileNameToast) {
      uiControlsConfig.FILE_NAME_TOAST = {
        visible: false
      };
    }

    if (typeof previewConfig.showScrubber === "boolean") {
      uiControlsConfig.SCRUBBER = {
        visible: previewConfig.showScrubber
      };
    }

    if (previewConfig.forceShowCommentingTools === true) {
      // Required for dc-web
      uiControlsConfig.FORCE_SHOW_COMMENTING_TOOLS = {
        visible: previewConfig.forceShowCommentingTools
      };
    }

    const defaultViewMode = this.getDefaultViewMode();
    const Dropin = this.props.previewDropin;
    return /*#__PURE__*/_react.default.createElement(Dropin, {
      previewRef: ref => this.setPreviewRef(ref),
      config: _objectSpread({
        showLHP: previewConfig.showLeftHandPanel,
        showHUD: previewConfig.showPageControls,
        shouldDockHUD: previewConfig.dockPageControls,
        shouldLoadContextBoardDropin: false,
        shouldRenderCommentsDropin: previewConfig.shouldRenderCommentsDropin,
        shouldRenderSignAuthoringDropin: previewConfig.shouldRenderSignAuthoringDropin,
        shouldRenderVisualizerDropin: previewConfig.shouldRenderVisualizerDropin,
        assetUri: this.previewMetadata.id,
        shouldShowDownloadButtonInHud: previewConfig.showDownloadPDFInPageControl,
        filetype: this.previewMetadata.mimeType,
        path: "/external",
        docTitle: this.previewMetadata.fileName,
        shouldRenderPersonalCommentsDropin: previewConfig.showAnnotationTools,
        shouldRenderAcroForm: previewConfig.enableFormFilling && appStore.isEditAllowed,
        selectivelyRenderAnnotsFlag: appStore.getAnnotationFlag(),
        context: "integration",
        docViewBgColor: appStore.getConfig().backgroundColor,
        enableLinearization: previewConfig.enableLinearization
      }, this.getProps(previewConfig)),
      appConfig: {
        useIframelessPrint: previewConfig.useIframelessPrint,
        usePartialEdit: previewConfig.usePartialEdit
      },
      documentOpenState: {
        viewMode: defaultViewMode
      },
      UIControlsConfig: uiControlsConfig,
      featureConfig: {
        DOWNLOAD: previewConfig.showDownloadPDF,
        EDIT: previewConfig.enableEdit
      },
      scrollEventObj: scrollEventObj,
      dcApiConfig: this.getDCAPIConfig(previewConfig)
    });
  }

}, _class2.propTypes = {
  previewDropin: _propTypes.default.objectOf(_propTypes.default.any).isRequired
}, _class2)) || _class;

exports.default = Preview;