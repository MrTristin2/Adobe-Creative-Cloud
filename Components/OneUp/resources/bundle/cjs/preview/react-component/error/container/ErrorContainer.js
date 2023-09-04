"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ErrorModalDialog = _interopRequireDefault(require("../presentation/ErrorModalDialog"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _ErrorUtils = require("../../../../util/ErrorUtils");

var _class, _class2;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

let ErrorContainer =
/**
 * Top-level container for Error Container
 */
(0, _mobxReact.observer)(_class = (_class2 = class ErrorContainer extends _react.default.Component {
  clearError() {
    _ServiceRegistry.default.getService("AppStore").setAppError(null);
  }

  render() {
    const errorObject = _ServiceRegistry.default.getService("AppStore").appError;

    const errorMessage = (0, _ErrorUtils.getErrorMessage)(errorObject, _ServiceRegistry.default);
    const confirmLabel = errorObject.confirmLabel;
    return /*#__PURE__*/_react.default.createElement(_ErrorModalDialog.default, _extends({
      message: errorMessage,
      confirmLabel: confirmLabel,
      onConfirm: () => {
        if (errorObject.onConfirm) {
          errorObject.onConfirm();
        } else {
          this.clearError();
        }
      }
    }, this.props));
  }

}, _class2.propTypes = {
  intl: _propTypes.default.objectOf(_propTypes.default.any).isRequired
}, _class2)) || _class;

exports.default = ErrorContainer;
