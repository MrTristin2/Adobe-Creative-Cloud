/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2021 Adobe Systems Incorporated
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

/*global $, Folder, app, RGBColor, File, SaveOptions, ImageColorSpace, ColorConvertPurpose, ExportOptionsSVG,
         SVGFontSubsetting, SVGFontType, ExportType, JSXGlobals, CMYKColor, GrayColor, LabColor, SpotColor, ColorModel, SpotColorKind, COLOR, UTIL, UnitValue, solidColorToData, dataToSolidColor,
         StyleRunAlignmentType, AlternateGlyphsForm, BaselineDirectionType, FontBaselineOption, FontCapsOption, FigureStyleType, AutoKernType,
         LanguageType, FontOpenTypePositionOption, WariChuJustificationType, TabStopInfo, Justification, AutoLeadingType, KinsokuOrderEnum, BurasagariTypeEnum, NoColor, TEXT */

var MATERIAL = {};

var MDL_REPRESENTATION_TYPE = 'application/vnd.adobe.mdl.material+zip';
var SBSAR_REPRESENTATION_TYPE = 'application/vnd.adobe.sbsar+zip';

MATERIAL.materialToData = function materialToData(material) {

    const materialType = material.type;
    const materialPath = material.path;
    const materialThumbnailPath = material.thumbnailPath;

    var typeName = '';
    if (materialType === 'mdl')
        {typeName = MDL_REPRESENTATION_TYPE;}
    else if (materialType === 'sbsar') 
        {typeName = SBSAR_REPRESENTATION_TYPE;} 
    else {return;} //If it is an unsupported material type then simply return undefined

    const representations = [];
    representations.push(
        {
            external_link: false,
            rel: 'primary',
            source: {
                path: materialPath
            },
            type: typeName,
            '3d#data': {
                type: '',
                captured: false,
                size: null,
                meshes: [],
                materials: [
                    {
                        type: materialType,
                        tileable: true,
                        physicallyBased: true,
                        procedural: false,
                        animated: false,
                        opaque: true,
                        emissive: false
                    }
                ],
                lights: [],
                textures: [],
                rigs: [],
                animations: []
            }
        }
    );
    representations.push(
        {
            rel: 'rendition',
            type: 'image/png',
            source: {
                path: materialThumbnailPath
            }
        });
    return representations;
};
