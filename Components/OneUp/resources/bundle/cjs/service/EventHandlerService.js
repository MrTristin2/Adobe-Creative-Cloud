"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _Events = require("../constants/Events");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

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
class EventHandlerService {
  constructor() {
    this._eventListenOn = [];
    this._enablePDFAnalytics = false;
    this._enableFilePreviewEvents = false;
    this._enablePageOverlayEvents = true;
    this._enableInternalEvents = false;
    this._eventListenerMap = {};
  }

  initialize() {
    this._registerDefaultEvents();
  }

  registerEventListener(eventType, eventListener) {
    const registerListener = (type, listener) => {
      if (!this._eventListenerMap[type]) {
        this._eventListenerMap[type] = [];
      }

      this._eventListenerMap[type].push(listener);
    };

    if (Array.isArray(eventType)) {
      eventType.forEach(type => registerListener(type, eventListener));
    } else {
      registerListener(eventType, eventListener);
    }
  }

  setEventListener(eventListener, options) {
    this._eventListener = eventListener;

    if (options && options.listenOn && options.listenOn.length > 0) {
      this._eventListenOn = options.listenOn;
    }

    if (options && options.enablePDFAnalytics) {
      this._enablePDFAnalytics = true;
    }

    if (options && options.enableInternalEvents) {
      this._enableInternalEvents = true;
    }

    if (options && options.enableFilePreviewEvents) {
      this._enableFilePreviewEvents = true;
    }

    if (options && options.enableAnnotationEvents) {
      this._enableAnnotationEvents = true;
    }

    if (options && typeof options.enablePageOverlayEvents === "boolean") {
      this._enablePageOverlayEvents = options.enablePageOverlayEvents;
    }
  }

  _internalEventListner(event) {
    if (this._eventListenerMap[event.type] && this._eventListenerMap[event.type].length > 0) {
      this._eventListenerMap[event.type].forEach(eventListener => eventListener({
        type: event.type,
        data: event.data
      }));
    }
  }

  _exposeEvent(data) {
    if (typeof this._eventListener !== "function") {
      return;
    }

    const eventType = data.type;
    let exposeEvent = true;

    if (_Events.InternalEvents[eventType]) {
      exposeEvent = this._enableInternalEvents;
    } else if (_Events.FilePreviewEvents[eventType]) {
      exposeEvent = this._enableFilePreviewEvents;
    } else if (_Events.OverlayEvents[eventType]) {
      exposeEvent = this._enablePageOverlayEvents;
    } else if (_Events.PDFAnalyticsEvents[eventType]) {
      exposeEvent = this._enablePDFAnalytics;
    } else if (_Events.AnnotationEvents[eventType]) {
      exposeEvent = this._enableAnnotationEvents;
    }

    if (!exposeEvent) {
      return;
    }

    if (this._eventListenOn.length !== 0 && this._eventListenOn.indexOf(eventType) === -1) {
      return;
    }

    const event = {
      type: eventType,
      data: data.data
    };

    this._eventListener(event);
  }

  _registerDefaultEvents() {
    this.registerEventListener(_Events.InternalEvents.RELOAD_APP, this._reloadListener.bind(this));
  }

  _shouldTakeActionOnInternalEvents() {
    return _ServiceRegistry.default.getService("AppStore").getConfig().takeActionOnInternalEvents;
  }

  _reloadListener() {
    if (this._shouldTakeActionOnInternalEvents()) {
      window.location.reload();
    }
  }

  handleEvent(eventData) {
    this._internalEventListner(eventData);

    this._exposeEvent(eventData);
  }

}

exports.default = EventHandlerService;