"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _APICommands = require("../constants/APICommands");

var _Deferred = _interopRequireDefault(require("../util/Deferred"));

var _Events = require("../constants/Events");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class AnnotationManager {
  constructor(serviceFactory) {
    this.waitForCommandCompletion = [];
    this._serviceFactory = serviceFactory;
  }

  initEventListener(limited) {
    this.hasLimitedAccess = limited;
    this.initializeEventListener = limited ? Promise.resolve() : this.sendCommand(_APICommands.AnnotationAPICommands.ANNOTATION_EVENT_LISTENER).catch(() => {});
  }

  executeCommand(command, completionPromise) {
    return new Promise((resolve, reject) => {
      command().then(res => {
        completionPromise.resolve();
        resolve(res);
      }).catch(err => {
        completionPromise.resolve();
        reject(err);
      });
    });
  }

  executeCommandAfterWait(command) {
    const waitPromises = [...this.waitForCommandCompletion];
    const completionPromise = new _Deferred.default();
    this.waitForCommandCompletion.push(completionPromise.promise);
    return Promise.all(waitPromises).then(() => this.executeCommand(command, completionPromise));
  }

  getExposedAPIs() {
    const apis = {
      setConfig: this.setConfig.bind(this),
      startAnnotationMode: this.startAnnotationMode.bind(this),
      endAnnotationMode: this.endAnnotationMode.bind(this),
      commitUnsavedChanges: this.commitUnsavedChanges.bind(this),
      getPDFBuffer: this.getPDFBuffer.bind(this)
    };
    return this.hasLimitedAccess ? apis : _objectSpread({
      addAnnotations: this.addAnnotations.bind(this),
      updateAnnotation: this.updateAnnotation.bind(this),
      getAnnotations: this.getAnnotations.bind(this),
      deleteAnnotations: this.deleteAnnotations.bind(this),
      selectAnnotation: this.selectAnnotation.bind(this),
      unselectAnnotation: this.unselectAnnotation.bind(this),
      registerEventListener: this.registerEventListener.bind(this),
      addAnnotationsInPDF: this.addAnnotationsInPDF.bind(this),
      removeAnnotationsFromPDF: this.removeAnnotationsFromPDF.bind(this)
    }, apis);
  }

  sendCommand(command, commandData = {}) {
    return this._serviceFactory.getService("CommandReceiverService").executeCommand({
      command,
      commandData
    });
  }
  /**
   * @method
   * @description
   * API to add/import annotation(s) in the PDF file buffer.
   *
   * @param annotations list of annotation data
   * @param options
   */


  addAnnotations(annotations, options = {}) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.ADD_ANNOTATIONS, {
      annotations,
      options
    }));
  }
  /**
   * @method
   * @description
   * API to update the existing annotation in the PDF file buffer.
   *
   * @param annotation annotation data
   */


  updateAnnotation(annotation) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.UPDATE_ANNOTATION, annotation));
  }
  /**
   * @method
   * @description
   * API to get annotations for the file on the basis of the filter provided.
   *
   * @param {Object} filters filter can have annotationIds and pageRange.
   * if annotationIds are provided then all the annotations matching with provided
   * annotation ids will be returned.
   * if pageRange is provided and no annotation Id is provided then all the annotations
   * lies between the startPage and endPage will be returned
   */


  getAnnotations(filters = {}) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.GET_ANNOTATIONS, filters));
  }
  /**
   * @method
   * @description
   * API to delete annotations from the pdf on basis of filter provided.
   *
   * @param {Object} filters filter can have annotationIds and pageRange.
   * if annotationIds are provided then all the annotations matching with provided annotation ids will be deleted
   * if pageRange is provided and no annotation Id is provided then all the annotations lie between the startPage
   * and endPage will be deleted
   */


  deleteAnnotations(filters = {}) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.DELETE_ANNOTATIONS, filters));
  }
  /**
   * @method
   * @description
   * API to select the annotation in pdf file
   *
   * @param id annotation id
   */


  selectAnnotation(id) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.SELECT_ANNOTATION, id));
  }
  /**
   * @method
   * @description
   * API to unselect the annotation. The last selected annotation will be unselected.
   */


  unselectAnnotation() {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.UNSELECT_ANNOTATION));
  }

  registerEventListener(listener, options = {}) {
    let eventsToListen;

    if (options && Array.isArray(options.listenOn) && options.listenOn.length > 0) {
      eventsToListen = options.listenOn;
    } else {
      eventsToListen = Object.keys(_Events.AnnotationEvents);
    }

    this._serviceFactory.getService("EventHandlerService").registerEventListener(eventsToListen, listener);
  }
  /**
   * @method
   * @description
   * API to set config that can be available at comment dropin
   *
   * @param {Object} config config can have properties downloadWithAnnotations,
   * printWithAnnotations etc
   */


  setConfig(config) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.SET_CONFIG, config));
  }
  /**
   * @method
   * @description
   * API to commit user's unsaved changes
   */


  commitUnsavedChanges() {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.COMMIT_UNSAVED_CHANGES));
  }
  /**
   * @method
   * @description
   * API to enter in annotation mode, after which the user can place notes by click
   * in document area or highlight text etc
   *
   * @param mode
   * @param options
   */


  startAnnotationMode(mode, options = {}) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.START_ANNOTATION_MODE, {
      mode,
      options
    }));
  }
  /**
   * @method
   * @description
   * API to end the last started annotation mode.
   */


  endAnnotationMode() {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.END_ANNOTATION_MODE));
  }
  /**
   * @method
   * @description
   * API to add/burn annotations in PDF buffer. It will return the updated PDF buffer.
   * This will burn only the supported annotations provided by the client.
   *
   * @param annotationsList list of annotation data
   */


  addAnnotationsInPDF(annotationsList) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.ADD_ANNOTATIONS_IN_PDF, annotationsList));
  }
  /**
   * @method
   * @description
   * API to separate out PDF and Annotations if there is any already residing within PDF
   * buffer. This API will only remove the annotations that are supported by View SDK
   * currently, all other annotations will remain as it is in PDF buffer.
   */


  removeAnnotationsFromPDF() {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.REMOVE_ANNOTATIONS_FROM_PDF));
  }
  /**
   * @method
   * @description
   * API to provide PDF Buffer
   */


  getPDFBuffer(options = {}) {
    return this.executeCommandAfterWait(() => this.sendCommand(_APICommands.AnnotationAPICommands.GET_PDF_BUFFER, options));
  }

}

exports.default = AnnotationManager;
