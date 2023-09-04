"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PDFAnalyticsEvents = exports.OverlayEvents = exports.InternalEvents = exports.FilePreviewEvents = exports.AnnotationTypes = exports.AnnotationEvents = void 0;

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
*  Copyright 2020 Adobe
*  All Rights Reserved.
*
* NOTICE:  All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
// Events which are meant to SDK
const InternalEvents = {
  PREVIEW_REF_READY: "PREVIEW_REF_READY",
  RELOAD_APP: "RELOAD_APP",
  FILE_NAME_TOAST_VISIBILITY: "FILE_NAME_TOAST_VISIBILITY",
  DOCUMENT_VIEW_UPDATE: "DOCUMENT_VIEW_UPDATE",
  FILE_PREVIEW_READY: "FILE_PREVIEW_READY",
  FILE_PREVIEW_FAILED: "FILE_PREVIEW_FAILED",
  APP_PERF_DATA: "APP_PERF_DATA",
  FILE_LOADING_PROGRESS: "FILE_LOADING_PROGRESS",
  FILE_FIRST_PAGE_LOADING_DONE: "FILE_FIRST_PAGE_LOADING_DONE",
  ACTION_CONFIG_UPDATE: "ACTION_CONFIG_UPDATE"
};
exports.InternalEvents = InternalEvents;
const AnnotationEvents = {
  ANNOTATION_ADDED: "ANNOTATION_ADDED",
  ANNOTATION_UPDATED: "ANNOTATION_UPDATED",
  ANNOTATION_DELETED: "ANNOTATION_DELETED",
  ANNOTATION_SELECTED: "ANNOTATION_SELECTED",
  ANNOTATION_UNSELECTED: "ANNOTATION_UNSELECTED",
  ANNOTATION_MODE_STARTED: "ANNOTATION_MODE_STARTED",
  ANNOTATION_MODE_ENDED: "ANNOTATION_MODE_ENDED",
  ANNOTATION_CLICKED: "ANNOTATION_CLICKED",
  ANNOTATION_MOUSE_OVER: "ANNOTATION_MOUSE_OVER",
  ANNOTATION_MOUSE_OUT: "ANNOTATION_MOUSE_OUT",
  ANNOTATION_COUNT: "ANNOTATION_COUNT"
};
exports.AnnotationEvents = AnnotationEvents;
const AnnotationTypes = {
  HIGHLIGHT: "highlight",
  STRIKEOUT: "strikeout",
  UNDERLINE: "underline",
  SHAPE: "shape",
  NOTE: "note",
  FREETEXT: "freetext"
};
exports.AnnotationTypes = AnnotationTypes;
const PDFAnalyticsEvents = {
  DOCUMENT_OPEN: "DOCUMENT_OPEN",
  PAGE_VIEW: "PAGE_VIEW",
  DOCUMENT_DOWNLOAD: "DOCUMENT_DOWNLOAD",
  DOCUMENT_PRINT: "DOCUMENT_PRINT",
  TEXT_SEARCH: "TEXT_SEARCH",
  BOOKMARK_ITEM_CLICK: "BOOKMARK_ITEM_CLICK",
  HYPERLINK_OPEN: "HYPERLINK_OPEN",
  TEXT_COPY: "TEXT_COPY",
  ZOOM_LEVEL: "ZOOM_LEVEL"
};
exports.PDFAnalyticsEvents = PDFAnalyticsEvents;
const FilePreviewEvents = {
  PREVIEW_KEY_DOWN: "PREVIEW_KEY_DOWN",
  PREVIEW_PAGE_VIEW_SCROLLED: "PREVIEW_PAGE_VIEW_SCROLLED",
  PREVIEW_DOCUMENT_CLICK: "PREVIEW_DOCUMENT_CLICK",
  PREVIEW_PAGE_CLICK: "PREVIEW_PAGE_CLICK",
  PREVIEW_PAGE_DOUBLE_CLICK: "PREVIEW_PAGE_DOUBLE_CLICK",
  PREVIEW_PAGE_MOUSE_ENTER: "PREVIEW_PAGE_MOUSE_ENTER",
  PREVIEW_PAGE_MOUSE_LEAVE: "PREVIEW_PAGE_MOUSE_LEAVE",
  CURRENT_ACTIVE_PAGE: "CURRENT_ACTIVE_PAGE",
  PREVIEW_SELECTION_END: "PREVIEW_SELECTION_END",
  VIEW_MODE_CHANGE: "VIEW_MODE_CHANGE",
  PREVIEW_ZOOM: "PREVIEW_ZOOM",
  PAGES_IN_VIEW_CHANGE: "PAGES_IN_VIEW_CHANGE",
  UNSUPPORTED_FEATURE_FOUND: "UNSUPPORTED_FEATURE_FOUND",
  PREVIEW_ERROR_EVENTS: "PREVIEW_ERROR_EVENTS",
  EDIT_PRE_PROCESSING_INITIATED: "EDIT_PRE_PROCESSING_INITIATED"
};
exports.FilePreviewEvents = FilePreviewEvents;
const OverlayEvents = {
  PAGE_OVERLAY_ATTACHED: "PAGE_OVERLAY_ATTACHED",
  PAGE_OVERLAY_REMOVED: "PAGE_OVERLAY_REMOVED"
};
exports.OverlayEvents = OverlayEvents;
const Events = {
  VIEWER_UNMOUNT: "VIEWER_UNMOUNT",
  PDF_VIEWER_OPEN: "PDF_VIEWER_OPEN",
  PDF_VIEWER_CLOSE: "PDF_VIEWER_CLOSE",
  APP_RENDERING_START: "APP_RENDERING_START",
  APP_RENDERING_DONE: "APP_RENDERING_DONE",
  APP_RENDERING_FAILED: "APP_RENDERING_FAILED",
  ACTION_ICONS: "ACTION_ICONS",
  SEARCH_UI_TOGGLE: "SEARCH_UI_TOGGLE",
  FILE_STATUS: "FILE_STATUS",
  FULL_SCREEN_TOGGLE: "FULL_SCREEN_TOGGLE",
  FILE_DOWNLOAD_FAILED: "FILE_DOWNLOAD_FAILED",
  PDF_VIEWER_READY: "PDF_VIEWER_READY"
};
var _default = Events;
exports.default = _default;