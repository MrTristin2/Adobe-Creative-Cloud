"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*************************************************************************
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2020 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by all applicable intellectual property laws,
 * including trade secret and or copyright laws.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/**
 * Class storing registry of components
 */
class ComponentRegistry {
  /**
   * Declares variables we'll be using specific to the instance.
   */
  constructor() {
    this._registry = new Map();
  }
  /**
   * Register a service.
   *
   * @params {String} componentName the key to store our service with,
   *  most likely use a Class definition of the instance we are
   *  storing, that way we don't have a bunch of strings floating around.
   * @params {Component} Component we want to register
   */


  register(componentName, Component) {
    this._registry.set(componentName, Component);
  }
  /**
   * Retrieve a service instance from the registry.
   *
   * @params {Class} serviceName the key of the instance we want.
   *
   * @returns {Object} Instance that exists at the key.
   */


  getComponent(componentName, props = {}) {
    const Component = this._registry.get(componentName);

    return /*#__PURE__*/_react.default.createElement(Component, props);
  }

}

var _default = new ComponentRegistry();

exports.default = _default;