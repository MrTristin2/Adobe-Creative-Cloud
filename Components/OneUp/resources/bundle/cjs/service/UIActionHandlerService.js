"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

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
class UIActionHandlerService {
  constructor() {
    this._uiActionConfig = [];
  }

  initialize(origUIActionConfig) {
    const validationService = _ServiceRegistry.default.getService("ValidationService");

    if (validationService.validateUIActionConfig(origUIActionConfig)) {
      origUIActionConfig.forEach(config => {
        this._uiActionConfig.push(config);
      });
    }
  }

  getProcessedUIActionConfig() {
    return this._uiActionConfig;
  }

}

exports.default = UIActionHandlerService;