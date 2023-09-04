"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
class AdobeViewer {
  constructor(serviceFactory) {
    this._serviceFactory = serviceFactory;
  }
  /**
   * @method
   * @description
   * it exposes all the allowed comment interface provided by comment dropin
   */


  getAnnotationManager(limited) {
    if (!this._annotationManager) {
      this._annotationManager = this._serviceFactory.getService("AnnotationManager");

      this._annotationManager.initEventListener(limited);
    }

    return this._annotationManager.initializeEventListener.then(() => Promise.resolve(this._annotationManager.getExposedAPIs()));
  }
  /**
   * @method
   * @description
   * it exposes all the allowed preview interface provided by preview dropin
   */


  getAPIs() {
    if (!this._commandManager) {
      this._commandManager = this._serviceFactory.getService("CommandManager");
    }

    return Promise.resolve(this._commandManager.getExposedAPIs(this.options));
  }
  /**
   * @method
   * @description
   * it execute the commands related to file viewer and height updation
   *
   * @param {String} command - Command which we wanted to execute on file preview
   * @param {Object} commandData - data which should be passed with command.
   * @returns {Promise} - promise that resolves with result of command.
   */


  executeCommand(command, commandData) {
    if (!this._commandManager) {
      this._commandManager = this._serviceFactory.getService("CommandManager");
    }

    return this._commandManager.executeCommand(command, commandData);
  }
  /**
   * @method
   * @description
   * it exposes all the allowed preview APIs and also handles the screen mode commands
   *
   * @param options options have preview configuration
   *
   * @returns exposedAPIs
   */


  getExposedAPIs(options) {
    this.options = options;
    const exposedAPIs = {
      executeCommand: this.executeCommand.bind(this),
      getAPIs: this.getAPIs.bind(this)
    };
    const fullAccess = options.previewConfig.enableAnnotationAPIs && options.previewConfig.showAnnotationTools !== false;

    exposedAPIs.getAnnotationManager = () => this.getAnnotationManager(!fullAccess);

    return exposedAPIs;
  }

}

exports.default = AdobeViewer;