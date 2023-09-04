"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.transformAnnotation = exports.normalizeShapeAnnotation = exports.normalizeFreeTextAnnotation = exports.modifyFilter = exports.isValidStrokeWidth = exports.isValidSelector = exports.isValidRGBColor = exports.isValidFontSize = exports.getValidConfigs = exports.getValidAnnotationTypes = exports.getValidAnnotationModeOptions = exports.getRulesForCssText = exports.getAnnotationType = exports.createAnnotationObject = exports.RGBToHex = void 0;

var _AppUtil = require("./AppUtil");

var _ServiceRegistry = _interopRequireDefault(require("./ServiceRegistry"));

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
const annotJSONSequence = ["@context", "id", "type", "motivation", "bodyValue", "target", "creator", "created", "modified"];
const classname = "CommentsUtils";
/**
 * Creates annotation object by deep cloning
 *
 * @param {JSON} annotation - standard json
 * @return {JSON} annotation - copy json
 */

const createAnnotationObject = annotation => {
  const annotationObject = (0, _AppUtil.deepCopyObject)(annotation);
  annotationObject["@context"] = ["https://www.w3.org/ns/anno.jsonld", "https://comments.acrobat.com/ns/anno.jsonld"];

  if (annotationObject.motivation === "commenting") {
    annotationObject.target.source = _ServiceRegistry.default.getService("AppStore").fileInfoList[0].metaData.id;
  }

  annotationObject.created = `${new Date(Date.parse(annotationObject.created)).toISOString().split(".")[0]}Z`;
  annotationObject.modified = `${new Date(Date.parse(annotationObject.modified)).toISOString().split(".")[0]}Z`;
  const sequencedAnnotationObject = JSON.parse(JSON.stringify(annotationObject, annotJSONSequence));
  sequencedAnnotationObject.target = annotationObject.target;
  sequencedAnnotationObject.creator = annotationObject.creator;

  if (sequencedAnnotationObject.motivation === "commenting" && sequencedAnnotationObject.target.selector.subtype === "freetext") {
    sequencedAnnotationObject.stylesheet = annotationObject.stylesheet;
  }

  return sequencedAnnotationObject;
};

exports.createAnnotationObject = createAnnotationObject;

const modifyFilter = filters => {
  const modifiedFilter = (0, _AppUtil.deepCopyObject)(filters);

  if (filters.pageRange) {
    const {
      startPage,
      endPage
    } = filters.pageRange; // page numbers should be 0 based for comments dropin

    modifiedFilter.pageRange = {
      startPage: startPage - 1,
      endPage: endPage - 1
    };
  }

  return modifiedFilter;
};

exports.modifyFilter = modifyFilter;

const getValidConfigs = () => ["downloadWithAnnotations", "printWithAnnotations", "showCommentsPanel", "showToolsOnTextSelection", "showToolbar"];

exports.getValidConfigs = getValidConfigs;

const getValidAnnotationTypes = () => {
  const isEraserToolEnabled = _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableEraserAnnotationTool;

  const isFreeTextToolEnabled = _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableFreeTextAnnotationTool;

  return ["highlight", "strikeout", "underline", "note", "shape", ...(isFreeTextToolEnabled ? ["freetext"] : []), ...(isEraserToolEnabled ? ["eraser"] : [])];
};

exports.getValidAnnotationTypes = getValidAnnotationTypes;

const getValidAnnotationModeOptions = () => ["defaultColor", "cursor", "fontSize", "strokeWidth"];

exports.getValidAnnotationModeOptions = getValidAnnotationModeOptions;

const isValidRGBColor = color => /^#[0-9A-F]{6}$/i.test(color);

exports.isValidRGBColor = isValidRGBColor;

const isValidFontSize = size => {
  if (typeof size !== "string") {
    return false;
  }

  const fontSize = size.match(/(\d*\.?\d*)(.*)/);

  if (fontSize[2] !== "px") {
    return false;
  }

  return true;
};

exports.isValidFontSize = isValidFontSize;

const isValidStrokeWidth = width => typeof width === "number";

exports.isValidStrokeWidth = isValidStrokeWidth;

