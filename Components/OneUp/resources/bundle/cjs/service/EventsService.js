"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ServiceRegistry = _interopRequireDefault(require("../util/ServiceRegistry"));

var _Events = _interopRequireWildcard(require("../constants/Events"));

var _ConfigStoreConstants = require("../constants/ConfigStoreConstants");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

class EventsService {
  constructor() {
    this._handleEvent = this._handleEvent.bind(this);
    this._previewRef = undefined;
    this._eventListenerMap = {};
    this._pageInViewSent = 0;
    this._currentZoom = 0;
  }
  /**
   * @method
   * @description
   * Register an event to be notified for
   * @param {String} eventType event type
   * @param {Function} eventListener other event info like fileName
   *
   */


  registerEventListener(eventType, eventListener) {
    if (!this._eventListenerMap[eventType]) {
      this._eventListenerMap[eventType] = [];
    }

    this._eventListenerMap[eventType].push(eventListener);
  }

  _getTopbarActionEventType() {
    return _Events.default.ACTION_ICONS;
  }
  /**
   * @method
   * @description
   * initialize the event listener for multiple events like scroll, zoom, mouse movement etc.
   *
   * @param {Object} previewRef reference to the dc preview component
   */


  initialize(previewRef) {
    if (this._previewRef) {
      return;
    }

    this._previewRef = previewRef;

    const listenEvent = (eventEmitter, from, to) => {
      eventEmitter.on(from, this._handleEvent(to));
    };

    const eventListener = (from, to) => listenEvent(this._previewRef.events, from, to);

    this._previewRef.getApis("INT_EVENTS", ["documentEvents"]).then(apiObject => {
      const oldListener = (from, to) => listenEvent(apiObject.documentEvents, from, to);

      oldListener("pagesViewScrolled", _Events.FilePreviewEvents.PREVIEW_PAGE_VIEW_SCROLLED);
      oldListener("zoom", _Events.FilePreviewEvents.PREVIEW_ZOOM);
      oldListener("selectionend", _Events.FilePreviewEvents.PREVIEW_SELECTION_END);
      oldListener("keydown", _Events.FilePreviewEvents.PREVIEW_KEY_DOWN);
      oldListener("documentclick", _Events.FilePreviewEvents.PREVIEW_DOCUMENT_CLICK);
      oldListener("pageclick", _Events.FilePreviewEvents.PREVIEW_PAGE_CLICK);
      oldListener("pagedblclick", _Events.FilePreviewEvents.PREVIEW_PAGE_DOUBLE_CLICK);
    });

    eventListener("pagemouseenter", _Events.FilePreviewEvents.PREVIEW_PAGE_MOUSE_ENTER);
    eventListener("pagemouseleave", _Events.FilePreviewEvents.PREVIEW_PAGE_MOUSE_LEAVE);
    eventListener("currentpagechange", _Events.FilePreviewEvents.CURRENT_ACTIVE_PAGE);
    eventListener("pagesinviewchange", _Events.FilePreviewEvents.PAGES_IN_VIEW_CHANGE);
    eventListener("unsupportedfeaturefound", _Events.FilePreviewEvents.UNSUPPORTED_FEATURE_FOUND);
    eventListener("errorOccurred", _Events.FilePreviewEvents.PREVIEW_ERROR_EVENTS);
    eventListener("editPreprocessingInitiated", _Events.FilePreviewEvents.EDIT_PRE_PROCESSING_INITIATED);
    eventListener("documentviewupdate", _Events.InternalEvents.DOCUMENT_VIEW_UPDATE);
    eventListener("customizetopbar", this._getTopbarActionEventType());
    eventListener("completePDFBufferAvailable", _Events.default.PDF_VIEWER_READY); // PDF Analytics events

    eventListener("documentopen", _Events.PDFAnalyticsEvents.DOCUMENT_OPEN);
    eventListener("documentdownload", _Events.PDFAnalyticsEvents.DOCUMENT_DOWNLOAD);
    eventListener("documentprint", _Events.PDFAnalyticsEvents.DOCUMENT_PRINT);
    eventListener("textsearch", _Events.PDFAnalyticsEvents.TEXT_SEARCH);
    eventListener("bookmarkitemclick", _Events.PDFAnalyticsEvents.BOOKMARK_ITEM_CLICK);
    eventListener("hyperlinkopen", _Events.PDFAnalyticsEvents.HYPERLINK_OPEN);
    eventListener("textcopy", _Events.PDFAnalyticsEvents.TEXT_COPY);
  }
  /**
   * @method
   * @description
   * send the current page view event analytics
   *
   * @param {Object} eventData eventData have current page view info
   */


