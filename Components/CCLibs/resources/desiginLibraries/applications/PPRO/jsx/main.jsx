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


/*globals $, app, ToolTipOptions, document*/

$._ADBE_LIBS_PPRO = {
    getTooltipState: function () {
        return 'true';
    },
    getIMSUserID: function () {
        return app.userGuid;
    },
    getSelectedLookData: function () {
        return app.getSelectedLookData;
    },
    getCurrentState: function () {
        return document.getDocumentState();
    },
    placeAsset: function (filePath, isPSD, libraryName, itemName, elementRef, modifiedTime, creationTime, adobeStockId, adobeStockLicense, isLinked) {
        app.project.placeAsset(filePath, isPSD, libraryName, itemName, elementRef, modifiedTime, creationTime, adobeStockId, adobeStockLicense, isLinked);
        return;
    },
    replaceColor: function (colorData) {
        // Currently PPRO does not support replaceColor
        return false;
    },
    setColor: function (colorRec) {
        // to be implemented later
        return false;
    },
    getLayerColor: function () {
        // Currently PPRO does not support getLayerColor
        var colorObject = {};
        return JSON.stringify(colorObject);
    },
    getLayerInfo: function () {
        return app.getLookInfo;
    },
    getUserData: function (mode) {
        try {
            return app.getCCXUserJSONData(mode);
        } catch (ex) {
            $._ADBE_LIBS_CORE.writeToLog('PPRO.jsx-getCCXUserJSONData()', ex);
        }
    }
};
