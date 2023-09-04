"use strict";

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/
if (!Object.assign) {
  // Polyfil for IE11
  Object.assign = function (obj, varArgs) {
    if (obj == null) {
      throw new TypeError("Cannot assign to undefined or null.");
    } // The f = Object and f(object) is to appease jslint while ensuring the obj is an Object.


    var f = Object,
        result = f(obj),
        i,
        arg,
        key,
        hasOwnProperty = Object.prototype.hasOwnProperty;

    for (i = 1; i < arguments.length; i++) {
      arg = arguments[i];
      if (arg == null) continue;

      for (key in arg) {
        if (hasOwnProperty.call(arg, key)) {
          result[key] = arg[key];
        }
      }
    }

    return result;
  };
}

if (!Object.entries) {
  Object.entries = function (obj) {
    var ownProps = Object.keys(obj),
        i = ownProps.length,
        resArray = new Array(i); // preallocate the Array

    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}

if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      if (this == null) {
        throw new TypeError('"this" is null or not defined');
      }

      const o = Object(this); // tslint:disable-next-line:no-bitwise

      const len = o.length >>> 0;

      if (len === 0) {
        return false;
      } // tslint:disable-next-line:no-bitwise


      const n = fromIndex | 0;
      let k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);

      while (k < len) {
        if (o[k] === searchElement) {
          return true;
        }

        k++;
      }

      return false;
    }
  });
}