"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dcCore = require("dc-core");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _Events = _interopRequireDefault(require("../constants/Events"));

var _PageOverlay = _interopRequireDefault(require("../preview/react-component/preview/presentation/PageOverlay"));

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
class ExternalComponentService {
  constructor() {
    this._externalComponents = [];
  }

  getPageOverlay() {
    return this._pageOverlay;
  }

  setRegisterPageOverlay(registered) {
    window.adobe_dc_sdk = window.adobe_dc_sdk || {};
    window.adobe_dc_sdk.view_sdk = window.adobe_dc_sdk.view_sdk || {};

    window.adobe_dc_sdk.view_sdk.registerPageOverlay = loadOverlay => {
      this._externalComponents = this._externalComponents.filter(component => component.id !== "page_overlay");

      this._externalComponents.push({
        id: "page_overlay",
        load: loadOverlay
      });

      registered();
    };
  }

  initialize() {
    this._loggingService = _ServiceRegistry.default.getService("LoggingService");
    this.loadExternalJS().catch(() => {});

    _ServiceRegistry.default.getService("EventsService").registerEventListener(_Events.default.APP_RENDERING_DONE, () => {
      _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INTEGRATION_CONNECTOR", ["registerPageOverlay"]).then(apiObject => {
        this.loadPageOverlay().then(() => apiObject.registerPageOverlay(_PageOverlay.default)).catch(() => {});
      }).catch(error => this._loggingService.error("ExternalComponentService", "Error in calling overlay apis ", error));
    });
  }

  loadExternalJS() {
    if (this._loadScript) {
      return this._loadScript;
    }

    this._loadScript = new Promise((resolve, reject) => {
      this.setRegisterPageOverlay(resolve);

      const src = _ServiceRegistry.default.getService("AppStore").getConfig().externalJSComponentURL;

      _dcCore.domUtil.loadScript(src).catch(() => {
        this._loggingService.logExternal("Error in loading ExternalJSComponent Url");

        reject();
      });
    });
    return this._loadScript;
  }

  loadPageOverlay() {
    if (this._loadPageOverlay) {
      return this._loadPageOverlay;
    }

    this._loadPageOverlay = new Promise((resolve, reject) => {
      this.loadExternalJS().then(() => {
        if (this._externalComponents.length > 0) {
          const components = this._externalComponents;
          const overlayComponent = components.find(component => component.id === "page_overlay");

          if (overlayComponent) {
            overlayComponent.load().then(component => {
              this._pageOverlay = component;
              resolve();
            });
          } else {
            this._loggingService.logExternal("Error PageOverlay not registered");

            reject("Error PageOverlay not registered");
          }
        } else {
          this._loggingService.logExternal("Error PageOverlay not registered");

          reject("Error PageOverlay not registered");
        }
      }).catch(() => reject("Error in loading ExternalJSComponent Url"));
    });
    return this._loadPageOverlay;
  }

}

exports.default = ExternalComponentService;