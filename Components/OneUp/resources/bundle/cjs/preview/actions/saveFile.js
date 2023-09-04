"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _AppConstants = _interopRequireDefault(require("../../constants/AppConstants"));

var _downloadFile = _interopRequireDefault(require("./downloadFile"));

var _saveHandler = _interopRequireDefault(require("./saveHandler"));

var _CallbackTypes = _interopRequireDefault(require("../../constants/CallbackTypes"));

var _ServiceRegistry = _interopRequireDefault(require("../../util/ServiceRegistry"));

var _LoggingService = require("../../service/LoggingService");

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
const logInfo = obj => {
  const message = obj && obj.message ? obj.message : "";

  _ServiceRegistry.default.getService("LoggingService").info("saveFile", _LoggingService.LoggingConstants.SAVE_API, message);
};

const saveFile = (options = {}, saveType = _AppConstants.default.SAVE_COMMENT_TYPE.MANUAL) => new Promise((saveResolve, saveReject) => {
  const saveMethod = (opt, type) => new Promise((resolve, reject) => {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.fileStatus === _AppConstants.default.FILE_PROGRESS_STATUS.SAVING) {
      reject();
    } else {
      appStore.setFileStatus(_AppConstants.default.FILE_PROGRESS_STATUS.SAVING);
      appStore.setIsDirty(false);

      const success = metadata => {
        const fileId = appStore.fileInfoList[0].id;
        appStore.setFileStatus(_AppConstants.default.FILE_PROGRESS_STATUS.SAVED);

        if (appStore.fileInfoList[0].asset) {
          appStore.setUseAcrobatJs(false);
          appStore.removeAsset(fileId);
        }

        if (metadata) {
          appStore.setFileMetadata(fileId, metadata);
          resolve(metadata);
        } else {
          resolve();
        }
      };

      const fail = err => {
        logInfo(err);
        appStore.setFileStatus(_AppConstants.default.FILE_PROGRESS_STATUS.FAILED);
        appStore.setIsDirty(true);
        appStore.setAppError(err);
        reject(err);
      };

      const callbackService = _ServiceRegistry.default.getService("CallbackService");

      if (callbackService.hasCallback(_CallbackTypes.default.SAVE_API)) {
        (0, _saveHandler.default)(opt, type).then(metadata => success(metadata)).catch(err => fail(err));
      } else {
        (0, _downloadFile.default)().then(() => success()).catch(err => fail(err));
      }
    }
  }); // commit any pending changes and then save it.


  const appStore = _ServiceRegistry.default.getService("AppStore");

  const hasAnnotationTools = !appStore.shouldHideAnnotationTools;
  const isThumbnailView = appStore.configStore.isThumbnailView;
  const isInPreview = appStore.isInPreview;
  const preSaveCommit = isInPreview && !isThumbnailView && hasAnnotationTools ? () => _ServiceRegistry.default.getService("CommentsApi").commitUnsavedChanges() : () => Promise.resolve();
  preSaveCommit().finally(() => {
    if (appStore.isDirty) {
      saveMethod(options, saveType).then(response => {
        saveResolve(response);
      }).catch(err => {
        saveReject(err);
      });
    } else {
      saveResolve();
    }
  });
});

var _default = saveFile;
exports.default = _default;