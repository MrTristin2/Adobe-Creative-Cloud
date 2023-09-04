"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Icon = _interopRequireDefault(require("@react/react-spectrum/Icon"));

var _react = _interopRequireDefault(require("react"));

var _UIActionConstants = require("../constants/UIActionConstants");

var _s_report_abuse_ = _interopRequireDefault(require("dc-icons/common/s_report_abuse_18.svg"));

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
class UIActionConfigStore {
  constructor() {
    this.uiActionsConfigMap = new Map();

    this.init = config => {
      config.forEach(conf => {
        if (conf.position === _UIActionConstants.UIActionPositionTypes.TOPBAR_ELLIPSES) {
          this.updateUIActionConfig(_UIActionConstants.UIActionPositionTypes.TOPBAR_ELLIPSES, conf);
        }
      });
    };

    this.supportedIcons = {
      [_UIActionConstants.UIActionIconTypes.REPORT_ABUSE]: /*#__PURE__*/_react.default.createElement(_Icon.default, null, /*#__PURE__*/_react.default.createElement(_s_report_abuse_.default, null))
    };
  }

  updateUIActionConfig(type, value) {
    const uiActionConfigArray = this.uiActionsConfigMap.get(type) || [];
    uiActionConfigArray.push(value);
    this.uiActionsConfigMap.set(type, uiActionConfigArray);
  }

  getUIActionConfig(type) {
    const uiActionArray = this.uiActionsConfigMap.get(type);
    return uiActionArray || [];
  }

  getUIActionIcon(type) {
    return this.supportedIcons[type];
  }

}

exports.default = UIActionConfigStore;