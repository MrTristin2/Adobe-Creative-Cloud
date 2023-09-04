"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIntl = require("react-intl");

var _Button = _interopRequireDefault(require("@react/react-spectrum/Button"));

var _Help = _interopRequireDefault(require("@react/react-spectrum/Icon/Help"));

var _AdobeLogo = _interopRequireDefault(require("@react/react-spectrum/Icon/AdobeLogo"));

var _AnalyticsConstants = _interopRequireDefault(require("../../../../../constants/AnalyticsConstants"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../../../../../constants/CallbackTypes"));

var _UIActionConstants = require("../../../../../constants/UIActionConstants");

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
const AdobeMenuActions = props => {
  const {
    helpUrl,
    showLegalNotice
  } = _ServiceRegistry.default.getService("AppStore").configStore.getConfig();

  const callbackService = _ServiceRegistry.default.getService("CallbackService");

  const analyticsProviderService = _ServiceRegistry.default.getService("AnalyticsProviderService");

  const uiActionConfigStore = _ServiceRegistry.default.getService("AppStore").getUIActionConfig();

  const uiConfigs = uiActionConfigStore.getUIActionConfig(_UIActionConstants.UIActionPositionTypes.TOPBAR_ELLIPSES);
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, helpUrl && /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "sdk-SideMenu-sideMenuActionItem",
    label: props.intl.formatMessage({
      id: "HELP_LABEL"
    }),
    quiet: true,
    variant: "action",
    icon: /*#__PURE__*/_react.default.createElement(_Help.default, null),
    onClick: () => {
      analyticsProviderService.sendEvent(_AnalyticsConstants.default.HELP_ICON);
      window.open(helpUrl, "_blank");
    }
  }), callbackService.hasCallback(_CallbackTypes.default.OPEN_LEGAL_DIALOG_API) && showLegalNotice && /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "sdk-SideMenu-sideMenuActionItem",
    label: props.intl.formatMessage({
      id: "LEGAL_NOTICES"
    }),
    quiet: true,
    variant: "action",
    onClick: () => {
      analyticsProviderService.sendEvent(_AnalyticsConstants.default.LEGAL_NOTICES);
      callbackService.getCallback(_CallbackTypes.default.OPEN_LEGAL_DIALOG_API)();
    },
    icon: /*#__PURE__*/_react.default.createElement(_AdobeLogo.default, null),
    modaltrigger: true
  }), uiConfigs.map(iconConfig => /*#__PURE__*/_react.default.createElement(_Button.default, {
    className: "sdk-SideMenu-sideMenuActionItem",
    label: iconConfig.label,
    quiet: true,
    variant: "action",
    onClick: iconConfig.onClick,
    icon: uiActionConfigStore.getUIActionIcon(iconConfig.iconType)
  })));
};

AdobeMenuActions.propTypes = {
  intl: _reactIntl.intlShape.isRequired
};
AdobeMenuActions.defaultProps = {};

var _default = (0, _reactIntl.injectIntl)(AdobeMenuActions);

exports.default = _default;
