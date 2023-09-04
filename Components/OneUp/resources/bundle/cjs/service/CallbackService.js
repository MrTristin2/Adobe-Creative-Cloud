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
class CallbackService {
  initialize() {
    this._callbackMap = [];
    this._callbackOptionsMap = [];
  }

  registerCallback(type, callback, options) {
    this._callbackMap[type] = callback;
    this._callbackOptionsMap[type] = options;
  }

  hasCallback(type) {
    return this._callbackMap[type] !== undefined;
  }

  getCallback(type) {
    return this._callbackMap[type];
  }

  getCallbackOptions(type) {
    return this._callbackOptionsMap[type];
  }

}

exports.default = CallbackService;