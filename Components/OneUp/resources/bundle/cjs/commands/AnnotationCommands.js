"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _APICommands = require("../constants/APICommands");

var _AnnotationValidator = require("../schema/AnnotationValidator");

var _AppUtil = require("../util/AppUtil");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _CommentsUtils = require("../util/CommentsUtils");

var _ApiConstants = _interopRequireDefault(require("../constants/ApiConstants"));

var _ErrorUtils = require("../util/ErrorUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @class
 * @description
 * The class provides commands related to annotations registered in comment apis.
 */
class AnnotationCommands {
  constructor() {
    this._startAnnotationMode = data => {
      const startAnnotData = data;

      if (startAnnotData.options) {
        if (startAnnotData.mode === "freetext" && startAnnotData.options.fontSize) {
          const splitSize = startAnnotData.options.fontSize.match(/(\d*\.?\d*)(.*)/);
          let fontSize = Number(splitSize[1]);
          if (fontSize > 24) fontSize = 24;
          if (fontSize < 6) fontSize = 6;
          startAnnotData.options.fontSize = fontSize;
        } else if (startAnnotData.mode === "shape" && startAnnotData.options.strokeWidth !== undefined) {
          let strokeWidth = startAnnotData.options.strokeWidth;
          if (strokeWidth > 12) strokeWidth = 12;
          if (strokeWidth < 1) strokeWidth = 1;
          startAnnotData.options.strokeWidth = strokeWidth;
        }
      }

      return _ServiceRegistry.default.getService("CommentsApi").startAnnotationMode(startAnnotData.mode, startAnnotData.options);
    };

    this._apiCommands = {
      [_APICommands.AnnotationAPICommands.ADD_ANNOTATIONS]: {
        validator: this._validateAnnotations.bind(this),
        action: this._importAnnotations.bind(this)
      },
      [_APICommands.AnnotationAPICommands.GET_ANNOTATIONS]: {
        validator: this._validateFilter.bind(this),
        action: this._getAnnotations.bind(this)
      },
      [_APICommands.AnnotationAPICommands.DELETE_ANNOTATIONS]: {
        validator: this._validateFilter.bind(this),
        action: this._deleteAnnotations.bind(this)
      },
      [_APICommands.AnnotationAPICommands.UPDATE_ANNOTATION]: {
        validator: this._validateUpdate.bind(this),
        action: this._updateAnnotation.bind(this)
      },
      [_APICommands.AnnotationAPICommands.SELECT_ANNOTATION]: {
        validator: this._isValidAnnotationId.bind(this),
        action: this._selectAnnotation.bind(this)
      },
      [_APICommands.AnnotationAPICommands.UNSELECT_ANNOTATION]: {
        action: this._unselectAnnotation.bind(this)
      },
      [_APICommands.AnnotationAPICommands.COMMIT_UNSAVED_CHANGES]: {
        action: this._commitUnsavedChanges.bind(this)
      },
      [_APICommands.AnnotationAPICommands.ANNOTATION_EVENT_LISTENER]: {
        action: this._registerCommentsEventListener.bind(this)
      },
      [_APICommands.AnnotationAPICommands.SET_CONFIG]: {
        validator: this._validateConfig.bind(this),
        action: this._setConfig.bind(this)
      },
      [_APICommands.AnnotationAPICommands.START_ANNOTATION_MODE]: {
        validator: this._validateAnnotationMode.bind(this),
        action: this._startAnnotationMode.bind(this)
      },
      [_APICommands.AnnotationAPICommands.END_ANNOTATION_MODE]: {
        action: this._endAnnotationMode.bind(this)
      },
      [_APICommands.AnnotationAPICommands.ADD_ANNOTATIONS_IN_PDF]: {
        validator: this._validateAnnotationsInPDF.bind(this),
        action: this._addAnnotationsInPDF.bind(this)
      },
      [_APICommands.AnnotationAPICommands.REMOVE_ANNOTATIONS_FROM_PDF]: {
        action: this._removeAnnotationsFromPDF.bind(this)
      },
      [_APICommands.AnnotationAPICommands.GET_PDF_BUFFER]: {
        validator: this._validateOptions.bind(this),
        action: this._getPDFBuffer.bind(this)
      }
    };
  }

  static getClassName() {
    return "AnnotationCommands";
  }

  _isViewSDKBundle() {
    return (0, _AppUtil.getDOMElement)() !== null;
  }

  _setDownloadPrintInProgress(value) {
    if (_ServiceRegistry.default.getService("CommentsApi").isSharedCommentingMode()) {
      const appStore = _ServiceRegistry.default.getService("AppStore");

      appStore.isDownloadPrintInProgress = value;
    }
  }

  executeCommand(data) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    const previewConfig = appStore.getActionConfig("preview");
    const rejectApiCommand = this._isViewSDKBundle() ? previewConfig.enableAnnotationAPIs && !appStore.isEditAllowed : !previewConfig.enableAnnotationAPIs || !appStore.isEditAllowed;

    if (rejectApiCommand) {
      return Promise.reject((0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.FAIL, "APIs not allowed on this PDF."));
    }

    const invalidError = this._validateCommand(data);

    if (invalidError) return Promise.reject(invalidError);
    return new Promise((resolve, reject) => {
      appStore.getLinearizationWaitPromise().then(() => {
        this._setDownloadPrintInProgress(true);

        this._apiCommands[data.command].action.call(this, data.commandData).then(response => {
          this._setDownloadPrintInProgress(false);

          resolve(response);
        }).catch(err => {
          this._setDownloadPrintInProgress(false);

          reject((0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.FAIL, err.message));
        });
      });
    });
  }
  /**
   * @method
   * @description
   * It validates the given annotation(s) commands
   *
   * @param {Object} data annotation commands
   *
   * @return error if any
   */


  _validateCommand(data) {
    if (this._apiCommands[data.command].validator) {
      return this._apiCommands[data.command].validator(data.commandData);
    }

    return undefined;
  }
  /**
   * @method
   * @description
   * It validates whether the given list of annotationId is valid or not
   *
   * @param {Array} annotationIds annotation Ids
   *
   * @return error if any
   */


  _isValidAnnotationIds(annotationIds) {
    if ((0, _AppUtil.isNonEmptyArray)(annotationIds)) {
      const invalid = annotationIds.filter(id => !(0, _AppUtil.isNonEmptyString)(id));
      return invalid.length > 0 ? (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION_ID, "Invalid value of annotationIds in filters") : undefined;
    }

    return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION_ID, "Invalid value of annotationIds " + "in filters: should be a non empty array of annotation ids");
  }
  /**
   * @method
   * @description
   * It validates whether the given annotationId is valid or not
   *
   * @param {String} annotationId annotation Id
   *
   * @return error if any
   */


  _isValidAnnotationId(annotationId) {
    if (!(0, _AppUtil.isNonEmptyString)(annotationId)) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION_ID, "Invalid value of annotationId");
    }

    return undefined;
  }

  _validateAnnotations({
    annotations,
    options
  }) {
    if ((0, _AppUtil.isNonEmptyArray)(annotations)) {
      const validationResult = (0, _AnnotationValidator.isValidAnnotations)(annotations);

      if (validationResult.isValid) {
        if ("silent" in options) {
          return typeof options.silent === "boolean" ? undefined : (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_OPTIONS, "Invalid value of silent in options");
        }

        return undefined;
      }

      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, `Invalid value of Annotations ${JSON.stringify(validationResult.errors)}`);
    }

    return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, "Invalid value of Annotations: should be a non empty array");
  }

  _validateAnnotationsInPDF(annotations) {
    if ((0, _AppUtil.isNonEmptyArray)(annotations)) {
      const validationResult = (0, _AnnotationValidator.isValidAnnotations)(annotations);
      return validationResult.isValid ? undefined : (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, `Invalid value of Annotations ${JSON.stringify(validationResult.errors)}`);
    }

    return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, "Invalid value of Annotations: should be a non empty array");
  }

  _validateFilter(filters) {
    if (filters.annotationIds) {
      return this._isValidAnnotationIds(filters.annotationIds);
    }

    if (filters.pageRange) {
      const {
        startPage,
        endPage
      } = filters.pageRange;
      return startPage && endPage && startPage > 0 && endPage > 0 && endPage >= startPage ? undefined : (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_PAGE_RANGE, "Invalid value of pageRange in filters");
    }

    if ("arrangeByPageIndex" in filters && typeof filters.arrangeByPageIndex !== "boolean") {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_PAGE_RANGE, "Invalid value of arrangeByPageIndex in filters, only boolean allowed");
    }

    return undefined;
  }

  _validateUpdate(annotation) {
    if ((0, _AppUtil.isNonEmptyObject)(annotation)) {
      const validationResult = (0, _AnnotationValidator.isValidAnnotations)([annotation]);
      return validationResult.isValid ? undefined : (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, `Invalid annotation data ${validationResult.errors[0]}`);
    }

    return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION, "Invalid Annotation Data");
  }

  _validateConfig(configObject) {
    const configs = Object.keys(configObject);
    const validConfigs = (0, _CommentsUtils.getValidConfigs)();

    if (configs.length < 1 || configs.every(config => validConfigs.indexOf(config) === -1) || configs.every(config => typeof configObject[config] !== "boolean")) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_CONFIG, "Invalid Config");
    }

    return undefined;
  }

  _validateOptions(optionsObject = {}) {
    if ("mergeAnnotations" in optionsObject && typeof optionsObject.mergeAnnotations !== "boolean") {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_INPUT, "Invalid value of mergeAnnotations, only boolean allowed");
    }

    return undefined;
  }

  _validateAnnotationMode(data) {
    const annotationTypes = (0, _CommentsUtils.getValidAnnotationTypes)();

    if (annotationTypes.indexOf(data.mode) === -1) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_ANNOTATION_MODE, `Invalid Annotation Mode ${data.mode}`);
    }

    const options = Object.keys(data.options);
    const validOptions = (0, _CommentsUtils.getValidAnnotationModeOptions)();

    if (options.length > 0 && options.every(config => validOptions.indexOf(config) === -1)) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_OPTIONS, "Invalid Options");
    }

    if (data.options.defaultColor && !(0, _CommentsUtils.isValidRGBColor)(data.options.defaultColor)) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_OPTIONS, "Invalid defaultColor option value");
    }

    if (data.options.fontSize && !(0, _CommentsUtils.isValidFontSize)(data.options.fontSize)) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_OPTIONS, "Invalid fontSize value, must be numeric and px as unit.");
    }

    if (data.options.strokeWidth && !(0, _CommentsUtils.isValidStrokeWidth)(data.options.strokeWidth)) {
      return (0, _ErrorUtils.commandError)(_ApiConstants.default.API_RESPONSE.INVALID_OPTIONS, "Invalid strokeWidth option value");
    }

    return undefined;
  }
  /**
   * @method
   * @description
   * interface to import annotations in pdf
   *
   * @param annotations list of annotation data
   * @param options
   */


  _importAnnotations({
    annotations,
    options
  }) {
    return _ServiceRegistry.default.getService("CommentsApi").addAnnotations(annotations, options);
  }
  /**
   * @method
   * @description
   * interface to add annotations in pdf
   *
   * @param {Object} annotations list_of_annotation_data
   */


  _addAnnotationsInPDF(annotations) {
    return _ServiceRegistry.default.getService("CommentsApi").addAnnotationsInPDF(annotations);
  }
  /**
   * @method
   * @description
   * interface to delete annotations on basis of provided filter
   *
   * @param {Object} filters filter can have annotationIds and pageRange
   */


  _deleteAnnotations(filters) {
    return _ServiceRegistry.default.getService("CommentsApi").deleteAnnotations(filters);
  }
  /**
   * @method
   * @description
   * interface to separate out PDF and Annotations if there is any
   * already residing within PDF buffer
   */


  _removeAnnotationsFromPDF() {
    return _ServiceRegistry.default.getService("CommentsApi").removeAnnotationsFromPDF().then(data => {
      const validationResult = (0, _AnnotationValidator.isValidAnnotations)(data.annotations);
      const annotations = validationResult.isValid ? validationResult.annotations : [];
      return _objectSpread(_objectSpread({}, data), {}, {
        annotations
      });
    });
  }
  /**
   * @method
   * @description
   * it provides the interface to get current PDF buffer with or without merged anotations using apis provided
   * by comment dropin component.
   *
   * @return {Object} return the PDF buffer
   */


  _getPDFBuffer(options = {}) {
    // eslint-disable-next-line no-param-reassign
    if (!options.mergeAnnotations) options.mergeAnnotations = false;
    return _ServiceRegistry.default.getService("CommentsApi").getPDFBuffer(options);
  }
  /**
   * @method
   * @description
   * interface to get annotations of the document on the basis
   * of the filter provided
   *
   * @param {Object} filters filter can have annotationIds and pageRange
   */


  _getAnnotations(filters) {
    return _ServiceRegistry.default.getService("CommentsApi").getAnnotations(filters).then(annotations => {
      const validationResult = (0, _AnnotationValidator.isValidAnnotations)(annotations);

      if (validationResult.isValid && filters.arrangeByPageIndex) {
        const result = [];

        const appStore = _ServiceRegistry.default.getService("AppStore");

        if (appStore.pdfMetadata && appStore.pdfMetadata.numPages) {
          [...Array(appStore.pdfMetadata.numPages).keys()].forEach(pageIndex => {
            result[pageIndex] = [];
          });
        }

        const pageIndexMap = {};
        validationResult.annotations.forEach(annotation => {
          if (annotation.motivation === "commenting") {
            pageIndexMap[annotation.id] = annotation.target.selector.node.index;
          }
        }); // Organize pages...

        validationResult.annotations.forEach(annotation => {
          let pageIndex = pageIndexMap[annotation.id];

          if (!pageIndex && pageIndex !== 0) {
            pageIndex = pageIndexMap[annotation.target.source];
          }

          pageIndexMap[annotation.id] = pageIndex; // set for reply case

          result[pageIndex].push(annotation);
        });
        return result;
      }

      return validationResult.isValid ? validationResult.annotations : [];
    });
  }
  /**
   * @method
   * @description
   * interface  to update the existing annotation in the document
   *
   * @param annotation annotation data
   */


  _updateAnnotation(annotation) {
    return _ServiceRegistry.default.getService("CommentsApi").updateAnnotation((0, _AnnotationValidator.filterAnnotation)(annotation));
  }
  /**
   * @method
   * @description
   * interface to select the given annotation.
   *
   * @param id annotation id
   */


  _selectAnnotation(id) {
    return _ServiceRegistry.default.getService("CommentsApi").selectAnnotation(id);
  }
  /**
   * @method
   * @description
   * interface provided by comment component to unselect the annotation. The last
   * selected annotation will be unselected.
   */


  _unselectAnnotation() {
    return _ServiceRegistry.default.getService("CommentsApi").unselectAnnotation();
  }

  _commitUnsavedChanges() {
    return _ServiceRegistry.default.getService("CommentsApi").commitUnsavedChanges();
  }
  /**
   * @method
   * @description
   * interface to set config
   *
   * @param {Object} config config can have properties downloadWithAnnotations,
   * printWithAnnotations etc
   */


  _setConfig(config) {
    return _ServiceRegistry.default.getService("CommentsApi").setConfig(config);
  }

  _registerCommentsEventListener() {
    return _ServiceRegistry.default.getService("CommentsApi").registerCommentsEventListener((event, data) => {
      let eventData = data;

      if (data.motivation) {
        eventData = (0, _AnnotationValidator.filterAnnotation)((0, _CommentsUtils.createAnnotationObject)((0, _CommentsUtils.transformAnnotation)(data)));
      }

      _ServiceRegistry.default.getService("EventsService").sendEvent(event, eventData);
    });
  }
  /**
   * @method
   * @description
   * interface  to enter in annotation mode, after which the user can place
   * notes by click in document area or highlight text etc
   *
   * @param {Object} data data can have mode and options
   */


  /**
   * @method
   * @description
   * interface to end the last started annotation mode.
   */
  _endAnnotationMode() {
    return _ServiceRegistry.default.getService("CommentsApi").endAnnotationMode();
  }

}

exports.default = AnnotationCommands;
