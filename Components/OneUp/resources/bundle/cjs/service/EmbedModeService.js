"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactDom = _interopRequireDefault(require("react-dom"));

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _Events = _interopRequireWildcard(require("../constants/Events"));

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _StylesUtil = require("../util/StylesUtil");

var _ExternalComponentService = _interopRequireDefault(require("./ExternalComponentService"));

var _AdobeDCViewApp = _interopRequireDefault(require("../preview/react-component/AdobeDCViewApp"));

var _ViewMode = require("../constants/ViewMode");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EmbedModeService {
  constructor(serviceFactory) {
    this.initialize = () => {
      this._serviceFactory.getService("EventsService").registerEventListener(_Events.InternalEvents.PREVIEW_REF_READY, () => {
        this._handleInLineLegalDialog();
      });
    };

    this.previewFile = (config, fileInfo, previewConfig, timeInfo) => {
      const divElement = window.document.getElementById(config.divId);

      if (previewConfig.embedMode === _ViewMode.Preset.FULL_WINDOW) {
        if (!divElement.clientHeight) {
          (0, _StylesUtil.addHeightToElement)(divElement);
        }

        if (!divElement.clientWidth) {
          (0, _StylesUtil.addWidthToElement)(divElement);
        }
      }

      this._serviceFactory.getService("UIActionHandlerService").initialize(previewConfig.uiActionConfig);

      const uiActionConfig = this._serviceFactory.getService("UIActionHandlerService").getProcessedUIActionConfig();

      const appStore = this._serviceFactory.getService("AppStore");

      appStore.initialize({
        config,
        heightInView: this._getHeightInView(divElement),
        action: "preview",
        actionConfig: _objectSpread(_objectSpread({}, previewConfig), {}, {
          uiActionConfig
        }),
        fileInfoList: [fileInfo]
      });

      this._serviceFactory.getService("IntegrationProvider").setAppStore(appStore);

      this._serviceFactory.getService("PerformanceService").initialize("preview", timeInfo);

      if (appStore.getConfig().externalJSComponentURL) {
        this._registerExternalJSServices();
      }

      this._previewPromise = new Promise((resolve, reject) => {
        const previewReady = () => {
          resolve(this._serviceFactory.getService("AdobeViewer").getExposedAPIs({
            previewConfig
          }));
        };

        const ehs = this._serviceFactory.getService("EventHandlerService");

        ehs.registerEventListener(_Events.InternalEvents.FILE_PREVIEW_READY, previewReady);
        ehs.registerEventListener(_Events.InternalEvents.FILE_PREVIEW_FAILED, reject);
      });

      this._handleEmbedModeSpecific(divElement);

      this._serviceFactory.getService("CommentsApi").resetApis();

      _reactDom.default.render( /*#__PURE__*/_react.default.createElement(_AdobeDCViewApp.default, {
        store: appStore
      }), divElement);

      return this._previewPromise;
    };

    this.unMountApp = () => {
      this._serviceFactory.getService("CommentsApi").resetApis();

      const appStore = this._serviceFactory.getService("AppStore");

      const divId = appStore.getConfig().divId;
      const divElement = window.document.getElementById(divId);

      _reactDom.default.unmountComponentAtNode(divElement);
    };

    this._registerExternalJSServices = () => {
      this._serviceFactory.register("ExternalComponentService", new _ExternalComponentService.default());

      this._serviceFactory.getService("ExternalComponentService").initialize();

      _ServiceRegistry.default.initServices(this._serviceFactory.getServices());
    };

    this._handleInLineLegalDialog = () => {
      const appStore = this._serviceFactory.getService("AppStore");

      const callbackService = this._serviceFactory.getService("CallbackService");

      if (appStore.isInLinePreset && callbackService.hasCallback(_CallbackTypes.default.OPEN_LEGAL_DIALOG_API)) {
        this.ldAdded = false;

        const showLegalDialog = () => {
          callbackService.getCallback(_CallbackTypes.default.OPEN_LEGAL_DIALOG_API)();
        };

        appStore.previewRef.getPublicApis().then(api => {
          if (!this.ldAdded) {
            this.ldAdded = true;
            const legalData = {
              title: appStore.intl.formatMessage({
                id: "LEGAL_NOTICES"
              }),
              clickHandler: showLegalDialog
            };
            api.hud.addUIControl(legalData);
          }
        });
      }
    };

    this.FWOpenPDFViewer = () => {
      this._serviceFactory.getService("EventsService").registerEventListener(_Events.default.VIEWER_UNMOUNT, this.FWExitPDFViewer);
    };

    this.FWExitPDFViewer = () => {
      this._pdfViewerClose();
    };

    this.LBOpenPDFViewer = () => {
      // eslint-disable-line
      this._serviceFactory.getService("EventsService").registerEventListener(_Events.FilePreviewEvents.PREVIEW_DOCUMENT_CLICK, this.LBExitPDFViewer);

      document.addEventListener("keydown", this._handleLBPDFViewerEscape);
      this._serviceFactory.getService("FullScreenManager").switchToFullWindow = true;

      this._serviceFactory.getService("FullScreenManager").setFullScreen(true);

      (0, _StylesUtil.blockOverflow)(window.document.body);
    };

    this.LBExitPDFViewer = () => {
      const appStore = this._serviceFactory.getService("AppStore");

      const divId = appStore.getConfig().divId;
      document.removeEventListener("keydown", this._handleLBPDFViewerEscape);

      this._serviceFactory.getService("FullScreenManager").setFullScreen(false);

      this.unMountApp();
      const divElement = window.document.getElementById(divId);

      if (divElement.internallyCreated) {
        divElement.parentNode.removeChild(divElement);
      } else {
        (0, _StylesUtil.cleanUpElement)(divElement);
        divElement.innerHTML = "";
      }

      (0, _StylesUtil.allowOverflow)(window.document.body);

      this._pdfViewerClose();
    };

    this.pdfViewerOpen = () => {
      this._serviceFactory.getService("EventsService").sendEvent(_Events.default.PDF_VIEWER_OPEN);
    };

    this._pdfViewerClose = () => {
      this._serviceFactory.getService("EventsService").sendEvent(_Events.default.PDF_VIEWER_CLOSE); // It should be last after sending the event


      this._serviceFactory.getService("AppStore").setAppClosed(true);
    };

    this._handleLBPDFViewerEscape = event => {
      if (event.key === "Escape" || event.key === "Esc") {
        const appStore = this._serviceFactory.getService("AppStore");

        if (!appStore.searchOpen && !appStore.legalDialogOpen) {
          this.LBExitPDFViewer();
        }
      }
    };

    this._handleEmbedModeSpecific = divElement => {
      const appStore = this._serviceFactory.getService("AppStore");

      if (appStore.getConfig().workOnInLineIndependently && appStore.isInLinePreset) {
        const sendHeightMessage = () => {
          const data = this._getHeightInView(divElement);

          this._serviceFactory.getService("AppStore").setHeightInView(data);
        };

        this._previewPromise.then(() => {
          sendHeightMessage();

          this._addInLineListeners(sendHeightMessage);
        });

        this._updateViewHeight({
          scrollHeight: 600
        });

        this._serviceFactory.getService("EventHandlerService").registerEventListener(_Events.InternalEvents.DOCUMENT_VIEW_UPDATE, event => {
          this._updateViewHeight(event.data);

          this._firstDVUEvent = false;
        });
      }
    };

    this._updateViewHeight = viewUpdate => {
      const doc = window.document;

      const divId = this._serviceFactory.getService("AppStore").getConfig().divId;

      const divElement = doc.getElementById(divId);

      if (typeof viewUpdate.scrollHeight !== "undefined") {
        const finalHeight = viewUpdate.scrollHeight + 20;

        if (finalHeight !== this._currentDivHeight) {
          divElement.style.height = `${finalHeight}px`;
          this._currentDivHeight = finalHeight;
        }
      }

      if (typeof viewUpdate.y !== "undefined" && !this._firstDVUEvent) {
        const divElementTop = divElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollTo = Math.floor(viewUpdate.y + divElementTop);
        window.scrollTo(0, scrollTo);
      }
    };

    this._addInLineListeners = callback => {
      window.addEventListener("scroll", callback);
      window.addEventListener("touchend", callback);
      window.addEventListener("resize", callback);
      window.addEventListener("orientationchange", callback);
    };

    this._getHeightInView = divElement => {
      const topBuffer = 0;
      const bottomBuffer = 0;
      const rect = divElement.getBoundingClientRect();
      const top = rect.top;
      const bottom = rect.bottom;
      const divHeight = rect.height;
      const winHeight = window.innerHeight;
      const winWidth = window.innerWidth;
      let outOfView = 0;
      let viewStartH = 0;
      let viewEndH = 0;

      if (top > winHeight - bottomBuffer) {
        outOfView = 1;
      } else if (bottom < topBuffer) {
        outOfView = 1;
        viewStartH = divHeight;
        viewEndH = divHeight;
      } else if (top < topBuffer) {
        viewStartH = -top + topBuffer;
        viewEndH = viewStartH + winHeight - topBuffer - bottomBuffer;

        if (viewEndH > divHeight) {
          viewEndH = divHeight;
        }
      } else {
        viewStartH = 0;
        viewEndH = winHeight - top - bottomBuffer;
      }

      return {
        viewStartH,
        viewEndH,
        outOfView,
        winHeight: winHeight - topBuffer - bottomBuffer,
        winWidth
      };
    };

    this._serviceFactory = serviceFactory;
    this._firstDVUEvent = true;
  }

}

exports.default = EmbedModeService;