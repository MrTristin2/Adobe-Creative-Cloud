"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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
const AppConstants = {
  SUBCATEGORY_USE: "Use",
  SUBCATEGORY_TYPE_CLICK: "Click",
  SELECTION_NAME: "files",
  CONTEXT: "Integration",
  FILE_PROGRESS_STATUS: {
    SAVED: "file.progress.status.saved",
    FAILED: "file.progress.status.failed",
    SAVING: "file.progress.status.saving",
    EDITED: "file.progress.status.edited"
  },
  FILE_PROGRESS_STATUS_REV: {
    "file.progress.status.saved": "SAVED",
    "file.progress.status.failed": "FAILED",
    "file.progress.status.saving": "SAVING",
    "file.progress.status.edited": "EDITED"
  },
  SAVE_COMMENT_TYPE: {
    MANUAL: "manual",
    AUTO_SAVE_UNSAVED: "autoSaveUnsaved",
    AUTO_SAVE_FOCUS: "autoSaveFocus",
    AUTO_SAVE_FREQUENCY: "autoSaveFrequency",
    AUTO_SAVE_CONFLICT_COPY: "autoSaveConflictCopy",
    AUTO_SAVE_KEYDOWN: "autoSaveKeyDown",
    AUTO_SAVE_ON_EDIT: "autoSaveOnEdit"
  },
  STATE: {
    INITIAL: 0,
    IMPORTED: 1,
    CONVERTED: 2
  },
  SHOW_TOAST: {
    CONFLICT: "conflict",
    SAVED: "saved",
    ERROR: "error"
  },
  TOAST_TYPE: {
    SUCCESS: "success",
    ERROR: "error",
    WARN: "warning",
    INFO: "info"
  }
};
var _default = AppConstants;
exports.default = _default;