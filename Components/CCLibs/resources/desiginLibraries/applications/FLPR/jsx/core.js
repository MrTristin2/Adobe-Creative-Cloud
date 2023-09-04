/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2015 Adobe Systems Incorporated
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


/*globals $:true, Folder:true, FLfile, app, File:true */

// Animate uses JSFL to extend Flash, instead of ExtendScript. So File and Folder ExtendScript APIs need to be substituted.
// This code will run in the Animate JSFL interpreter. You can use alert() to debug.
// Documentation on JSFL: https://drive.google.com/file/d/1gzsCmZC4tN4LOBuPMk0sFr20fGoSWfcM/view

$ = {};

Folder = function (path) {
    this._path = path;
    this._uri = FLfile.platformPathToURI(this._path);
    this.exists = FLfile.exists(this._uri);
};

var userStr = "Users/";
var configDirURI = app.configURI;
var pathToUserDirURI = configDirURI.slice(0, configDirURI.indexOf("/", configDirURI.indexOf(userStr) + userStr.length) + 1);
Folder.desktop = FLfile.uriToPlatformPath(pathToUserDirURI + "Desktop");

// TODO: Return system temp directory
Folder.temp = {
    'fsName': app.configDirectory + "Extensions/CCLibrary/Temp"
};

// Create the temporary directory if it doesn't exist
var tempURI = FLfile.platformPathToURI(Folder.temp.fsName);
if (!FLfile.exists(tempURI)) {
    FLfile.createFolder(tempURI);
}

Folder.prototype.getFiles = function (filter) {
    var files = FLfile.listFolder(this._uri + "/" + filter, "files");
    var i;
    for (i = 0; i < files.length; ++i) {
        files[i] = this._path + "/" + files[i];
    }
    return files;
};

File = function (path) {
    this._path = decodeURIComponent(path);
    this._uri = FLfile.platformPathToURI(this._path);
    this.exists = FLfile.exists(this._uri);
    this.fsName = FLfile.uriToPlatformPath(this._uri);
    this.parent = FLfile.uriToPlatformPath(this._uri.substring(0, this._uri.lastIndexOf("/")));
    this._fileName = decodeURIComponent(this._uri.substring(this._uri.lastIndexOf("/") + 1, this._uri.lastIndexOf(".")));
};

File.prototype.open = function (mode) {
    this._mode = mode;
};

File.prototype.writeln = function (text) {
    if (this._mode === "a") {
        FLfile.write(this._uri, text + "\n", "append");
    }
    else {
        FLfile.write(this._uri, text + "\n");
    }
};

File.prototype.saveDlg = function (promptStr, filter, multiSelection) {
    var fileDescription = filter;
    var fileFilter = filter.slice(filter.indexOf("*.") + 2, filter.length);
    var newFilePlatformPath = FLfile.uriToPlatformPath(app.browseForFileURL("save", promptStr, fileDescription, fileFilter, this.parent, multiSelection, this._fileName));
    var newFile = new File(newFilePlatformPath);
    return newFile;
};

File.prototype.openDlg = function (promptStr, filter, multiSelect) {
    // We disregard the filter and hardcode the values. JSFL considers filter to be a string on WIN and MAC
    // but ExtendScript considers filter to be a string on WIN and function on MAC.
    // To keep the function simple we are using the same hardcoded values (keeping it same as in the caller function) for both WIN and MAC
    var fileDescription = "Creative Cloud Libraries: *.cclibs, *.cclibc";
    var fileFilter = "cclibs;cclibc";
    
    var multiSelect = (typeof multiSelect === 'undefined') ? false : multiSelect;
    var selectedFile = null;
    if (!multiSelect) {
        var selectedFilePlatformPath = FLfile.uriToPlatformPath(app.browseForFileURL("open", promptStr, fileDescription, fileFilter, this._path));
        selectedFile = new File(selectedFilePlatformPath);
    }
    return selectedFile;
};

File.createTemporaryFile = function (assetName, extension) {
    var tempFolder = app.configDirectory + "Extensions/CCLibrary/Temp/";
    var tempPath = tempFolder + assetName + "." + extension;
    var conflicts = 1;
    while (FLfile.exists(FLfile.platformPathToURI(tempPath))) {
        tempPath = tempFolder + assetName + "(" + conflicts++ + ")." + extension;
    }
    return tempPath;
};

$.evalFile = function (path) {
    try {
        var uri = FLfile.platformPathToURI(path);
        app.runScript(uri);
    } catch (ex) {
        $._ADBE_LIBS_CORE.writeToLog("FLPR.jsx-evalFile()", ex);
    }
};

$.os = (app.version.indexOf("MAC") > -1) ? "Macintosh" : "Windows";
