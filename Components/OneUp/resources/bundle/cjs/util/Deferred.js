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

/**
 * @classdesc
 * Deferred that makes it easy to later reference the resolve and reject of a Promise instance.
 * @class
 */
class Deferred {
  /**
   * @constructor
   */
  constructor() {
    this.promise = new Promise((resolve, reject) => {
      Object.defineProperties(this, {
        resolve: {
          value: resolve
        },
        reject: {
          value: reject
        }
      });
    });
  }

}

var _default = Deferred;
exports.default = _default;