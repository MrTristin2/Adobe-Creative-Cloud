"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
const DEFAULT_EXT = "PDF";
const MIMETYPE_TO_EXT = {
  "application/pdf": "PDF"
};

const getDisplayFileNameAndExtension = fileInfo => {
  let displayFileName = fileInfo.fileName ? fileInfo.fileName : "";
  let extension = DEFAULT_EXT;

  if (fileInfo.mimeType && MIMETYPE_TO_EXT[fileInfo.mimeType.toLowerCase()]) {
    extension = MIMETYPE_TO_EXT[fileInfo.mimeType.toLowerCase()];
  }

  if (displayFileName) {
    const lastIndex = displayFileName.lastIndexOf(".");

    if (lastIndex !== -1) {
      extension = displayFileName.substring(lastIndex + 1, displayFileName.length).toUpperCase();
      displayFileName = displayFileName.substring(0, lastIndex);
    }
  }

  return {
    displayFileName,
    extension
  };
};

var _default = getDisplayFileNameAndExtension;
exports.default = _default;