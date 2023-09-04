"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _ErrorUtils = require("../util/ErrorUtils");

var _APICommands = require("../constants/APICommands");

var _PreviewCommands = _interopRequireDefault(require("../commands/PreviewCommands"));

var _AppCommands = _interopRequireDefault(require("../commands/AppCommands"));

var _AnnotationCommands = _interopRequireDefault(require("../commands/AnnotationCommands"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

const logEvent = (Command, data, options, services) => {
  if (Command instanceof _AnnotationCommands.default) {
    services.getService("AnalyticsProviderService").logEvent({
      workflow: "PersonalCommentingAPI",
      subcategory: data.command,
      type: options.type
    });
  }

  if (options.type === "failed") {
    const errorLog = (0, _ErrorUtils.getErrorLog)(options.error);
    services.getService("LoggingService").error(Command.constructor.getClassName(), data.command, errorLog);
  }
};

class CommandReceiverService {
  constructor() {
    this._commands = {};
    this._getCommands = _objectSpread(_objectSpread(_objectSpread({}, this._getCommandsFor(_APICommands.PreviewAPICommands, _PreviewCommands.default)), this._getCommandsFor(_APICommands.AnnotationAPICommands, _AnnotationCommands.default)), this._getCommandsFor(_APICommands.AppAPICommands, _AppCommands.default));
  }

  _getCommandsFor(commands, APICommand) {
    return Object.keys(commands).reduce((obj, item) => _objectSpread(_objectSpread({}, obj), {}, {
      [item]: () => {
        const className = APICommand.getClassName();

        if (this._commands[className]) {
          return Promise.resolve(this._commands[className]);
        }

        this._commands[className] = new APICommand();
        return Promise.resolve(this._commands[className]);
      }
    }), {});
  }

  executeCommand(data) {
    return new Promise((resolve, reject) => {
      if (this._getCommands[data.command]) {
        this._getCommands[data.command]().then(Command => {
          logEvent(Command, data, {
            type: "invoked"
          }, _ServiceRegistry.default);
          Command.executeCommand(data).then(result => {
            logEvent(Command, data, {
              type: "succeeded"
            }, _ServiceRegistry.default);
            resolve(result);
          }).catch(error => {
            logEvent(Command, data, {
              type: "failed",
              error
            }, _ServiceRegistry.default);
            reject(error);
          });
        });
      } else {
        reject("Command not supported.");
      }
    });
  }

}

exports.default = CommandReceiverService;