"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _react = _interopRequireDefault(require("react"));

var _PropTypeCustomAction = require("../prop-type-custom-action/PropTypeCustomAction");

var _CustomActions = _interopRequireDefault(require("./custom-actions/CustomActions"));

var _SideMenuCallToAction = _interopRequireDefault(require("./call-to-action/SideMenuCallToAction"));

var _Branding = _interopRequireDefault(require("./branding/Branding"));

var _HeaderFileInfoContainer = _interopRequireDefault(require("../../header-file-info/container/HeaderFileInfoContainer"));

var _FullScreenIcon = _interopRequireDefault(require("../../icons/full-screen/FullScreenIcon"));

var _ViewMode = _interopRequireWildcard(require("../../../../constants/ViewMode"));

var _LightBoxExitPDFViewerButton = _interopRequireDefault(require("./light-box-exit-pdf-viewer-button/LightBoxExitPDFViewerButton"));

var _DropdownButton = _interopRequireDefault(require("@react/react-spectrum/DropdownButton"));

var _Menu = require("@react/react-spectrum/Menu");

var _Events = require("../../../../constants/Events");

var _ComponentRegistry = _interopRequireDefault(require("../../../../util/ComponentRegistry"));

require("!style-loader!css-loader!./HeaderView.css");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
class HeaderView extends _react.default.Component {
  getEditView() {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

  _handleFullScreen() {}

  render() {
    const {
      topBarActions,
      sideMenuActions,
      previewRef,
      viewMode: viewModeProp,
      makeToolsInactive
    } = this.props;

    const appStore = _ServiceRegistry.default.getService("AppStore");

    const editView = this.getEditView();

    this._handleFullScreen();

    const SideMenu = prop => /*#__PURE__*/_react.default.createElement("div", {
      role: "presentation",
      className: (0, _classnames.default)(["sdk-HeaderView-navSection", "sdk-HeaderView-sideMenuButton"])
    }, /*#__PURE__*/_react.default.createElement(_SideMenuCallToAction.default, {
      sideMenuActions: prop.sideMenuActions
    }));

    const ActionsView = () => /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, appStore.showViewMode && /*#__PURE__*/_react.default.createElement(_DropdownButton.default, {
      icon: _ComponentRegistry.default.getComponent(viewModeProp === _ViewMode.default.SINGLE_PAGE ? "SinglePageIcon" : "ContinuousIcon"),
      alignRight: true,
      onSelect: viewMode => {
        if (viewModeProp !== viewMode) {
          previewRef.getPublicApis().then(api => {
            api.document.setViewMode(_ViewMode.InternalViewMode[viewMode] || viewMode);

            _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.FilePreviewEvents.VIEW_MODE_CHANGE, viewMode);
          });
          appStore.setCurrentViewMode(viewMode);
        }
      }
    }, /*#__PURE__*/_react.default.createElement(_Menu.MenuItem, {
      selected: viewModeProp === _ViewMode.default.SINGLE_PAGE,
      icon: _ComponentRegistry.default.getComponent("SinglePageIcon"),
      value: _ViewMode.default.SINGLE_PAGE
    }, appStore.intl.formatMessage({
      id: "viewMode.single"
    })), /*#__PURE__*/_react.default.createElement(_Menu.MenuItem, {
      selected: viewModeProp === _ViewMode.default.CONTINUOUS,
      icon: _ComponentRegistry.default.getComponent("ContinuousIcon"),
      value: _ViewMode.default.CONTINUOUS
    }, appStore.intl.formatMessage({
      id: "viewMode.continuous"
    }))), topBarActions && topBarActions.length > 0 && /*#__PURE__*/_react.default.createElement(_CustomActions.default, {
      className: "sdk-HeaderView-navSection",
      actions: topBarActions,
      makeToolsInactive: makeToolsInactive
    }), /*#__PURE__*/_react.default.createElement(SideMenu, {
      sideMenuActions: sideMenuActions
    }), editView, appStore.configStore.showFullScreen && /*#__PURE__*/_react.default.createElement(_FullScreenIcon.default, {
      fromTopBar: true
    }), appStore.configStore.exitPDFViewerType === _ViewMode.LightBoxExitPDFViewerType.CLOSE && /*#__PURE__*/_react.default.createElement(_LightBoxExitPDFViewerButton.default, null));

    let leftFileinfoClass = "";

    if (appStore.configStore.getConfig().leftAlignFileName) {
      if (appStore.showBrandingInHeader) {
        if (appStore.configStore.exitPDFViewerType === _ViewMode.LightBoxExitPDFViewerType.RETURN) {
          leftFileinfoClass = "sdk-HeaderView-leftFileinfoWithBrandingAndLeftButton";
        } else {
          leftFileinfoClass = "sdk-HeaderView-leftFileinfoWithBranding";
        }
      } else {
        leftFileinfoClass = "sdk-HeaderView-leftFileinfoWithoutBranding";
      }
    }

    const headersClassList = ["sdk-HeaderView-header"];

    if (appStore.isHidingHeader) {
      if (!appStore.searchOpen) {
        headersClassList.push("sdk-HeaderView-headerForSizedContainer");
      } else {
        headersClassList.push("sdk-HeaderView-headerForSizedContainerWithSearch");
      }
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(headersClassList),
      ref: ref => this.props.setRef(ref)
    }, appStore.configStore.exitPDFViewerType === _ViewMode.LightBoxExitPDFViewerType.RETURN && /*#__PURE__*/_react.default.createElement(_LightBoxExitPDFViewerButton.default, null), appStore.showBrandingInHeader && /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(["sdk-HeaderView-navSection", "sdk-HeaderView-branding"]),
      role: "presentation"
    }, /*#__PURE__*/_react.default.createElement(_Branding.default, null)), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(["sdk-HeaderView-navSection", "sdk-HeaderView-dummyDiv"]),
      role: "presentation"
    }), /*#__PURE__*/_react.default.createElement("div", {
      className: (0, _classnames.default)(["sdk-HeaderView-navSection", "sdk-HeaderView-centreInfo", leftFileinfoClass]),
      role: "presentation"
    }, /*#__PURE__*/_react.default.createElement(_HeaderFileInfoContainer.default, this.props)), appStore.isInPreview && /*#__PURE__*/_react.default.createElement(ActionsView, null), !appStore.isInPreview && /*#__PURE__*/_react.default.createElement(SideMenu, {
      sideMenuActions: []
    }));
  }

}

exports.default = HeaderView;
HeaderView.propTypes = {
  topBarActions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_PropTypeCustomAction.propTypeJsonCustomAction, _PropTypeCustomAction.propTypeReactCustomAction])),
  sideMenuActions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_PropTypeCustomAction.propTypeJsonCustomAction, _PropTypeCustomAction.propTypeReactCustomAction])),
  inFullScreen: _propTypes.default.bool.isRequired,
  previewRef: _propTypes.default.objectOf(_propTypes.default.any),
  setRef: _propTypes.default.func.isRequired,
  viewMode: _propTypes.default.string,
  makeToolsInactive: _propTypes.default.bool
};
HeaderView.defaultProps = {
  topBarActions: [],
  sideMenuActions: [],
  previewRef: null,
  viewMode: null,
  makeToolsInactive: false
};