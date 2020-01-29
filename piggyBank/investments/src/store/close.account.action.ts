import { IAction } from './action.interface';

export const Close = (accountNumber: string): IAction<string> => ({
    type: 'CLOSE',
    payload: accountNumber
});