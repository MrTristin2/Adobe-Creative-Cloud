import { Component } from 'react';
import { IShareSheetCallbackEvent, IShareSheetItem } from '@ccx/projects';
interface Props {
    element: IShareSheetItem;
    onEvent?: (event: IShareSheetCallbackEvent) => any;
    onClose?(): void;
    hideCloseButton?: boolean;
    showHeader?: boolean;
}
export default class ShareSheetRenderer extends Component<Props> {
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=ShareSheetRenderer.d.ts.map