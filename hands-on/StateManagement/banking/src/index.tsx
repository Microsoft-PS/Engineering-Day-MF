import './styles.scss';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AccountSummary } from './accounts/account.list';
import { appStore } from './store/store';
import { Provider } from 'react-redux';

export class Accounts extends React.Component {

    constructor(props: any) {
        super(props);
        const globalStore = window["GlobalStoreInstance"];
        if (globalStore) {
            globalStore.register("Banking", appStore, ["DEPOSIT", "WITHDRAW"]);
        }
    }

    render() {
        return (
            <Provider store={appStore}>
                <AccountSummary />
            </Provider>
        )
    }
}

const mountAccounts = (elementId: string) => {
    const renderElement = document.getElementById(elementId);
    ReactDOM.render(<Accounts />, renderElement);
}

const unmountAccounts = (elementId: string) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(elementId));
}

window["mountAccounts"] = mountAccounts;
window["unmountAccounts"] = unmountAccounts;

if (!(window["banking-portal-context"])) {
    mountAccounts("app");
}
