"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _CommentsUtils = require("../util/CommentsUtils");

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * @class
 * @description
 * The class provides all annotation related methods and handle interaction with comments dropin
 */
class CommentsApi {
  constructor() {
    this.initApis();
  }

  initApis() {
    this._commentsApis = {};
    this._commentApiPromise = new Promise(resolve => {
      this._commentApiResolve = resolve;
    });
  }

  resetApis() {
    this.initApis();
  }
  /**
   * @method
   * @description
   * it exposes interface that can be accessed in comment dropin
   *
   * @return {Object} List of all exposed comments dropin apis.
   */


  getExposedAPIs() {
    return {
      areAnnotationAPIsEnabled: () => _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableAnnotationAPIs,
      includePDFAnnotations: () => _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableAnnotationAPIs ? _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").includePDFAnnotations : true,
      registerCommentsApis: this.registerCommentsApis.bind(this),
      isFreetextEnabled: this.isFreetextEnabled.bind(this),
      isEraserToolEnabled: this.isEraserToolEnabled.bind(this),
      registerTools: this.registerTools.bind(this),
      isSharedCommentingMode: () => _ServiceRegistry.default.getService("AppStore").isIntegration && _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableAnnotationAPIs,
      isReadOnlyMode: () => !_ServiceRegistry.default.getService("AppStore").isEditAllowed,
      setPreventDirtyPDF: this.setPreventDirtyPDF.bind(this)
    };
  }

