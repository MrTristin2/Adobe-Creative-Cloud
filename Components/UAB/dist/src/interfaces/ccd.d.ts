export interface CCDStore {
    get(storeId: string): any;
    observer(storeId: string, propertyName: string, interceptor: (value: any) => void): any;
    registerStore(storeId: string, storeObj: any): any;
}
export interface CCDMainInterface {
    initialize(stores: CCDStore, resourcePath: string): Promise<void>;
    components: Array<{
        id: string;
        type: 'react' | 'webComponent';
        getName(): string;
        getIcon(): string;
        route: string;
        main: any;
    }>;
}
//# sourceMappingURL=ccd.d.ts.map