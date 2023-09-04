"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _Close = _interopRequireDefault(require("@react/react-spectrum/Icon/Close"));

var _Maximize = _interopRequireDefault(require("@react/react-spectrum/Icon/Maximize"));

var _Minimize = _interopRequireDefault(require("@react/react-spectrum/Icon/Minimize"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _TopBarAction = _interopRequireDefault(require("../top-bar-action/TopBarAction"));

require("!style-loader!css-loader!./FullScreenIcon.css");

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
const FullScreenIcon = ({
  fromTopBar
}) => {
  const appStore = _ServiceRegistry.default.getService("AppStore");

  const showFullScreenInHUD = appStore.getActionConfig("preview").showFullScreenInHUD;

  if (!appStore.configStore.showFullScreen || showFullScreenInHUD && fromTopBar && !appStore.inFullScreen || appStore.inFullScreen && !fromTopBar) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  let actionClass = "sdk-FullScreenIcon-fullScreenActionTopBar";
  const gotoFullScreenAction = {
    id: "gotoFullScreen",
    labelId: "GOTO_FULLSCREEN_LABEL",
    onClick: () => {
      _ServiceRegistry.default.getService("AppStore").setInFullScreen(true);
    },
    Icon: /*#__PURE__*/_react.default.createElement(_Maximize.default, null)
  };
  const exitFullScreenAction = {
    id: "exitFullScreen",
    labelId: "EXIT_FULLSCREEN_LABEL",
    onClick: () => {
      _ServiceRegistry.default.getService("AppStore").setInFullScreen(false);
    },
    Icon: showFullScreenInHUD && fromTopBar ? /*#__PURE__*/_react.default.createElement(_Close.default, {
      size: "L"
    }) : /*#__PURE__*/_react.default.createElement(_Minimize.default, null)
  };

  const getAction = () => {
    const fsAction = _ServiceRegistry.default.getService("AppStore").inFullScreen ? exitFullScreenAction : gotoFullScreenAction;
    fsAction.label = _ServiceRegistry.default.getService("AppStore").intl.formatMessage({
      id: fsAction.labelId
    });
    return fsAction;
  };

  const fsAction = getAction();

  if (appStore.getActionConfig("preview").showFullScreenInHUD && !fromTopBar) {
    fsAction.toolTipPlacement = "top";
    fsAction.variant = "tool";
    actionClass = "sdk-FullScreenIcon-fullScreenActionHUD";
  }

  const actionClassNames = (0, _classnames.default)([actionClass, {
    "sdk-FullScreenIcon-alwaysShow": true
  }]);
  return /*#__PURE__*/_react.default.createElement("div", {
    key: fsAction.id,
    className: actionClassNames
  }, /*#__PURE__*/_react.default.createElement(_TopBarAction.default, {
    action: fsAction
  }));
};

FullScreenIcon.defaultProps = {
  fromTopBar: false
};
FullScreenIcon.propTypes = {
  fromTopBar: _propTypes.default.bool
};
var _default = FullScreenIcon;
exports.default = _default;