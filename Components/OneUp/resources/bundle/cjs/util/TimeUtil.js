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
// TODO:: timeOrigin not working as expected, giving future time, so fall back to timing
const getWindowStartTime = () => {
  if (window.performance && window.performance.timing && window.performance.timing.navigationStart) {
    return Math.floor(window.performance.timing.navigationStart);
  } // If some browser like Safari doesn't have timeOrigin then it is our best guess


  return new Date().getTime();
};

var _default = getWindowStartTime;
exports.default = _default;