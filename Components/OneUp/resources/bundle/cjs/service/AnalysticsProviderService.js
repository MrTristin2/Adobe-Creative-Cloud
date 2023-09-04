"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dcCore = require("dc-core");

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
const CUSTOM_EVENTS = {
  workflows: {
    filePreview: ["preview", "show", "show"],
    brandArea: ["BrandArea", "Use", "Clicked"],
    helpIcon: ["Help", "Use", "Clicked"],
    legalNotices: ["Legal Notices", "Use", "Clicked"],
    sideMenuCallToAction: ["SideMenuCallToAction", "Use", "Clicked"],
    hudBrandArea: ["HUDBrandArea", "Use", "Clicked"],
    floatingBrandArea: ["FloatingBrandArea", "Use", "Clicked"]
  },
  customs: {
    clickCtxt: "adb.event.context.dcweb.clickcontext"
  }
};

class AnalyticsProviderService {
  get CUSTOM_EVENTS() {
    return CUSTOM_EVENTS;
  }
  /**
   * @method
   * @description
   * Log an event to Adobe analytics using the interface provided by analytics provider
   *
   * @param {String} event event type
   * @param {Object} custom event context on which it is trigerred like click context
   */


  logEvent(event, custom = {}) {
    if (!this.eventSender) {
      this.eventSender = _dcCore.analytics.getEventSender("dc-view-sdk");
    }

    this.eventSender({
      event,
      custom
    });
  }
  /**
   * @method
   * @description
   * Formate the event for logging into Adobe analytics
   *
   * @param {String} customEvent custom event type
   * @param {String} value custom event value
   * @param {String} contextData contextData can have event context on which it is trigerred
   * like click context
   */


  sendEvent(customEvent, value, contextData = {}) {
    const data = this.CUSTOM_EVENTS.workflows[customEvent] || [];
    const [workflow, subcategory, type, subtype] = data;

    if (workflow) {
      const event = {
        workflow,
        subcategory,
        type,
        subtype
      };

      if (value) {
        event.value = value;
      }

      const custom = {};
      Object.keys(contextData).filter(e => this.CUSTOM_EVENTS.customs[e]).forEach(e => {
        const key = this.CUSTOM_EVENTS.customs[e];
        custom[key] = contextData[e];
      });
      this.logEvent(event, custom);
    } else {
      _ServiceRegistry.default.getService("LoggingService").info("AnalyticsProviderService", `No custom event found ${customEvent}`);
    }
  }

}

exports.default = AnalyticsProviderService;
