"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const throttleLength = 1000 / 15; // 15 fps

/**
 * Helper function that wraps the passed in component
 * with a component that passes in the window size as props.
 *
 * @example
 * class Component extends React.Component {
 *   render() {
 *     const { width, height } = this.props.windowDimensions;
 *     return <div>{width} - {height}</div>
 *   }
 * }
 *
 * export default withWindowDimensions(Component);
 */

const withWindowDimensions = WrappedComponent => {
  var _class;

  return _class = class WindowDimensions extends _react.Component {
    constructor(...args) {
      super(...args);
      this.state = {
        width: window.innerWidth,
        height: window.innerHeight
      };

      this.updateDimensionsWithThrottle = () => {
        if (this.resizeThrottle) {
          return;
        }

        this.resizeThrottle = setTimeout(() => {
          this.resizeThrottle = null;
        }, throttleLength);
        this.updateWindowDimensions();
      };
    }

    componentDidMount() {
      window.addEventListener("resize", this.updateDimensionsWithThrottle);
    }

    componentWillUnmount() {
      window.removeEventListener("resize", this.updateDimensionsWithThrottle);
    }

    updateWindowDimensions() {
      this.setState({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(WrappedComponent, _extends({
        windowDimensions: this.state
      }, this.props));
    }

  }, _class.WrappedComponent = WrappedComponent, _class;
};

var _default = withWindowDimensions;
exports.default = _default;