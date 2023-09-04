"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _LoggingService = require("./LoggingService");

var _Events = require("../constants/Events");

var _AppUtil = require("../util/AppUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class PerformanceService {
  constructor() {
    this._appStartTime = new Date().getTime();
    this._isEventEmitted = false;
    this._fileSize = -1;
    this._appReadyToRender = -1;
    this._actionReceivedOn = -1;
    this._appInitializeReceivedOn = -1;
    this._fileDownloadCompletedOn = -1;
    this._errorDuringLinearizationFlow = false;
    this._rangesResolveTimes = [];
  }

  initialize(action, timeInfo) {
    this._actionReceivedOn = timeInfo.actionReceivedOn;
    this._hostAppStartTime = timeInfo.hostAppStartTime;
    this._appStartTime = timeInfo.appStartTime;
    this._appInitializeReceivedOn = timeInfo.appInitializeReceivedOn;

    if (action !== "preview") {
      this._isEventEmitted = true;
    }

    this._appStore = _ServiceRegistry.default.getService("AppStore");
  }

  setPreviewDropinReadyToRender() {
    this._previewDropinReadyToRender = new Date().getTime();
    const time = Math.ceil(this._previewDropinReadyToRender - this._appStartTime);

    _ServiceRegistry.default.getService("LoggingService").logExternal("File preview ready to render.", time);
  }

  setAppReadyToRender() {
    this._appReadyToRender = new Date().getTime();
  }

  setFileDownloadCompletedOn() {
    this._fileDownloadCompletedOn = new Date().getTime();
  }

  setCompleteFileLoadedOn() {
    this._completeFileLoadedOn = new Date().getTime();

    this._logCompleteFileLoaded();

    if (this._previewLoaded && !this._isEventEmitted) {
      this._isEventEmitted = true;

      const eventData = _objectSpread(_objectSpread({}, (0, _AppUtil.getBrowserOSDeviceInfo)()), this.getPerformanceEventLog());

      this.emitPerformanceObject(_LoggingService.LoggingConstants.APP_PERFORMANCE, eventData);
    }
  }

  setErrorDuringLinearizationFlow() {
    this._errorDuringLinearizationFlow = true;
  }

  setLinearizationInfoProvided(value) {
    this._linearizationInfoProvided = value;
  }

  setInitialBufferResolveTime(value) {
    this._initialBufferResolveTime = value;
  }

  setGetInfoResolveTime(value) {
    this._getInfoResolveTime = value;
  }

  setRangesResolveTime(value) {
    this._rangesResolveTimes.push(value);
  }

  setPreviewDialogOpened() {
    // If dialog is opened instead of file preview, ignore this log
    // Will happen in case of non pdf data bytes or password protected files
    this._isEventEmitted = true;
  }

  _shouldSetPreviewLoadedCondition() {
    return this._appStore.appRenderingBlocked;
  }

  setPreviewLoaded() {
    if (this._shouldSetPreviewLoadedCondition()) {
      this._isEventEmitted = true;
      return;
    }

    const previewConfig = this._appStore.configStore.getActionConfig("preview");

    if (!this._isEventEmitted) {
      this._previewLoaded = new Date().getTime();

      this._logPreviewLoaded();

      if (!previewConfig.enableLinearization || this._completeFileLoadedOn) {
        this._isEventEmitted = true;

        const eventData = _objectSpread(_objectSpread({}, (0, _AppUtil.getBrowserOSDeviceInfo)()), this.getPerformanceEventLog());

        this.emitPerformanceObject(_LoggingService.LoggingConstants.APP_PERFORMANCE, eventData);
      }
    }
  }

  setFileSize(fileSize) {
    this._fileSize = fileSize;
  }

  _logPreviewLoaded() {
    const time = Math.ceil(this._previewLoaded - this._appStartTime);

    _ServiceRegistry.default.getService("LoggingService").logExternal("File preview loaded.", time);
  }

  _logCompleteFileLoaded() {
    const time = Math.ceil(this._completeFileLoadedOn - this._appStartTime);

    _ServiceRegistry.default.getService("LoggingService").logExternal("PDF viewer ready.", time);
  }

  emitPerformanceObject(logMessage, logObject) {
    _ServiceRegistry.default.getService("LoggingService").logExternal(logMessage, logObject);

    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.InternalEvents.APP_PERF_DATA, logObject);
  }

  getPerformanceEventLog() {
    return {
      hostAppStartTime: this._hostAppStartTime,
      appInitializeReceivedOn: this._appInitializeReceivedOn,
      appStartTime: this._appStartTime,
      appReadyToRender: this._appReadyToRender,
      previewDropinReadyToRender: this._previewDropinReadyToRender,
      fileDownloadCompletedOn: this._fileDownloadCompletedOn,
      previewRequestReceived: this._actionReceivedOn,
      previewLoaded: this._previewLoaded,
      fileSize: this._fileSize,
      preset: this._appStore.configStore.getActionConfig("preview").embedMode,
      isOnDevice: this._appStore.isOnDevice,
      integrationName: this._appStore.configStore.getIntegrationName(),
      isLinearizationEnabled: this._appStore.configStore.getActionConfig("preview").enableLinearization,
      linearizationInfo: this._appStore.configStore.getActionConfig("preview").enableLinearization ? {
        completeFileLoadedOn: this._completeFileLoadedOn,
        errorDuringLinearizationFlow: this._errorDuringLinearizationFlow,
        fileDownloadTimeBreakup: {
          initialBufferResolveTime: this._initialBufferResolveTime,
          getInfoResolveTime: this._getInfoResolveTime,
          rangesResolveTime: this._rangesResolveTimes
        },
        makeMultipartRangeCalls: !!this._appStore.configStore.getActionConfig("preview").linearizationConfig.makeMultipartRangeCalls,
        initiateEarlyFileDownload: !!this._appStore.configStore.getActionConfig("preview").linearizationConfig.initiateEarlyFileDownload,
        linearizationInfoProvided: this._linearizationInfoProvided
      } : {}
    };
  }

}

exports.default = PerformanceService;