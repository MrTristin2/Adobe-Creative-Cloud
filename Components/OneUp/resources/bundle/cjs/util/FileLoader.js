"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.abortFileDownloadCall = abortFileDownloadCall;
exports.abortRangeCalls = abortRangeCalls;
exports.default = getUrlContent;
exports.getFileBufferRanges = getFileBufferRanges;
exports.getInfo = getInfo;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
const abortableRangeCalls = {};
let abortableFileDownloadCall;

function makeXhrCall(locationInfo, params = {}) {
  const xhr = new XMLHttpRequest();
  xhr.open(params.method, locationInfo.url);

  if (locationInfo.accessToken) {
    const token = locationInfo.accessToken;
    xhr.setRequestHeader(token.key, token.value);
  }

  if (locationInfo.headers && locationInfo.headers.length > 0) {
    locationInfo.headers.forEach(header => xhr.setRequestHeader(header.key, header.value));
  }

  if (params) {
    if (params.downloadWithCredentials) {
      xhr.withCredentials = true;
    }

    if (params.responseType) {
      xhr.responseType = params.responseType;
    }

    if (typeof params.progressCB === "function") {
      xhr.addEventListener("progress", event => {
        if (event.lengthComputable) {
          params.progressCB(event.loaded, event.total);
        } else if (event.loaded) {
          params.progressCB(event.loaded, params.totalSize);
        }
      });
      xhr.addEventListener("loadstart", event => {
        if (event.lengthComputable) {
          params.progressCB(event.loaded, event.total);
        }
      });
    }
  }

  xhr.onload = () => params.onload(xhr);

  xhr.onerror = params.onerror;
  xhr.ontimeout = params.ontimeout;
  xhr.send();
  return xhr;
}

function makePartialContentXhrCall(locationInfo, rangeHeader, params = {}) {
  const updatedLocationInfo = _objectSpread({}, locationInfo);

  updatedLocationInfo.headers = locationInfo.headers ? [...locationInfo.headers] : [];
  updatedLocationInfo.headers.push({
    key: "Range",
    value: `bytes=${rangeHeader}`
  });
  return makeXhrCall(updatedLocationInfo, params);
}

function _textToArrayBuffer(str) {
  const len = str.length;
  const bytes = new Uint8Array(len);

  for (let i = 0; i < len; i += 1) {
    bytes[i] = str.charCodeAt(i);
  }

  return bytes.buffer;
}

function parseMultipartBody(responseText, boundary) {
  return responseText.split(`--${boundary}`).reduce((parts, part) => {
    if (part && part !== "--") {
      const [, body] = part.trim().split(/\r\n\r\n/g);

      if (body) {
        parts.push(_textToArrayBuffer(body));
      }
    }

    return parts;
  }, []);
}

function getUrlContent(locationInfo, progressCB, params = {}) {
  return new Promise((resolve, reject) => {
    const updatedParams = _objectSpread(_objectSpread({}, params), {}, {
      method: "GET",
      responseType: "arraybuffer",
      progressCB,
      onload: xhr => {
        if (xhr.status >= 200 && xhr.status < 400) {
          resolve({
            buffer: xhr.response,
            mimeType: xhr.getResponseHeader("content-type")
          });
        } else {
          const errorInfo = {
            status: xhr.status,
            statusText: xhr.statusText
          };
          reject({
            message: `Failed to download file contents, with error: ${JSON.stringify(errorInfo)}`
          });
        }
      },
      onerror: () => {
        reject({
          message: "Failed to download file contents"
        });
      },
      ontimeout: () => {
        reject({
          message: "Failed to download file contents due to timeout"
        });
      }
    });

    abortableFileDownloadCall = makeXhrCall(locationInfo, updatedParams);
  });
}

