"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _ViewMode = require("../constants/ViewMode");

var _UIActionConstants = require("../constants/UIActionConstants");

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

/* eslint class-methods-use-this: 0 */
class ValidationService {
  constructor() {
    this._configKeysAndValidators = {
      preset: this._validatePreset,
      embedMode: this._validatePreset,
      showAnnotationTools: this._validateBooleanValue,
      enableAnnotationAPIs: this._validateBooleanValue,
      includePDFAnnotations: this._validateBooleanValue,
      showLeftHandPanel: this._validateBooleanValue,
      showPageControls: this._validateBooleanValue,
      dockPageControls: this._validateBooleanValue,
      showDownloadPDF: this._validateBooleanValue,
      showPrintPDF: this._validateBooleanValue,
      showFitPageButton: this._validateBooleanValue,
      annotationUIConfig: this._validateAnnotationUIConfig,
      showFitWidthButton: this._validateBooleanValue,
      showZoomControl: this._validateBooleanValue,
      showRotateViewControl: this._validateBooleanValue,
      showPageNavigationControl: this._validateBooleanValue,
      enableFormFilling: this._validateBooleanValue,
      defaultViewMode: this._validateStringValue,
      supportUrl: this._validateStringValue,
      integrationName: this._validateStringValue,
      backgroundColor: this._validateStringValue,
      enableLinearization: this._validateBooleanValue,
      enableEdit: this._validateBooleanValue,
      usePartialEdit: this._validateBooleanValue,
      useIframelessPrint: this._validateBooleanValue
    };
  }

  _validateStringValue(key, value) {
    let err;

    if (typeof value !== "string") {
      err = new Error(`Only String input is supported for config ${key}`);
    }

    return err;
  }

  _validateBooleanValue(key, value) {
    let err;

    if (typeof value !== "boolean") {
      err = new Error(`Only Boolean input is supported for config ${key}`);
    }

    return err;
  }

  _validatePreset(key, value) {
    let err;

    if (value) {
      switch (value) {
        case _ViewMode.Preset.FULL_WINDOW:
        case _ViewMode.Preset.SIZED_CONTAINER:
        case _ViewMode.Preset.IN_LINE:
        case _ViewMode.Preset.LIGHT_BOX:
        case "INTEGRATION":
          break;

        default:
          err = new Error(`Please pass valid embed mode. Currently, only "FULL_WINDOW", "SIZED_CONTAINER",
                "IN_LINE" and "LIGHT_BOX" embed modes are supported`);
      }
    }

    return err;
  }

  _validateAnnotationUIConfig(key, value = {}) {
    let err;

    if (Object.keys(value).filter(val => typeof value[val] !== "boolean").length > 0) {
      err = new Error(`Only Boolean input is supported for config ${key}`);
    }

    return err;
  }
  /**
   * Validates incoming config.
   * 1. Only clientId is mandatory.
   * 2. Invalid value of divId isn't allowed
   */


  validateConfig(config) {
    if (!config) {
      throw new Error("Invalid config is provided.");
    }

    if (!config.clientId) {
      throw new Error("Invalid client id is provided.");
    }

    if ("divId" in config && !config.divId) {
      throw new Error("Invalid div id is provided.");
    }
  }
  /**
   * Validates data type of previewConfig entries
   */


  validatePreviewConfig(previewConfig) {
    let err;

    if (previewConfig) {
      Object.keys(previewConfig).forEach(key => {
        if (this._configKeysAndValidators[key]) {
          err = this._configKeysAndValidators[key](key, previewConfig[key]);

          if (err) {
            throw err;
          }
        }
      });
    }
  }
  /**
   * Validates file info object based on Preview Config.
   */


  validateFileInfoForPreviewConfig(fileInfo, previewConfig) {
    if (previewConfig.enableAnnotationAPIs && fileInfo.metaData && !fileInfo.metaData.id) {
      throw new Error("File id is missing in file information metaData.");
    }

    if (previewConfig.enableLinearization) {
      this.validateContentLinearizationInfo(fileInfo);
    }
  }
  /**
   * Validates file info object.
   * 1. It should contain a valid content object.
   */


  validateFileInfo(fileInfo) {
    /* Allowing it as rendition might come with callback now
    if (!fileInfo || (!fileInfo.content && !fileInfo.rendition)) {
        throw new Error("Missing content in file information.");
    }
    */
    if (fileInfo.content) {
      this._validateFileInfoContent(fileInfo.content);
    }

    if (fileInfo.rendition) {
      Object.keys(fileInfo.rendition).forEach(pageIndex => {
        this._validateFileInfoContent(fileInfo.rendition[pageIndex]);
      });
    }
  }
  /**
   * Validate that provided mime type is present and its not a PDF
   */


