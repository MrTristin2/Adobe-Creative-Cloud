"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _mobxReact = require("mobx-react");

var _ToastView = _interopRequireDefault(require("../presentation/ToastView"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _AppConstants = _interopRequireDefault(require("../../../../constants/AppConstants"));

var _class;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let ToastContainer =
/**
 * Top-level container for Toast Container
 */
(0, _mobxReact.observer)(_class = class ToastContainer extends _react.default.Component {
  constructor(...args) {
    super(...args);

    this.getConfig = () => {
      this.hideToast(_ServiceRegistry.default.getService("AppStore").toastInfo);
      const integrationName = _ServiceRegistry.default.getService("AppStore").configStore.getIntegrationName() ? _ServiceRegistry.default.getService("AppStore").intl.formatMessage({
        id: _ServiceRegistry.default.getService("AppStore").configStore.getIntegrationName()
      }) : "";

      const toast = _ServiceRegistry.default.getService("AppStore").toastInfo;

      if (toast && toast.type === _AppConstants.default.SHOW_TOAST.ERROR) {
        let id = "toast.error.content";

        if (toast && toast.messageId) {
          id = toast.messageId;
        }

        return {
          message: {
            id
          },
          variant: _AppConstants.default.TOAST_TYPE.ERROR,
          onClose: this.closeToast
        };
      }

      if (toast && toast.type === _AppConstants.default.SHOW_TOAST.CONFLICT) {
        return {
          message: {
            id: "toast.conflict.content",
            values: {
              url: toast.data.folderLink,
              integrationName
            }
          },
          variant: _AppConstants.default.TOAST_TYPE.SUCCESS,
          onClose: this.closeToast
        };
      }

      if (toast && toast.type === _AppConstants.default.SHOW_TOAST.SAVED) {
        return {
          message: {
            id: this.getSuccessContentId(toast.dropinName),
            values: {
              url: toast.data.folderLink,
              folderLocation: toast.data.folderLocation,
              integrationName
            }
          },
          variant: _AppConstants.default.TOAST_TYPE.SUCCESS,
          onClose: this.closeToast
        };
      }

      return {};
    };

    this.getSuccessContentId = dropinName => {
      let contentId = "toast.success.content";

      if (dropinName) {
        switch (dropinName) {
          case "organizepdf":
          case "createpdf":
          case "exportpdf":
          case "protectpdf":
          case "compresspdf":
          case "combinepdf":
            contentId = `toast.success.content.${dropinName}`;
            break;

          default:
            break;
        }
      }

      return contentId;
    };

    this.closeToast = () => _ServiceRegistry.default.getService("AppStore").setToastInfo(null);

    this.hideToast = toast => {
      setTimeout(() => {
        if (toast && _ServiceRegistry.default.getService("AppStore").toastInfo && toast.type === _ServiceRegistry.default.getService("AppStore").toastInfo.type) {
          this.closeToast();
        }
      }, 20000);
    };
  }

  render() {
    const config = this.getConfig();
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(config).length !== 0 && /*#__PURE__*/_react.default.createElement(_ToastView.default, config));
  }

}) || _class;

exports.default = ToastContainer;
