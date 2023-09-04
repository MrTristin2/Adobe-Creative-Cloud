"use strict";

var _AdobeDCView = _interopRequireDefault(require("./AdobeDCView"));

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
function initPreview() {
  const sdk = window.adobe_dc_sdk;
  let useAJS = true;

  if (typeof sdk.launchOptions.useAJS === "boolean") {
    useAJS = sdk.launchOptions.useAJS;
  }

  const renditionConfig = {
    enableExternal: true,
    useReview: false,
    useAJS,
    useDCAPI: false,
    useAJSFullBuild: false,
    useAJSRichBuild: true,
    enableFTPDF: false,
    fetchWithCredentials: false,
    enableAJSLogging: false,
    autoStart: false
  };

  const getAJSWorker = renditionSrc => () => {
    const ajsScriptName = "acrobatProxy.js";
    const ajsUrl = renditionSrc.replace("rendition.js", "AJS/");
    const ajsPath = ajsUrl + ajsScriptName;

    if (!sdk.launchOptions.handleCORSForAJSWorker) {
      return new window.Worker(ajsPath);
    }

    let js = "var Module = {};";
    js += `Module.ajsRootUrl = '${ajsUrl}';`;
    js += "Module.locateFile = function(resourcePath) { return Module.ajsRootUrl + resourcePath; };";
    js += `importScripts(Module.ajsRootUrl + '${ajsScriptName}');`;
    const blob = new Blob([js], {
      type: "application/javascript"
    });
    const blobUrl = URL.createObjectURL(blob);
    return new window.Worker(blobUrl);
  };

  const corePromise = sdk.appLauncher.corePromise;
  corePromise.then(core => {
    if (sdk.launchOptions.inSDKBundle) {
      core.providers.rendition(null, renditionConfig).then(rendition => {
        // eslint-disable-next-line no-param-reassign
        rendition.getAJSWorker = getAJSWorker(rendition.getOwnScriptSrc());
        rendition.init();
      });
    }

    core.providers.discovery().then(discovery => {
      discovery.loadDropinClass("preview");
    });
  });
}

initPreview();

if (window.adobe_dc_sdk.launchOptions.inSDKBundle) {
  window.AdobeDC = window.AdobeDC || {};
  window.AdobeDC.View = _AdobeDCView.default;
} else {
  window.adobe_dc_sdk.View = _AdobeDCView.default;
}

(function (event) {
  // eslint-disable-line
  event.initEvent("adobe_dc_view_sdk.ready", true, true);
  document.dispatchEvent(event);
})(document.createEvent("Event"));