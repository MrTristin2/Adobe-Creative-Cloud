"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _StylesUtil = require("../util/StylesUtil");

var _FullScreenIcon = _interopRequireDefault(require("../preview/react-component/icons/full-screen/FullScreenIcon"));

var _Events = _interopRequireDefault(require("../constants/Events"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2020 Adobe
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
class FullScreenManager {
  constructor() {
    this._handleFullScreenEscape = this._handleFullScreenEscape.bind(this);
    this._handleFullWindowEscape = this._handleFullWindowEscape.bind(this);
  }

  initialize(config, serviceFactory) {
    this._divId = config.fullScreenDivId || config.divId;
    this.fullScreenIdInHUD = undefined;
    this._serviceFactory = serviceFactory;

    this._serviceFactory.getService("EventsService").registerEventListener(_Events.default.APP_RENDERING_DONE, () => this.updateFSIconInHud());
  }

  setSwitchToFullWindow() {
    this.switchToFullWindow = !this._isFullScreenAvailable();
  }

  updateFSIconInHud() {
    const appStore = this._serviceFactory.getService("AppStore");

    this.setSwitchToFullWindow();

    if (appStore.previewRef && appStore.getActionConfig("preview").showFullScreenInHUD) {
      appStore.previewRef.getPublicApis().then(api => {
        if (this.fullScreenIdInHUD !== undefined) {
          api.hud.removeUIControl(this.fullScreenIdInHUD);
          this.fullScreenIdInHUD = undefined;
        }

        if (appStore.configStore.showFullScreen && !appStore.inFullScreen) {
          this.fullScreenIdInHUD = api.hud.addUIControl(_FullScreenIcon.default, "RIGHT");
        }
      });
    }
  }

  setFullScreen(takeToFullScreen) {
    if (takeToFullScreen) {
      if (this.switchToFullWindow) {
        this._moveToFullWindow();
      } else {
        this._moveToFullScreen();
      }
    } else if (this.switchToFullWindow) {
      this._exitFromFullWindow();
    } else {
      this._exitFromFullScreen();
    }

    this._exposeFSEvent(takeToFullScreen);
  }

  _exposeFSEvent(inFullScreen) {
    const data = {
      inFullScreen,
      inWindowMode: this.switchToFullWindow
    };

    this._serviceFactory.getService("EventsService").sendEvent(_Events.default.FULL_SCREEN_TOGGLE, data);
  }

  _moveToFullWindow() {
    document.addEventListener("keydown", this._handleFullWindowEscape);

    const appStore = this._serviceFactory.getService("AppStore");

    const divElement = document.getElementById(this._divId);
    (0, _StylesUtil.addFullScreenToElement)(divElement, appStore.isIOS);

    if (appStore.isIOS) {
      // This is for 100vh iPad Safari bug
      // First we get the viewport height and we multiple it by 1% to get a value
      // for a ViewSDK-mobile-viewport-height unit
      // Then we set the value in the --ViewSDK-mobile-viewport-height custom property to the root of the document
      this.iosHeightInterval = setInterval(() => {
        document.documentElement.style.setProperty("--ViewSDK-mobile-viewport-height", `${window.innerHeight * 0.01}px`);
      }, 50);
    }
  }

  _moveToFullScreen() {
    const divElement = document.getElementById(this._divId);

    if (divElement.requestFullscreen) {
      divElement.requestFullscreen();
    } else if (divElement.mozRequestFullScreen) {
      divElement.mozRequestFullScreen();
    } else if (divElement.webkitRequestFullscreen) {
      divElement.webkitRequestFullscreen();
    } else if (divElement.msRequestFullscreen) {
      divElement.msRequestFullscreen();
    }

    document.addEventListener("fullscreenchange", this._handleFullScreenEscape);
    document.addEventListener("mozfullscreenchange", this._handleFullScreenEscape);
    document.addEventListener("MSFullscreenChange", this._handleFullScreenEscape);
    document.addEventListener("webkitfullscreenchange", this._handleFullScreenEscape);
  }

  _exitFromFullWindow() {
    document.removeEventListener("keydown", this._handleFullWindowEscape);

    const appStore = this._serviceFactory.getService("AppStore");

    const divElement = document.getElementById(this._divId);
    (0, _StylesUtil.removeFullScreenFromElement)(divElement, appStore.isIOS);

    if (appStore.isIOS && this.iosHeightInterval) {
      clearInterval(this.iosHeightInterval);
    }
  }

  get _inFullScreen() {
    return document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement;
  }

  _exitFromFullScreen() {
    if (this._inFullScreen) {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
      }
    }

    document.removeEventListener("fullscreenchange", this._handleFullScreenEscape);
    document.removeEventListener("mozfullscreenchange", this._handleFullScreenEscape);
    document.removeEventListener("MSFullscreenChange", this._handleFullScreenEscape);
    document.removeEventListener("webkitfullscreenchange", this._handleFullScreenEscape);
  }

  _isFullScreenAvailable() {
    const divElement = document.getElementById(this._divId);
    return divElement && (divElement.requestFullscreen || divElement.mozRequestFullScreen || divElement.webkitRequestFullscreen || divElement.msRequestFullscreen);
  }

  _handleFullScreenEscape() {
    if (!this._serviceFactory.getService("AppStore").inFullScreen) {
      return;
    }

    if (!this._inFullScreen) {
      this._serviceFactory.getService("AppStore").setInFullScreen(false);
    }
  }

  _handleFullWindowEscape(event) {
    if (!this._serviceFactory.getService("AppStore").inFullScreen) {
      return;
    }

    if (event.key === "Escape" || event.key === "Esc") {
      this._serviceFactory.getService("AppStore").setInFullScreen(false);
    }
  }

}

exports.default = FullScreenManager;