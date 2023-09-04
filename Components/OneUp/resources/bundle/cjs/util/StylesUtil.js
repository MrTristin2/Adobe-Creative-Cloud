"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.removeFullScreenFromElement = exports.createStyles = exports.cleanUpElement = exports.blockOverflow = exports.allowOverflow = exports.addWidthToElement = exports.addHeightToElement = exports.addFullScreenToElement = void 0;

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
const styleInnerHTMLs = [`.ViewSDK_hideOverflow {
        overflow: hidden;
    }`, `.ViewSDK_parentRelativeWidth {
        width: 100%;
    }`, `.ViewSDK_viewportRelativeWidth {
        width: 100vw;
    }`, `.ViewSDK_parentRelativeHeight {
        height: 100%;
    }`, `.ViewSDK_viewportRelativeHeight {
        height: 100vh;
    }`, `.ViewSDK_fullScreenPDFViewer {
        width:100vw !important; height:100vh !important;
        max-width:100vw !important; max-height:100vh !important;
        position:fixed; top:0; left:0; z-index:99999;
        margin: 0 !important; padding: 0 !important;
        border: none !important;
    }`, ":root { --ViewSDK-mobile-viewport-height:1vh; }", `.ViewSDK_fullScreenPDFViewerMobile {
        width:100vw !important; height:calc(100 * var(--ViewSDK-mobile-viewport-height)) !important;
        max-width:100vw !important; max-height:calc(100 * var(--ViewSDK-mobile-viewport-height)) !important;
        position:fixed; top:0; left:0; z-index:99999;
        margin: 0 !important; padding: 0 !important;
        border: none !important;
    }`];

const createStyles = () => {
  const doc = window.document;
  let style;
  styleInnerHTMLs.forEach(innerHTML => {
    style = doc.createElement("style");
    style.type = "text/css";
    style.innerHTML = innerHTML;
    doc.getElementsByTagName("head")[0].appendChild(style);
  });
};

exports.createStyles = createStyles;

const addStyleClass = (element, styleClass) => {
  element.classList.add(styleClass);
};

const removeStyleClass = (element, styleClass) => {
  element.classList.remove(styleClass);
};

const cleanUpElement = element => {
  removeStyleClass(element, "ViewSDK_hideOverflow");
  removeStyleClass(element, "ViewSDK_parentRelativeWidth");
  removeStyleClass(element, "ViewSDK_viewportRelativeWidth");
  removeStyleClass(element, "ViewSDK_parentRelativeHeight");
  removeStyleClass(element, "ViewSDK_viewportRelativeHeight");
  removeStyleClass(element, "ViewSDK_fullScreenPDFViewer");
  removeStyleClass(element, "ViewSDK_fullScreenPDFViewerMobile");
};

exports.cleanUpElement = cleanUpElement;

const addWidthToElement = element => {
  const parentNodeName = element.parentNode ? element.parentNode.nodeName.toLowerCase() : "";

  if (parentNodeName === "body") {
    addStyleClass(element, "ViewSDK_viewportRelativeWidth");
  } else {
    addStyleClass(element, "ViewSDK_parentRelativeWidth");
  }
};

exports.addWidthToElement = addWidthToElement;

const addHeightToElement = element => {
  const parentNodeName = element.parentNode ? element.parentNode.nodeName.toLowerCase() : "";

  if (parentNodeName === "body") {
    addStyleClass(element, "ViewSDK_viewportRelativeHeight");
  } else {
    addStyleClass(element, "ViewSDK_parentRelativeHeight");
  }
};

exports.addHeightToElement = addHeightToElement;

const blockOverflow = element => {
  addStyleClass(element, "ViewSDK_hideOverflow");
};

exports.blockOverflow = blockOverflow;

const allowOverflow = element => {
  removeStyleClass(element, "ViewSDK_hideOverflow");
};

exports.allowOverflow = allowOverflow;

const addFullScreenToElement = (element, isIOS) => {
  if (isIOS) {
    addStyleClass(element, "ViewSDK_fullScreenPDFViewerMobile");
  } else {
    addStyleClass(element, "ViewSDK_fullScreenPDFViewer");
  }
};

exports.addFullScreenToElement = addFullScreenToElement;

const removeFullScreenFromElement = (element, isIOS) => {
  if (isIOS) {
    removeStyleClass(element, "ViewSDK_fullScreenPDFViewerMobile");
  } else {
    removeStyleClass(element, "ViewSDK_fullScreenPDFViewer");
  }
};

exports.removeFullScreenFromElement = removeFullScreenFromElement;