  isSharedCommentingMode() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    return appStore.isIntegration && appStore.getActionConfig("preview").enableAnnotationAPIs;
  }
  /**
   * @method
   * @description
   * Interface for registering tool (comments dropin registers topbar tools and toolbar)
   *
   * @param {Object} actions comment tools actions
   */


  registerTools(actions) {
    this.tools = actions;
  }
  /**
   * @method
   * @description
   * it provides all the available top bar JSON based tools registered by comment dropin
   *
   * @return {Object} all the availble top bar JSON tools
   */


  getTopBarTools() {
    return this.tools ? this.tools.getTopBarTools() : [];
  }
  /**
   * @method
   * @description
   * it provides all the available top bar React based Custom tools registered by comment dropin
   *
   * @return {Object} all the availble top bar React Custom tools
   */


  getCustomTopBarTools() {
    return this.tools && this.tools.getCustomTopBarTools ? this.tools.getCustomTopBarTools() : [];
  }
  /**
   * @method
   * @description
   * it provides whole toolbar react component (registered by comments dropin)
   *
   * @return react component of toolbar
   */


  getToolbar() {
    return this.tools ? this.tools.getToolbar() : /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null);
  }
  /**
   * @method
   * @description
   * it checks whether Free text annotation is allowed or not
   *
   * @return {Boolean} is Free text annotation allowed
   */


  isFreetextEnabled() {
    return _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableFreeTextAnnotationTool;
  }
  /**
   * @method
   * @description
   * it checks whether to allow eraser annotation tool
   *
   * @return {Boolean} is eraser tool allowed
   */


  isEraserToolEnabled() {
    return _ServiceRegistry.default.getService("AppStore").getActionConfig("preview").enableEraserAnnotationTool;
  }

  setPreventDirtyPDF(value) {
    _ServiceRegistry.default.getService("AppStore").preventDirtyPDF = value;
  }
  /**
   * @method
   * @description
   * it registers interface provided by comment dropin component to invoke its methods
   * and take care of any configuration which needs to be executed after registeration.
   *
   * @param {Object} commentsApi interface registered by comment dropin
   */


  registerCommentsApis(commentsApi) {
    this._commentsApis = commentsApi;

    const config = _ServiceRegistry.default.getService("AppStore").getActionConfig("preview");

    if (config.enableAnnotationAPIs) {
      if (config.enableLinearization) {
        const options = {
          enableCommentsPanel: false
        };
        this.toggleCommenting(false, options);

        _ServiceRegistry.default.getService("AppStore").getLinearizationWaitPromise().then(() => {
          this.toggleCommenting(true, options);
        });
      }

      this.setConfig(config.annotationUIConfig);
    } else {
      if (config.annotationUIConfig && "showCommentsPanel" in config.annotationUIConfig) {
        this._commentsApis.setConfig({
          showCommentsPanel: config.annotationUIConfig.showCommentsPanel
        });
      }

      this._commentsApis.registerEventListener((event, data) => {
        let eventData = data;

        if (data.motivation) {
          eventData = (0, _CommentsUtils.getAnnotationType)(data);
        }

        _ServiceRegistry.default.getService("EventsService").sendEvent(event, eventData);
      });
    }

    this.registerCallbackForDownloadPrint();

    this._commentApiResolve();
  }
  /**
   * @method
   * @description
   * it register event listener provided by comment dropin component
   *
   * @param {Object} listener function listened to event.
   */


  registerCommentsEventListener(listener) {
    return this._commentApiPromise.then(() => this._commentsApis.registerEventListener(listener));
  }

  toggleCommenting(bool, options) {
    return this._commentApiPromise.then(() => this._commentsApis.toggleCommenting(bool, options));
  }
  /**
   * @method
   * @description
   * it provides the interface to add annotations using apis provided by comment dropin component
   *
   * @param {Object} annotations.
   *
   * @param options
   * @return {Promise} Promise resolved when successful and reject with error.
   */


  async addAnnotations(annotations, options = {}) {
    const currentAnnots = await this.getAnnotations({});
    const existingIds = currentAnnots.map(annot => annot.id);
    let invalidAnnots = annotations.filter(annot => existingIds.indexOf(annot.id) !== -1);

    if (invalidAnnots.length > 0) {
      return Promise.reject(new Error(`Annotation already there for given id ${invalidAnnots.map(annot => annot.id).join(", ")}`));
    }

    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (appStore.pdfMetadata && appStore.pdfMetadata.numPages && annotations.filter(annotation => annotation.motivation === "commenting").length > 0) {
      const pageBoundaries = await appStore.previewRef.getPublicApis().then(previewApis => Promise.all([...Array(appStore.pdfMetadata.numPages).keys()].map(index => previewApis.document.getPageAttributes(index + 1).then(attr => attr.boxes.CropBox))));
      invalidAnnots = annotations.filter(annot => annot.motivation === "replying" ? false : !(0, _CommentsUtils.isValidSelector)(pageBoundaries[annot.target.selector.node.index], annot));

      if (invalidAnnots.length > 0) {
        return Promise.reject(new Error(`Annotation selector is not valid for given ${invalidAnnots.map(annot => annot.id).join(", ")}`));
      }
    }

    const shouldTakeFocus = "silent" in options ? !options.silent : !(annotations.length > 1);
    const opts = {
      shouldTakeFocus
    };
    const result = [];

    for (let i = 0; i < annotations.length; i += 1) {
      let annotationObject = (0, _CommentsUtils.createAnnotationObject)(annotations[i]);

      if (annotationObject.motivation === "replying") {
        // eslint-disable-next-line no-await-in-loop
        result.push(await this._commentsApis.addReply(annotationObject, opts));
      } else {
        if (annotationObject.target.selector.subtype === "freetext") {
          annotationObject = (0, _CommentsUtils.normalizeFreeTextAnnotation)(annotationObject);
        }

        if (annotationObject.target.selector.subtype === "shape") {
          annotationObject = (0, _CommentsUtils.normalizeShapeAnnotation)(annotationObject);
        } // eslint-disable-next-line no-await-in-loop


        result.push(await this._commentsApis.addComment(annotationObject, opts));
      }
    }

    return Promise.all(result).then(() => Promise.resolve());
  }
  /**
   * @method
   * @description
   * it provides the interface to list down all the annotations with specific filters using
   * apis provided by comment dropin component
   *
   * @param {Object} filters.
   *
   * @return {Promise} Promise resolved with all annotations.
   */


  getAnnotations(filters) {
    return this._commentApiPromise.then(() => this._commentsApis.getComments((0, _CommentsUtils.modifyFilter)(filters))).then(annotations => annotations.map(annotation => (0, _CommentsUtils.createAnnotationObject)((0, _CommentsUtils.transformAnnotation)(annotation))));
  }
  /**
   * @method
   * @description
   * it provides the interface to delete annotations on basis of filter provided using
   * apis provided by comment dropin component
   *
   * @param {Object} filters.
   *
   * @return {Promise} Promise resolved when successful and reject with error.
   */


  deleteAnnotations(filters) {
    return this._commentApiPromise.then(() => this._commentsApis.deleteComments((0, _CommentsUtils.modifyFilter)(filters)));
  }
  /**
   * @method
   * @description
   * it provides the interface to update the annotation using apis provided
   * by comment dropin component
   *
   * @param {Object} annotation annotation need to be updated
   *
   * @return {Promise} Promise resolved when successful and reject with error.
   */


  async updateAnnotation(annotation) {
    let annot = annotation;

    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (annot.motivation === "commenting") {
      if (appStore.pdfMetadata && appStore.pdfMetadata.numPages) {
        const pageBoundaries = await appStore.previewRef.getPublicApis().then(previewApis => Promise.all([...Array(appStore.pdfMetadata.numPages).keys()].map(index => previewApis.document.getPageAttributes(index + 1).then(attr => attr.boxes.CropBox))));
        const invalidAnnot = (0, _CommentsUtils.isValidSelector)(pageBoundaries[annot.target.selector.node.index], annot);

        if (!invalidAnnot) {
          return Promise.reject(new Error(`Annotation selector is not valid for given ${annot.id}`));
        }
      }

      if (annot.target.selector.subtype === "freetext") {
        annot = (0, _CommentsUtils.normalizeFreeTextAnnotation)(annot);
      }

      if (annot.target.selector.subtype === "shape") {
        annot = (0, _CommentsUtils.normalizeShapeAnnotation)(annot);
      }
    }

    return this._commentApiPromise.then(() => this._commentsApis.updateComment(annot));
  }
  /**
   * @method
   * @description
   * it provides the interface to select the annotation using apis provided
   * by comment dropin component
   *
   * @param id id of annotation
   */


  selectAnnotation(id) {
    return this._commentApiPromise.then(() => this._commentsApis.selectComment(id));
  }
  /**
   * @method
   * @description
   * it provides the interface to unselect the annotation using apis provided
   * by comment dropin component
   * The last selected annotation will be unselected if any.
   */


  unselectAnnotation() {
    return this._commentApiPromise.then(() => this._commentsApis.unselectComment());
  }
  /**
   * @method
   * @description
   * It will commit all the unsaved/non-committed changes in comments dropin
   */


  commitUnsavedChanges() {
    return this._commentApiPromise.then(() => {
      if (typeof this._commentsApis.commitUnsavedChanges === "function") {
        return this._commentsApis.commitUnsavedChanges();
      }

      return new Promise(res => setTimeout(res, 200));
    });
  }
  /**
   * @method
   * @description
   * it provides the interface to enter in annotation mode using apis provided
   * by comment dropin component
   *
   * @param {String} mode mode of annotations
   * @param {Object} options options can be deafult color and cursor.
   */


  startAnnotationMode(mode, options) {
    return this._commentApiPromise.then(() => {
      this._commentsApis.startAnnotationMode(mode, options);

      if (options.cursor) {
        _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INT_COMMANDS", ["modifyCursor"]).then(api => api.modifyCursor.setCursor(options.cursor));
      }
    });
  }
  /**
   * @method
   * @description
   * it provides the interface to end the last started annotation mode using apis provided
   * by comment dropin component
   */


  endAnnotationMode() {
    return this._commentApiPromise.then(() => {
      this._commentsApis.endAnnotationMode();

      _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INT_COMMANDS", ["modifyCursor"]).then(api => api.modifyCursor.resetCursor());
    });
  }

  setConfig(config) {
    return this._commentApiPromise.then(() => {
      this._commentsApis.setConfig(config);

      if ("showToolbar" in config) {
        _ServiceRegistry.default.getService("AppStore").configStore.setShowCommentingToolbar(config.showToolbar);
      }

      if ("downloadWithAnnotations" in config) {
        this.downloadWithAnnotations = config.downloadWithAnnotations;
      }

      if ("printWithAnnotations" in config) {
        this.printWithAnnotations = config.printWithAnnotations;
      }
    });
  }

  toggleCommentsPanel(bool) {
    return this._commentApiPromise.then(() => {
      this._commentsApis.stores.commentsDropinStore.setShouldShowCommentsPanel(bool);
    });
  }
  /**
   * @method
   * @description
   * it provides the interface to registering the callback for user action like download and
   * print pdf using apis provided by comment dropin component
   */


  registerCallbackForDownloadPrint() {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (!appStore.getActionConfig("preview").enableAnnotationAPIs || appStore.getActionConfig("preview").includePDFAnnotations) {
      return;
    }

    ["Download", "Print"].forEach(action => {
      appStore.previewRef.getPublicApis().then(previewApis => {
        previewApis.app[`before${action}`](() => {
          appStore.preventDirtyPDF = true;
          return this._commentsApis.beforePrintDownload(this[`${action.toLowerCase()}WithAnnotations`]);
        });
        previewApis.app[`after${action}`](() => {
          this._commentsApis.afterPrintDownload(this[`${action.toLowerCase()}WithAnnotations`]).then(() => {
            appStore.preventDirtyPDF = false;
          });
        });
      });
    });
  }
  /**
   * @method
   * @description
   * it provides the interface to add/burn annotations in PDF buffer using apis provided
   * by comment dropin component.
   *
   * @param annotations list of annotation data
   *
   * @return the updated PDF buffer
   */


  addAnnotationsInPDF(annotations) {
    if (!_ServiceRegistry.default.getService("AppStore").getActionConfig("preview").includePDFAnnotations) {
      return Promise.reject(new Error("includePDFAnnotations should be set to true"));
    }

    return this.addAnnotations(annotations).then(() => _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INTEGRATION_CONNECTOR", ["document"])).then(apiObject => apiObject.document.getUpdatedPDFBuffer(false));
  }
  /**
   * @method
   * @description
   * it provides the interface to delete annotations from PDF buffer using apis provided
   * by comment dropin component.
   *
   * @return {Object} return JSON object of the PDF buffer and anootations
   */


  removeAnnotationsFromPDF() {
    if (!_ServiceRegistry.default.getService("AppStore").getActionConfig("preview").includePDFAnnotations) {
      return Promise.reject(new Error("includePDFAnnotations should be set to true"));
    }

    let annotations;
    return this.getAnnotations({}).then(annots => {
      annotations = annots;
      return annots.length > 0 ? this.deleteAnnotations({}) : Promise.resolve();
    }).then(() => _ServiceRegistry.default.getService("AppStore").previewRef.getApis("INTEGRATION_CONNECTOR", ["document"])).then(apiObject => apiObject.document.getUpdatedPDFBuffer(false)).then(pdfBuffer => ({
      pdfBuffer,
      annotations
    }));
  }
  /**
   * @method
   * @description
   * it provides the interface to get current PDF buffer with or without merged anotations using apis provided
   * by comment dropin component.
   *
   * @return {Object} return the PDF buffer
   */


  getPDFBuffer(options) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (!options.mergeAnnotations) {
      return appStore.previewRef.getApis("INTEGRATION_CONNECTOR", ["document"]).then(apiObject => apiObject.document.getUpdatedPDFBuffer(false));
    }

    return this.getAnnotations({}).then(annots => {
      annots.forEach(annot => {
        if (annot.target.selector.subtype === "freetext") {
          // eslint-disable-next-line no-param-reassign
          annot = (0, _CommentsUtils.normalizeFreeTextAnnotation)(annot);
        }
      });
      const comments = annots.filter(annot => annot.motivation === "commenting");
      const replies = annots.filter(annot => annot.motivation === "replying");
      return comments.map(comment => _objectSpread(_objectSpread({}, comment), {}, {
        replies: replies.filter(reply => comment.id === reply.target.source)
      }));
    }).then(annots => {
      appStore.preventDirtyPDF = true;
      return this._commentsApis.addAnnotationsInPDF(annots).then(() => appStore.previewRef.getApis("INTEGRATION_CONNECTOR", ["document"]).then(apiObject => apiObject.document.getUpdatedPDFBuffer(false)).then(buffer => {
        this._commentsApis.removeAnnotationsFromPDF(annots).then(() => {
          appStore.preventDirtyPDF = false;
        });

        return buffer;
      }));
    });
  }

}

var _default = CommentsApi;
exports.default = _default;
