"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.annotationValidator = annotationValidator;
exports.errors = void 0;

var _CommentsUtils = require("../util/CommentsUtils");

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
const errors = [];
exports.errors = errors;
const requiredKeys = {
  annotation: ["@context", "type", "id", "motivation", "bodyValue", "target", "creator", "created", "modified"],
  creator: ["type", "name"],
  target: [],
  selector: ["type", "node", "subtype", "boundingBox"],
  node: ["index"],
  stylesheet: ["type", "value"]
};
const optionalKeys = {
  selector: ["strokeColor", "appearance", "opacity"],
  creator: ["id"]
};
let selectCaseRequiredKeys = {};

function _validateType(propertyName, obj, type) {
  let isValidType;

  if (type === "array") {
    isValidType = Array.isArray(obj);
  } else {
    const typeOfObj = typeof obj;
    isValidType = typeOfObj === type;
  }

  if (!isValidType) {
    const err = {
      message: `${propertyName} should be ${type}`
    };
    errors.push(err);
    return false;
  }

  return true;
}

function _validateMinLength(propertyName, obj, minLength) {
  if (obj.length < minLength) {
    let err;

    if (Array.isArray(obj)) {
      err = {
        message: `${propertyName} should NOT have fewer than ${minLength} items`
      };
    } else if (typeof obj === "string") {
      err = {
        message: `${propertyName} should NOT be shorter than ${minLength} characters`
      };
    }

    errors.push(err);
  }
}

function _validateMaxLength(propertyName, obj, maxLength) {
  if (obj.length && obj.length > maxLength) {
    let err;

    if (Array.isArray(obj)) {
      err = {
        message: `${propertyName} should NOT have more than ${maxLength} items`
      };
    } else if (typeof obj === "string") {
      err = {
        message: `${propertyName} should NOT be longer than ${maxLength} characters`
      };
    }

    errors.push(err);
  }
}

function _validateLengthMultipleOfN(propertyName, arr, n) {
  if (arr.length && arr.length % n !== 0) {
    const err = {
      message: `${propertyName} should only have elements in multiples of ${n}`
    };
    errors.push(err);
  }
}

function _validateUniqueItems(propertyName, array) {
  if (array.length && array.length !== new Set(array).size) {
    const err = {
      message: `${propertyName} should NOT have duplicate items`
    };
    errors.push(err);
  }
}

function _validateEnum(propertyName, item, enumArray) {
  if (enumArray && !enumArray.includes(item)) {
    const err = {
      message: `${propertyName} should be equal to one of these values: ${enumArray.join(", ")}`
    };
    errors.push(err);
    return false;
  }

  return true;
}

function _validatePattern(propertyName, str, pattern) {
  if (!str.match(pattern)) {
    const err = {
      message: `${propertyName} should match pattern "${pattern}"`
    };
    errors.push(err);
  }
}

function _validateMinValue(propertyName, num, value, excluded) {
  if (num < value) {
    const err = {
      message: `${propertyName} should be >= ${value}`
    };
    errors.push(err);
  }

  if (excluded && num === value) {
    const err = {
      message: `${propertyName} should be > ${value}`
    };
    errors.push(err);
  }
}

function _validateMaxValue(propertyName, num, value) {
  if (num > value) {
    const err = {
      message: `${propertyName} should be <= ${value}`
    };
    errors.push(err);
  }
}

function _validateDateTime(propertyName, dateTime) {
  const dateTimeRegex = "\\d{4}-[01]\\d-[0-3]\\dT[0-2]\\d:[0-5]\\d:[0-5]\\d(.\\d?\\d?\\d?)?((\\+[01]\\d:[0-5]\\d)|Z)";

  if (typeof dateTime === "string" && dateTime.match(dateTimeRegex)) {
    const s = dateTime.substr(0, 10);
    const bits = s.split("-");
    const y = bits[0];
    let m = bits[1];
    let d = bits[2];
    d = d / 10 * 10;
    m = m / 10 * 10; // Assume not leap year by default (note zero index for Jan)

    const daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]; // If evenly divisible by 4 and not evenly divisible by 100,
    // or is evenly divisible by 400, then a leap year

    if (!(y % 4) && y % 100 || !(y % 400)) {
      daysInMonth[1] = 29;
    }

    const isValidDateTime = !/\D/.test(String(d)) && d > 0 && d <= daysInMonth[m - 1];

    if (!isValidDateTime) {
      const err = {
        message: `${propertyName} should be a valid date.`
      };
      errors.push(err);
    }
  } else {
    const err = {
      message: `${propertyName} should be xsd:dateTime with the UTC timezone expressed as “Z”`
    };
    errors.push(err);
  }
}

