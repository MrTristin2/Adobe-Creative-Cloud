"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Preset = exports.LightBoxExitPDFViewerType = exports.InternalViewMode = void 0;

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
const Preset = {
  FULL_WINDOW: "FULL_WINDOW",
  SIZED_CONTAINER: "SIZED_CONTAINER",
  IN_LINE: "IN_LINE",
  LIGHT_BOX: "LIGHT_BOX"
};
exports.Preset = Preset;
const LightBoxExitPDFViewerType = {
  RETURN: "RETURN",
  CLOSE: "CLOSE"
};
exports.LightBoxExitPDFViewerType = LightBoxExitPDFViewerType;
const InternalViewMode = {
  FIT_WIDTH: "FIT_WIDTH",
  FIT_PAGE: "FIT_PAGE",
  CONTINUOUS: "CONTINUOUS",
  SINGLE_PAGE: "PAGE_BY_PAGE"
};
exports.InternalViewMode = InternalViewMode;
const ViewMode = {
  FIT_WIDTH: "FIT_WIDTH",
  FIT_PAGE: "FIT_PAGE",
  CONTINUOUS: "CONTINUOUS",
  SINGLE_PAGE: "SINGLE_PAGE"
};
var _default = ViewMode;
exports.default = _default;