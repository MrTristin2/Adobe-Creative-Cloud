"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _APICommands = require("../constants/APICommands");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _ErrorUtils = require("../util/ErrorUtils");

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
class AppCommands {
  constructor() {
    this._apiCommands = {
      [_APICommands.AppAPICommands.CLOSE_PDF_VIEWER]: {
        action: this._closePDFViewer.bind(this)
      },
      [_APICommands.AppAPICommands.ENTER_FULL_SCREEN]: {
        action: this._enterFullScreen.bind(this)
      },
      [_APICommands.AppAPICommands.EXIT_FULL_SCREEN]: {
        action: this._exitFullScreen.bind(this)
      },
      [_APICommands.AppAPICommands.SET_HEIGHT_IN_VIEW]: {
        validator: this._heightInViewDataValidator.bind(this),
        action: this._setHeightInView.bind(this)
      },
      [_APICommands.AppAPICommands.TOGGLE_COMMENTING]: {
        action: this._toggleCommenting.bind(this)
      }
    };
  }

  static getClassName() {
    return "AppCommands";
  }
  /**
   * @method
   * @description
   * execute the commands related to app
   *
   * @param data - executable command
   */


  executeCommand(data) {
    const invalidError = this._validateCommand(data);

    if (invalidError) return Promise.reject(invalidError);
    return this._apiCommands[data.command].action.call(this, data.commandData);
  }
  /**
   * @method
   * @description
   * validate the commands whether it is allowed or not.
   *
   * @param data - command for validation
   *
   * @return Return undefined if it is valid
   */


  _validateCommand(data) {
    if (this._apiCommands[data.command].validator) {
      return this._apiCommands[data.command].validator(data);
    }

    return undefined;
  }

  _heightInViewDataValidator(data) {
    const {
      command,
      commandData
    } = data;
    let err;

    if (!commandData || !commandData.winHeight) {
      // Limited check intentionally
      err = (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_INPUT, `Invalid data provided for command ${command}`);
    }

    return err;
  }
  /**
   * @method
   * @description
   * Update the height for InLine View
   *
   * @param data - height of page view
   *
   * @return Return promise which resolve if successful
   */


  _setHeightInView(data) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.isInLinePreset) {
      appStore.setHeightInView(data);
      return Promise.resolve(true);
    }

    return Promise.resolve(false);
  }
  /**
   * @method
   * @description
   * Switched to full screen view mode
   *
   * @return Return promise which resolve true
   */


  _enterFullScreen() {
    _ServiceRegistry.default.getService("AppStore").setInFullScreen(true);

    return Promise.resolve(true);
  }
  /**
   * @method
   * @description
   * Exit from full screen view mode
   *
   * @return Return promise which resolve true
   */


  _exitFullScreen() {
    _ServiceRegistry.default.getService("AppStore").setInFullScreen(false);

    return Promise.resolve(true);
  }
  /**
   * @method
   * @description
   * Exit from the pdf viewer mode.
   *
   * @return Return promise which resolve true
   */


  _closePDFViewer() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.isLBPreset) {
      _ServiceRegistry.default.getService("EmbedModeService").LBExitPDFViewer();

      return Promise.resolve(true);
    } // In case of other embed mode, just call close PDF Viewer


    _ServiceRegistry.default.getService("EmbedModeService").unMountApp();

    return Promise.resolve(true);
  }

  _toggleCommenting(bool) {
    return _ServiceRegistry.default.getService("CommentsApi").toggleCommenting(bool);
  }

}

exports.default = AppCommands;