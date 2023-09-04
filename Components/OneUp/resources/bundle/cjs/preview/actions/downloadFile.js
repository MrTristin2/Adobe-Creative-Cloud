"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../../util/ServiceRegistry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const downloadFile = () => new Promise((resolve, reject) => {
  _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INTEGRATION_CONNECTOR", ["document", "documentActions"]).then(apiObject => {
    // Just to set the correct state of dirtiness
    apiObject.document.getUpdatedPDFBuffer();
    apiObject.documentActions.downloadDocument();

    _ServiceRegistry.default.getService("AppStore").setFileStatus(null);

    resolve();
  }).catch(error => {
    const loggingService = _ServiceRegistry.default.getService("LoggingService");

    loggingService.error("downloadFile", "The downloadFile action throw an error", error);
    reject(error);
  });
});

var _default = downloadFile;
exports.default = _default;
