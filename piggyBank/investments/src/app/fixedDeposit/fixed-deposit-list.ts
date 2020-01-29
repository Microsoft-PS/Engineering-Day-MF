import { Component } from '@angular/core';
import { AppStore } from '../../store/store';
import { Store } from 'redux';
import { InvestmentState, IFixedDepositState } from 'src/store/state';
import { Close } from 'src/store/close.account.action';

@Component({
    selector: "fixed-deposits",
    templateUrl: './fixed-deposit-list.html'
})
export class FixedDepositListComponent {
    private _appStore: Store<InvestmentState, any>;
    public fixedDeposits: IFixedDepositState[];
    constructor() {
        this._appStore = AppStore
        this.render();
        this._appStore.subscribe(() => {
            this.render();
        });
    }

    render() {
        this.fixedDeposits = this._appStore.getState().fixedDeposits;
    }

    handleAccountClose = (accountNumber: string) => {
        this._appStore.dispatch(Close(accountNumber));
    }
}