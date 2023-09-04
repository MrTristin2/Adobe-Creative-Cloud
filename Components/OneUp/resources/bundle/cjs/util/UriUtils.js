"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUrlWithoutSearchParams = exports.getQueryStringParameterByName = void 0;

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

/**
 * Look at the uri, pulls the query params from there,
 * split the params and give us the value for the requested key.
 *
 * @param {string} name - The name of the parameter we want the value of
 * @param {string} location - url location
 */
const getQueryStringParameterByName = (name, location) => {
  const match = RegExp(`[?|#&]${name}=([^&]*)`).exec(location);
  return match && decodeURIComponent(match[1].replace(/\+/g, " "));
};

exports.getQueryStringParameterByName = getQueryStringParameterByName;

const getUrlWithoutSearchParams = url => {
  let href = url;

  if (href && href.indexOf("?") > -1) {
    href = href.split("?")[0];
  }

  if (href && href.indexOf("#") > -1) {
    href = href.split("#")[0];
  }

  return href;
};

exports.getUrlWithoutSearchParams = getUrlWithoutSearchParams;