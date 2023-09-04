"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Close = _interopRequireDefault(require("@react/react-spectrum/Icon/Close"));

var _BackAndroid = _interopRequireDefault(require("@react/react-spectrum/Icon/BackAndroid"));

var _TopBarAction = _interopRequireDefault(require("../../../icons/top-bar-action/TopBarAction"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

var _ViewMode = require("../../../../../constants/ViewMode");

require("!style-loader!css-loader!./LightBoxExitPDFViewerButton.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2019 Adobe
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
const lightBoxCloseAction = {
  id: "lightBoxCloseView",
  onClick: () => {
    _ServiceRegistry.default.getService("EmbedModeService").LBExitPDFViewer();
  }
};

const LightBoxExitPDFViewerButton = () => {
  const appStore = _ServiceRegistry.default.getService("AppStore");

  if (appStore.configStore.exitPDFViewerType === _ViewMode.LightBoxExitPDFViewerType.CLOSE) {
    lightBoxCloseAction.label = appStore.intl.formatMessage({
      id: "close"
    });
    lightBoxCloseAction.Icon = /*#__PURE__*/_react.default.createElement(_Close.default, {
      size: "L"
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "sdk-LightBoxExitPDFViewerButton-lightBoxExitPDFViewerButtonTopBarRight"
    }, /*#__PURE__*/_react.default.createElement(_TopBarAction.default, {
      action: lightBoxCloseAction
    }));
  }

  if (appStore.configStore.exitPDFViewerType === _ViewMode.LightBoxExitPDFViewerType.RETURN) {
    lightBoxCloseAction.label = appStore.intl.formatMessage({
      id: "RETURN"
    });
    lightBoxCloseAction.Icon = /*#__PURE__*/_react.default.createElement(_BackAndroid.default, {
      size: "L"
    });
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "sdk-LightBoxExitPDFViewerButton-lightBoxExitPDFViewerButtonTopBarLeft"
    }, /*#__PURE__*/_react.default.createElement(_TopBarAction.default, {
      action: lightBoxCloseAction
    }));
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
};

var _default = LightBoxExitPDFViewerButton;
exports.default = _default;