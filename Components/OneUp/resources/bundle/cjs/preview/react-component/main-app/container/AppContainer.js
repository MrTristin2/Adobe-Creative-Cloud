"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _reactIntl = require("react-intl");

var _ProgressContainer = _interopRequireDefault(require("../../progress/container/ProgressContainer"));

var _ErrorContainer = _interopRequireDefault(require("../../error/container/ErrorContainer"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _ToastContainer = _interopRequireDefault(require("../../toast/container/ToastContainer"));

var _Events = _interopRequireDefault(require("../../../../constants/Events"));

var _ComponentRegistry = _interopRequireDefault(require("../../../../util/ComponentRegistry"));

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const consumeEvent = e => {
  e.stopPropagation();
  e.preventDefault();
};

let AppContainer = (0, _mobxReact.observer)(_class = (_class2 = class AppContainer extends _react.default.Component {
  constructor(props, context) {
    super(props, context);
    this._appStore = _ServiceRegistry.default.getService("AppStore");

    this._appStore.setIntl(context.intl);
  }

  componentDidMount() {
    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.default.APP_RENDERING_START); // Prevent drag-and-drop from loading file


    window.addEventListener("dragover", consumeEvent, false);
    window.addEventListener("drop", consumeEvent, false);
  }

  getProps() {
    return this.props;
  }

  render() {
    if (!this._oneTimeMessage) {
      _ServiceRegistry.default.getService("LoggingService").logExternal("App attached to DOM.");

      this._oneTimeMessage = true;
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, this._appStore.showLoader && !this._appStore.getConfig().showSimpleLoader && /*#__PURE__*/_react.default.createElement(_ProgressContainer.default, {
      progressText: this._appStore.progressText
    }), this._appStore.showToast && /*#__PURE__*/_react.default.createElement(_ToastContainer.default, null), this._appStore.appError && /*#__PURE__*/_react.default.createElement(_ErrorContainer.default, _extends({
      intl: this.context.intl
    }, this.props)), this._appStore.isHidingBranding && _ComponentRegistry.default.getComponent("HidingBrandingContainer"), _ComponentRegistry.default.getComponent("App", this.getProps()));
  }

}, _class2.contextTypes = {
  intl: _reactIntl.intlShape.isRequired
}, _class2)) || _class;

exports.default = AppContainer;