function _validatePropertyContext(context) {
  let isValidType = _validateType("context", context, "array");

  if (isValidType) {
    _validateMinLength("context", context, 2);

    _validateMaxLength("context", context, 2);

    _validateUniqueItems("context", context);

    const contextEnum = ["https://www.w3.org/ns/anno.jsonld", "https://comments.acrobat.com/ns/anno.jsonld"];
    context.forEach(item => {
      isValidType = _validateType("contextItem", item, "string");

      if (isValidType) {
        _validateEnum("contextItem", item, contextEnum);
      }
    });
  }
}

function _validatePropertyType(keyType, typePropertyValue) {
  const isValidType = _validateType(`${keyType} type`, typePropertyValue, "string");

  if (isValidType) {
    let pattern;

    switch (keyType) {
      case "annotation":
        pattern = "^Annotation$";
        break;

      case "creator":
        pattern = "^Person$";
        break;

      case "selector":
        pattern = "^AdobeAnnoSelector$";
        break;

      case "stylesheet":
        pattern = "^CssStylesheet$";
        break;

      default:
        break;
    }

    _validatePattern(`${keyType} type`, typePropertyValue, pattern);
  }
}

function _validatePropertyId(id) {
  _validateType("id", id, "string");

  _validateMinLength("id", id, 1);
}

function _validatePropertyMotivation(motivation) {
  const motivationEnum = ["replying", "commenting"];

  _validateEnum("motivation", motivation, motivationEnum);

  if (motivation === "replying") {
    selectCaseRequiredKeys.target = ["source"];
  } else if (motivation === "commenting") {
    selectCaseRequiredKeys.target = ["source", "selector"];
  }
}

function _validatePropertyBodyValue(bodyValue, annotation) {
  _validateType("bodyValue", bodyValue, "string");

  if (annotation.motivation === "commenting" && annotation.target && annotation.target.selector && annotation.target.selector.subtype === "freetext") {
    _validateMinLength("bodyValue", bodyValue, 1);
  }
}

function _validatePropertyCreator(creator, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateObject("creator", creator, annotation);
}

function _validatePropertyName(name) {
  _validateType("name", name, "string");

  _validateMinLength("name", name, 1);
}

function _validatePropertyCreated(created) {
  _validateDateTime("created", created);
}

function _validatePropertyModified(modified) {
  _validateDateTime("modified", modified);
}

function _validatePropertyTarget(target, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateObject("target", target, annotation);
}

function _validatePropertySource(source) {
  _validateType("source", source, "string");

  _validateMinLength("source", source, 1);
}

function _validatePropertySelector(selector, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateObject("selector", selector, annotation);
}

function _validatePropertyFontName(fontName) {
  // eslint-disable-next-line no-use-before-define
  if (fontName) {
    _validateType("fontName", fontName, "string");
  }
}

function _validatePropertyFontSize(fontSize) {
  // eslint-disable-next-line no-use-before-define
  const isValidType = _validateType("fontSize", fontSize, "string");

  if (isValidType) {
    const splitSize = fontSize.match(/(\d*\.?\d*)(.*)/);

    if (splitSize[2] !== "px") {
      const err = {
        message: "Invalid fontSize value in stylesheet. "
      };
      errors.push(err);
    }
  }
}

function _validatePropertyFontColor(color) {
  // eslint-disable-next-line no-use-before-define
  const isValidType = _validateType("color", color, "string");

  if (isValidType) {
    const pattern = "^#(?:[0-9a-fA-F]{3}){1,2}$";

    _validatePattern("color", color, pattern);
  }
}

