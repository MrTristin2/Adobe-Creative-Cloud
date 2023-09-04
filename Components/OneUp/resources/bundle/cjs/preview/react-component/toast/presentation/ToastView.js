"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mobxReact = require("mobx-react");

var _reactIntl = require("react-intl");

var _Toast = require("@react/react-spectrum/Toast");

require("!style-loader!css-loader!./Toast.css");

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ToastView =
/**
 * layout for Toasts
 */
(0, _mobxReact.observer)(_class = (_class2 = class ToastView extends _react.default.Component {
  render() {
    const closable = true;
    return /*#__PURE__*/_react.default.createElement(_Toast.Toast, {
      variant: this.props.variant,
      onClose: this.props.onClose,
      closable: closable,
      className: "sdk-Toast-toast"
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedHTMLMessage, {
      id: this.props.message.id,
      values: this.props.message.values
    }));
  }

}, _class2.propTypes = {
  message: _propTypes.default.objectOf(_propTypes.default.any).isRequired,
  variant: _propTypes.default.string.isRequired,
  onClose: _propTypes.default.func.isRequired
}, _class2)) || _class;

exports.default = ToastView;
