"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.handleError = exports.getErrorMessage = exports.getErrorLog = exports.commandError = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2020 Adobe
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
const getErrorMessage = (error, ServiceRegistry) => {
  if (error.message) {
    return error.message;
  }

  return ServiceRegistry.getService("AppStore").intl.formatMessage({
    id: "error.default"
  });
};

exports.getErrorMessage = getErrorMessage;

const getErrorLog = error => error.stack || error.message || JSON.stringify(error);

exports.getErrorLog = getErrorLog;

const handleError = (error, ServiceRegistry) => {
  ServiceRegistry.getService("AppStore").setShowLoader(false);
  ServiceRegistry.getService("AppStore").setAppError(error);
};

exports.handleError = handleError;

const commandError = (code, message) => ({
  code,
  message
});

exports.commandError = commandError;