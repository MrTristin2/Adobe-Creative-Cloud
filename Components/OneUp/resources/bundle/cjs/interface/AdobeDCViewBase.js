"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("../util/Polyfill");

var _mobx = require("mobx");

var _ViewSDKInterfaceApp = _interopRequireDefault(require("./ViewSDKInterfaceApp"));

var _AdobeDCViewBase = _interopRequireDefault(require("./AdobeDCViewBase"));

var _ValidationService = _interopRequireDefault(require("../service/ValidationService"));

var _CallbackService = _interopRequireDefault(require("../service/CallbackService"));

var _EventHandlerService = _interopRequireDefault(require("../service/EventHandlerService"));

var _LocaleService = _interopRequireDefault(require("../service/LocaleService"));

var _AppStore = _interopRequireDefault(require("../store/AppStore"));

var _LoggingService = _interopRequireDefault(require("../service/LoggingService"));

var _AnalyticsProviderService = _interopRequireDefault(require("../service/AnalyticsProviderService"));

var _PollingService = _interopRequireDefault(require("../service/PollingService"));

var _EventsService = _interopRequireDefault(require("../service/EventsService"));

var _EmbedModeService = _interopRequireDefault(require("../service/EmbedModeService"));

var _FullScreenManager = _interopRequireDefault(require("../service/FullScreenManager"));

var _CommandReceiverService = _interopRequireDefault(require("../service/CommandReceiverService"));

var _PerformanceService = _interopRequireDefault(require("../service/PerformanceService"));

var _IntegrationProvider = _interopRequireDefault(require("../provider/IntegrationProvider"));

var _dcCore = require("dc-core");

var _UIHandler = _interopRequireDefault(require("../service/UIHandler"));

var _HUDService = _interopRequireDefault(require("../service/HUDService"));

var _UIActionHandlerService = _interopRequireDefault(require("../service/UIActionHandlerService"));

var _CommandManager = _interopRequireDefault(require("../managers/CommandManager"));

var _AnnotationManager = _interopRequireDefault(require("../managers/AnnotationManager"));

var _AdobeViewer = _interopRequireDefault(require("./AdobeViewer"));

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _UserApi = _interopRequireDefault(require("../api/UserApi"));

var _FileApi = _interopRequireDefault(require("../api/FileApi"));

var _CommentsApi = _interopRequireDefault(require("../api/CommentsApi"));

var _dialogs = _interopRequireDefault(require("../preview/react-component/dialogs"));

var _ConfigStore = _interopRequireDefault(require("../store/ConfigStore"));

var _UIActionConfigStore = _interopRequireDefault(require("../store/UIActionConfigStore"));

var _ComponentRegistry = _interopRequireDefault(require("../util/ComponentRegistry"));

var _AppContainer = _interopRequireDefault(require("../preview/react-component/main-app/container/AppContainer"));

var _MainApp = _interopRequireDefault(require("../preview/react-component/main-app/presentation/MainApp"));

var _Preview = _interopRequireDefault(require("../preview/react-component/preview/presentation/Preview"));

var _AdobeMenuActions = _interopRequireDefault(require("../preview/react-component/header/presentation/side-menu/AdobeMenuActions"));

var _HeaderView = _interopRequireDefault(require("../preview/react-component/header/presentation/HeaderView"));

var _HeaderFileInfoView = _interopRequireDefault(require("../preview/react-component/header-file-info/presentation/HeaderFileInfoView"));

var _ContinuousIcon = _interopRequireDefault(require("../icons/ContinuousIcon"));

var _SinglePageIcon = _interopRequireDefault(require("../icons/SinglePageIcon"));

var _HidingBrandingContainer = _interopRequireDefault(require("../preview/react-component/hiding-branding/container/HidingBrandingContainer"));

