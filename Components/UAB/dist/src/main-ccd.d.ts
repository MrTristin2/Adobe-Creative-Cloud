import { CDOStoreType, DocumentStoreType, RecentStoreType } from '@ccx/ccx-cdo';
import versions from './componentVersions';
import { IFilesStore, ICallbacks, IAssetModel } from '@ccx/ccx-cdo';
export declare const initialize: (stores: import("./interfaces/ccd").CCDStore, resourcePath: string) => Promise<void>;
export declare const components: {
    id: string;
    type: "react" | "webComponent";
    getName(): string;
    getIcon(): string;
    route: string;
    main: any;
}[];
export type { IFilesStore, CDOStoreType, DocumentStoreType, RecentStoreType };
export interface ICDOCallbacks extends ICallbacks {
}
export interface ICDOAssetModel extends IAssetModel {
}
export { versions };
//# sourceMappingURL=main-ccd.d.ts.map