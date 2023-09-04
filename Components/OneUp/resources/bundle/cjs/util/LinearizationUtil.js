"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidGetInitialBufferResult = exports.isValidGetInfoResult = exports.isValidGetBufferRangesResult = void 0;

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe
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
const isValidGetInfoResult = result => {
  if (typeof result.fileSize === "number" && result.fileSize > 0) {
    return true;
  }

  return false;
};

exports.isValidGetInfoResult = isValidGetInfoResult;

const isValidGetInitialBufferResult = result => {
  if (result.buffer && result.buffer.byteLength === 1025) {
    return true;
  }

  return false;
};

exports.isValidGetInitialBufferResult = isValidGetInitialBufferResult;

const isValidGetBufferRangesResult = (ranges, result) => {
  if (result.bufferList && result.bufferList.length === ranges.length) {
    return true;
  }

  return false;
};

exports.isValidGetBufferRangesResult = isValidGetBufferRangesResult;