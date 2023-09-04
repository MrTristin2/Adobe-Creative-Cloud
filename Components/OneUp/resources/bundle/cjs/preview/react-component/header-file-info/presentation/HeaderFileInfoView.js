"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.HeaderFileInfoView = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIntl = require("react-intl");

var _Button = _interopRequireDefault(require("@react/react-spectrum/Button"));

var _Breadcrumbs = _interopRequireDefault(require("@react/react-spectrum/Breadcrumbs"));

var _Tooltip = _interopRequireDefault(require("@react/react-spectrum/Tooltip"));

var _OverlayTrigger = _interopRequireDefault(require("@react/react-spectrum/OverlayTrigger"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _FileUtils = _interopRequireDefault(require("../../../../util/FileUtils"));

require("!style-loader!css-loader!./HeaderFileInfoView.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2019 Adobe
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe and its suppliers, if any. The intellectual
 * and technical concepts contained herein are proprietary to Adobe
 * and its suppliers and are protected by all applicable intellectual
 * property laws, including trade secret and copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe.
 **************************************************************************/
class HeaderFileInfoView extends _react.default.PureComponent {
  getBreadCrumb() {
    return [];
  }

  render() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const {
      fileMetadata,
      fileStatus,
      showSaveButton,
      disableSaveButton,
      onSaveClick,
      status,
      showFileName
    } = this.props;
    const parentItem = this.getBreadCrumb();
    let fileDisplayInfo = {};

    if (showFileName) {
      if (appStore.configStore.isThumbnailView && appStore.fileInfoList.length > 1) {
        fileDisplayInfo.displayFileName = /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
          id: "multiple.files.header"
        });
      } else {
        fileDisplayInfo = (0, _FileUtils.default)(fileMetadata);
      }

      parentItem.push({
        label: /*#__PURE__*/_react.default.createElement("span", {
          className: (0, _classnames.default)(["sdk-HeaderFileInfoView-fileBreadCrumb", "sdk-HeaderFileInfoView-fileBreadCrumbNormal", {
            "sdk-HeaderFileInfoView-fileBreadCrumbINT": appStore.isIntegration
          }])
        }, fileDisplayInfo.displayFileName, fileDisplayInfo.extension !== "PDF" && /*#__PURE__*/_react.default.createElement("span", {
          className: "sdk-HeaderFileInfoView-details",
          "aria-hidden": true
        }, fileDisplayInfo.extension))
      });
    }

    let headerClass = "sdk-HeaderFileInfoView-header";

    if (!appStore.showBrandingInHeader) {
      headerClass = "sdk-HeaderFileInfoView-headerNoBranding";
    }

    let statusBlockBorderClass = "";

    if (status || !appStore.configStore.getConfig().leftAlignFileName) {
      statusBlockBorderClass = "sdk-HeaderFileInfoView-statusBlockBorder";
    }

    const hideDisabledSaveButton = disableSaveButton && !appStore.getActionConfig("preview").showDisabledSaveButton;
    return /*#__PURE__*/_react.default.createElement("div", {
      className: headerClass,
      "aria-hidden": true
    }, /*#__PURE__*/_react.default.createElement("span", {
      className: appStore.isIntegration && appStore.showBrandingInHeader && "sdk-HeaderFileInfoView-seperatorLine"
    }), showFileName && fileDisplayInfo.displayFileName && /*#__PURE__*/_react.default.createElement("span", {
      className: "sdk-HeaderFileInfoView-breadcrumbs"
    }, /*#__PURE__*/_react.default.createElement(_Breadcrumbs.default, {
      items: parentItem
    })), fileStatus && /*#__PURE__*/_react.default.createElement("span", {
      className: "sdk-HeaderFileInfoView-fileStatus",
      "aria-hidden": true
    }, /*#__PURE__*/_react.default.createElement("span", null, "\u2014"), /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: fileStatus
    })), (showSaveButton || status) && /*#__PURE__*/_react.default.createElement("span", {
      className: (0, _classnames.default)(["sdk-HeaderFileInfoView-statusBlock", statusBlockBorderClass, hideDisabledSaveButton && !status ? "sdk-HeaderFileInfoView-displayNone" : ""])
    }, showSaveButton && /*#__PURE__*/_react.default.createElement(_Button.default, {
      variant: "primary",
      onClick: onSaveClick,
      className: (0, _classnames.default)(["sdk-HeaderFileInfoView-save", hideDisabledSaveButton ? "sdk-HeaderFileInfoView-displayNone" : ""]),
      disabled: disableSaveButton
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "button.save"
    })), status && /*#__PURE__*/_react.default.createElement("span", {
      className: "sdk-HeaderFileInfoView-readOnly"
    }, status === "file.metadata.readonly" && /*#__PURE__*/_react.default.createElement(_OverlayTrigger.default, {
      delayShow: "1000",
      trigger: "hover",
      placement: "right"
    }, /*#__PURE__*/_react.default.createElement(_Button.default, {
      quiet: true,
      className: "sdk-HeaderFileInfoView-readOnlyTooltip"
    }, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: status
    })), /*#__PURE__*/_react.default.createElement(_Tooltip.default, null, /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: "file.readonly.tooltip"
    }))), status !== "file.metadata.readonly" && /*#__PURE__*/_react.default.createElement(_reactIntl.FormattedMessage, {
      id: status
    }))));
  }

}

exports.HeaderFileInfoView = HeaderFileInfoView;
HeaderFileInfoView.propTypes = {
  fileStatus: _propTypes.default.string,
  fileMetadata: _propTypes.default.objectOf(_propTypes.default.any).isRequired,
  status: _propTypes.default.string.isRequired,
  showSaveButton: _propTypes.default.bool,
  disableSaveButton: _propTypes.default.bool,
  onSaveClick: _propTypes.default.func,
  showFileName: _propTypes.default.bool
};
HeaderFileInfoView.defaultProps = {
  showFileName: true,
  fileStatus: null,
  disableSaveButton: null,
  showSaveButton: null,
  onSaveClick: null
};

var _default = (0, _reactIntl.injectIntl)(HeaderFileInfoView);

exports.default = _default;