  validateNonPDFMimeType(mimeType) {
    if (!mimeType || mimeType.toLowerCase() === "application/pdf") {
      throw new Error("Only non PDF mime type is supported");
    }
  }
  /**
   * Validates Callback Registration
   */


  validateCallback(type, callback, options) {
    if (typeof callback !== "function") {
      throw new Error("Callback should be of Function type");
    }

    const keys = Object.keys(options);

    switch (type) {
      case _CallbackTypes.default.SAVE_API:
        keys.forEach(key => {
          if (["incremental", "showError", "showSaveButton", "showEditStatusInfo"].indexOf(key) !== -1 && typeof options[key] !== "boolean") {
            throw new Error(`${key} value should be of boolean type`);
          }

          if (["autoSaveFrequency"].indexOf(key) !== -1 && typeof options[key] !== "number") {
            throw new Error(`${key} value should be of number type`);
          }
        });
        break;

      case _CallbackTypes.default.STATUS_API:
        keys.forEach(key => {
          if (["filePollFrequency", "autoSaveFrequency"].indexOf(key) !== -1 && typeof options[key] !== "number") {
            throw new Error(`${key} value should be of number type`);
          }

          if (["enableFocusPolling"].indexOf(key) !== -1 && typeof options[key] !== "boolean") {
            throw new Error(`${key} value should be of boolean type`);
          }
        });
        break;

      case _CallbackTypes.default.EVENT_LISTENER:
      case _CallbackTypes.default.SET_USER_SETTING_API:
      case _CallbackTypes.default.GET_USER_SETTING_API:
      case _CallbackTypes.default.GET_USER_PROFILE_API:
      case _CallbackTypes.default.OPEN_LEGAL_DIALOG_API:
      case _CallbackTypes.default.GET_RENDITION_API:
        break;

      default:
        this._validateOtherCallbacks(type);

    }
  }

  _validateOtherCallbacks(type) {
    switch (type) {
      case _CallbackTypes.default.OPEN_LEGAL_DIALOG_API:
      case _CallbackTypes.default.GET_RENDITION_API:
        break;

      default:
        throw new Error(`Callback type ${type} not supported`);
    }
  }
  /**
   * Validates file info content object.
   * 1. Either it should have local data promise or location url.
   */


  _validateFileInfoContent(content) {
    if (!content.promise && !content.location) {
      throw new Error("Invalid content information is provided.");
    }

    if (content.location && !content.location.url) {
      throw new Error("Invalid content information is provided.");
    }
  }
  /**
   * Validates custom UI Icon config entries
   */


  validateUIActionConfig(uiActionConfig) {
    // TODO Throw error once UI action goes public
    if (!uiActionConfig) {
      return false;
    }

    if (uiActionConfig.length <= 0) {
      return false;
    }

    let typeValidation = false;
    let positionValidation = false;
    let iconTypeValidation = false;
    let onClickFunctionValidation = false;
    uiActionConfig.forEach(config => {
      typeValidation = typeof config === "object";
      positionValidation = Object.keys(_UIActionConstants.UIActionPositionTypes).map(e => _UIActionConstants.UIActionPositionTypes[e]).some(value => value === config.position);
      iconTypeValidation = Object.keys(_UIActionConstants.UIActionIconTypes).map(e => _UIActionConstants.UIActionIconTypes[e]).some(value => value === config.iconType);
      onClickFunctionValidation = typeof config.onClick === "function";
    });
    return typeValidation && positionValidation && iconTypeValidation && onClickFunctionValidation;
  }
  /**
   * Validates linearization info object in content.
   */


  validateContentLinearizationInfo(fileInfo) {
    const content = fileInfo.content;
    const linearizationInfo = content.linearizationInfo;

    if (!content.location && !linearizationInfo) {
      throw new Error("Invalid content linearization information is provided.");
    }

    if (linearizationInfo) {
      if (!linearizationInfo.getInfo || typeof linearizationInfo.getInfo !== "function" || !linearizationInfo.getInitialBuffer || typeof linearizationInfo.getInitialBuffer !== "function" || !linearizationInfo.getFileBufferRanges || typeof linearizationInfo.getFileBufferRanges !== "function") {
        throw new Error("Invalid content linearization information is provided.");
      }
    }
  }

}

exports.default = ValidationService;