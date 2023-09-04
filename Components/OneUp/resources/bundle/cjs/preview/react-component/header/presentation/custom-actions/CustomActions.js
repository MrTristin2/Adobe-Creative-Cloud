"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classnames = _interopRequireDefault(require("classnames"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireWildcard(require("react"));

var _PropTypeCustomAction = require("../../prop-type-custom-action/PropTypeCustomAction");

var _TopBarAction = _interopRequireDefault(require("../../../icons/top-bar-action/TopBarAction"));

var _SeparatorView = _interopRequireDefault(require("../separator/SeparatorView"));

var _ServiceRegistry = _interopRequireDefault(require("../../../../../util/ServiceRegistry"));

require("!style-loader!css-loader!./CustomActions.css");

var _ConfigStoreConstants = require("../../../../../constants/ConfigStoreConstants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function insertTopBarSeparators(topbarActions, separatorIndex = 2) {
  if (topbarActions && topbarActions.length > separatorIndex) {
    topbarActions.splice(separatorIndex, 0, /*#__PURE__*/_react.default.createElement(_SeparatorView.default, null));
  }

  return topbarActions;
}

class CustomActions extends _react.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      actionsState: {}
    };

    this.renderPureReactActions = () => {
      const {
        actions
      } = this.props;
      const {
        actionsState
      } = this.state;
      return actions.map(({
        id,
        action: Action,
        showOnlyInTopBar,
        alwaysShow
      }) => {
        const {
          isVisible
        } = actionsState[id] || {};
        const actionClassNames = (0, _classnames.default)(["sdk-CustomActions-actionItem", {
          "sdk-CustomActions-alwaysShow": showOnlyInTopBar || alwaysShow
        }, {
          "sdk-CustomActions-actionItemHidden": isVisible === false
        }]);
        return /*#__PURE__*/_react.default.createElement("div", {
          key: id,
          className: actionClassNames
        }, /*#__PURE__*/_react.default.createElement(Action, {
          action: {
            hide: this.modifyActionsState.bind(this, id, "isVisible", false),
            show: this.modifyActionsState.bind(this, id, "isVisible", true)
          }
        }));
      });
    };

    this.renderOurActions = () => {
      const appStore = _ServiceRegistry.default.getService("AppStore");

      const {
        actions,
        makeToolsInactive
      } = this.props;
      const topbarActions = actions.map(action => {
        const {
          id,
          alwaysShow
        } = action;
        let inActiveLabel = "";
        let inActiveClass = "";

        if (makeToolsInactive && _ConfigStoreConstants.ANNOTATION_TOOL_TYPE_IDS.includes(id)) {
          inActiveLabel = appStore.intl.formatMessage({
            id: "tools.inactive.label"
          });
          inActiveClass = "sdk-CustomActions-actionItem-inactive";
        }

        const actionClassNames = (0, _classnames.default)(["sdk-CustomActions-actionItem", {
          "sdk-CustomActions-alwaysShow": alwaysShow
        }, inActiveClass]);
        return /*#__PURE__*/_react.default.createElement("div", {
          key: id,
          className: actionClassNames
        }, /*#__PURE__*/_react.default.createElement(_TopBarAction.default, {
          action: action,
          inActiveLabel: inActiveLabel
        }));
      });
      return insertTopBarSeparators(topbarActions);
    };
  }

  // eslint-disable-line
  modifyActionsState(id, key, value) {
    const {
      actionsState
    } = this.state;
    const newState = {
      [key]: value
    };
    this.setState({
      actionsState: _objectSpread(_objectSpread({}, actionsState), {}, {
        [id]: newState
      })
    });
  }

  render() {
    const {
      actions
    } = this.props;
    let renderedActions = null;

    if (actions && actions.length > 0 && actions[0].label) {
      renderedActions = this.renderOurActions();
    } else {
      renderedActions = this.renderPureReactActions();
    }

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "sdk-CustomActions-actions"
    }, renderedActions);
  }

}

CustomActions.propTypes = {
  actions: _propTypes.default.arrayOf(_propTypes.default.oneOfType([_PropTypeCustomAction.propTypeJsonCustomAction, _PropTypeCustomAction.propTypeReactCustomAction])).isRequired,
  makeToolsInactive: _propTypes.default.bool
};
CustomActions.defaultProps = {
  makeToolsInactive: false
};
var _default = CustomActions;
exports.default = _default;