  _handlePageViewEvent(eventData) {
    if (eventData.startPage && eventData.endPage) {
      const start = eventData.startPage.pageNumber;
      const end = eventData.endPage.pageNumber;
      let pageInView = start;

      while (pageInView <= end) {
        if (this._pageInViewSent !== pageInView) {
          this.sendEvent(_Events.PDFAnalyticsEvents.PAGE_VIEW, {
            pageNumber: pageInView
          });
          this._pageInViewSent = pageInView;
        }

        pageInView += 1;
      }
    }
  }
  /**
   * @method
   * @description
   * handling the special analytics case like change in pageView, zoom etc
   *
   * @param {Object} eventType type of event
   * @param {Object} eventData values associated with the event.
   */


  _handlePDFAnalyticsSpecialCases(eventType, eventData) {
    if (eventType === _Events.FilePreviewEvents.PAGES_IN_VIEW_CHANGE) {
      this._handlePageViewEvent(eventData);
    } else if (eventType === _Events.FilePreviewEvents.PREVIEW_ZOOM && this._currentZoom !== eventData) {
      this._currentZoom = eventData;
      this.sendEvent(_Events.PDFAnalyticsEvents.ZOOM_LEVEL, {
        zoomLevel: eventData
      });
    }
  }

  _handleEvent(eventType) {
    return eventData => {
      if (eventType === _Events.InternalEvents.DOCUMENT_VIEW_UPDATE) {
        _ServiceRegistry.default.getService("AppStore").documentViewUpdate = eventData;
      }

      this._handlePDFAnalyticsSpecialCases(eventType, eventData);

      this.sendEvent(eventType, this._filterData(eventType, eventData));
    };
  }
  /**
   * @method
   * @description
   * formate the event data on the basis of eventType filter
   *
   * @param {Object} eventType type of event
   * @param {Object} eventData values associated with the event.
   *
   * @return {Object} event object
   */


