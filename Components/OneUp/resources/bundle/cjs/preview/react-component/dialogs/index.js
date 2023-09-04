"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _ModalContainer = _interopRequireDefault(require("@react/react-spectrum/ModalContainer"));

var _react = _interopRequireDefault(require("react"));

var _ServiceRegistry = _interopRequireDefault(require("../../../util/ServiceRegistry"));

var _Events = require("../../../constants/Events");

require("!style-loader!css-loader!./Dialog.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Dialog = require("@react/react-spectrum/Dialog").default;

class DialogApi {
  constructor() {
    this.init();
  }

  init() {
    this.currDialogKey = null;
  }

  reset() {
    this.hide();
    this.init();
  }

  handleKeyDown(evt) {
    if (evt.key === "Escape" || evt.key === "Esc") {
      evt.stopImmediatePropagation();
    }
  }

  show(props) {
    if (!this.currDialogKey) {
      document.addEventListener("keydown", this.handleKeyDown);
      this.currDialogKey = _ModalContainer.default.show( /*#__PURE__*/_react.default.createElement(Dialog, _extends({
        className: (0, _classnames.default)(["sdk-Dialog-dialog", _ServiceRegistry.default.getService("AppStore").isInLinePreset ? "sdk-Dialog-dialogTop" : ""]),
        onKeyDown: this.handleKeyDown
      }, props), props.message)); // eslint-disable-line
    }
  }

  showBlockingDialog(titleKey, messageKey, confirmInfo, cancelInfo) {
    const dialogProps = {
      title: this._getFormattedMessage(titleKey),
      message: this._getFormattedMessage(messageKey)
    };

    if (confirmInfo && typeof confirmInfo.onConfirm === "function") {
      dialogProps.onConfirm = event => {
        this.hide();
        confirmInfo.onConfirm(event);
      };

      dialogProps.confirmLabel = confirmInfo.confirmLabel;
    }

    if (cancelInfo && typeof cancelInfo.onCancel === "function") {
      dialogProps.onCancel = event => {
        this.hide();
        cancelInfo.onCancel(event);
      };

      dialogProps.cancelLabel = cancelInfo.cancelLabel;
    }

    this.show(dialogProps);
  }

  showBlockingDialogWithReload(titleKey, messageKey) {
    const confirmInfo = {
      onConfirm: () => _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.InternalEvents.RELOAD_APP),
      confirmLabel: this._getFormattedMessage("RELOAD_APP")
    };
    this.showBlockingDialog(titleKey, messageKey, confirmInfo);
  }

  showConflictDialog(props) {
    let message;

    this._isSameEmail(props.mail).then(isSameEmail => {
      if (isSameEmail) {
        message = this._getFormattedMessage("dialog.conflict.file.self.content");
      } else {
        message = this._getFormattedMessage("dialog.conflict.file.content", {
          name: props.name,
          mail: props.mail
        });
      }

      const dialogProps = {
        title: this._getFormattedMessage("dialog.conflict.file.title"),
        onConfirm: this._reloadPage,
        confirmLabel: this._getFormattedMessage("dialog.conflict.file.confirmLabel"),
        onCancel: () => {
          props.onCancel();
          this.hide(props);
        },
        cancelLabel: this._getFormattedMessage("dialog.conflict.file.cancelLabel"),
        message
      };
      this.show(dialogProps);
    });
  }

  showNewFileDialog(props) {
    let message;

    this._isSameEmail(props.mail).then(isSameEmail => {
      if (isSameEmail) {
        message = this._getFormattedMessage("dialog.new.file.self.content");
      } else {
        message = this._getFormattedMessage("dialog.new.file.content", {
          name: props.name,
          mail: props.mail
        });
      }

      const dialogProps = {
        title: this._getFormattedMessage("dialog.new.file.title"),
        onConfirm: this._reloadPage,
        confirmLabel: this._getFormattedMessage("dialog.new.file.confirmLabel"),
        message
      };
      this.show(dialogProps);
    });
  }

  showUnsavedFileDialog(onConfirm, onCancel) {
    this.showBlockingDialog("dialog.unsaved.title", "dialog.unsaved.message", {
      confirmLabel: this._getFormattedMessage("dialog.unsaved.confirmLabel"),
      onConfirm
    }, {
      cancelLabel: this._getFormattedMessage("dialog.unsaved.cancelLabel"),
      onCancel
    });
  }

  hide(props = {}) {
    document.removeEventListener("keydown", this.handleKeyDown);

    if (props.onClose) {
      props.onClose();
    }

    if (this.currDialogKey) {
      _ModalContainer.default.hide(this.currDialogKey);

      this.currDialogKey = null;
    }
  }

  _isSameEmail(mail) {
    return new Promise(resolve => {
      _ServiceRegistry.default.getService("IntegrationProvider").getUserProfile().then(userInfo => {
        const userEmail = userInfo ? userInfo.email : "";
        resolve(mail && userEmail && mail === userEmail);
      }).catch(() => {
        resolve(false);
      });
    });
  }

  _getFormattedMessage(id, options) {
    return _ServiceRegistry.default.getService("AppStore").intl.formatMessage({
      id
    }, options);
  }

  _reloadPage() {
    _ServiceRegistry.default.getService("AppStore").setFileStatus(undefined);

    _ServiceRegistry.default.getService("AppStore").setIsDirty(false);

    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.InternalEvents.RELOAD_APP);
  }

}

var _default = DialogApi;
exports.default = _default;