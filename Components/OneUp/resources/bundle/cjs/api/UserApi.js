"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _CallbackTypes = _interopRequireDefault(require("../constants/CallbackTypes"));

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const DEFAULT_USER_INFO = {
  name: "Guest",
  firstName: "",
  lastName: "",
  email: "",
  isAdmin: false,
  showUpsell: false,
  isDefaultApp: false,
  enableDefaultAppReminder: false
};

const logInfo = (err, ref, serviceRegistry) => {
  const loggingService = serviceRegistry.getService("LoggingService");
  loggingService.info("UserApi", ref, err);
};

const maskUserInfo = (userInfo, serviceRegistry) => {
  const maskedUser = _objectSpread(_objectSpread({}, DEFAULT_USER_INFO), userInfo);

  maskedUser.userLocale = serviceRegistry.getService("AppStore").configStore.getConfig().locale || "en-US";
  const showProfilePicture = serviceRegistry.getService("AppStore").configStore.getConfig().noRestriction;

  if (showProfilePicture === false && maskedUser.pictureURL) {
    delete maskedUser.pictureURL;
  }

  return maskedUser;
};
/**
 * @class
 * @description
 * The class provides methods related to user profile and their settings.
 */


class UserApi {
  constructor() {
    this.setUserSettings = userSetting => new Promise((resolve, reject) => {
      const callbackService = _ServiceRegistry.default.getService("CallbackService");

      if (callbackService.hasCallback(_CallbackTypes.default.SET_USER_SETTING_API) && callbackService.hasCallback(_CallbackTypes.default.GET_USER_SETTING_API)) {
        const setSettingCallback = callbackService.getCallback(_CallbackTypes.default.SET_USER_SETTING_API);
        setSettingCallback(userSetting).then(response => {
          if (response.code === _ApiConstants.default.API_RESPONSE.SUCCESS) {
            resolve();
          } else {
            logInfo(response, "Invalid setUserSettings response.", _ServiceRegistry.default);
            reject();
          }
        }).catch(err => {
          logInfo(err, "Promise rejected for setUserSettings.", _ServiceRegistry.default);
          reject();
        });
      } else {
        this.settingStorage = userSetting;
        resolve();
      }
    });

    this.settingStorage = {};
  }

  initialize() {
    return this.getUserProfile();
  }
  /**
   * @method
   * @description
   * It provides the interface to get user profile information.
   *
   * @returns Returns promise which resolve with userInfo
   */


  getUserProfile() {
    return new Promise((resolve, reject) => {
      const callbackService = _ServiceRegistry.default.getService("CallbackService");

      const appStore = _ServiceRegistry.default.getService("AppStore");

      let userInfo = appStore.getUserInfo();

      if (userInfo && Object.keys(userInfo).length > 0) {
        resolve(userInfo);
      } else if (callbackService.hasCallback(_CallbackTypes.default.GET_USER_PROFILE_API)) {
        const userProfileCallback = callbackService.getCallback(_CallbackTypes.default.GET_USER_PROFILE_API);
        userProfileCallback().then(response => {
          if (response.code === _ApiConstants.default.API_RESPONSE.SUCCESS) {
            userInfo = response.data.userProfile;
            appStore.setUserInfo(maskUserInfo(userInfo, _ServiceRegistry.default));

            const analyticsProviderService = _ServiceRegistry.default.getService("AnalyticsProviderService");

            const workflow = "UserProfile";
            const subcategory = "Properties";

            if (userInfo.isAdmin) {
              analyticsProviderService.logEvent({
                workflow,
                subcategory,
                type: "isAdmin"
              });
            }

            if (userInfo.showUpsell) {
              analyticsProviderService.logEvent({
                workflow,
                subcategory,
                type: "showUpsell"
              });
            }

            if (userInfo.isDefaultApp) {
              analyticsProviderService.logEvent({
                workflow,
                subcategory,
                type: "isDefaultApp"
              });
            }

            resolve(appStore.getUserInfo());
          } else {
            logInfo(response, "Invalid getUserInfo response.", _ServiceRegistry.default);
            reject();
          }
        }).catch(err => {
          logInfo(err, "Promise rejected for getUserInfo.", _ServiceRegistry.default);
          reject();
        });
      } else {
        resolve(maskUserInfo({}, _ServiceRegistry.default));
      }
    });
  }
  /**
   * @method
   * @description
   * It provides the interface to get user setting information.
   *
   * @returns Returns promise which resolve with usersettings
   */


  getUserSettings() {
    return new Promise((resolve, reject) => {
      const callbackService = _ServiceRegistry.default.getService("CallbackService");

      if (callbackService.hasCallback(_CallbackTypes.default.GET_USER_SETTING_API)) {
        const getSettingCallback = callbackService.getCallback(_CallbackTypes.default.GET_USER_SETTING_API);
        getSettingCallback().then(response => {
          if (response.code === _ApiConstants.default.API_RESPONSE.SUCCESS) {
            resolve(response.data.setting);
          } else {
            logInfo(response, "Invalid getUserSettings response", _ServiceRegistry.default);
            reject();
          }
        }).catch(err => {
          logInfo(err, "Promise rejected for getUserSettings.", _ServiceRegistry.default);
          reject();
        });
      } else {
        resolve(this.settingStorage);
      }
    });
  }
  /**
   * @method
   * @description
   * It provides the interface to set the user setting information
   *
   *
   * @returns Returns promise which resolve if successful
   * @param userSetting
   */


}

var _default = UserApi;
exports.default = _default;