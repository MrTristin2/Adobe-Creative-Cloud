"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ServiceRegistry = void 0;

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
 * Class storing instances of classes we only want a single instance.
 */
class ServiceRegistry {
  /**
   * Declares variables we'll be using specific to the instance.
   */
  constructor() {
    this._registry = new Map();
  }
  /**
   * Get the services
   *
   * @returns {Map} Instance of registry
   */


  getServices() {
    return this._registry;
  }
  /**
   * Register a service.
   *
   * @params {Class} serviceName the key to store our service with,
   *  most likely use a Class definition of the instance we are
   *  storing, that way we don't have a bunch of strings floating around.
   * @params {Object} service instance we want to register
   */


  register(serviceName, service) {
    if (!serviceName) {
      throw new RangeError("service can't be undefined");
    }

    this._registry.set(serviceName, service);
  }
  /**
   * Retrieve a service instance from the registry.
   *
   * @params {Class} serviceName the key of the instance we want.
   *
   * @returns {Object} Instance that exists at the key.
   */


  getService(serviceName) {
    return this._registry.get(serviceName);
  }
  /**
   * Clone other service registry
   *
   * @params {Map} serviceMap
   */


  initServices(serviceMap) {
    if (!(serviceMap instanceof Map)) {
      throw new RangeError("serviceMap is not Map");
    } // We want to make sure incoming service map gets priority over our registry


    this._registry = new Map([...this._registry, ...serviceMap]);
  }

  clear() {
    this._registry = new Map();
  }

}

exports.ServiceRegistry = ServiceRegistry;

var _default = new ServiceRegistry();

exports.default = _default;