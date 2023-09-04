"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withIntl = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _enUS = _interopRequireDefault(require("../translations/en-US.json"));

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

/* eslint-disable import/prefer-default-export */
const withIntl = children => /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, {
  messages: _enUS.default,
  locale: "en"
}, children);

exports.withIntl = withIntl;