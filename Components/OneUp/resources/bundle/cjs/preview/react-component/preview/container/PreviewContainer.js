"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _mobx = require("mobx");

var _dcCore = require("dc-core");

var _classnames = _interopRequireDefault(require("classnames"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _reactSwipeable = require("react-swipeable");

var _ComponentRegistry = _interopRequireDefault(require("../../../../util/ComponentRegistry"));

var _PreviewError = _interopRequireDefault(require("../../error/presentation/PreviewError"));

require("!style-loader!css-loader!./../presentation/Preview.css");

var _class, _class2, _descriptor;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and runs after the decorators transform.'); }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

let PreviewContainer =
/**
 * @class
 * This container takes care of file preview by loading dc preview component
 */
(0, _mobxReact.observer)(_class = (_class2 = class PreviewContainer extends _react.default.Component {
  constructor(props) {
    super(props);

    _initializerDefineProperty(this, "previewDropin", _descriptor, this);

    this._loggingService = _ServiceRegistry.default.getService("LoggingService");

    this._loggingService.logExternal("File preview attached.");

    _dcCore.providers.discovery().then(discovery => {
      discovery.loadDropinClass("preview").then(Dropin => {
        _ServiceRegistry.default.getService("PerformanceService").setPreviewDropinReadyToRender();

        this.setPreviewDropin(Dropin);
      }).catch(error => {
        this._loggingService.error("PreviewContainer", "Error in loading preview dropin", error);
      });
    });
  }

  setPreviewDropin(value) {
    this.previewDropin = value;
  }

  getComponent() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const hideCSS = !appStore.getConfig().showSimpleLoader && !_ServiceRegistry.default.getService("AppStore").fileLoaded;

    if (appStore.previewError) {
      return /*#__PURE__*/_react.default.createElement(_PreviewError.default, {
        errorMessage: appStore.previewError
      });
    }

    return /*#__PURE__*/_react.default.createElement(_reactSwipeable.Swipeable, {
      className: (0, _classnames.default)(["sdk-Preview-preview", "sdk-Preview-previewTop", hideCSS && "sdk-Preview-hide"]),
      onSwiped: eventData => {
        if (_ServiceRegistry.default.getService("AppStore").inFullScreen && eventData.dir === "Down") {
          _ServiceRegistry.default.getService("AppStore").setInFullScreen(false);
        }
      }
    }, _ComponentRegistry.default.getComponent("Preview", _objectSpread({
      previewDropin: this.previewDropin
    }, this.props)));
  }

  render() {
    if (this.previewDropin) {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: "sdk-Preview-main"
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "sdk-Preview-middle"
      }, this.getComponent()));
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

}, (_applyDecoratedDescriptor(_class2.prototype, "setPreviewDropin", [_mobx.action], Object.getOwnPropertyDescriptor(_class2.prototype, "setPreviewDropin"), _class2.prototype), _descriptor = _applyDecoratedDescriptor(_class2.prototype, "previewDropin", [_mobx.observable], {
  configurable: true,
  enumerable: true,
  writable: true,
  initializer: null
})), _class2)) || _class;

exports.default = PreviewContainer;
