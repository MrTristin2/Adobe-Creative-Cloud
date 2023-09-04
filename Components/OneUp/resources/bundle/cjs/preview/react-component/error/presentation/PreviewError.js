"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _IllustratedMessage = _interopRequireDefault(require("@react/react-spectrum/IllustratedMessage"));

var _ComponentRegistry = _interopRequireDefault(require("../../../../util/ComponentRegistry"));

require("!style-loader!css-loader!./PreviewError.css");

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let PreviewError = (0, _mobxReact.observer)(_class = (_class2 = class PreviewError extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", {
      className: "errorContainer"
    }, /*#__PURE__*/_react.default.createElement(_IllustratedMessage.default, {
      heading: /*#__PURE__*/_react.default.createElement("div", {
        className: "errorMessage"
      }, this.props.errorMessage),
      illustration: _ComponentRegistry.default.getComponent("PreviewErrorIcon")
    }));
  }

}, _class2.propTypes = {
  errorMessage: _propTypes.default.string.isRequired
}, _class2)) || _class;

exports.default = PreviewError;