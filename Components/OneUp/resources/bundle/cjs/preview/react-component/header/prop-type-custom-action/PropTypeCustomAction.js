"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.propTypeReactCustomAction = exports.propTypeJsonCustomAction = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

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
const propTypeReactCustomAction = _propTypes.default.shape({
  /**
   * The action's name or ID. This must only be unique among the set
   * of actions in this config.
   */
  id: _propTypes.default.string.isRequired,

  /** Custom action Component to be rendered */
  action: _propTypes.default.func.isRequired,

  /** If the custom action should always be in the top bar and not the side menu */
  showOnlyInTopBar: _propTypes.default.bool,

  /** no op for side menu, here to be consistent with Custom Actions definition */
  alwaysShow: _propTypes.default.bool
});

exports.propTypeReactCustomAction = propTypeReactCustomAction;

const propTypeJsonCustomAction = _propTypes.default.shape({
  /* turns into the key in a loop */
  id: _propTypes.default.string.isRequired,

  /* written label for side menu, tooltip attributes for top bar */
  label: _propTypes.default.string.isRequired,

  /* sidemenu can have titles and buttons, topbar can only have buttons*/
  type: _propTypes.default.oneOf(["title", "button"]).isRequired,

  /* a react object */
  Icon: _propTypes.default.objectOf(_propTypes.default.object),

  /* function to call when the action is clicked */
  onClick: _propTypes.default.func,

  /* if the action should render using the selected state */
  selected: _propTypes.default.bool,

  /* if the action should render using the disabled state */
  disabled: _propTypes.default.bool,

  /* top bar actions hide at small screen sizes, this prevents that */
  alwaysShow: _propTypes.default.bool,

  /* displays the TopBarMenuAction as a button with a label */
  displayWithLabel: _propTypes.default.bool,

  /* allows a TopBarMenuAction to optionally have a title that's different from the label */
  title: _propTypes.default.string,

  /* allows a TopBarMenuAction to be rendered as any spectrum button variant */
  variant: _propTypes.default.string
});

exports.propTypeJsonCustomAction = propTypeJsonCustomAction;
