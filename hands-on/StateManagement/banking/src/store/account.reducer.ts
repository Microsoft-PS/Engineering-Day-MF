import { Reducer } from "react";
import { IAction } from "./action.interface";
import { IBankingState, IAccountState } from './state';

const defaultState: IBankingState = {
    accounts: [{
        number: "BRDG7172744",
        holderName: "Pratik Bhattacharya",
        secondaryHolder: null,
        balance: 15000
    }, {
        number: "BROL192898",
        holderName: "Pratik Bhattacharya",
        secondaryHolder: "Himanshu Gupta",
        balance: 45000
    }, {
        number: "BRAA107829",
        holderName: "Pratik Bhattacharya",
        secondaryHolder: "Rohit K",
        balance: 500000
    }, {
        number: "BRFE67218226",
        holderName: "Pratik Bhattacharya",
        secondaryHolder: "Pratik Golcha",
        balance: 12000
    }]
}

export const AccountsReducer: Reducer<IBankingState, IAction<any>> = (
    state: IBankingState = defaultState,
    action: IAction<any>
): IBankingState => {
    if (action.type === "ADD_NEW_ACCOUNT") {
        return {
            accounts: [...state.accounts, action.payload]
        }
    }
    return {
        accounts: state.accounts.map(account => AccountReducer(account, action))
    }
}

const AccountReducer: Reducer<IAccountState, IAction<any>> = (
    state: IAccountState = null,
    action: IAction<any>
): IAccountState => {
    switch (action.type) {
        case 'UDPATE_SECOND_HOLDER': {
            if (state.number === action.payload.accounNumber) {
                return {
                    ...state,
                    secondaryHolder: action.payload.name
                }
            }
            return state;
        }
        case 'DEPOSIT': {
            if (state.number === action.payload.accounNumber) {
                return {
                    ...state,
                    balance: state.balance + action.payload.amount
                }
                return state;
            }
        }
        case 'WITHDRAW': {
            if (state.number === action.payload.accounNumber) {
                return {
                    ...state,
                    balance: state.balance - action.payload.amount
                }
            }
            return state;
        }
    }
    return state;
}