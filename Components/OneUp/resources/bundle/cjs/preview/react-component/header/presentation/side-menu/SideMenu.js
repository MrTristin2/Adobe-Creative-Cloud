"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.SideMenuTitle = exports.SideMenuAction = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _Heading = _interopRequireDefault(require("@react/react-spectrum/Heading"));

var _Button = _interopRequireDefault(require("@react/react-spectrum/Button"));

var _AppConstants = _interopRequireDefault(require("../../../../../constants/AppConstants"));

var _PropTypeCustomAction = require("../../prop-type-custom-action/PropTypeCustomAction");

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

var _ComponentRegistry = _interopRequireDefault(require("../../../../../util/ComponentRegistry"));

require("!style-loader!css-loader!./SideMenu.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
class SideMenu extends _react.Component {
  renderPureReactActions() {
    const {
      actions
    } = this.props;
    return actions.map(({
      id,
      action: Action,
      showOnlyInTopBar
    }) => !showOnlyInTopBar && /*#__PURE__*/_react.default.createElement("div", {
      key: id,
      className: "sdk-SideMenu-sideMenuActionItem",
      role: "button",
      tabIndex: -1
    }, /*#__PURE__*/_react.default.createElement(Action, null)));
  }

  renderOurActions() {
    const {
      actions
    } = this.props;
    return actions.map(action => {
      if (action.type === "title") {
        return /*#__PURE__*/_react.default.createElement(SideMenuTitle, {
          key: action.id,
          action: action
        });
      }

      return /*#__PURE__*/_react.default.createElement(SideMenuAction, {
        key: action.id,
        action: action
      });
    });
  }

  renderCustomActions() {
    const {
      actions
    } = this.props;

    if (actions[0].label) {
      return this.renderOurActions();
    }

    return this.renderPureReactActions();
  }

  render() {
    const {
      actions
    } = this.props;
    return /*#__PURE__*/_react.default.createElement("div", null, actions && actions.length > 0 && /*#__PURE__*/_react.default.createElement("div", null, this.renderCustomActions(), _ServiceRegistry.default.getService("AppStore").configStore.hasAdobeMenuActions() && /*#__PURE__*/_react.default.createElement("hr", {
      className: "sdk-SideMenu-menuDivider"
    })), _ComponentRegistry.default.getComponent("AdobeMenuActions", this.props));
  }

}

SideMenu.propTypes = {
  actions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_PropTypeCustomAction.propTypeReactCustomAction, _PropTypeCustomAction.propTypeJsonCustomAction]))
};
SideMenu.defaultProps = {
  actions: []
};

const SideMenuAction = ({
  action
}) => /*#__PURE__*/_react.default.createElement(_Button.default, {
  className: "sdk-SideMenu-sideMenuActionItem",
  quiet: true,
  variant: "action",
  onClick: () => {
    try {
      const workflow = "SideMenuAction";
      const subcategory = _AppConstants.default.SUBCATEGORY_USE;
      const type = _AppConstants.default.SUBCATEGORY_TYPE_CLICK;
      const event = {
        workflow,
        subcategory,
        type,
        subtype: action.id
      };

      _ServiceRegistry.default.getService("AnalyticsProviderService").logEvent(event);

      action.onClick();
    } catch (error) {
      _ServiceRegistry.default.getService("LoggingService").error("SideMenuAction", `The ${action.label} action in the side bar threw an error`, error);
    }
  },
  selected: action.selected,
  label: action.label,
  icon: action.Icon
});

exports.SideMenuAction = SideMenuAction;
SideMenuAction.propTypes = {
  action: _PropTypeCustomAction.propTypeJsonCustomAction.isRequired
};

const SideMenuTitle = ({
  action: {
    label
  }
}) => /*#__PURE__*/_react.default.createElement(_Heading.default, {
  size: 5
}, label);

exports.SideMenuTitle = SideMenuTitle;
SideMenuTitle.propTypes = {
  action: _PropTypeCustomAction.propTypeJsonCustomAction.isRequired
};

var _default = (0, _reactIntl.injectIntl)(SideMenu);

exports.default = _default;