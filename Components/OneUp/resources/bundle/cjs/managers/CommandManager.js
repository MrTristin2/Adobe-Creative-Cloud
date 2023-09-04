"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _APICommands = require("../constants/APICommands");

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
class CommandManager {
  constructor(serviceFactory) {
    this._serviceFactory = serviceFactory;
  }
  /**
   * @method
   * @description
   * executeCommand(command, commandData) method to execute commands on file preview.
   *
   * @param {String} command - Command which we wanted to execute on file preview
   * @param {Object} commandData - data which should be passed with command.
   * @param options
   *
   * @return {Promise} - promise that resolves with result of command.
   */


  executeCommand(command, commandData = {}, options = {}) {
    if (_APICommands.AppAPICommands[command] || _APICommands.PreviewAPICommands[command]) {
      return this._serviceFactory.getService("CommandReceiverService").executeCommand({
        command,
        commandData,
        options
      });
    }

    return Promise.reject({
      message: `Command ${command} not supported.`
    });
  }
  /**
   * @method
   * @description
   * returns basic information about the PDF fetched from the PDF dictionary, such as the number
   * of pages and title of the PDF
   *
   * @return {Promise} - promise that resolves with pdf metadata.
   */


  getPDFMetadata() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_PDF_METADATA);
  }
  /**
   * @method
   * @description
   * sets the page cursor to any cursor style
   */


  setCursor(cursor) {
    return this.executeCommand(_APICommands.PreviewAPICommands.SET_CURSOR, cursor);
  }
  /**
   * @method
   * @description
   * revokes an applied cursor style and reverts it to the default cursor style.
   */


  resetCursor() {
    return this.executeCommand(_APICommands.PreviewAPICommands.RESET_CURSOR);
  }
  /**
   * @method
   * @description
   * returns the current page number of the in focus page
   *
   * @return {Promise} - promise that resolves with current page number.
   */


  getCurrentPage() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_CURRENT_PAGE);
  }
  /**
   * @method
   * @description
   * takes the PDF page number as input and returns the zoom level of that page.
   *
   * @return {Promise} - promise that resolves with current zoom level of pdf.
   */


  getPageZoom(pageNumber) {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_PAGE_ZOOM_LEVEL, pageNumber);
  }
  /**
   * @method
   * @description
   * This API enables navigation to any PDF page. It accepts a page number as input. You can also pass the x
   * and y coordinates on the page as optional input parameters to enable navigation to a particular location
   * on the page. When no coordinates are passed, the default coordinates are (0, 0)
   *
   * @param {Number} pageNumber
   * @param {Number} left
   * @param {Number} top
   */


  gotoLocation(pageNumber, left, top) {
    return this.executeCommand(_APICommands.PreviewAPICommands.GOTO_LOCATION, {
      pageNumber,
      left: left || 0,
      top: top || 0
    });
  }
  /**
   * @method
   * @description
   * accepts a page number as input and clears any text selection applied to the page.
   *
   * @param {Number} pageNumber
   */


  clearPageSelection(pageNumber) {
    return this.executeCommand(_APICommands.PreviewAPICommands.CLEAR_PAGE_SELECTION, pageNumber);
  }
  /**
   * @method
   * @description
   * enable or disable the text selection features
   *
   * @param {Boolean} enable text selection enabled if param is true
   */


  enableTextSelection(enable) {
    return this.executeCommand(_APICommands.PreviewAPICommands.TOGGLE_TEXT_SELECTION, enable);
  }
  /**
   * @method
   * @description
   * checks the PDF for XMP metadata and returns it if present
   *
   * @return {Promise} - promise that resolves with xmp metadata of documents.
   */


  getXMPMetadata(fields = [], rawStream = false) {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_XMP_METADATA, {
      fields,
      rawStream
    });
  }
  /**
   * @method
   * @description
   * If a user selects any content in the viewer, then the selected content can be fetched using this API.
   */


  getSelectedContent() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_SELECTED_CONTENT);
  }
  /**
   * @method
   * @description
   * It takes the search text as input and highlights the first search result in UI from the viewing page
   *
   * @param searchText string to be searched
   *
   * @return {Promise} - promise that resolves with search object.
   */


  search(searchText) {
    return this.executeCommand(_APICommands.PreviewAPICommands.START_SEARCH, {
      searchText
    });
  }

  getBookmarkAPIs() {
    return {
      /**
       * @method
       * @description
       * This API is used to get all the bookmarks residing in the PDF file.
       *
       * @return {Promise} - promise that resolves with array of Bookmark Object
      */
      getBookmarks: () => this.executeCommand(_APICommands.PreviewAPICommands.GET_ALL_BOOKMARK),

      /**
       * @method
       * @description
       * This API is used to open the bookmark residing in the PDF file.
       *
       * @param id bookmarkId
       *
       * @return {Promise} - promise that resolves with boolean
      */
      openBookmark: id => this.executeCommand(_APICommands.PreviewAPICommands.OPEN_BOOKMARK, id)
    };
  }

  getAttachmentAPIs() {
    return {
      /**
       * @method
       * @description
       * This API is used to get all the attachments residing in the PDF file.
       *
       * @return {Promise} - promise that resolves with array of Attachment Objects.
      */
      getAttachments: () => this.executeCommand(_APICommands.PreviewAPICommands.GET_ATTACHMENTS),

      /**
       * @method
       * @description
       * This API is used to get the attachment residing in the PDF file.
       *
       * @param name fileName
       *
       * @return {Promise} - promise that resolves with Attachment Buffer Object.
       */
      getAttachmentBuffer: name => this.executeCommand(_APICommands.PreviewAPICommands.GET_ATTACHMENT_BUFFER, name)
    };
  }

  getZoomAPIs() {
    return {
      /**
       * @method
       * @description
       * the document zooms in to the given zoom level such that it lies between minZoom and maxZoom
       *
       * @param level zoomLevel
       *
       * @return {Promise} - promise that resolves with current zoom level
       */
      setZoomLevel: level => this.executeCommand(_APICommands.PreviewAPICommands.SET_ZOOM_LEVEL, level),

      /**
       * @method
       * @description
       * the document zooms in to the next zoom level such that it's never greater than maxZoom
       *
       * @return {Promise} - promise that resolves with current zoom level
       */
      zoomIn: () => this.executeCommand(_APICommands.PreviewAPICommands.ZOOM_IN),

      /**
       * @method
       * @description
       * the document zooms out to the previous zoom level such that it's never less than minZoom
       *
       * @return {Promise} - promise that resolves with current zoom level
       */
      zoomOut: () => this.executeCommand(_APICommands.PreviewAPICommands.ZOOM_OUT),

      /**
       * @method
       * @description
       * returns the minimum and maximum allowed zoom levels of a document.
       *
       * @return {Promise} - promise that resolves with min and max zoom level
       */
      getZoomLimits: () => this.executeCommand(_APICommands.PreviewAPICommands.GET_ZOOM_LIMIT)
    };
  }
  /**
   * @method
   * @description
   * get the search UI component
   */


  getSearchUI() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_SEARCH_UI);
  }

  closeViewer() {
    return this.executeCommand(_APICommands.AppAPICommands.CLOSE_PDF_VIEWER);
  }
  /**
   * @method
   * @description
   * returns the thumbnail of the specified page in a document
   *
   * @param pageNumbers - array of page numbers
   * @param options - options can be zoomLevel
   *
   * @return {Promise} - promise that resolves with thumbnail data for page numbers
   */


  getThumbnail(pageNumbers, options = {}) {
    return Promise.all([this.getZoomAPIs().getZoomLimits(), this.getPDFMetadata()]).then(([zoomData, {
      numPages: totalPageCount
    }]) => this.executeCommand(_APICommands.PreviewAPICommands.GET_THUMBNAIL, {
      pageNumbers,
      options
    }, {
      preCalculatedData: {
        zoomData,
        totalPageCount
      }
    }));
  }

  savePDF() {
    return this.executeCommand(_APICommands.PreviewAPICommands.SAVE_PDF);
  }

  downloadPDF() {
    return this.executeCommand(_APICommands.PreviewAPICommands.DOWNLOAD_PDF);
  }
  /**
   * @method
   * @description
   * it exposes all the allowed command manager interface provided by preview APIs
   *
   * @return {Promise} - promise that resolves to command manager object
   */


  getCommandManager() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_COMMAND_MANAGER);
  }
  /**
   * @method
   * @description
   * it registers a callback for 'before RHP Opens' with preview APIs
   */


  registerBeforeRHPOpenCallback(callbackFn, opts) {
    return this.executeCommand(_APICommands.PreviewAPICommands.REGISTER_BEFORE_RHP_OPEN_CALLBACK, {
      callbackFn,
      opts
    });
  }
  /**
   * @method
   * @description
   * it registers callback for 'before quickTools gets activated' with preview APIs
   */


  registerBeforeQuickToolActivatedCallback(callbackFn, opts) {
    return this.executeCommand(_APICommands.PreviewAPICommands.REGISTER_BEFORE_QUICK_TOOL_ACTIVATED_CALLBACK, {
      callbackFn,
      opts
    });
  }
  /**
   * @method
   * @description
   * resets the quick tool to default state.
   */


  resetQuickTool() {
    return this.executeCommand(_APICommands.PreviewAPICommands.RESET_QUICK_TOOL);
  }
  /**
   * @method
   * @description
   * returns the currently activated quick tool
   */


  getActiveQuickTool() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_ACTIVE_QUICK_TOOL);
  }
  /**
   * @method
   * @description
   * show/hide the quick tool panel.
   *
   * @param {Boolean} visible QuickTool Panel is visible if param is true
   */


  showQuickTool(visible) {
    return this.executeCommand(_APICommands.PreviewAPICommands.SHOW_QUICK_TOOL, visible);
  }
  /**
   * @method
   * @description
   * show/hide the commenting tools.
   *
   * @param {Boolean} visible Commenting Tools are visible if param is true
   */


  forceShowCommentingTools(visible) {
    return this.executeCommand(_APICommands.PreviewAPICommands.FORCE_SHOW_COMMENTING_TOOLS, visible);
  }
  /**
   * @method
   * @description
   * check if editing is allowed on a document
   */


  isEditingAllowed() {
    return this.executeCommand(_APICommands.PreviewAPICommands.IS_EDITING_ALLOWED);
  }
  /**
   * @method
   * @description
   * To update modifed filename in viewer into preview document stores.
   *
   * @param {string} fileName Updated FileName
   */


  setFileName(fileName) {
    this.executeCommand(_APICommands.PreviewAPICommands.SET_FILE_NAME, fileName);
  }
  /**
   * @method
   * @description
   * expands RHP embedded with the tool whose ID is passed as argument
   */


  openRHPPanel(toolId) {
    return this.executeCommand(_APICommands.PreviewAPICommands.OPEN_RHP_PANEL, toolId);
  }
  /**
   * @method
   * @description
   * closes the quick tool to default state
   */


  closeRHPPanel() {
    return this.executeCommand(_APICommands.PreviewAPICommands.CLOSE_RHP_PANEL);
  }
  /**
   * @method
   * @description
   * returns the currently expanded rhp tool's config
   */


  getRHPConfig() {
    return this.executeCommand(_APICommands.PreviewAPICommands.GET_RHP_CONFIG);
  }
  /**
   * @method
   * @description
   * method to update preview app config
   *
   * @param {String} newAppConfig - Stringified app config
   */


  updatePreviewAppConfig(newAppConfig) {
    return this.executeCommand(_APICommands.PreviewAPICommands.UPDATE_PREVIEW_APP_CONFIG, newAppConfig);
  }

  getExposedAPIs(options) {
    return {
      getXMPMetadata: this.getXMPMetadata.bind(this),
      getSelectedContent: this.getSelectedContent.bind(this),
      getPDFMetadata: this.getPDFMetadata.bind(this),
      setCursor: this.setCursor.bind(this),
      resetCursor: this.resetCursor.bind(this),
      getCurrentPage: this.getCurrentPage.bind(this),
      getPageZoom: this.getPageZoom.bind(this),
      gotoLocation: this.gotoLocation.bind(this),
      clearPageSelection: this.clearPageSelection.bind(this),
      enableTextSelection: this.enableTextSelection.bind(this),
      getSearchUI: this.getSearchUI.bind(this),
      closeViewer: this.closeViewer.bind(this),
      getZoomAPIs: this.getZoomAPIs.bind(this),
      getBookmarkAPIs: this.getBookmarkAPIs.bind(this),
      getAttachmentAPIs: this.getAttachmentAPIs.bind(this),
      search: searchText => {
        if (options.previewConfig.enableSearchAPIs) {
          return this.search(searchText);
        }

        return Promise.reject("Search APIs not enabled.");
      },
      getThumbnail: this.getThumbnail.bind(this),
      savePDF: this.savePDF.bind(this),
      downloadPDF: this.downloadPDF.bind(this),
      getCommandManager: this.getCommandManager.bind(this),
      registerBeforeRHPOpenCallback: this.registerBeforeRHPOpenCallback.bind(this),
      registerBeforeQuickToolActivatedCallback: this.registerBeforeQuickToolActivatedCallback.bind(this),
      resetQuickTool: this.resetQuickTool.bind(this),
      getActiveQuickTool: this.getActiveQuickTool.bind(this),
      showQuickTool: this.showQuickTool.bind(this),
      isEditingAllowed: this.isEditingAllowed.bind(this),
      setFileName: this.setFileName.bind(this),
      openRHPPanel: this.openRHPPanel.bind(this),
      closeRHPPanel: this.closeRHPPanel.bind(this),
      getRHPConfig: this.getRHPConfig.bind(this),
      updatePreviewAppConfig: this.updatePreviewAppConfig.bind(this),
      forceShowCommentingTools: this.forceShowCommentingTools.bind(this)
    };
  }

}

exports.default = CommandManager;