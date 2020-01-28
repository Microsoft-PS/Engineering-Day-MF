import { IAction } from './action.interface';

export const Deposit = (accountNumber: string, amount: number): IAction<any> => ({
    type: 'DEPOSIT',
    payload: {
        accounNumber: accountNumber,
        amount: amount
    }
});