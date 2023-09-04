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


/*globals $, app, ToolTipOptions, File*/

$._ADBE_LIBS_AEFT = {
    log : function (msg, category) {
        app.log(msg, category);
    },

    getTooltipState: function () {
        return app.areToolTipsEnabled;
    },
    getIMSUserID: function () {
        return app.ccUserGuid;
    },
    getCurrentState: function () {
        return undefined;
    },
    placeAsset: function (pathStr, is_psdB, elemName) {
        app.project.placeAsset(pathStr, is_psdB, elemName);
    },
    setColor: function (colorRec) {
        // to be implemented later
        return false;
    },
    getUserData: function () {
        try {
            return app.getCCXUserJSONData();
        } catch (ex) {
            $._ADBE_LIBS_CORE.writeToLog('AEFT.jsx-getCCXUserJSONData()', ex);
        }
    }
};
