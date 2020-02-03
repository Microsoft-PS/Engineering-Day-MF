import { Reducer } from 'redux';
import { InvestmentState, IFixedDepositState } from './state';
import { IAction } from './action.interface';

const defaultState: InvestmentState = {
    fixedDeposits: [{
        number: "FD653983822",
        jointHolder: "Bhargavi",
        principal: 10000,
        openedOn: new Date(2019, 11, 1),
        maturityOn: new Date(2020, 11, 1),
        maturityAmount: 106500,
        interest: 6.5,
        status: "Active"
    }, {
        number: "FD19294414",
        jointHolder: "Praveen Saxena",
        principal: 150000,
        openedOn: new Date(2018, 8, 4),
        maturityOn: new Date(2020, 8, 4),
        maturityAmount: 169500,
        interest: 7,
        status: "Active"
    }, {
        number: "FD78824410",
        jointHolder: "Karthik",
        principal: 50000,
        openedOn: new Date(2019, 5, 12),
        maturityOn: new Date(2020, 5, 12),
        maturityAmount: 169500,
        interest: 6,
        status: "Active"
    }, {
        number: "FD95667830",
        jointHolder: "Shivani",
        principal: 100000,
        openedOn: new Date(2018, 6, 14),
        maturityOn: new Date(2020, 6, 14),
        maturityAmount: 107500,
        interest: 7.5,
        status: "Active"
    }, {
        number: "FD11566982",
        jointHolder: "Himanshu",
        principal: 50000,
        openedOn: new Date(2018, 12, 26),
        maturityOn: new Date(2019, 12, 26),
        maturityAmount: 53250,
        interest: 6.5,
        status: "Closed"
    }]
}

export const InvestmentReducer: Reducer<InvestmentState, IAction<any>> = (
    state: InvestmentState = defaultState,
    action: IAction<any>
): InvestmentState => {
    switch (action.type) {
        case 'CLOSE':
            return {
                fixedDeposits: state.fixedDeposits.map(fd => {
                    return FixedDepositReducer(fd, action)
                })
            }
        case 'OPEN':
            return {
                fixedDeposits: [...state.fixedDeposits, FixedDepositReducer(undefined, action)]
            }
    }
    return state;
}

export const FixedDepositReducer: Reducer<IFixedDepositState, IAction<any>> = (
    state: IFixedDepositState = null,
    action: IAction<any>
): IFixedDepositState => {
    switch (action.type) {
        case 'CLOSE':
            if (action.payload !== state.number)
                return state;
            let currentDate = new Date();
            if (currentDate > state.maturityOn) {
                return {
                    ...state,
                    status: "Closed"
                }
            }
            let numberOfDays = Math.round((<any>currentDate - <any>state.openedOn) / (1000 * 60 * 60 * 24));
            let years = numberOfDays / 365;
            let maturityAmount = state.principal * Math.pow((1 + state.interest / 100), years);
            return {
                ...state,
                status: "Closed",
                maturityOn: currentDate,
                maturityAmount: maturityAmount
            }
        case 'OPEN':
            numberOfDays = Math.round((<any>state.maturityOn - <any>state.openedOn) / (1000 * 60 * 60 * 24));
            years = numberOfDays / 365;
            maturityAmount = state.principal * Math.pow((1 + state.interest / 100), years);
            return {
                ...action.payload,
                maturityAmount: maturityAmount,
                status: "Active"
            }

    }
    return state;
}