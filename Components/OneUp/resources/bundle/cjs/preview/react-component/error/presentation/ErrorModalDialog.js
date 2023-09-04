"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mobxReact = require("mobx-react");

var _reactIntl = require("react-intl");

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

require("!style-loader!css-loader!./ErrorModalDialog.css");

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Dialog = require("@react/react-spectrum/Dialog").default;
/**
 * Top-level layout of Progress View
 */


let ErrorModalDialog = (0, _mobxReact.observer)(_class = (_class2 = class ErrorModalDialog extends _react.default.Component {
  render() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "sdk-ErrorModalDialog-errorDialog"
    }, /*#__PURE__*/_react.default.createElement(Dialog, {
      className: "sdk-ErrorModalDialog-errorMsg",
      variant: "error",
      title: this.props.title || this.props.intl.formatMessage({
        id: "error"
      }),
      confirmLabel: this.props.intl.formatMessage({
        id: this.props.confirmLabel || "ok"
      }),
      onConfirm: () => this.props.onConfirm()
    }, this.props.message, appStore.configStore.getConfig().supportUrl && /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedHTMLMessage, {
      id: "error.contact.support",
      values: {
        jobId: appStore.configStore.getConfig().sessionId,
        supportUrl: appStore.configStore.getConfig().supportUrl
      }
    })));
  }

}, _class2.propTypes = {
  message: _propTypes.default.string,
  title: _propTypes.default.string,
  confirmLabel: _propTypes.default.string,
  onConfirm: _propTypes.default.func.isRequired,
  intl: _propTypes.default.objectOf(_propTypes.default.any).isRequired
}, _class2.defaultProps = {
  message: "",
  title: "",
  confirmLabel: "ok"
}, _class2)) || _class;

exports.default = ErrorModalDialog;