  _filterData(eventType, eventData) {
    if (eventType === _Events.FilePreviewEvents.PREVIEW_PAGE_CLICK || eventType === _Events.FilePreviewEvents.PREVIEW_PAGE_DOUBLE_CLICK) {
      return _objectSpread({
        pageNumber: eventData.params.pageIndex + 1
      }, eventData.params);
    }

    if (eventType === _Events.FilePreviewEvents.PREVIEW_DOCUMENT_CLICK) {
      return {
        pageX: eventData.pageX,
        pageY: eventData.pageY,
        screenX: eventData.screenX,
        screenY: eventData.screenY,
        clientX: eventData.clientX,
        clientY: eventData.clientY
      };
    }

    if (eventType === _Events.FilePreviewEvents.PREVIEW_KEY_DOWN) {
      return {
        altKey: eventData.altKey,
        code: eventData.code,
        composed: eventData.composed,
        ctrlKey: eventData.ctrlKey,
        key: eventData.key,
        keyCode: eventData.keyCode,
        location: eventData.location,
        metaKey: eventData.metaKey,
        shiftKey: eventData.shiftKey,
        type: eventData.type
      };
    }

    if (eventType === _Events.FilePreviewEvents.PREVIEW_PAGE_VIEW_SCROLLED) {
      if (!eventData || !eventData.target) {
        return {};
      }

      return {
        clientHeight: eventData.target.clientHeight,
        clientWidth: eventData.target.clientWidth,
        scrollHeight: eventData.target.scrollHeight,
        scrollLeft: eventData.target.scrollLeft,
        scrollTop: eventData.target.scrollTop,
        scrollWidth: eventData.target.scrollWidth
      };
    }

    if (eventType === _Events.FilePreviewEvents.PREVIEW_PAGE_MOUSE_ENTER || eventType === _Events.FilePreviewEvents.PREVIEW_PAGE_MOUSE_LEAVE) {
      if (!eventData || !eventData.params) {
        return {};
      }

      return {
        pageNumber: eventData.params.pageIndex + 1
      };
    }

    if (eventType === _Events.FilePreviewEvents.PREVIEW_SELECTION_END) {
      const startPageNumber = eventData.startPage + 1;
      const endPageNumber = eventData.endPage + 1;
      const data = {
        startPageNumber,
        endPageNumber,
        newSelection: eventData.newSelection,
        selections: {}
      };

      for (let i = startPageNumber; i <= endPageNumber; i += 1) {
        data.selections[`page${i}`] = eventData[`page${i - 1}`];
      }

      return _objectSpread(_objectSpread({}, eventData), data);
    }

    if (eventType === _Events.default.ACTION_ICONS) {
      const appStore = _ServiceRegistry.default.getService("AppStore");

      const toolsConfig = {
        topbarConfig: eventData.topbarConfig || [],
        layoutConfig: eventData.layoutConfig || {}
      };

      if (appStore.getActionConfig("preview").showAnnotationTools && appStore.isEditAllowed) {
        let tools = _ServiceRegistry.default.getService("CommentsApi").getTopBarTools();

        if (!appStore.textSelectionEnabled) {
          tools = tools.filter(tool => [_Events.AnnotationTypes.HIGHLIGHT, _Events.AnnotationTypes.STRIKEOUT, _Events.AnnotationTypes.UNDERLINE].indexOf(tool.id) === -1);
        }

        const customTopBarTools = _ServiceRegistry.default.getService("CommentsApi").getCustomTopBarTools();

        toolsConfig.topbarConfig = tools.concat(toolsConfig.topbarConfig);
        toolsConfig.layoutConfig = _objectSpread(_objectSpread({}, toolsConfig.layoutConfig), {}, {
          customTopBarTools
        });
        toolsConfig.toolbar = _ServiceRegistry.default.getService("CommentsApi").getToolbar();
      } else {
        toolsConfig.topbarConfig = toolsConfig.topbarConfig.filter(val => _ConfigStoreConstants.ANNOTATION_TOOL_IDS.indexOf(val.id) === -1);
      }

      return _objectSpread(_objectSpread({}, eventData), toolsConfig);
    }

    return eventData;
  }

  _stopCoreEvents() {
    return false;
  }
  /**
   * @method
   * @description
   * it formate the event data and notifies if any listener is registered for the event.Event can be
   * related to internal, pdfviewer, annotation and so on.
   *
   * @param {String} eventType event type
   * @param {Object} eventData other event info like value, custom event
   */


  sendEvent(eventType, eventData = {}) {
    const appStore = _ServiceRegistry.default.getService("AppStore");

    if (this._sendCondition() || appStore.appRenderingBlocked && (_Events.FilePreviewEvents[eventType] || _Events.default[eventType] || _Events.PDFAnalyticsEvents[eventType])) {
      return;
    }

    if (this._eventListenerMap[eventType] && this._eventListenerMap[eventType].length > 0) {
      this._eventListenerMap[eventType].forEach(eventListener => eventListener(eventData));
    }

    if (this._stopCoreEvents(eventType)) {
      return;
    }

    let eData = eventData;

    if (_Events.PDFAnalyticsEvents[eventType]) {
      eData = _objectSpread(_objectSpread({}, eventData), {}, {
        fileName: appStore.fileInfoList[0].metaData.fileName
      });
    }

    const data = {
      type: eventType,
      data: eData
    };

    this._sendHelper(data);
  }

  _sendCondition() {
    return _ServiceRegistry.default.getService("AppStore").appClosed;
  }

  _sendHelper(data) {
    _ServiceRegistry.default.getService("EventHandlerService").handleEvent(data);
  }

}

exports.default = EventsService;