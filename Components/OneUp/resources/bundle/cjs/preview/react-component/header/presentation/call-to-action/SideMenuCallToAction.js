"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _Button = _interopRequireDefault(require("@react/react-spectrum/Button"));

var _OverlayTrigger = _interopRequireDefault(require("@react/react-spectrum/OverlayTrigger"));

var _Popover = _interopRequireDefault(require("@react/react-spectrum/Popover"));

var _More = _interopRequireDefault(require("@react/react-spectrum/Icon/More"));

var _SideMenu = _interopRequireDefault(require("../side-menu/SideMenu"));

var _PropTypeCustomAction = require("../../prop-type-custom-action/PropTypeCustomAction");

var _AnalyticsConstants = _interopRequireDefault(require("../../../../../constants/AnalyticsConstants"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

require("!style-loader!css-loader!./SideMenuCallToAction.css");

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
const SideMenuCallToAction = props => {
  const {
    sideMenuActions
  } = props;

  const appStore = _ServiceRegistry.default.getService("AppStore");

  let overlayRef;

  if (!(sideMenuActions.length > 0 || appStore.configStore.hasAdobeMenuActions())) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  return /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
    trigger: "click",
    placement: "bottom right",
    ref: oRef => {
      overlayRef = oRef;
    },
    onShow: () => {
      appStore.setSideMenuOpen(true);

      _ServiceRegistry.default.getService("AnalyticsProviderService").sendEvent(_AnalyticsConstants.default.SIDE_MENU_CALL_TO_ACTION);
    },
    onClick: () => {
      overlayRef.hide();
    },
    onHide: () => {
      appStore.setSideMenuOpen(false);
    }
  }, /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "sdk-CallToAction-sideMenuButton",
    quiet: true,
    variant: "action",
    icon: /*#__PURE__*/_react.default.createElement(_More.default, null),
    "aria-haspopup": "true"
  }), /*#__PURE__*/_react.default.createElement(_Popover.default, {
    variant: "default",
    className: (0, _classnames.default)(["sdk-CallToAction-popover", "sdk-CallToAction-sideMenuPopOver"])
  }, /*#__PURE__*/_react.default.createElement(_SideMenu.default, {
    actions: sideMenuActions
  })));
};

SideMenuCallToAction.propTypes = {
  sideMenuActions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_PropTypeCustomAction.propTypeJsonCustomAction, _PropTypeCustomAction.propTypeReactCustomAction])).isRequired
};
var _default = SideMenuCallToAction;
exports.default = _default;