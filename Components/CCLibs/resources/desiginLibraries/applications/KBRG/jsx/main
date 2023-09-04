/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2013 Adobe Systems Incorporated
 *  All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains
 * the property of Adobe Systems Incorporated and its suppliers,
 * if any.  The intellectual and technical concepts contained
 * herein are proprietary to Adobe Systems Incorporated and its
 * suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Adobe Systems Incorporated.
 **************************************************************************/

/*jslint vars: true, plusplus: true, devel: true, nomen: true, regexp: true, indent: 4, maxerr: 50, sloppy: true, continue: true */
/*globals $, app */

$._ADBE_LIBS_KBRG = {
    getTooltipState: function () {
        return 'true';
    },
    getCurrentState: function () {
        // Bridge does not need to implement this function as Br does not interact with
        // the Libraries panel except for Bulk upload.
        return;
    },
    clearSelectionInContentPanel: function () {
        // Deselcting all the contents from Bridge's Content Panel
        return app.document.deselectAll();
    },
    setSelectionData: function (selectionCount, selectionData) {
      //Sending selection data for previews in Bridge
      var selectionDataArray = new Array();
      for(var i = 0 ; i < selectionData.length ; i++) {
        var tempData = new SelectionData();
        tempData.id = selectionData[i].id;
        tempData.name = selectionData[i].name;
        tempData.type = selectionData[i].type;
        selectionDataArray[i] = tempData;
      }
      return app.document.setSelectionData(selectionCount, selectionDataArray);
    },
    updateSelectionData: function (id, name) {
      //Sending updation info to Bridge
      return app.document.updateSelectionData(id, name);
    },
    setRenditionPath: function (id, size, path) {
      //Sending rendition path to Bridge
      return app.document.setRenditionPath(id, size, path);
    },
    setColorValues: function (id, rgbValues) {
      //Sending color values to Bridge
      return app.document.setColorValues(id, rgbValues);
    },
    isFontAvailable: function (style) {
        // we need to look at the performance impact of this
        // API as Br runs these scripts on main thread
        app.refreshFonts();

        if (style.adbeFont) {
            try {
                //If the font is not available then getByName throws an exception
                return app.isFontAvailable(true, style.adbeFont.postScriptName);
            } catch (ignore) {
                return false;
            }
        } else if (style.fontFamily) {
            //If all we have is the font-family then try to use that
            return app.isFontAvailable(false, style.fontFamily);
        }
        return false;
    }
};
