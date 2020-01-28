import * as React from 'react';
import { IAccountState } from '../store/state';
declare class AccountList extends React.Component<any, any> {
    props: AccountListPropTypes;
    private withdrawalInProgress;
    private depositInProgress;
    constructor(props: AccountListPropTypes);
    startWithdraw(accountNumber: string): void;
    withdrawalClosed(accountNumber: string): void;
    startDeposit(accountNumber: string): void;
    depositClosed(accountNumber: string): void;
    render(): JSX.Element;
}
interface AccountListPropTypes {
    accounts: IAccountState[];
    show: boolean;
}
export declare const AccountSummary: import("react-redux").ConnectedComponent<typeof AccountList, Pick<any, never>>;
export {};
