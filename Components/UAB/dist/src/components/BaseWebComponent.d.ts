/*************************************************************************
 *
 * ADOBE CONFIDENTIAL
 * ___________________
 *
 *  Copyright 2022 Adobe
 *  All Rights Reserved.
 *
 *  NOTICE:  All information contained herein is, and remains
 *  the property of Adobe and its suppliers, if any. The intellectual
 *  and technical concepts contained herein are proprietary to Adobe
 *  and its suppliers and are protected by all applicable intellectual
 *  property laws, including trade secret and copyright laws.
 *  Dissemination of this information or reproduction of this material
 *  is strictly forbidden unless prior written permission is obtained
 *  from Adobe.
 **************************************************************************/
import type StyleSheetLoader from '../utils/styleSheetLoader';
export default abstract class BaseWebComponent extends HTMLElement {
    readonly mountPoint: HTMLDivElement;
    private cleanupHandlers;
    constructor(styleSheetLoader: StyleSheetLoader);
    get stylesReady(): boolean;
    /**************************************************************
     * UAB Utilities
     */
    get verbose(): boolean;
    log(...args: any[]): void;
    /**************************************************************
     * Web Component Callbacks
     */
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(): void;
    private attemptRender;
    abstract render(): React.ReactElement;
}
//# sourceMappingURL=BaseWebComponent.d.ts.map