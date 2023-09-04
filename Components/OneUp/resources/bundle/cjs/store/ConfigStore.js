"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _mobx = require("mobx");

var _ViewMode = _interopRequireWildcard(require("../constants/ViewMode"));

var _ConfigStoreConstants = require("../constants/ConfigStoreConstants");

var _AppUtil = require("../util/AppUtil");

var _KeyboardEventUtils = require("../util/KeyboardEventUtils");

var _EnvUtil = require("../util/EnvUtil");

var _class, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

let ConfigStore = (_class = class ConfigStore {
  constructor() {
    _initializerDefineProperty(this, "showDownload", _descriptor, this);

    _initializerDefineProperty(this, "showFullScreen", _descriptor2, this);

    _initializerDefineProperty(this, "showPrint", _descriptor3, this);

    _initializerDefineProperty(this, "exitPDFViewerType", _descriptor4, this);

    _initializerDefineProperty(this, "showCommentingToolbar", _descriptor5, this);

    this._config = this.initialConfig;
    this._actionConfig = {};
  }

  get initialConfig() {
    return _ConfigStoreConstants.INITIAL_CONFIG;
  }

  get presetInitialConfig() {
    return _ConfigStoreConstants.PRESET_INITIAL_CONFIG;
  }

  get presetForceConfig() {
    return _ConfigStoreConstants.PRESET_FORCE_CONFIG;
  }

  init(config) {
    this._config = _objectSpread(_objectSpread({}, this.initialConfig), config);

    if (this._config.externalJSComponentURL) {
      if (!(0, _EnvUtil.isValidUrl)(this._config.externalJSComponentURL)) {
        this._config.externalJSComponentURL = "";
      }
    }

    this._actionConfig = {};

    if (this._config.leftAlignFileName) {
      this._config.showBrandingTitle = false;
    }
  }

  setActionConfig(currentAction, actionConfig) {
    const configs = this._generateFinalConfigObjects(currentAction, actionConfig);

    this._actionConfig[currentAction] = configs.finalActionConfig;
    this._config = configs.config;
    this.setShowDownload(this._actionConfig[currentAction].showDownloadPDF);
    this.setShowPrint(this._actionConfig[currentAction].showPrintPDF);
    this.setShowFullScreen(this._actionConfig[currentAction].showFullScreen);
    this.setExitPDFViewerType(this._actionConfig[currentAction].exitPDFViewerType);
    this.setShowCommentingToolbar(this._actionConfig[currentAction].annotationUIConfig.showToolbar || true);
  }

  _getConfigWithRestriction(currentAction, actionConfig) {
    return _objectSpread(_objectSpread({}, _ConfigStoreConstants.INITIAL_ACTION_CONFIG[currentAction]), actionConfig);
  }

  _generateFinalConfigObjects(currentAction, actionConfig) {
    let finalActionConfig = this._getConfigWithRestriction(currentAction, actionConfig);

    let config = _objectSpread({}, this._config);

    if (currentAction.toLowerCase().indexOf("preview") === -1) {
      return {
        config,
        finalActionConfig
      };
    }

    let initialPresetConfig = this.presetInitialConfig[finalActionConfig.embedMode];

    if (!initialPresetConfig) {
      finalActionConfig.embedMode = _ConfigStoreConstants.defaultPreset;
      initialPresetConfig = this.presetInitialConfig[finalActionConfig.embedMode];
    }

    finalActionConfig = _objectSpread(_objectSpread({}, initialPresetConfig.actionConfig), finalActionConfig);
    config = _objectSpread(_objectSpread({}, initialPresetConfig.config), config);

    if (finalActionConfig.embedMode === _ViewMode.Preset.FULL_WINDOW) {
      if (finalActionConfig.defaultViewMode && !_ViewMode.default[finalActionConfig.defaultViewMode]) {
        finalActionConfig.defaultViewMode = "";
      }
    }

    const forcePresetConfig = this.presetForceConfig[finalActionConfig.embedMode];
    finalActionConfig = _objectSpread(_objectSpread({}, finalActionConfig), forcePresetConfig.actionConfig);
    config = _objectSpread(_objectSpread({}, config), forcePresetConfig.config);

    if (finalActionConfig.embedMode === _ViewMode.Preset.IN_LINE && !finalActionConfig.showDownloadPDF) {
      finalActionConfig.showDownloadPDFInPageControl = false;
    }

    if (!finalActionConfig.showPageControls) {
      // Special requirement from preview dropin :)
      finalActionConfig.dockPageControls = true;
    }

    if (finalActionConfig.adjustSearchUIBelowTopBar) {
      finalActionConfig.adjustSearchUI = true;
    }

    if (finalActionConfig.enableLinearization && !(0, _AppUtil.isSharedArrayBufferSupported)()) {
      finalActionConfig.enableLinearization = false;
      this._linearizationForceDisabled = true;

      _ServiceRegistry.default.getService("LoggingService").info("ConfigStore", "Linearization force disabled.");
    }

    return {
      config,
      finalActionConfig
    };
  }

  get isLinearizationInitiallyEnabled() {
    const previewConfig = this.getActionConfig("preview");
    return previewConfig.enableLinearization || this._linearizationForceDisabled;
  }

  getActionConfig(currentAction) {
    return this._actionConfig[currentAction] || {};
  }

  getConfig() {
    return this._config;
  }

  getPollingConfig() {
    const saveConfig = _ServiceRegistry.default.getService("CallbackService").getCallbackOptions(_CallbackTypes.default.SAVE_API) || {};
    return _objectSpread(_objectSpread(_objectSpread({}, this.getStatusCallbackConfig()), "autoSaveFrequency" in saveConfig ? {
      autoSaveFrequency: saveConfig.autoSaveFrequency
    } : {}), "enableFocusPolling" in saveConfig ? {
      enableFocusPolling: saveConfig.enableFocusPolling
    } : {});
  } // eslint-disable-next-line class-methods-use-this


  getStatusCallbackConfig() {
    const statusConfig = _ServiceRegistry.default.getService("CallbackService").getCallbackOptions(_CallbackTypes.default.STATUS_API);

    return _objectSpread(_objectSpread({}, _ConfigStoreConstants.DEFAULT_STATUS_CALLBACK_CONFIG), statusConfig || _ConfigStoreConstants.MISSING_STATUS_CALLBACK_CONFIG);
  } // eslint-disable-next-line class-methods-use-this


  getSaveCallbackConfig() {
    const saveConfig = _ServiceRegistry.default.getService("CallbackService").getCallbackOptions(_CallbackTypes.default.SAVE_API); // TODO:: until incremental support is added in Preview dropin, removing its support.


    return _objectSpread(_objectSpread(_objectSpread({}, _ConfigStoreConstants.DEFAULT_SAVE_CALLBACK_CONFIG), saveConfig || _ConfigStoreConstants.MISSING_SAVE_CALLBACK_CONFIG), {}, {
      incremental: false
    });
  }

  getIntegrationName() {
    return this._config.integrationName;
  }

  hasAdobeMenuActions() {
    const {
      showLegalNotice,
      helpUrl
    } = this._config;
    return showLegalNotice || helpUrl;
  }

  _sendActionConfigUpdate() {
    _ServiceRegistry.default.getService("AppStore").sendActionConfigUpdate();
  }

  setShowDownload(value) {
    this.showDownload = value;

    this._sendActionConfigUpdate();
  }

  setShowFullScreen(value) {
    this.showFullScreen = value;

    this._sendActionConfigUpdate();
  }

  setExitPDFViewerType(value) {
    this.exitPDFViewerType = value;
  }

  setShowPrint(value) {
    this.showPrint = value;

    if (!value) {
      (0, _KeyboardEventUtils.blockPrint)();
      this.printBlocked = true;
    } else if (this.printBlocked) {
      (0, _KeyboardEventUtils.unblockPrint)();
      this.printBlocked = false;
    }

    this._sendActionConfigUpdate();
  }

  setShowCommentingToolbar(value) {
    this.showCommentingToolbar = value;

    this._sendActionConfigUpdate();
  }

}, (_descriptor = _applyDecoratedDescriptor(_class.prototype, "showDownload", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor2 = _applyDecoratedDescriptor(_class.prototype, "showFullScreen", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor3 = _applyDecoratedDescriptor(_class.prototype, "showPrint", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _descriptor4 = _applyDecoratedDescriptor(_class.prototype, "exitPDFViewerType", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return _ViewMode.LightBoxExitPDFViewerType.CLOSE;
  }
}), _descriptor5 = _applyDecoratedDescriptor(_class.prototype, "showCommentingToolbar", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: function () {
    return true;
  }
}), _applyDecoratedDescriptor(_class.prototype, "setShowDownload", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setShowDownload"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setShowFullScreen", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setShowFullScreen"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setExitPDFViewerType", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setExitPDFViewerType"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setShowPrint", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setShowPrint"), _class.prototype), _applyDecoratedDescriptor(_class.prototype, "setShowCommentingToolbar", [_mobx.action], Object.getOwnPropertyDescriptor(_class.prototype, "setShowCommentingToolbar"), _class.prototype)), _class);
exports.default = ConfigStore;