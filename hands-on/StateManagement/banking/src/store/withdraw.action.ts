import { IAction } from './action.interface';

export const Withdraw = (accountNumber: string, amount: number): IAction<any> => ({
    type: 'WITHDRAW',
    payload: {
        accounNumber: accountNumber,
        amount: amount
    }
});