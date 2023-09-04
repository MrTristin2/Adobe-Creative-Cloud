"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.unblockPrint = exports.blockPrint = void 0;

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
const blockPrintEvent = event => {
  // keyCode 112 f1, 80 p
  if ((event.metaKey || event.ctrlKey) && event.keyCode === 80 || event.keyCode === 112) {
    event.stopImmediatePropagation();
  }
};

const blockPrint = () => document.addEventListener("keydown", blockPrintEvent);

exports.blockPrint = blockPrint;

const unblockPrint = () => document.removeEventListener("keydown", blockPrintEvent);

exports.unblockPrint = unblockPrint;