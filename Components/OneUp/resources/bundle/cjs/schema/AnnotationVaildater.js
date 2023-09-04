"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isValidAnnotations = exports.filterAnnotation = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _AnnotationValidatorUtil = require("./AnnotationValidatorUtil");

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
* Validate annotations
*
* @param annotations [{JSON}]
* @return {boolean} true if standard
*/
const isValidAnnotations = annotations => {
  const appStore = _ServiceRegistry.default.getService("AppStore");

  let validMap = annotations.map((annot, index) => (0, _AnnotationValidatorUtil.annotationValidator)(annot) ? {
    isValid: true
  } : {
    isValid: false,
    error: `${annotations.length > 1 ? `Annotation at index ${index} :` : ""}${_AnnotationValidatorUtil.errors.map(err => err.message).join(" ")}`
  });
  let hasInvalid = validMap.filter(status => status.isValid !== true);

  if (hasInvalid.length > 0) {
    return {
      isValid: false,
      errors: hasInvalid.map(res => res.error)
    };
  }

  const ids = [];
  validMap = annotations.map(annotation => {
    if (annotation.motivation === "commenting") {
      let error = "";

      if (appStore.pdfMetadata && annotation.target.selector.node.index > appStore.pdfMetadata.numPages - 1) {
        error += `Annotation id ${annotation.id} is not having valid index. `;
      }

      if (appStore.fileInfoList[0].metaData.id !== annotation.target.source) {
        error += `Annotation ${annotation.id} is not having valid source. `;
      }

      if (ids.indexOf(annotation.id) !== -1) {
        error += `Annotation id ${annotation.id} is duplicate`;
      }

      ids.push(annotation.id);
      return error ? {
        isValid: false,
        error
      } : {
        isValid: true
      };
    }

    return {
      isValid: true
    };
  });
  hasInvalid = validMap.filter(status => status.isValid !== true);

  if (hasInvalid.length > 0) {
    return {
      isValid: false,
      errors: hasInvalid.map(res => res.error)
    };
  }

  return {
    isValid: true,
    annotations
  };
};
/**
* Validate annotations
*
* @param {JSON} annotation
* @return {boolean} true if standard
*/


exports.isValidAnnotations = isValidAnnotations;

const filterAnnotation = annotation => {
  const valid = (0, _AnnotationValidatorUtil.annotationValidator)(annotation);
  return valid ? annotation : [];
};

exports.filterAnnotation = filterAnnotation;
