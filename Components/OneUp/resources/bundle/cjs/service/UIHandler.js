"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppUtil = require("../util/AppUtil");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2019 Adobe
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
class UIHandler {
  initialiseHeaderRef(headerRef) {
    this._headerRef = headerRef;
  }

  getHeight() {
    return (0, _AppUtil.getDOMElement)().clientHeight;
  }

  getWidth() {
    return (0, _AppUtil.getDOMElement)().clientWidth;
  }

  inHoverRangeOfHeaderAndHUD(clientY) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.isSizedPreset && appStore.inFullScreen) {
      return clientY < window.innerHeight * 0.2 || clientY > window.innerHeight * 0.8;
    }

    if (appStore.inFullScreen || appStore.isLBPreset) {
      return clientY < window.innerHeight * 0.2;
    }

    return clientY < this.getHeight();
  }

  showHeaderAndHUD(height) {
    if (this._headerRef && this._headerRef.style) {
      _ServiceRegistry.default.getService("HUDService").showHUD().then(() => {
        this._headerRef.style.opacity = 0.8;
        this.fadeHeaderAndHUD(height);
      });
    }
  }

  fadeHeaderAndHUD(yRange) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (this._fadeTimeout) {
      clearInterval(this._fadeTimeout);
    }

    this._fadeTimeout = setInterval(() => {
      const height = this.getHeight();
      const headInRange = yRange < 48;
      const hudInRange = yRange < height && yRange > height - 48;

      if (!(headInRange || hudInRange) && !appStore.searchOpen && !appStore.sideMenuOpen && this._headerRef && this._headerRef.style) {
        _ServiceRegistry.default.getService("HUDService").fadeHUD().then(() => {
          this._headerRef.style.opacity = 0;
          clearInterval(this._fadeTimeout);
        });
      }
    }, 3000);
  }

  initialiseBrandingLabelRef(brandingLabelRef) {
    this._brandingLabelRef = brandingLabelRef;
  }

  inHoverRangeOfBrandingLabel(clientY, clientX) {
    return clientY > window.innerHeight * 0.8 && clientX > window.innerWidth * 0.8;
  }

  showBrandingLabel(height, width) {
    if (this._brandingLabelRef && this._brandingLabelRef.style) {
      this._brandingLabelRef.style.opacity = 0.8;
      this._brandingLabelRef.style.display = "flex";
      this.fadeBrandingLabel(height, width);
    }
  }

  fadeBrandingLabel(yRange, xRange) {
    if (this._brandingFadeTimeout) {
      clearInterval(this._brandingFadeTimeout);
    }

    this._brandingFadeTimeout = setInterval(() => {
      const height = this.getHeight();
      const width = this.getWidth();
      const brandingLabelInRange = yRange < height && yRange > height - 80 && xRange < width && xRange > width - 200;

      if (!brandingLabelInRange && this._brandingLabelRef && this._brandingLabelRef.style) {
        this._brandingLabelRef.style.opacity = 0;
        clearInterval(this._brandingFadeTimeout);
      }
    }, 5000);
  }

}

exports.default = UIHandler;