function _validateStyleClass(styleClass, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateType("styleClass", styleClass, "string");

  if (annotation.target.selector.styleClass && annotation.stylesheet) {
    const rules = (0, _CommentsUtils.getRulesForCssText)(annotation.stylesheet.value);

    if (rules[0].selectorText.toLowerCase() !== annotation.target.selector.styleClass.toLowerCase()) {
      const err = {
        message: `Invalid styleClass for given annotation ${annotation.id}`
      };
      errors.push(err);
    }
  }
}

function _validateStylesheetValue(stylesheetValue) {
  // eslint-disable-next-line no-use-before-define
  _validateType("stylesheetValue", stylesheetValue, "string");

  const rules = (0, _CommentsUtils.getRulesForCssText)(stylesheetValue);

  if (!rules || !rules[0]) {
    const err = {
      message: "Invalid stylesheet value. "
    };
    errors.push(err);
  }

  const fontSize = rules[0].style.fontSize;
  const fontFamily = rules[0].style.fontFamily;
  const color = (0, _CommentsUtils.RGBToHex)(rules[0].style.color);

  _validatePropertyFontSize(fontSize);

  _validatePropertyFontName(fontFamily);

  _validatePropertyFontColor(color);
}

function _validateStylesheet(stylesheet, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateObject("stylesheet", stylesheet, annotation);
}

function _validatePropertyNode(node, annotation) {
  // eslint-disable-next-line no-use-before-define
  _validateObject("node", node, annotation);
}

function _validatePropertyIndex(index) {
  _validateType("index", index, "number");

  _validateMinValue("index", index, 0);
}

function _validatePropertySubType(subtype) {
  const subtypeEnum = ["note", "strikeout", "highlight", "underline", "shape", "freetext"];

  const isValidEnum = _validateEnum("subtype", subtype, subtypeEnum);

  if (isValidEnum) {
    optionalKeys.selector = ["strokeColor", "appearance", "opacity"];

    switch (subtype) {
      case "note":
        break;

      case "freetext":
        optionalKeys.annotation = ["stylesheet"];
        optionalKeys.selector = ["styleClass"];
        break;

      case "shape":
        selectCaseRequiredKeys.selector = ["inkList"];
        optionalKeys.selector = ["strokeColor", "strokeWidth", "opacity"];
        break;

      default:
        selectCaseRequiredKeys.selector = ["quadPoints"];
        break;
    }
  }
}

function _validatePropertyBoundingBox(boundingBox) {
  const isValidType = _validateType("boundingBox", boundingBox, "array");

  if (isValidType) {
    _validateMinLength("boundingBox", boundingBox, 4);

    _validateMaxLength("boundingBox", boundingBox, 4);

    boundingBox.forEach(item => {
      _validateType("boundingBoxItem", item, "number");
    });
  }
}

function _validatePropertyStrokeColor(strokeColor) {
  const isValidType = _validateType("strokeColor", strokeColor, "string");

  if (isValidType) {
    const pattern = "^#(?:[0-9a-fA-F]{3}){1,2}$";

    _validatePattern("strokeColor", strokeColor, pattern);
  }
}

function _validatePropertyStrokeWidth(strokeWidth) {
  _validateType("strokeWidth", strokeWidth, "number");

  _validateMinValue("strokeWidth", strokeWidth, 0, true);
}

function _validatePropertyOpacity(opacity) {
  const isValidType = _validateType("opacity", opacity, "number");

  if (isValidType) {
    _validateMinValue("opacity", opacity, 0);

    _validateMaxValue("opacity", opacity, 1);
  }
}

function _validatePropertyInkList(inkList) {
  let isValidType = _validateType("inkList", inkList, "array");

  if (isValidType) {
    _validateMinLength("inkList", inkList, 1);

    inkList.forEach(itemArray => {
      isValidType = _validateType("inkListItem", itemArray, "array");

      if (isValidType) {
        _validateMinLength("inkListItem", itemArray, 1);

        itemArray.forEach(item => {
          _validateType("inkListArrayItem", item, "number");
        });
      }
    });
  }
}

function _validatePropertyQuadPoints(quadPoints) {
  const isValidType = _validateType("quadPoints", quadPoints, "array");

  if (isValidType) {
    _validateMinLength("quadPoints", quadPoints, 8);

    _validateLengthMultipleOfN("quadPoints", quadPoints, 8);

    quadPoints.forEach(item => {
      _validateType("quadPointsItem", item, "number");
    });
  }
}

