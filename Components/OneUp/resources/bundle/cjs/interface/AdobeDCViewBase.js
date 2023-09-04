"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _ServiceRegistry = require("../util/ServiceRegistry");

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _Events = _interopRequireWildcard(require("../constants/Events"));

var _APICommands = require("../constants/APICommands");

var _ViewMode = _interopRequireWildcard(require("../constants/ViewMode"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
class AdobeDCView {
  constructor(config) {
    this._serviceFactory = new _ServiceRegistry.ServiceRegistry();

    this._initServiceFactory(config);
  } // eslint-disable-next-line no-unused-vars


  _initServiceFactory(config) {// to be overridden by child class
  }
  /**
   * previewFile(fileInfo, previewConfig) method to preview/embed pdf file.
   * @method
   * @param {object} fileInfo - file information to preview.
   * @param {object} previewConfig - config to control the UI of file preview.
   * @returns {Promise} - promise that resolves to PreviewRef when PDF is rendered.
   */


  previewFile(fileInfo, previewConfig) {
    return this._serviceFactory.getService("ViewSDKInterfaceApp").previewFile(fileInfo, previewConfig || {});
  }
  /**
   * method used to provide progress of file loading (for showing progress in loader)
   *
   * @param {Number} loaded - percentage of file loading
   * @param {Number} total - total file size
   */


  fileLoadingProgress(loaded, total) {
    this._serviceFactory.getService("ViewSDKInterfaceApp").fileProgressLoadingData(loaded, total);
  }
  /**
   * Enum for Callback, Events and others
   * @type {enum}
   */


  static get Enum() {
    return {
      CallbackType: _CallbackTypes.default,
      ApiResponseCode: _ApiConstants.default.API_RESPONSE,
      Events: _Events.default,
      PDFAnalyticsEvents: _Events.PDFAnalyticsEvents,
      AnnotationEvents: _Events.AnnotationEvents,
      AnnotationTypes: _Events.AnnotationTypes,
      FilePreviewEvents: _Events.FilePreviewEvents,
      OverlayEvents: _Events.OverlayEvents,
      ViewMode: _ViewMode.default,
      EmbedMode: _ViewMode.Preset,
      AnnotationAPICommands: _APICommands.AnnotationAPICommands,
      AppAPICommands: _APICommands.AppAPICommands,
      PreviewAPICommands: _APICommands.PreviewAPICommands
    };
  }
  /**
   * registerCallback method to register callbacks
   * @method
   * @param {string} type - type of callback
   * @param {Function} callback.
   * @param {object} options - parameters for extra information
   */


  registerCallback(type, callback, options) {
    this._serviceFactory.getService("ViewSDKInterfaceApp").registerCallback(type, callback, options || {});
  }

}

var _default = AdobeDCView;
exports.default = _default;