"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _FileLoader = _interopRequireWildcard(require("../util/FileLoader"));

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _LinearizationUtil = require("../util/LinearizationUtil");

var _Deferred = _interopRequireDefault(require("../util/Deferred"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @class
 * @description
 * The class provides methods related to documents loading, content etc
 */
class FileApi {
  constructor() {
    this._progressListeners = [];
    this._className = "FileApi";
    this._downloadTimes = {};
    this._linearizationTimeInfo = {};
    this._rangeBuffers = {};
    this._rangePromises = [];
    this.progressReceived = this.progressReceived.bind(this);
  }

  initialize() {
    this._appStore = _ServiceRegistry.default.getService("AppStore");

    if (this._appStore.isInPreview) {
      const fileInfo = this._appStore.fileInfoList[0];

      if (fileInfo.metaData.mimeType.toLowerCase() === "application/pdf") {
        if (this._appStore.getActionConfig("preview").enableLinearization) {
          this.initForLinearization(fileInfo);
        } else {
          this.getFileContents(fileInfo.id).catch(() => {});
        }
      }

      this.getPagesRenditionByFileId(fileInfo.id);
    }

    this.addProgressListener((loaded, total) => {
      this._appStore.setFileLoadingProgress(loaded, total);
    });
  }

  initForLinearization(fileInfo) {
    this._linearizationInfoProvided = !!fileInfo.content.linearizationInfo;
    this.fetchPDFSize(fileInfo.id).catch(() => {});

    const initGetFileContents = () => {
      this.getFileContents(fileInfo.id).then(() => {
        this._rangePromises.forEach(promise => {
          promise.reject();
        });

        this._rangePromises = [];
        (0, _FileLoader.abortRangeCalls)();
      }).catch(() => {});
    };

    if (this._appStore.getActionConfig("preview").linearizationConfig.initiateEarlyFileDownload) {
      this.fetchInitialBuffer(fileInfo.id).catch(() => {});
      initGetFileContents();
    } else {
      this.fetchInitialBuffer(fileInfo.id).finally(() => {
        initGetFileContents();
      });
    }

    this.addProgressListener((loaded, total) => {
      this._remainingBytes = total - loaded;
    });

    _ServiceRegistry.default.getService("PerformanceService").setLinearizationInfoProvided(this._linearizationInfoProvided);
  }
  /**
   * @method
   * @description
   * Progress Listener of events associated with documents loading in the browser
   *
   * @param {Function} listener - Listener function which calls with progress and size
   */


  addProgressListener(listener) {
    this._progressListeners.push(listener);
  }

  progressReceived(loaded, total) {
    this._progressListeners.forEach(listener => listener(loaded, total));
  }
  /**
   * @method
   * @description
   * Get page rendition for given fileId
   *
   * @param fileId
   *
   * @return Returns promise for first two page which resolve when rendition is available
   */


  getPagesRenditionByFileId(fileId) {
    const fileInfo = this._appStore.getFileInfoById(fileId);

    if (fileInfo && fileInfo.rendition) {
      Object.keys(fileInfo.rendition).forEach(pageIndex => {
        this.getRenditionByFileId(fileId, {
          pageNum: pageIndex
        }).catch(() => {});
      });
    }
  }
  /**
   * @method
   * @description
   * Get rendition of pages for given fileId.
   *
   * @param fileId
   * @param options - it can be 'size', 'format', 'page'
   *
   * @return Returns promise which resolve when rendition is available
   */


  getRenditionByFileId(fileId, options) {
    const fileInfo = this._appStore.getFileInfoById(fileId);

    const callbackService = _ServiceRegistry.default.getService("CallbackService");

    if (fileInfo && fileInfo.rendition) {
      const pages = fileInfo.rendition;
      const pageNum = options.pageNum > 0 ? options.pageNum : 1;
      const page = pages[pageNum];

      if (page) {
        if (!page.promise) {
          page.promise = (0, _FileLoader.default)(page.location).then(response => ({
            pageImgBuffer: response.buffer,
            mimeType: response.mimeType,
            pageNum: options.pageNum
          }));
        }

        return page.promise;
      }
    } else if (callbackService.hasCallback(_CallbackTypes.default.GET_RENDITION_API)) {
      const logHelper = (msg, obj) => {
        const loggingService = _ServiceRegistry.default.getService("LoggingService");

        loggingService.info(this._className, msg, JSON.stringify(obj));
      };

      return new Promise((resolve, reject) => {
        const callback = callbackService.getCallback(_CallbackTypes.default.GET_RENDITION_API);
        callback(options).then(response => {
          if (response && response.code === _ApiConstants.default.API_RESPONSE.SUCCESS) {
            resolve(response.data);
          } else {
            logHelper("Invalid GET_RENDITION_API response", response);
            reject("Rendition not available");
          }
        }).catch(err => {
          logHelper("Promise rejected for GET_RENDITION_API", err);
          reject(err);
        });
      });
    }

    return Promise.reject("Rendition not available");
  }
  /**
   * @method
   * @description
   * Tells whether renditions are provided or not
   *
   * @return Returns boolean
   */


  hasRenditions() {
    const fileInfos = this._appStore.getFileInfoList();

    if (fileInfos && fileInfos.length && fileInfos[0].rendition) {
      return true;
    }

    const callbackService = _ServiceRegistry.default.getService("CallbackService");

    return callbackService.hasCallback(_CallbackTypes.default.GET_RENDITION_API);
  }
  /**
   * @method
   * @description
   * Get file content buffer for given fileId.
   *
   * @param fileId
   *
   * @return Returns promise which resolve when content buffer is available
   */


  getFileContents(fileId) {
    const fileInfo = this._appStore.getFileInfoById(fileId);

    if (fileInfo && fileInfo.content && fileInfo.metaData) {
      if (fileInfo.filePromise) {
        return fileInfo.filePromise;
      }

      const fileContent = fileInfo.content;

      const loggingService = _ServiceRegistry.default.getService("LoggingService");

      this._downloadTimes.pdfDownloadStartTime = performance.now();

      if (!fileContent.promise) {
        loggingService.debug(this._className, "Getting file from location");
        loggingService.logExternal("Getting file from location.");
        fileContent.promise = (0, _FileLoader.default)(fileContent.location, this.progressReceived).then(response => response.buffer);
      }

      fileInfo.filePromise = fileContent.promise.then(buffer => {
        const performanceService = _ServiceRegistry.default.getService("PerformanceService");

        if (buffer.byteLength) {
          performanceService.setFileSize(buffer.byteLength);
          this.progressReceived(buffer.byteLength, buffer.byteLength);
        }

        this._downloadTimes.pdfDownloadEndTime = performance.now();
        return buffer;
      }).catch(error => {
        loggingService.error(this._className, "File download failed: ", JSON.stringify(error));
        setTimeout(() => {
          this._appStore.setAppRenderingBlocked(true);
        }, 1000);
      });
      return fileInfo.filePromise;
    }

    return Promise.reject("No file to download");
  }
  /**
   * @method
   * @description
   * Get file metadata for given arary of fileIds.
   *
   * @param fileIds - Array of given fileIds
   *
   * @return Return promise which resolve with given fileIds metadata
   */


  getSelectedFilesListFromFileIds(fileIds) {
    const metaDataList = [];
    fileIds.forEach(fileId => {
      const fileInfo = this._appStore.getFileInfoById(fileId);

      let metaData;

      if (fileInfo) {
        metaData = _objectSpread(_objectSpread({}, fileInfo.metaData), {}, {
          id: fileId,
          downloadUrl: fileId,
          type: fileInfo.metaData.mimeType,
          // preview dropin expects fileName in name field
          name: fileInfo.metaData.fileName
        });
      }

      metaDataList.push(metaData);
    });
    return Promise.resolve(metaDataList);
  }
  /**
   * @method
   * @description
   * Get file content buffer for given fileId and given ranges.
   *
   * @param fileId
   * @param ranges
   *
   * @return Returns promise which resolves to array containing required buffer ranges
   */


  fetchPDFBufferRanges(fileId, ranges) {
    const rangesStr = `${ranges.map(range => `${range.start}-${range.end}`).join(",")}`;

    this._logLinearizationInfo(`fetchPDFBufferRanges called: ${rangesStr}`);

    if (ranges.length === 1 && ranges[0].start === 0) {
      if (ranges[0].end === undefined || ranges[0].end === this._linearizedFileSize) {
        // Full file
        return this.getFileContents(fileId).then(response => [response]).catch(error => error);
      }

      if (ranges[0].end === 1024) {
        // Initial buffer
        return this.fetchInitialBuffer(fileId);
      }
    }

    let totalRangeLength = 0;
    ranges.forEach(range => {
      totalRangeLength += range.end - range.start + 1;
    });

    if (this._remainingBytes !== undefined) {
      if (this._remainingBytes < totalRangeLength) {
        const errMsg = "Requested range bytes > remaining bytes left for complete PDF download";

        this._logLinearizationInfo(errMsg);

        return Promise.reject({
          message: errMsg
        });
      }
    }

    const fileInfo = this._appStore.getFileInfoById(fileId);

    if (fileInfo) {
      if (fileInfo.content) {
        const fileContent = fileInfo.content;
        fileContent.linearizationInfo = fileContent.linearizationInfo || {};
        const linearizationInfo = fileContent.linearizationInfo;

        const performanceService = _ServiceRegistry.default.getService("PerformanceService");

        this._linearizationTimeInfo.bufferRangesTimes = this._linearizationTimeInfo.bufferRangesTimes || {};
        this._linearizationTimeInfo.bufferRangesTimes[rangesStr] = {
          startTime: new Date().getTime()
        };

        if (!linearizationInfo.getFileBufferRanges) {
          linearizationInfo.getFileBufferRanges = this._getGetFileBufferRanges(fileContent, ranges);
        }

        const completionPromise = new _Deferred.default();

        this._rangePromises.push(completionPromise);

        linearizationInfo.getFileBufferRanges(this._preProcessRanges(ranges)).then(result => {
          if ((0, _LinearizationUtil.isValidGetBufferRangesResult)(ranges, result)) {
            this._linearizationTimeInfo.bufferRangesTimes[rangesStr].endTime = new Date().getTime();
            performanceService.setRangesResolveTime({
              ranges: rangesStr,
              time: this._linearizationTimeInfo.bufferRangesTimes[rangesStr].endTime - this._linearizationTimeInfo.bufferRangesTimes[rangesStr].startTime
            });

            const resultList = this._getResultRangeBuffers(ranges, result.bufferList);

            this._logLinearizationInfo(`Fetch buffer ranges resolved: ${rangesStr}`);

            this._cacheResolvedBuffers(ranges, resultList);

            completionPromise.resolve(resultList);
          } else {
            this._logLinearizationError("Invalid buffer ranges received");

            completionPromise.reject();
          }
        }).catch(error => {
          this._logLinearizationError("Fetch buffer ranges rejected: ", JSON.stringify(error));

          completionPromise.reject(error);
        });
        return completionPromise.promise;
      }
    }

    return Promise.reject("No file to fetch buffer range");
  }

  _getGetFileBufferRanges(fileContent) {
    const loggingService = _ServiceRegistry.default.getService("LoggingService");

    this._logLinearizationInfo("Getting file buffer ranges from location");

    loggingService.logExternal("Getting file buffer ranges from location.");
    const params = {
      abortable: true,
      makeMultipartRangeCalls: this._appStore.getActionConfig("preview").linearizationConfig.makeMultipartRangeCalls
    };
    return r => (0, _FileLoader.getFileBufferRanges)(fileContent.location, r, params);
  }

  _preProcessRanges(ranges) {
    const rangesToFetch = [];
    ranges.forEach(range => {
      if (!this._rangeBuffers[`${range.start}-${range.end}`]) {
        rangesToFetch.push(range);
      }
    });
    return rangesToFetch;
  }

  _getResultRangeBuffers(ranges, fetchedBufferList) {
    const resultList = [];
    ranges.forEach((range, index) => {
      if (this._rangeBuffers[`${range.start}-${range.end}`]) {
        resultList.push(this._rangeBuffers[`${range.start}-${range.end}`]);
      } else {
        resultList.push(fetchedBufferList[index]);
      }
    });
    return resultList;
  }

  _cacheResolvedBuffers(ranges, bufferList) {
    ranges.forEach((range, index) => {
      this._rangeBuffers[`${range.start}-${range.end}`] = bufferList[index];
    });
  }
  /**
   * @method
   * @description
   * Get file size for given fileId.
   *
   * @param fileId
   *
   * @return Returns promise which resolves to size of file for given fileId
   */


  fetchPDFSize(fileId) {
    this._logLinearizationInfo("fetchPDFSize called");

    const fileInfo = this._appStore.getFileInfoById(fileId);

    if (fileInfo) {
      if (fileInfo.content) {
        const fileContent = fileInfo.content;

        if (fileContent.fileSizePromise) {
          return fileContent.fileSizePromise;
        }

        fileContent.linearizationInfo = fileContent.linearizationInfo || {};
        const linearizationInfo = fileContent.linearizationInfo;

        const loggingService = _ServiceRegistry.default.getService("LoggingService");

        const performanceService = _ServiceRegistry.default.getService("PerformanceService");

        this._linearizationTimeInfo.getInfoStartTime = new Date().getTime();

        if (!fileContent.infoPromise) {
          if (!linearizationInfo.getInfo) {
            this._logLinearizationInfo("Getting file size from location");

            loggingService.logExternal("Getting file size from location.");

            linearizationInfo.getInfo = () => (0, _FileLoader.getInfo)(fileContent.location);
          }

          fileContent.infoPromise = linearizationInfo.getInfo();
        }

        fileContent.fileSizePromise = new Promise((resolve, reject) => {
          fileContent.infoPromise.then(result => {
            if ((0, _LinearizationUtil.isValidGetInfoResult)(result)) {
              this._linearizationTimeInfo.getInfoEndTime = new Date().getTime();
              performanceService.setGetInfoResolveTime(this._linearizationTimeInfo.getInfoEndTime - this._linearizationTimeInfo.getInfoStartTime);

              this._logLinearizationInfo("Fetch file size resolved: ", {
                result
              });

              this._linearizedFileSize = result.fileSize;
              resolve(result.fileSize);
            } else {
              this._logLinearizationError("Invalid file info received");

              reject();
            }
          }).catch(error => {
            this._logLinearizationError("Fetch file size rejected: ", JSON.stringify(error));

            reject(error);
          });
        });
        return fileContent.fileSizePromise;
      }
    }

    return Promise.reject("No file to fetch size");
  }
  /**
   * @method
   * @description
   * Get 0-1024 bytes for given fileId.
   *
   * @param fileId
   * @param ranges
   *
   * @return Returns promise which resolves to array
   *  containing single object having 0-1024 bytes for given fileId
   */


  fetchInitialBuffer(fileId) {
    this._logLinearizationInfo("fetchInitialBuffer called");

    const fileInfo = this._appStore.getFileInfoById(fileId);

    if (fileInfo) {
      if (fileInfo.content) {
        const fileContent = fileInfo.content;

        if (fileContent.initialBufferRangePromise) {
          return fileContent.initialBufferRangePromise;
        }

        if (!this._linearizationInfoProvided) {
          fileContent.linearizationInfo = {};
        }

        const linearizationInfo = fileContent.linearizationInfo;

        const loggingService = _ServiceRegistry.default.getService("LoggingService");

        const performanceService = _ServiceRegistry.default.getService("PerformanceService");

        this._linearizationTimeInfo.getInitialBufferStartTime = new Date().getTime();

        if (!fileContent.initialBufferPromise) {
          if (!linearizationInfo.getInitialBuffer) {
            this._logLinearizationInfo("Getting initial buffer from location");

            loggingService.logExternal("Getting initial buffer from location.");

            linearizationInfo.getInitialBuffer = () => (0, _FileLoader.getFileBufferRanges)(fileContent.location, [{
              start: 0,
              end: 1024
            }]).then(result => ({
              buffer: result.bufferList[0]
            }));
          }

          fileContent.initialBufferPromise = linearizationInfo.getInitialBuffer();
        }

        fileContent.initialBufferRangePromise = new Promise((resolve, reject) => {
          fileContent.initialBufferPromise.then(result => {
            if ((0, _LinearizationUtil.isValidGetInitialBufferResult)(result)) {
              this._linearizationTimeInfo.getInitialBufferEndTime = new Date().getTime();
              performanceService.setInitialBufferResolveTime(this._linearizationTimeInfo.getInitialBufferEndTime - this._linearizationTimeInfo.getInitialBufferStartTime);

              this._logLinearizationInfo("Fetch initial buffer resolved");

              resolve([result.buffer]);
            } else {
              this._logLinearizationError("Invalid initial buffer received");

              reject();
            }
          }).catch(error => {
            this._logLinearizationError("Fetch initial buffer rejected: ", JSON.stringify(error));

            reject(error);
          });
        });
        return fileContent.initialBufferRangePromise;
      }
    }

    return Promise.reject("No file to fetch initial buffer");
  }
  /**
   * @method
   * @description
   * Gives the time taken to download file contents
   *
   * @returns Object with start and end time to download the file
   */


  getDownloadTimes() {
    return this._downloadTimes;
  }

  _logLinearizationInfo(msg, params, isErrorLog = false) {
    const loggingService = _ServiceRegistry.default.getService("LoggingService");

    const logObject = _objectSpread(_objectSpread({}, params), {}, {
      makeMultipartRangeCalls: !!this._appStore.getActionConfig("preview").linearizationConfig.makeMultipartRangeCalls,
      initiateEarlyFileDownload: !!this._appStore.getActionConfig("preview").linearizationConfig.initiateEarlyFileDownload,
      linearizationInfoProvided: this._linearizationInfoProvided
    });

    if (isErrorLog) {
      loggingService.error(this._className, msg, logObject);
    } else {
      loggingService.info(this._className, msg, logObject);
    }
  }

  _logLinearizationError(msg, params = {}) {
    const performanceService = _ServiceRegistry.default.getService("PerformanceService");

    performanceService.setErrorDuringLinearizationFlow();

    this._logLinearizationInfo(msg, params, true);
  }

  abortFileDownload() {
    const loggingService = _ServiceRegistry.default.getService("LoggingService");

    loggingService.info(this._className, "Aborting the file download call");
    (0, _FileLoader.abortFileDownloadCall)();
  }

}

var _default = FileApi;
exports.default = _default;