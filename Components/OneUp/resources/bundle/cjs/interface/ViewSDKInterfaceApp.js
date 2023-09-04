"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _LoggingUtil = _interopRequireDefault(require("../util/LoggingUtil"));

var _StylesUtil = require("../util/StylesUtil");

var _TimeUtil = _interopRequireDefault(require("../util/TimeUtil"));

var _ViewMode = require("../constants/ViewMode");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

(0, _StylesUtil.createStyles)();
const hostAppStartTime = (0, _TimeUtil.default)();

class ViewSDKInterfaceApp {
  constructor(config, serviceFactory) {
    this._serviceFactory = serviceFactory;
    this._appInitializeReceivedOn = new Date().getTime();

    this._initConfig(config);

    this._logExternal("Initializing Adobe DC View SDK.");

    this._initServices();
  }
  /**
   * @method
   * @description
   * previewFile(fileInfo, previewConfig) method to preview/embed pdf file.
   *
   * @param {object} fileInfo - file information to preview.
   * @param {object} inConfig - config to control the UI of file preview.
   * @return {Promise} - promise that resolves to PreviewRef when PDF is rendered.
   */


  previewFile(fileInfo, inConfig) {
    this._logExternal("Starting process to preview file.", fileInfo.metaData, inConfig);

    this._serviceFactory.getService("ValidationService").validateFileInfo(fileInfo);

    const embedMode = inConfig.embedMode ? inConfig.embedMode.toUpperCase() : _ViewMode.Preset.FULL_WINDOW;

    const previewConfig = _objectSpread(_objectSpread({}, inConfig), {}, {
      embedMode
    });

    this._serviceFactory.getService("ValidationService").validatePreviewConfig(previewConfig);

    this._serviceFactory.getService("ValidationService").validateFileInfoForPreviewConfig(fileInfo, previewConfig);

    const timeInfo = {
      actionReceivedOn: new Date().getTime(),
      hostAppStartTime,
      appStartTime: this._appInitializeReceivedOn,
      appInitializeReceivedOn: this._appInitializeReceivedOn
    };
    const divElement = window.document.getElementById(this._config.divId);

    if (divElement.internallyCreated && previewConfig.embedMode !== _ViewMode.Preset.LIGHT_BOX) {
      divElement.parentNode.removeChild(divElement);
      throw new Error(`DivId ${this._config.divId} is not present in HTML document.`);
    }

    return this._serviceFactory.getService("EmbedModeService").previewFile(this._config, fileInfo, previewConfig, timeInfo);
  }
  /**
   * @method
   * @description
   * By registering callbacks with specified parameters, workflows can be controlled related to
   * saving files, user profiles, user settings, and so on
   *
   * @param {string} type - type of callback
   * @param {Function} callback.
   * @param {object} options - parameters for extra information
   */


  registerCallback(type, callback, options) {
    this._logExternal(`Registering Callback for type : ${type}`);

    this._serviceFactory.getService("ValidationService").validateCallback(type, callback, options);

    if (type === _CallbackTypes.default.EVENT_LISTENER) {
      this._serviceFactory.getService("EventHandlerService").setEventListener(callback, options);
    } else {
      this._serviceFactory.getService("CallbackService").registerCallback(type, callback, options);
    }
  }
  /**
   * @method
   * @description
   * method associated with document loading in the browser
   * @param {Number} loaded - percentage of file loading
   * @param {Number} total - total file size
   */


  fileProgressLoadingData(loaded, total) {
    this._serviceFactory.getService("AppStore").setFileLoadingProgress(loaded, total);
  }

  _initServices() {
    this._serviceFactory.getService("LoggingService").initialize(this._config.logToConsole);

    this._serviceFactory.getService("FullScreenManager").initialize(this._config, this._serviceFactory);

    this._config.locale = this._serviceFactory.getService("LocaleService").getLocale();
  }

  _logExternal(...args) {
    if (this._config.logToConsole) {
      (0, _LoggingUtil.default)(...args);
    }
  }

  _initConfig(config) {
    this._serviceFactory.getService("ValidationService").validateConfig(config);

    this._config = this._getFinalConfig(config);

    this._createInternalDivIfNotPresent();
  }
  /**
   * @method
   * @description
   * if it's not present in window it creates the internal div with the same id
   * and render the file view into it
   */


  _createInternalDivIfNotPresent() {
    let divElement = window.document.getElementById(this._config.divId);

    if (!divElement) {
      divElement = window.document.createElement("div");
      divElement.id = this._config.divId;
      divElement.internallyCreated = true;
      window.document.body.appendChild(divElement);
    }
  }

  _getFinalConfig(config) {
    const INITIAL_CONFIG = {
      divId: "adobe-dc-view",
      logToConsole: false,
      downloadWithCredentials: false
    };

    const finalConfig = _objectSpread(_objectSpread({}, INITIAL_CONFIG), config);

    finalConfig.serverEnv = "prod";
    finalConfig.viewSDKAppVersion = "";
    return finalConfig;
  }

}

exports.default = ViewSDKInterfaceApp;