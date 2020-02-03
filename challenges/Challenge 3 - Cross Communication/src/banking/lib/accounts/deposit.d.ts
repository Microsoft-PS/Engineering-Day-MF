import * as React from 'react';
declare class DepositModal extends React.Component<any, any> {
    props: DepositPropTypes;
    private withdrawAmount;
    constructor(props: DepositPropTypes);
    saveChange: () => void;
    close: () => void;
    shouldComponentUpdate(nextProps: Readonly<DepositPropTypes>, nextState: any): boolean;
    render(): JSX.Element;
}
interface DepositPropTypes {
    visible: boolean;
    accountNumber: string;
    onClose: () => {};
    Deposit?: (accountNumber: string, amount: number) => {};
}
export declare const DepositBalance: import("react-redux").ConnectedComponent<typeof DepositModal, Pick<any, string | number | symbol>>;
export {};