function getInfo(locationInfo, params = {}) {
  return new Promise((resolve, reject) => {
    const updatedParams = _objectSpread(_objectSpread({}, params), {}, {
      method: "HEAD",
      onload: xhr => {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
          try {
            const size = Number(xhr.getResponseHeader("Content-length"));

            if (size) {
              resolve({
                fileSize: size
              });
            } else {
              reject({
                message: "Invalid content-length"
              });
            }
          } catch (error) {
            reject({
              message: "Error getting content-length"
            });
          }
        } else {
          const errorInfo = {
            status: xhr.status,
            statusText: xhr.statusText
          };
          reject({
            message: `Failed to get file size, with error: ${JSON.stringify(errorInfo)}`
          });
        }
      },
      onerror: () => {
        reject({
          message: "Failed to get file size"
        });
      },
      ontimeout: () => {
        reject({
          message: "Failed to get file size due to timeout"
        });
      }
    });

    makeXhrCall(locationInfo, updatedParams);
  });
}

function getFileBufferRange(locationInfo, range, params = {}) {
  return new Promise((resolve, reject) => {
    const updatedParams = _objectSpread(_objectSpread({}, params), {}, {
      method: "GET",
      responseType: "arraybuffer",
      onload: xhr => {
        if (`${range.start}-${range.end}` in abortableRangeCalls) {
          delete abortableRangeCalls[`${range.start}-${range.end}`];
        }

        if (xhr.readyState === 4 && xhr.status === 206) {
          resolve(xhr.response);
        } else {
          const errorInfo = {
            status: xhr.status,
            statusText: xhr.statusText
          };
          reject({
            message: `Failed to get file buffer range with error: ${JSON.stringify(errorInfo)}`
          });
        }
      },
      onerror: () => {
        reject({
          message: "Failed to get file buffer range"
        });
      },
      ontimeout: () => {
        reject({
          message: "Failed to get file buffer range due to timeout"
        });
      }
    });

    const xhr = makePartialContentXhrCall(locationInfo, `${range.start}-${range.end}`, updatedParams);

    if (params.abortable) {
      abortableRangeCalls[`${range.start}-${range.end}`] = xhr;
    }
  });
}

function getFileBufferRanges(locationInfo, ranges, params = {}) {
  return new Promise((resolve, reject) => {
    if (ranges.length === 1 || !params.makeMultipartRangeCalls) {
      const promiseArray = [];
      ranges.forEach(range => {
        promiseArray.push(getFileBufferRange(locationInfo, range, params));
      });
      Promise.all(promiseArray).then(result => resolve({
        bufferList: result
      })).catch(error => reject(error));
    } else {
      const updatedParams = _objectSpread(_objectSpread({}, params), {}, {
        method: "GET",
        onload: xhr => {
          if (xhr.readyState === 4 && xhr.status === 206) {
            const boundary = xhr.getResponseHeader("Content-Type").match(/boundary=(.+)$/i) ? xhr.getResponseHeader("Content-Type").match(/boundary=(.+)$/i)[1] : undefined;

            if (boundary) {
              const bufferList = parseMultipartBody(xhr.responseText, boundary);
              resolve({
                bufferList
              });
            } else {
              reject({
                message: "Failed to get file buffer ranges"
              });
            }
          } else {
            const errorInfo = {
              status: xhr.status,
              statusText: xhr.statusText
            };
            reject({
              message: `Failed to get file buffer range with error: ${JSON.stringify(errorInfo)}`
            });
          }
        },
        onerror: () => {
          reject({
            message: "Failed to get file buffer range"
          });
        },
        ontimeout: () => {
          reject({
            message: "Failed to get file buffer range due to timeout"
          });
        }
      });

      makePartialContentXhrCall(locationInfo, `${ranges.map(range => `${range.start}-${range.end}`).join(",")}`, updatedParams);
    }
  });
}

function abortRangeCalls() {
  Object.values(abortableRangeCalls).forEach(xhr => {
    xhr.abort();
  });
}

function abortFileDownloadCall() {
  if (abortableFileDownloadCall) {
    abortableFileDownloadCall.abort();
  }
}