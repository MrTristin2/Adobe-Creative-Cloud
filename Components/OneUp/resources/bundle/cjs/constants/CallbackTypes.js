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
const CallbackTypes = {
  SAVE_API: "SAVE_API",
  STATUS_API: "STATUS_API",
  EVENT_LISTENER: "EVENT_LISTENER",
  SET_USER_SETTING_API: "SET_USER_SETTING_API",
  GET_USER_SETTING_API: "GET_USER_SETTING_API",
  GET_USER_PROFILE_API: "GET_USER_PROFILE_API",
  OPEN_LEGAL_DIALOG_API: "OPEN_LEGAL_DIALOG_API",
  GET_RENDITION_API: "GET_RENDITION_API"
};
var _default = CallbackTypes;
exports.default = _default;