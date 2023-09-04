"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../util/ServiceRegistry"));

var _Events = require("../../../../constants/Events");

var _AppUtil = require("../../../../util/AppUtil");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2020 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/

/* eslint-disable react/no-danger */
const transformPageData = data => ({
  pageNumber: data.pageIndex + 1,
  originalHeight: data.origHeight,
  originalWidth: data.origWidth,
  rotation: data.rotation,
  currentHeight: data.curHeight,
  currentWidth: data.curWidth,
  currentZoom: (0, _AppUtil.fixedToDigits)(data.curZoom, 3)
});

class PageOverlay extends _react.default.PureComponent {
  constructor(...args) {
    super(...args);
    this.pageData = {};
  }

  componentDidMount() {
    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.OverlayEvents.PAGE_OVERLAY_ATTACHED, {
      pageData: this.pageData
    });
  }

  componentWillUnmount() {
    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.OverlayEvents.PAGE_OVERLAY_REMOVED, {
      pageData: this.pageData
    });
  }

  render() {
    const pageOverlayComponent = _ServiceRegistry.default.getService("ExternalComponentService").getPageOverlay();

    this.pageData = transformPageData(this.props.page);
    const pageStyle = {
      position: "absolute",
      width: `${this.pageData.currentWidth}px`,
      height: `${this.pageData.currentHeight}px`
    };

    if (pageOverlayComponent) {
      return /*#__PURE__*/_react.default.createElement("div", {
        style: pageStyle,
        dangerouslySetInnerHTML: {
          __html: pageOverlayComponent({
            pageData: this.pageData
          })
        }
      });
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }

}

exports.default = PageOverlay;
PageOverlay.propTypes = {
  page: _propTypes.default.objectOf(_propTypes.default.any).isRequired
};