function _validateProperty(keyType, propertyName, propertyValue, annotation) {
  switch (propertyName) {
    case "@context":
      _validatePropertyContext(propertyValue);

      break;

    case "type":
      _validatePropertyType(keyType, propertyValue);

      break;

    case "id":
      _validatePropertyId(propertyValue);

      break;

    case "motivation":
      _validatePropertyMotivation(propertyValue);

      break;

    case "bodyValue":
      _validatePropertyBodyValue(propertyValue, annotation);

      break;

    case "target":
      _validatePropertyTarget(propertyValue, annotation);

      break;

    case "creator":
      _validatePropertyCreator(propertyValue, annotation);

      break;

    case "created":
      _validatePropertyCreated(propertyValue);

      break;

    case "modified":
      _validatePropertyModified(propertyValue);

      break;

    case "name":
      _validatePropertyName(propertyValue);

      break;

    case "source":
      _validatePropertySource(propertyValue);

      break;

    case "selector":
      _validatePropertySelector(propertyValue, annotation);

      break;

    case "node":
      _validatePropertyNode(propertyValue, annotation);

      break;

    case "subtype":
      _validatePropertySubType(propertyValue);

      break;

    case "boundingBox":
      _validatePropertyBoundingBox(propertyValue);

      break;

    case "index":
      _validatePropertyIndex(propertyValue);

      break;

    case "strokeColor":
      _validatePropertyStrokeColor(propertyValue);

      break;

    case "strokeWidth":
      _validatePropertyStrokeWidth(propertyValue);

      break;

    case "opacity":
      _validatePropertyOpacity(propertyValue);

      break;

    case "inkList":
      _validatePropertyInkList(propertyValue);

      break;

    case "quadPoints":
      _validatePropertyQuadPoints(propertyValue);

      break;

    case "styleClass":
      _validateStyleClass(propertyValue, annotation);

      break;

    case "stylesheet":
      _validateStylesheet(propertyValue);

      break;

    case "value":
      _validateStylesheetValue(propertyValue);

      break;

    default:
      break;
  }
}

function _validateObjectForKeyList(type, obj, keyList, required, annotation) {
  if (keyList) {
    keyList.forEach(key => {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        _validateProperty(type, key, obj[key], annotation);
      } else if (required) {
        const err = {
          message: `${type} should have required property '${key}'`
        };
        errors.push(err);
      }
    });
  }
}

function _removeUnnecessaryKeys(type, obj) {
  let validKeys;

  if (requiredKeys[type]) {
    validKeys = requiredKeys[type];
  }

  if (selectCaseRequiredKeys[type]) {
    validKeys = validKeys ? validKeys.concat(selectCaseRequiredKeys[type]) : selectCaseRequiredKeys[type];
  }

  if (optionalKeys[type]) {
    validKeys = validKeys ? validKeys.concat(optionalKeys[type]) : optionalKeys[type];
  }

  if (Object.keys(obj) && validKeys) {
    const toRemove = Object.keys(obj).filter(key => !validKeys.includes(key));

    if (toRemove) {
      toRemove.forEach(key => {
        // eslint-disable-next-line no-param-reassign
        delete obj[key];
      });
    }
  }
}

function _validateObject(type, obj, annotation) {
  if (obj && typeof obj === "object") {
    _validateObjectForKeyList(type, obj, requiredKeys[type], true, annotation);

    _validateObjectForKeyList(type, obj, selectCaseRequiredKeys[type], true, annotation);

    _validateObjectForKeyList(type, obj, optionalKeys[type], false, annotation);

    _removeUnnecessaryKeys(type, obj);
  }
}

function annotationValidator(annotation) {
  errors.length = 0;
  selectCaseRequiredKeys = {};

  if (annotation.creator && "id" in annotation.creator && typeof annotation.creator.id === "string" && annotation.creator.id.length < 1) {
    // eslint-disable-next-line no-param-reassign
    delete annotation.creator.id;
  }

  _validateObject("annotation", annotation, annotation);

  return errors.length === 0;
}