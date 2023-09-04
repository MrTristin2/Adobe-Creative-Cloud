import React from 'react';
export default class ErrorBoundary extends React.Component<{}, {
    hasError: any;
    error?: any;
    errorInfo?: any;
}> {
    constructor(props: any);
    static getDerivedStateFromError(error: any): {
        hasError: boolean;
        error: any;
    };
    componentDidCatch(error: any, errorInfo: any): void;
    render(): React.ReactNode;
}
export declare const withBoundary: (Comp: any) => (props: any) => JSX.Element;
//# sourceMappingURL=ErrorBoundary.d.ts.map