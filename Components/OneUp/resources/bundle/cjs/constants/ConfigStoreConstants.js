"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPreset = exports.TOPBAR_ACTION_LIST = exports.PRESET_INITIAL_CONFIG = exports.PRESET_FORCE_CONFIG = exports.MISSING_STATUS_CALLBACK_CONFIG = exports.MISSING_SAVE_CALLBACK_CONFIG = exports.INITIAL_CONFIG = exports.INITIAL_ACTION_CONFIG = exports.DEFAULT_STATUS_CALLBACK_CONFIG = exports.DEFAULT_SAVE_CALLBACK_CONFIG = exports.ANNOTATION_TOOL_TYPE_IDS = exports.ANNOTATION_TOOL_IDS = void 0;

var _ViewMode = require("./ViewMode");

/*************************************************************************
* ADOBE CONFIDENTIAL
* ___________________
*
* Copyright 2020 Adobe
* All Rights Reserved.
*
* NOTICE: All information contained herein is, and remains
* the property of Adobe and its suppliers, if any. The intellectual
* and technical concepts contained herein are proprietary to Adobe
* and its suppliers and are protected by all applicable intellectual
* property laws, including trade secret and copyright laws.
* Dissemination of this information or reproduction of this material
* is strictly forbidden unless prior written permission is obtained
* from Adobe.
**************************************************************************/
const defaultPreset = _ViewMode.Preset.FULL_WINDOW;
exports.defaultPreset = defaultPreset;
const INITIAL_CONFIG = {
  showTopBar: false,
  showBrandingTitle: true,
  showLegalNotice: false,
  leftAlignFileName: false,
  showFileLoadingProgress: true,
  showSimpleLoader: false,
  showUploadFileLoader: false,
  fullScreenLoader: false,
  supportUrl: "",
  integrationName: "",
  localizationStrings: {},
  externalJSComponentURL: "",
  takeActionOnInternalEvents: true,
  workOnInLineIndependently: true,
  supportDarkMode: false,
  fileDownloadAbortable: false
};
exports.INITIAL_CONFIG = INITIAL_CONFIG;
const INITIAL_ACTION_CONFIG = {
  preview: {
    embedMode: defaultPreset,
    assetType: "/external",
    showAnnotationTools: true,
    enableAnnotationAPIs: false,
    enableSearchAPIs: false,
    includePDFAnnotations: false,
    showLeftHandPanel: true,
    showPageControls: true,
    showDownloadPDF: true,
    showPrintPDF: true,
    showFitPageButton: true,
    showFitWidthButton: true,
    showRotateViewControl: false,
    showZoomControl: true,
    showPageNavigationControl: true,
    defaultViewMode: "",
    enableFormFilling: true,
    docViewBgColor: "#CACACA",
    showFullScreenInHUD: false,
    localizationStrings: {},
    annotationUIConfig: {// downloadWithAnnotations: false,
      // printWithAnnotations: false,
      // showCommentsPanel: true,
      // showToolsOnTextSelection: true,
      // showToolbar: true,
    },
    shouldRenderCommentsDropin: false,
    shouldRenderSignAuthoringDropin: false,
    shouldRenderVisualizerDropin: false,
    disableContextMenuAutoTrigger: false,
    selectivelyRenderAnnotsFlag: undefined,
    shouldDisableDownloadInContextMenu: false,
    adjustSearchUI: true,
    adjustSearchUIBelowTopBar: true,
    alternateAssetUri: "",
    // ---------------------------------------------------------------
    // TODO:: clean up below 5 temp flags (currently only in use by Viewer dropin)
    // ---------------------------------------------------------------
    dcapiRenditionSize: 800,
    dcapiRenditionFormat: "png",
    // ---------------------------------------------------------------
    uiActionConfig: [],
    fixedWidthLeftMargin: undefined,
    fixedWidthRightMargin: undefined,
    hudBottomMargin: undefined,
    showViewMode: false,
    showFileNameToast: undefined,
    showScrubber: undefined,
    disableUnsupportedFeatureAlert: false,
    shouldUseModernViewer: false,
    enableEraserAnnotationTool: false,
    enableFreeTextAnnotationTool: true,
    enableLinearization: false,
    linearizationConfig: {
      makeMultipartRangeCalls: false,
      initiateEarlyFileDownload: true
    },
    enableEdit: false,
    usePartialEdit: false,
    saveBeforeUnload: false,
    useIframelessPrint: false,
    editDeepLink: false
  }
};
exports.INITIAL_ACTION_CONFIG = INITIAL_ACTION_CONFIG;
const DEFAULT_STATUS_CALLBACK_CONFIG = {
  autoSaveFrequency: 30,
  filePollFrequency: 10,
  enableFocusPolling: true,
  keepPolling: false
};
exports.DEFAULT_STATUS_CALLBACK_CONFIG = DEFAULT_STATUS_CALLBACK_CONFIG;
const MISSING_STATUS_CALLBACK_CONFIG = {
  autoSaveFrequency: 0,
  filePollFrequency: 0,
  enableFocusPolling: false,
  keepPolling: false
};
exports.MISSING_STATUS_CALLBACK_CONFIG = MISSING_STATUS_CALLBACK_CONFIG;
const DEFAULT_SAVE_CALLBACK_CONFIG = {
  incremental: false,
  autoSaveFrequency: 0,
  enableFocusPolling: false,
  showSaveButton: true,
  showError: true,
  showEditStatusInfo: true
};
exports.DEFAULT_SAVE_CALLBACK_CONFIG = DEFAULT_SAVE_CALLBACK_CONFIG;
const MISSING_SAVE_CALLBACK_CONFIG = {
  incremental: false,
  autoSaveFrequency: 0,
  enableFocusPolling: false,
  showSaveButton: true,
  showError: true,
  showEditStatusInfo: true
};
exports.MISSING_SAVE_CALLBACK_CONFIG = MISSING_SAVE_CALLBACK_CONFIG;
const PRESET_INITIAL_CONFIG = {
  INTEGRATION: {
    config: {
      backgroundColor: "#eaeaea",
      showBranding: true,
      showPreviewErrors: false
    },
    actionConfig: {
      showFullScreen: false
    }
  },
  FULL_WINDOW: {
    config: {
      backgroundColor: "#eaeaea",
      showBranding: false
    },
    actionConfig: {
      showFullScreen: false,
      dockPageControls: true
    }
  },
  LIGHT_BOX: {
    config: {
      backgroundColor: "rgba(0, 0, 0, 0.6)",
      showBranding: true
    },
    actionConfig: {
      exitPDFViewerType: _ViewMode.LightBoxExitPDFViewerType.CLOSE,
      showFullScreen: false,
      dockPageControls: false
    }
  },
  SIZED_CONTAINER: {
    config: {
      backgroundColor: "#eaeaea",
      showBranding: true
    },
    actionConfig: {
      showFullScreen: true,
      dockPageControls: true
    }
  },
  IN_LINE: {
    config: {
      backgroundColor: "#fff",
      showBranding: true
    },
    actionConfig: {
      showFullScreen: false
    }
  }
};
exports.PRESET_INITIAL_CONFIG = PRESET_INITIAL_CONFIG;
const PRESET_FORCE_CONFIG = {
  INTEGRATION: {
    config: {
      showTopBar: true,
      leftAlignFileName: false,
      backgroundColor: "#eaeaea",
      externalJSComponentURL: ""
    },
    actionConfig: {
      exitPDFViewerType: "",
      enableBookmarkAPIs: true,
      enableAttachmentAPIs: true,
      showFullScreen: false,
      dockPageControls: false,
      showDownloadPDFInPageControl: false,
      showFullScreenInHUD: false,
      enableLinearization: false
    }
  },
  FULL_WINDOW: {
    config: {
      leftAlignFileName: true,
      showBrandingTitle: false,
      supportUrl: "",
      integrationName: "",
      localizationStrings: {}
    },
    actionConfig: {
      exitPDFViewerType: "",
      showDownloadPDFInPageControl: false,
      enableBookmarkAPIs: true,
      enableAttachmentAPIs: true,
      showFullScreenInHUD: false,
      localizationStrings: {},
      useIframelessPrint: false
    }
  },
  LIGHT_BOX: {
    config: {
      leftAlignFileName: true,
      showBrandingTitle: false,
      supportUrl: "",
      integrationName: "",
      localizationStrings: {}
    },
    actionConfig: {
      showAnnotationTools: false,
      enableAnnotationAPIs: false,
      enableBookmarkAPIs: false,
      enableAttachmentAPIs: false,
      includePDFAnnotations: false,
      enableFormFilling: false,
      showLeftHandPanel: false,
      showDownloadPDFInPageControl: false,
      showFullScreenInHUD: false,
      showFullScreen: false,
      localizationStrings: {},
      adjustSearchUI: false,
      shouldUseModernViewer: false,
      enableLinearization: false,
      enableEdit: false,
      useIframelessPrint: false
    }
  },
  SIZED_CONTAINER: {
    config: {
      leftAlignFileName: true,
      showBrandingTitle: false,
      supportUrl: "",
      integrationName: "",
      localizationStrings: {},
      externalJSComponentURL: ""
    },
    actionConfig: {
      exitPDFViewerType: "",
      showAnnotationTools: false,
      enableAnnotationAPIs: false,
      enableBookmarkAPIs: false,
      enableAttachmentAPIs: false,
      includePDFAnnotations: false,
      enableFormFilling: false,
      showLeftHandPanel: false,
      showPageControls: true,
      showFitPageButton: false,
      showFitWidthButton: false,
      showRotateViewControl: false,
      showZoomControl: false,
      defaultViewMode: "SINGLE_PAGE",
      showFullScreenInHUD: true,
      showDownloadPDFInPageControl: false,
      showPageNavigationControl: true,
      localizationStrings: {},
      adjustSearchUI: false,
      shouldUseModernViewer: false,
      enableLinearization: false,
      enableEdit: false,
      useIframelessPrint: false
    }
  },
  IN_LINE: {
    config: {
      leftAlignFileName: true,
      showTopBar: false,
      showBrandingTitle: false,
      supportUrl: "",
      integrationName: "",
      localizationStrings: {},
      externalJSComponentURL: ""
    },
    actionConfig: {
      exitPDFViewerType: "",
      showAnnotationTools: false,
      enableAnnotationAPIs: false,
      enableBookmarkAPIs: false,
      enableAttachmentAPIs: false,
      includePDFAnnotations: false,
      enableFormFilling: false,
      showLeftHandPanel: false,
      showPageControls: true,
      dockPageControls: false,
      showFitPageButton: false,
      showFitWidthButton: false,
      defaultViewMode: "IN_PLACE",
      showFullScreen: false,
      showFullScreenInHUD: false,
      showRotateViewControl: false,
      showZoomControl: false,
      showDownloadPDFInPageControl: true,
      showPageNavigationControl: true,
      localizationStrings: {},
      adjustSearchUI: false,
      shouldUseModernViewer: false,
      enableLinearization: false,
      enableEdit: false,
      useIframelessPrint: false
    }
  }
};
exports.PRESET_FORCE_CONFIG = PRESET_FORCE_CONFIG;
const ANNOTATION_TOOL_TYPE_IDS = ["stickyNote", "highlight", "freehandTool", "freetext", "eraserTool"];
exports.ANNOTATION_TOOL_TYPE_IDS = ANNOTATION_TOOL_TYPE_IDS;
const ANNOTATION_TOOL_IDS = [...ANNOTATION_TOOL_TYPE_IDS, "undo", "redo"];
exports.ANNOTATION_TOOL_IDS = ANNOTATION_TOOL_IDS;
const TOPBAR_ACTION_LIST = ["undo", "redo", "freetext", "stickyNote", "highlight", "freehandTool", "eraserTool", "documentSearch", "documentPrint"];
exports.TOPBAR_ACTION_LIST = TOPBAR_ACTION_LIST;