import type { IBrowseSessionPrivate as IBrowseSession } from '@ccx/projects';
/** These fields are typically in the format returned from adobeIMS.getProfile(): */
export interface AdobeIMSProfile {
    account_type: string;
    serviceAccounts?: {
        ident: string;
        serviceCode: string;
        serviceStatus: string;
        serviceLevel: string;
    }[];
    displayName: string;
    userId: string;
    countryCode: string;
    email: string;
}
/**
 * This interface will eventually want to derive from ccac-loader's BaseOptions,
 * to unify the format of data CCAC components require:
 * <https://git.corp.adobe.com/CCX/ccac-core/blob/main/packages/ccac-types/src/base.ts#L22>
 */
export interface InitOptions {
    environment: string;
    accessToken: string;
    imsData: AdobeIMSProfile;
    locale?: string;
    theme?: string;
    _inUnitTests?: boolean;
}
/**
 * Additional options used internally within UAB.
 */
export interface InternalInitOptions extends InitOptions {
    browseSession: IBrowseSession;
    styleSheetLoader: any;
    preloadCSS: boolean;
}
//# sourceMappingURL=InitOptions.d.ts.map