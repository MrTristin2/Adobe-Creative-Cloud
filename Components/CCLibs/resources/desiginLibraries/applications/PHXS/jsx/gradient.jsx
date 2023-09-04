
/*global $, Folder, app, DocumentFill, ActionDescriptor, ActionReference, DialogModes, File,
         TypeUnits, ActionList, SolidColor, executeAction, executeActionGet, PhotoshopSaveOptions, SaveOptions, PNGSaveOptions,
         LayerKind, cssToClip, svg, ColorModel, JSXGlobals, PSKey, PSClass, PSString, PSType, PSEnum, PSEvent, PSUnit, sTID, COLOR */

var GRADIENT = {};

GRADIENT.saveGradientByIndex = function (gradientIndex, libraryID) {
    var result = {};
    try {
        var saveDesc = new ActionDescriptor();
        var refDesc = new ActionReference();
        refDesc.putIndex(PSString.gradientClassEvent, gradientIndex);
        saveDesc.putString(PSKey.ID, libraryID);
        saveDesc.putReference(PSKey.Target, refDesc);

        executeAction(PSKey.Save, saveDesc, DialogModes.ERROR);
    } catch (ignore) {}
};

GRADIENT.defineCustomGradient = function (gradientData) {
        var mainDesc = new ActionDescriptor();
        mainDesc.putString(PSKey.Text, JSON.stringify(gradientData));
        executeAction(PSString.defineCustomGradient, mainDesc, DialogModes.ERROR);
};

GRADIENT.applyCustomGradient = function (gradientData) {
        var mainDesc = new ActionDescriptor();
        mainDesc.putString(PSKey.Text, JSON.stringify(gradientData));
        executeAction(PSString.applyCustomGradient, mainDesc, DialogModes.ERROR);
};
