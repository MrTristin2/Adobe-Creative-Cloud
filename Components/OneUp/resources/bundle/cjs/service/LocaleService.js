"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _reactIntl = require("react-intl");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _cs = _interopRequireDefault(require("react-intl/locale-data/cs"));

var _da = _interopRequireDefault(require("react-intl/locale-data/da"));

var _de = _interopRequireDefault(require("react-intl/locale-data/de"));

var _en = _interopRequireDefault(require("react-intl/locale-data/en"));

var _es = _interopRequireDefault(require("react-intl/locale-data/es"));

var _fi = _interopRequireDefault(require("react-intl/locale-data/fi"));

var _fr = _interopRequireDefault(require("react-intl/locale-data/fr"));

var _it = _interopRequireDefault(require("react-intl/locale-data/it"));

var _ja = _interopRequireDefault(require("react-intl/locale-data/ja"));

var _ko = _interopRequireDefault(require("react-intl/locale-data/ko"));

var _nb = _interopRequireDefault(require("react-intl/locale-data/nb"));

var _nl = _interopRequireDefault(require("react-intl/locale-data/nl"));

var _pl = _interopRequireDefault(require("react-intl/locale-data/pl"));

var _pt = _interopRequireDefault(require("react-intl/locale-data/pt"));

var _ru = _interopRequireDefault(require("react-intl/locale-data/ru"));

var _sv = _interopRequireDefault(require("react-intl/locale-data/sv"));

var _tr = _interopRequireDefault(require("react-intl/locale-data/tr"));

var _zh = _interopRequireDefault(require("react-intl/locale-data/zh"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const zz = [{
  locale: "zz-ZZ",
  fields: _en.default[0].fields,
  pluralRuleFunction: _en.default[0].pluralRuleFunction
}]; // Add locale data for supported languages.

(0, _reactIntl.addLocaleData)([..._cs.default, ..._da.default, ..._de.default, ..._en.default, ..._es.default, ..._fi.default, ..._fr.default, ..._it.default, ..._ja.default, ..._ko.default, ..._nb.default, ..._nl.default, ..._pl.default, ..._pt.default, ..._ru.default, ..._sv.default, ..._tr.default, ..._zh.default, ...zz]);
const DEFAULT_LOCALE = "en-US";
const loadedLocaleData = {};
const ALLOWED_LOCALES = window.adobe_dc_sdk && window.adobe_dc_sdk.cache ? Object.keys(window.adobe_dc_sdk.cache.supportedLocales) : ["en-US"];
ALLOWED_LOCALES.forEach(loc => loadedLocaleData[loc] = require(`translations/${loc}.json`)); // eslint-disable-line

const getFinalLocale = inLocale => {
  if (!inLocale || inLocale.indexOf("-") < 0) {
    return DEFAULT_LOCALE;
  }

  const localeMap = inLocale.split("-");
  const normalizedLocale = `${localeMap[0].toLowerCase()}-${localeMap[1].toUpperCase()}`;

  if (ALLOWED_LOCALES.indexOf(normalizedLocale) < 0) {
    return DEFAULT_LOCALE;
  }

  return normalizedLocale;
};

class LocaleService {
  constructor() {
    this.loadMergedTranslations = this.loadMergedTranslations.bind(this);
    this.loadedLocaleData = loadedLocaleData;
  }
  /**
   * @method
   * @description
   * it provides all the supported locale
   */


  static getAllAllowedLocales() {
    return ALLOWED_LOCALES;
  }

  initialize(locale) {
    this._locale = getFinalLocale(locale);
  }
  /**
   * @method
   * @description
   * provides the current locale
   */


  getLocale() {
    return this._locale;
  }
  /**
   * @method
   * @description
   * it provides the translated locale data merged with our default locale (en-US)
   *
   * @param loc locale
   * @return {Promise} return Promise resolved with locale data
   */


  _loadTranslationsWrapper(loc) {
    return Promise.resolve(_objectSpread(_objectSpread({}, this.loadedLocaleData["en-US"]), this.loadedLocaleData[loc]));
  }
  /**
   * @method
   * @description
   * it provided the final translated locale data merged with the default locale and
   * localisation string that is provided during initialisation or at the time of
   * file preview
   *
   * @param loc locale
   *
   * @return {Promise} return Promise resolved with merged locale data
   */


  loadMergedTranslations(loc) {
    return new Promise((resolve, reject) => {
      const appStore = _ServiceRegistry.default.getService("AppStore");

      this._loadTranslationsWrapper(loc).then(translationFile => {
        const localizationStrings = _objectSpread(_objectSpread({}, appStore.configStore.getConfig().localizationStrings), appStore.configStore.getActionConfig("preview").localizationStrings);

        resolve(_objectSpread(_objectSpread({}, translationFile), localizationStrings));
      }).catch(err => reject(err));
    });
  }

}

exports.default = LocaleService;