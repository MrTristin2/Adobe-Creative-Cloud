"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidUrl = exports.getCurrentEnv = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2022 Adobe
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
const VALID_PROTOCOL = ["https:", "http:"];

const isValidUrl = checkWith => {
  if (!checkWith) {
    return false;
  }

  try {
    const url = new URL(checkWith);
    const protocol = url.protocol;
    return VALID_PROTOCOL.indexOf(protocol) !== -1;
  } catch (e) {
    return false;
  }
};

exports.isValidUrl = isValidUrl;

const getCurrentEnv = src => {
  if (/local-test/.test(src)) return "local";
  if (/dev/.test(src)) return "dev";
  if (/stage/.test(src)) return "stage";
  if (/documentcloud.adobe/.test(src)) return "prod";
  return "prod";
};

exports.getCurrentEnv = getCurrentEnv;