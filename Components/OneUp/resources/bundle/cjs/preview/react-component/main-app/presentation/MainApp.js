"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _HeaderContainer = _interopRequireDefault(require("../../header/container/HeaderContainer"));

var _PreviewContainer = _interopRequireDefault(require("../../preview/container/PreviewContainer"));

require("!style-loader!css-loader!./MainApp.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
const App = props => /*#__PURE__*/_react.default.createElement("div", {
  className: "sdk-MainApp-app"
}, /*#__PURE__*/_react.default.createElement(_HeaderContainer.default, props), /*#__PURE__*/_react.default.createElement(_PreviewContainer.default, props));

var _default = App;
exports.default = _default;