var _PreviewErrorIcon = _interopRequireDefault(require("../icons/PreviewErrorIcon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2020 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
// Polyfill for some IE functions
(0, _mobx.useStrict)(true);

const _registerComponents = () => {
  _ComponentRegistry.default.register("AppContainer", _AppContainer.default);

  _ComponentRegistry.default.register("App", _MainApp.default);

  _ComponentRegistry.default.register("Preview", _Preview.default);

  _ComponentRegistry.default.register("HeaderView", _HeaderView.default);

  _ComponentRegistry.default.register("AdobeMenuActions", _AdobeMenuActions.default);

  _ComponentRegistry.default.register("HeaderFileInfoView", _HeaderFileInfoView.default);

  _ComponentRegistry.default.register("ContinuousIcon", _ContinuousIcon.default);

  _ComponentRegistry.default.register("SinglePageIcon", _SinglePageIcon.default);

  _ComponentRegistry.default.register("HidingBrandingContainer", _HidingBrandingContainer.default);

  _ComponentRegistry.default.register("PreviewErrorIcon", _PreviewErrorIcon.default);
};

class AdobeDCView extends _AdobeDCViewBase.default {
  _initServiceFactory(config) {
    const intProv = _ServiceRegistry.default.getService("IntegrationProvider");

    _ServiceRegistry.default.clear();

    this._serviceFactory.register("ConfigStore", new _ConfigStore.default());

    this._serviceFactory.register("UIActionConfigStore", new _UIActionConfigStore.default());

    this._serviceFactory.register("UserApi", new _UserApi.default());

    this._serviceFactory.register("FileApi", new _FileApi.default());

    this._serviceFactory.register("CommentsApi", new _CommentsApi.default());

    this._serviceFactory.register("DialogApi", new _dialogs.default());

    this._serviceFactory.register("CallbackService", new _CallbackService.default());

    this._serviceFactory.register("ValidationService", new _ValidationService.default());

    this._serviceFactory.register("EventHandlerService", new _EventHandlerService.default());

    this._serviceFactory.register("LocaleService", new _LocaleService.default());

    this._serviceFactory.register("LoggingService", new _LoggingService.default());

    this._serviceFactory.register("EventsService", new _EventsService.default());

    this._serviceFactory.register("PollingService", new _PollingService.default());

    this._serviceFactory.register("CommandReceiverService", new _CommandReceiverService.default());

    this._serviceFactory.register("FullScreenManager", new _FullScreenManager.default());

    this._serviceFactory.register("PerformanceService", new _PerformanceService.default());

    this._serviceFactory.register("AnalyticsProviderService", new _AnalyticsProviderService.default());

    this._serviceFactory.register("EmbedModeService", new _EmbedModeService.default(this._serviceFactory));

    this._serviceFactory.register("UIHandler", new _UIHandler.default());

    this._serviceFactory.register("HUDService", new _HUDService.default());

    this._serviceFactory.register("UIActionHandlerService", new _UIActionHandlerService.default());

    this._serviceFactory.register("AdobeViewer", new _AdobeViewer.default(this._serviceFactory));

    this._serviceFactory.register("AnnotationManager", new _AnnotationManager.default(this._serviceFactory));

    this._serviceFactory.register("CommandManager", new _CommandManager.default(this._serviceFactory));

    this._serviceFactory.register("ViewSDKInterfaceApp", new _ViewSDKInterfaceApp.default(config, this._serviceFactory));

    _ServiceRegistry.default.initServices(this._serviceFactory.getServices());

    if (intProv) {
      intProv.initAPIs();

      this._serviceFactory.register("IntegrationProvider", intProv);
    } else {
      this._serviceFactory.register("IntegrationProvider", new _IntegrationProvider.default());

      (0, _dcCore.addProvider)("integrationProvider", this._serviceFactory.getService("IntegrationProvider"));
    }

    this._serviceFactory.register("AppStore", new _AppStore.default()); // Initializing Services


    _ServiceRegistry.default.initServices(this._serviceFactory.getServices());

    this._serviceFactory.getService("LocaleService").initialize(_dcCore.locale2.getLocale());

    this._serviceFactory.getService("EventHandlerService").initialize();

    this._serviceFactory.getService("CallbackService").initialize();

    this._serviceFactory.getService("EmbedModeService").initialize();

    this._serviceFactory.getService("PollingService").initialize();

    _registerComponents();
  }

}

var _default = AdobeDCView;
exports.default = _default;
