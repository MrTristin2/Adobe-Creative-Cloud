"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireWildcard(require("react"));

var _Wait = _interopRequireDefault(require("@react/react-spectrum/Wait"));

var _mobxReact = require("mobx-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

require("!style-loader!css-loader!./ProgressView.css");

var _class, _class2;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ProgressView = (0, _mobxReact.observer)(_class = (_class2 = class ProgressView extends _react.default.Component {
  render() {
    let progressText = this.props.progressText;
    let progressClass = "sdk-ProgressView-progress";

    if (_ServiceRegistry.default.getService("AppStore").getConfig().fullScreenLoader) {
      progressClass = "sdk-ProgressView-progressFixed";
    }

    const showUploadFileLoader = _ServiceRegistry.default.getService("AppStore").getConfig().showUploadFileLoader;

    if (_ServiceRegistry.default.getService("AppStore").getConfig().showSimpleLoader) {
      progressText = "";
    } else if (showUploadFileLoader) {
      progressClass = (0, _classnames.default)([progressClass, "sdk-UploadProgressView-progressBG"]);
    } else {
      progressClass = (0, _classnames.default)([progressClass, "sdk-ProgressView-progressBG"]);
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: progressClass
    }, _ServiceRegistry.default.getService("AppStore").isInLinePreset ? /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Wait.default, {
      className: "sdk-ProgressView-progressWaitInLine",
      size: "L"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(["sdk-ProgressView-progressTextInLine", showUploadFileLoader ? "sdk-ProgressText-dark" : "sdk-ProgressText-light"])
    }, this.props.progressText)) : /*#__PURE__*/_react.default.createElement(_react.Fragment, null, /*#__PURE__*/_react.default.createElement(_Wait.default, {
      centered: true,
      size: "L"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(["sdk-ProgressView-progressText", showUploadFileLoader ? "sdk-ProgressText-dark" : "sdk-ProgressText-light"])
    }, progressText)));
  }

}, _class2.propTypes = {
  progressText: _propTypes.default.string.isRequired
}, _class2)) || _class;

exports.default = ProgressView;