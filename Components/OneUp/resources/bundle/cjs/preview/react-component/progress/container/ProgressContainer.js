"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _ProgressView = _interopRequireDefault(require("../presentation/ProgressView"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProgressContainer = (0, _mobxReact.observer)(_class = (_class2 = class ProgressContainer extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement(_ProgressView.default, this.props);
  }

}, _class2.propTypes = {
  progressText: _propTypes.default.string
}, _class2.defaultProps = {
  progressText: ""
}, _class2)) || _class;

exports.default = ProgressContainer;