const isValidSelector = (boundary, annotation) => {
  const buffer = 50;

  const isPointInside = ([x1, y1, x2, y2], x, y) => x >= Math.min(x1, x2) - buffer && x <= Math.max(x1, x2) + buffer && y >= Math.min(y1, y2) - buffer && y <= Math.max(y1, y2) + buffer;

  const isPointsInside = (array, arrayInside) => {
    let isInside = true;

    for (let i = 0; i < arrayInside.length; i += 2) {
      if (!isPointInside(array, arrayInside[i], arrayInside[i + 1])) {
        isInside = false;
        break;
      }
    }

    return isInside;
  };

  const {
    boundingBox,
    quadPoints,
    inkList
  } = annotation.target.selector;
  const logObject = {
    pageBoundaries: boundary,
    annotSelector: annotation.target.selector
  };
  let isValidBox = isPointsInside(boundary, boundingBox);

  if (isValidBox) {
    if (inkList) {
      for (let i = 0; i < inkList.length; i += 1) {
        isValidBox = isPointsInside(boundingBox, inkList[i]);

        if (!isValidBox) {
          _ServiceRegistry.default.getService("LoggingService").info(classname, "Annotation inkList out of page boundary", JSON.stringify(logObject));

          break;
        }
      }
    } else if (quadPoints) {
      isValidBox = isPointsInside(boundingBox, quadPoints);

      if (!isValidBox) {
        _ServiceRegistry.default.getService("LoggingService").info(classname, "Annotation quadPoints out of page boundary", JSON.stringify(logObject));
      }
    }
  } else {
    _ServiceRegistry.default.getService("LoggingService").info(classname, "Annotation boundingBox out of page boundary", JSON.stringify(logObject));
  }

  return isValidBox;
};

exports.isValidSelector = isValidSelector;

const getAnnotationType = annot => annot.target.selector.subtype;

exports.getAnnotationType = getAnnotationType;

const normalizeAnnotationFontSize = fontSize => {
  let normalizeFontSize = Number(fontSize);
  if (normalizeFontSize > 24) normalizeFontSize = 24;
  if (normalizeFontSize < 6) normalizeFontSize = 6;
  return normalizeFontSize;
};

const normalizeAnnotationstrokeWidth = strokeWidth => {
  let normalizeStrokeWidth = Number(strokeWidth);
  if (normalizeStrokeWidth > 12) normalizeStrokeWidth = 12;
  if (normalizeStrokeWidth < 1) normalizeStrokeWidth = 1;
  return normalizeStrokeWidth;
};

const normalizeShapeAnnotation = annot => {
  const annotation = annot;
  const strokeWidth = annotation.target.selector.strokeWidth;
  const normalizeStrokeWidth = normalizeAnnotationstrokeWidth(strokeWidth);
  annotation.target.selector.strokeWidth = normalizeStrokeWidth;
  return annotation;
};

exports.normalizeShapeAnnotation = normalizeShapeAnnotation;

const RGBToHex = rgb => {
  // Choose correct separator
  let rgbValue = rgb;
  const sep = rgbValue.indexOf(",") > -1 ? "," : " "; // Turn "rgb(r,g,b)" into [r,g,b]

  rgbValue = rgbValue.substr(4).split(")")[0].split(sep);
  let r = (+rgbValue[0]).toString(16);
  let g = (+rgbValue[1]).toString(16);
  let b = (+rgbValue[2]).toString(16);
  if (r.length === 1) r = `0${r}`;
  if (g.length === 1) g = `0${g}`;
  if (b.length === 1) b = `0${b}`;
  return `#${r}${g}${b}`;
};

exports.RGBToHex = RGBToHex;

const getRulesForCssText = styleContent => {
  const doc = document.implementation.createHTMLDocument("");
  const styleElement = document.createElement("style");
  styleElement.textContent = styleContent;
  doc.body.appendChild(styleElement);
  return styleElement.sheet.cssRules;
};

exports.getRulesForCssText = getRulesForCssText;

const normalizeFreeTextAnnotation = annot => {
  const annotation = annot;

  if (annot.stylesheet) {
    const stylesheetValue = annot.stylesheet.value;
    const rules = getRulesForCssText(stylesheetValue);
    const size = rules[0].style.fontSize || "12px";
    const fontSize = size.match(/(\d*\.?\d*)(.*)/);
    const normalizeFontSize = normalizeAnnotationFontSize(fontSize[1]);
    const fontFamily = rules[0].style.fontFamily || "Helvetica";
    const color = RGBToHex(rules[0].style.color);
    annotation.target.selector.style = {
      fontSize: normalizeFontSize,
      fontName: fontFamily,
      color
    };
    delete annotation.stylesheet;
  }

  return annotation;
};

exports.normalizeFreeTextAnnotation = normalizeFreeTextAnnotation;

const transformAnnotation = annot => {
  const annotation = annot;

  if (annotation.target.selector.subtype === "freetext") {
    const style = annot.target.selector.style;
    const font = `${style.fontSize}px ${style.fontName}`;
    annotation.target.selector.styleClass = annot.target.selector.styleClass || "body-value-css";
    const styleClass = annotation.target.selector.styleClass;
    const styleString = `${styleClass} { font: ${font}; color: ${style.color};}`;
    const stylesheet = {
      type: "CssStylesheet",
      value: styleString
    };
    delete annotation.target.selector.style;
    annotation.stylesheet = stylesheet;
  }

  return annotation;
};

exports.transformAnnotation = transformAnnotation;