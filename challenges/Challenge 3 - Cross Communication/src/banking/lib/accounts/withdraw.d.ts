import * as React from 'react';
declare class WithdrawModal extends React.Component<any, any> {
    props: WithdrawPropTypes;
    private withdrawAmount;
    constructor(props: WithdrawPropTypes);
    saveChange: () => void;
    close: () => void;
    shouldComponentUpdate(nextProps: Readonly<WithdrawPropTypes>, nextState: any): boolean;
    render(): JSX.Element;
}
interface WithdrawPropTypes {
    visible: boolean;
    accountNumber: string;
    onClose: () => {};
    Withdraw?: (accountNumber: string, amount: number) => {};
}
export declare const WithdrawBalance: import("react-redux").ConnectedComponent<typeof WithdrawModal, Pick<any, string | number | symbol>>;
export {};
