"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.LoggingConstants = void 0;

var _LoggingUtil = _interopRequireDefault(require("../util/LoggingUtil"));

var _dcCore = require("dc-core");

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
const LoggingConstants = {
  APP_PERFORMANCE: "APP_PERF_DATA",
  ENABLE_SAVE_COMMENT: "ENABLE_SAVE_COMMENT",
  SAVE_COMMENT: "SAVE_COMMENT",
  SAVE_COMMENT_CONFLICT: "SAVE_COMMENT_CONFLICT",
  SAVE_COMMENT_ERROR: "SAVE_COMMENT_ERROR",
  SAVE_API: "SAVE_API"
};
exports.LoggingConstants = LoggingConstants;

class LoggingService {
  constructor() {
    this._loggers = {};
  }

  initialize(allowLogToConsole) {
    this._logToConsole = allowLogToConsole;
  }

  logExternal(...args) {
    if (this._logToConsole) {
      (0, _LoggingUtil.default)(...args);
    }
  }

  getLogger(className) {
    if (!this._loggers[className]) {
      this._loggers[className] = _dcCore.logging.getLogger(className);
    }

    return this._loggers[className];
  }

  getLogObject(level) {
    // eslint-disable-line
    return {
      level
    };
  }

  emit(className, level, logMessage, logObject = {}) {
    const logger = this.getLogger(className);

    if (logger) {
      const logData = Object.assign(logObject, this.getLogObject(level));
      logger.emit(logMessage, logData);
    } else {
      this.logExternal(logMessage, logObject);
    }
  }

  info(className, ...args) {
    const logger = this.getLogger(className);

    if (logger) {
      logger.info(...args);
    } else {
      this.logExternal("[INFO]", ...args);
    }
  }

  debug(className, ...args) {
    const logger = this.getLogger(className);

    if (logger) {
      logger.debug(...args);
    } else {
      this.logExternal("[DEBUG]", ...args);
    }
  }

  warn(className, ...args) {
    const logger = this.getLogger(className);

    if (logger) {
      logger.warn(...args);
    } else {
      this.logExternal("[WARNING]", ...args);
    }
  }

  error(className, ...args) {
    const logger = this.getLogger(className);

    if (logger) {
      logger.error(...args);
    } else {
      this.logExternal("[ERROR]", ...args);
    }
  }

}

exports.default = LoggingService;