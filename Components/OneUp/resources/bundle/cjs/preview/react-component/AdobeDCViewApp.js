"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Provider = _interopRequireDefault(require("@react/react-spectrum/Provider"));

var _reactIntl = require("react-intl");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mobxReact = require("mobx-react");

var _react = _interopRequireWildcard(require("react"));

var _dcCore = require("dc-core");

var _ServiceRegistry = _interopRequireDefault(require("../../util/ServiceRegistry"));

var _ComponentRegistry = _interopRequireDefault(require("../../util/ComponentRegistry"));

var _Events = _interopRequireDefault(require("../../constants/Events"));

var _class;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const THEME = {
  LIGHT: "light",
  DARK: "dark",
  DARKEST: "darkest" // only for design mock

};

let AdobeDCViewApp = (0, _mobxReact.observer)(_class = class AdobeDCViewApp extends _react.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      theme: THEME.LIGHT
    };

    const appStore = _ServiceRegistry.default.getService("AppStore");

    this.supportDarkMode = appStore.getConfig().supportDarkMode;
    this.userLocale = appStore.configStore.getConfig().locale;
    this.app = this.getLocalizedApp(this.userLocale);

    if (this.supportDarkMode) {
      this.prefersDarkMediQuery = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)");
    }
  }

  componentDidMount() {
    if (this.supportDarkMode) {
      this.setSpectrumTheme();

      if (this.prefersDarkMediQuery.addEventListener) {
        // Chrome & Firefox
        this.prefersDarkMediQuery.addEventListener("change", () => this.setSpectrumTheme());
      } else if (this.prefersDarkMediQuery.addListener) {
        // Safari
        this.prefersDarkMediQuery.addListener(() => this.setSpectrumTheme());
      }
    }
  }

  getLocalizedApp(loc) {
    // Localization layer for web app.
    const LocalizableApp = props => /*#__PURE__*/_react.default.createElement(_reactIntl.IntlProvider, {
      locale: props.locale,
      messages: props.messages
    }, _ComponentRegistry.default.getComponent("AppContainer", props));

    LocalizableApp.propTypes = {
      locale: _propTypes.default.objectOf(_propTypes.default.string).isRequired,
      messages: _propTypes.default.objectOf(_propTypes.default.string).isRequired
    };
    return _dcCore.locale2.withTranslations(LocalizableApp, _ServiceRegistry.default.getService("LocaleService").loadMergedTranslations, {
      locale: loc
    });
  }

  shouldBlockRender() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    return appStore.appRenderingBlocked && !appStore.getConfig().showSimpleLoader;
  }

  log() {
    _dcCore.logging.getLogger("App").error("File preview blocked as preview failed to load");
  }

  getProps() {
    return {};
  }

  getDOMId() {
    return "dc-view-sdk-bundle";
  }

  setSpectrumTheme() {
    const theme = this.prefersDarkMediQuery.matches ? THEME.DARK : THEME.LIGHT;
    this.setState({
      theme
    }); // change scroll bars color

    document.documentElement.style.setProperty("color-scheme", theme);
  }

  componentWillUnmount() {
    _ServiceRegistry.default.getService("EventsService").sendEvent(_Events.default.VIEWER_UNMOUNT);

    const fileDownloadAbortable = _ServiceRegistry.default.getService("AppStore").getConfig().fileDownloadAbortable;

    if (fileDownloadAbortable) {
      _ServiceRegistry.default.getService("FileApi").abortFileDownload();
    }

    if (this.supportDarkMode) {
      if (this.prefersDarkMediQuery.removeEventListener) {
        // Chrome & Firefox
        this.prefersDarkMediQuery.removeEventListener("change", () => this.setSpectrumTheme());
      } else if (this.prefersDarkMediQuery.removeListener) {
        // Safari
        this.prefersDarkMediQuery.removeListener(() => this.setSpectrumTheme());
      }
    }
  }

  render() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const providerCss = {
      height: "100%"
    };
    const props = this.getProps();

    if (this.shouldBlockRender()) {
      this.log();
      return /*#__PURE__*/_react.default.createElement(_Provider.default, _extends({
        locale: this.userLocale,
        style: providerCss
      }, props, {
        theme: this.state.theme
      }), /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null));
    }

    if (appStore.isLBPreset) {
      providerCss.backgroundColor = "transparent";
    }

    const App = this.app;
    return /*#__PURE__*/_react.default.createElement(_Provider.default, _extends({
      theme: this.state.theme,
      id: this.getDOMId(),
      locale: this.userLocale,
      style: providerCss
    }, props), /*#__PURE__*/_react.default.createElement(App, this.props));
  }

}) || _class;

exports.default = AdobeDCViewApp;