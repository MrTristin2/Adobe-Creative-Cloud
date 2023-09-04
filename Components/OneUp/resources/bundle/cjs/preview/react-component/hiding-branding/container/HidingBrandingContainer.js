"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mobxReact = require("mobx-react");

var _react = _interopRequireWildcard(require("react"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _AppUtil = require("../../../../util/AppUtil");

var _HidingBrandingView = _interopRequireDefault(require("../presentation/HidingBrandingView"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

/**
* Container component for hiding branding
*/
let HidingBrandingContainer = (0, _mobxReact.observer)(_class = class HidingBrandingContainer extends _react.Component {
  constructor() {
    super();
    this._uiHandler = _ServiceRegistry.default.getService("UIHandler");
    this._appStore = _ServiceRegistry.default.getService("AppStore");
    this._brandingLabelRef = _react.default.createRef();
    this._handleMouseOut = this._handleMouseOut.bind(this);
    this._handleMouseMoveOver = this._handleMouseMoveOver.bind(this);
    this._touchStart = this._touchStart.bind(this);
    this._touchMove = this._touchMove.bind(this);
    this._touchEnd = this._touchEnd.bind(this);
    this._tapOnDevice = this._tapOnDevice.bind(this);
  }

  getDOMElementForEvent() {
    return (0, _AppUtil.getDOMElement)();
  }

  componentDidMount() {
    this.getDOMElementForEvent().addEventListener("mousemove", this._handleMouseMoveOver);
    this.getDOMElementForEvent().addEventListener("mouseout", this._handleMouseOut);

    if (this._appStore.isOnDevice) {
      this.getDOMElementForEvent().addEventListener("touchstart", this._touchStart);
      this.getDOMElementForEvent().addEventListener("touchmove", this._touchMove);
      this.getDOMElementForEvent().addEventListener("touchend", this._touchEnd);
    }
  }

  componentWillUnmount() {
    this.getDOMElementForEvent().removeEventListener("mousemove", this._handleMouseMoveOver);
    this.getDOMElementForEvent().removeEventListener("mouseout", this._handleMouseOut);

    if (this._appStore.isOnDevice) {
      this.getDOMElementForEvent().removeEventListener("touchstart", this._touchStart);
      this.getDOMElementForEvent().removeEventListener("touchmove", this._touchMove);
      this.getDOMElementForEvent().removeEventListener("touchend", this._touchEnd);
    }
  }

  _touchStart() {
    // Reset any touch move
    this._noTouchMovement = true;
  }

  _touchMove() {
    this._noTouchMovement = false;
  }

  _touchEnd() {
    if (this._noTouchMovement) {
      this._tapOnDevice();
    }
  }

  _tapOnDevice() {
    this._uiHandler.showBrandingLabel((0, _AppUtil.getDOMElement)().clientHeight, (0, _AppUtil.getDOMElement)().clientWidth);
  }

  _handleMouseOut() {
    if (!this._brandingLabelRef || !this._brandingLabelRef.style) {
      return;
    }

    this._uiHandler.fadeBrandingLabel((0, _AppUtil.getDOMElement)().clientHeight, (0, _AppUtil.getDOMElement)().clientWidth);
  }

  _handleMouseMoveOver(event) {
    if (!event) {
      return;
    }

    const reactElement = (0, _AppUtil.getDOMElement)().getBoundingClientRect();
    const normalisedClientY = event.clientY - reactElement.top;
    const normalisedClientX = event.clientX - reactElement.left;

    if (this._uiHandler.inHoverRangeOfBrandingLabel(normalisedClientY, normalisedClientX)) {
      this._uiHandler.showBrandingLabel(normalisedClientY, normalisedClientX);
    }
  }

  getProps() {
    return {};
  }

  render() {
    if (this._appStore.fileLoaded) {
      const setRef = ref => {
        this._brandingLabelRef = ref;

        this._uiHandler.initialiseBrandingLabelRef(ref);

        this._uiHandler.showBrandingLabel(100, 100);
      };

      return /*#__PURE__*/_react.default.createElement(_HidingBrandingView.default, _extends({
        setRef: setRef
      }, this.getProps()));
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

}) || _class;

var _default = HidingBrandingContainer;
exports.default = _default;
