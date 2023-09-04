"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculateIsEditAllowed = calculateIsEditAllowed;
exports.calculateIsPrintAllowed = calculateIsPrintAllowed;
exports.sortTopbarActionsList = exports.rejectAPIPromise = exports.isValidMobileViewMode = exports.isSharedArrayBufferSupported = exports.isPositiveInt = exports.isPositiveFloat = exports.isNonEmptyString = exports.isNonEmptyObject = exports.isNonEmptyArray = exports.isMobileBrowser = exports.isInt = exports.isIOS = exports.isDeviceBrowser = exports.isAndroid = exports.getDOMElement = exports.getBrowserOSDeviceInfo = exports.fixedToDigits = exports.deepCopyObject = void 0;

var _ServiceRegistry = _interopRequireDefault(require("./ServiceRegistry"));

var _Events = _interopRequireWildcard(require("../constants/Events"));

var _ViewMode = _interopRequireDefault(require("../constants/ViewMode"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function calculateIsPrintAllowed(docPermissions) {
  if (docPermissions.documentSecurity && docPermissions.documentSecurity !== "None") {
    return false;
  }

  if (docPermissions.documentRestrictions) {
    const restrictions = docPermissions.documentRestrictions;
    return !!restrictions.printingAllowed;
  }

  return true;
}

function calculateIsEditAllowed(docPermissions, commentingOn, formFillingOn) {
  if (docPermissions.documentSecurity && docPermissions.documentSecurity !== "None") {
    return false;
  }

  if (docPermissions.documentRestrictions) {
    const restrictions = docPermissions.documentRestrictions;

    if (!restrictions.modifyingContentAllowed || !restrictions.signingAllowed) {
      return false;
    }

    if (commentingOn) {
      return !!restrictions.commentingAllowed;
    }

    if (formFillingOn) {
      return !!restrictions.formFillingAllowed;
    }

    return false;
  }

  return true;
}

const sortTopbarActionsList = (topbarActionsList, toolsOrder) => {
  if (topbarActionsList && topbarActionsList.length > 0) {
    const topbarActions = topbarActionsList.filter(topbarAction => toolsOrder.indexOf(topbarAction.id) !== -1);
    return topbarActions.sort((a, b) => toolsOrder.indexOf(a.id) - toolsOrder.indexOf(b.id));
  }

  return topbarActionsList;
};

exports.sortTopbarActionsList = sortTopbarActionsList;

const isDeviceBrowser = () => {
  const userAgent = new UAParser();
  const deviceType = userAgent.getDevice().type;
  return !!deviceType && deviceType.match(/(phone|mobile|tablet)/i) !== null;
};

exports.isDeviceBrowser = isDeviceBrowser;

const isMobileBrowser = () => {
  const userAgent = new UAParser();
  const deviceType = userAgent.getDevice().type;
  return !!deviceType && deviceType.match(/(phone|mobile)/i) !== null;
};

exports.isMobileBrowser = isMobileBrowser;

const isIOS = () => {
  const userAgent = new UAParser();
  const os = userAgent.getOS().name;
  return os.toLowerCase() === "ios";
};

exports.isIOS = isIOS;

const isAndroid = () => {
  const userAgent = new UAParser();
  const os = userAgent.getOS().name;
  return os.toLowerCase() === "android";
};

exports.isAndroid = isAndroid;

const getBrowserOSDeviceInfo = () => {
  const userAgent = new UAParser();
  let browser = "-";
  let browserVersion = "-";
  let browserMajor = "-";
  let os = "-";
  let osVersion = "-";
  let deviceType = "-";
  const browserInfo = userAgent.getBrowser();

  if (browserInfo && browserInfo.name) {
    browser = browserInfo.name;
    browserVersion = browserInfo.version;
    browserMajor = browserInfo.major;
  }

  const osInfo = userAgent.getOS();

  if (osInfo && osInfo.name) {
    os = osInfo.name;
    osVersion = osInfo.version;
  }

  const deviceInfo = userAgent.getDevice();

  if (deviceInfo && deviceInfo.type) {
    deviceType = deviceInfo.type;
  }

  return {
    browser,
    browserVersion,
    browserMajor,
    os,
    osVersion,
    deviceType
  };
};

exports.getBrowserOSDeviceInfo = getBrowserOSDeviceInfo;

const rejectAPIPromise = code => {
  [_Events.default.APP_RENDERING_FAILED, _Events.InternalEvents.FILE_PREVIEW_FAILED].forEach(type => {
    _ServiceRegistry.default.getService("EventHandlerService").handleEvent({
      type,
      data: {
        code
      }
    });
  });
};

exports.rejectAPIPromise = rejectAPIPromise;

const isSharedArrayBufferSupported = () => {
  let isSupported = false;
  let logMessage;

  try {
    isSupported = !!window.SharedArrayBuffer;
    logMessage = `isSharedArrayBufferSupported: ${isSupported}`;
  } catch (e) {
    logMessage = "Error while checking isSharedArrayBufferSupported";
  }

  _ServiceRegistry.default.getService("LoggingService").info("AppUtil", logMessage);

  return isSupported;
};

exports.isSharedArrayBufferSupported = isSharedArrayBufferSupported;

const fixedToDigits = (data, N) => Number(Number(data).toFixed(N));

exports.fixedToDigits = fixedToDigits;

const isNonEmptyArray = arr => Array.isArray(arr) && arr.length > 0;

exports.isNonEmptyArray = isNonEmptyArray;

const isInt = value => Number.isInteger(value); // For time being allowing int as valid float.


exports.isInt = isInt;

const isFloat = value => Number(value) === value;

const isPositiveFloat = value => isFloat(value) && value > 0;

exports.isPositiveFloat = isPositiveFloat;

const isPositiveInt = number => isInt(number) && number > 0;

exports.isPositiveInt = isPositiveInt;

const isNonNullOrUndefined = obj => obj !== null && obj !== undefined;

const isNonEmptyString = str => typeof str === "string" && str.length > 0;

exports.isNonEmptyString = isNonEmptyString;

const isNonEmptyObject = obj => typeof obj === "object" && Object.keys(obj).length > 0;

exports.isNonEmptyObject = isNonEmptyObject;

const deepCopyObject = obj => {
  const newObj = _objectSpread({}, obj);

  Object.keys(obj).forEach(key => {
    if (isNonNullOrUndefined(obj[key]) && typeof obj[key] === "object" && !obj[key].length) {
      newObj[key] = _objectSpread(_objectSpread({}, newObj[key]), deepCopyObject(obj[key]));
    }
  });
  return newObj;
};

exports.deepCopyObject = deepCopyObject;

const getDOMElement = () => window.document.getElementById("dc-view-sdk-bundle");

exports.getDOMElement = getDOMElement;

const isValidMobileViewMode = viewMode => !![_ViewMode.default.SINGLE_PAGE, _ViewMode.default.CONTINUOUS].find(e => e === viewMode);

exports.isValidMobileViewMode = isValidMobileViewMode;
