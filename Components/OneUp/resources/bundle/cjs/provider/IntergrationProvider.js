"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

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
class IntegrationProvider {
  constructor() {
    this._init();

    this.initAPIs();
  }

  initAPIs() {
    this.apis = {};
    this.apis.user = _ServiceRegistry.default.getService("UserApi");
    this.apis.file = _ServiceRegistry.default.getService("FileApi");
    this.apis.comments = _ServiceRegistry.default.getService("CommentsApi").getExposedAPIs();
  }

  _init() {
    this.readyPromise = new Promise((resolve, reject) => {
      this.readyResolve = resolve;
      this.readyReject = reject;
    });
  }

  setAppStore(appStore) {
    this.appStore = appStore;
    this.apis.file.initialize();
    this.apis.user.initialize();
    this.readyResolve(this);
  }

  ready() {
    return this.readyPromise;
  }

  addProgressListener(listener) {
    this.apis.file.addProgressListener(listener);
  }

  progressReceived(loaded, total) {
    return this.apis.file.progressReceived(loaded, total);
  }

  getRenditionByFileId(fileId, options) {
    return this.apis.file.getRenditionByFileId(fileId, options);
  }

  getFileContents(fileId) {
    return this.apis.file.getFileContents(fileId);
  }

  getSelectedFilesListFromFileIds(fileIds) {
    return this.apis.file.getSelectedFilesListFromFileIds(fileIds);
  }

  fetchPDFBufferRanges(fileId, ranges) {
    return this.apis.file.fetchPDFBufferRanges(fileId, ranges);
  }

  fetchInitialBuffer(fileId) {
    return this.apis.file.fetchInitialBuffer(fileId);
  }

  fetchPDFSize(fileId) {
    return this.apis.file.fetchPDFSize(fileId);
  }

  getUserProfile() {
    return this.apis.user.getUserProfile();
  }

  getUserSettings() {
    return this.apis.user.getUserSettings();
  }

  setUserSettings(userSetting) {
    return this.apis.user.setUserSettings(userSetting);
  }

}

var _default = IntegrationProvider;
exports.default = _default;
