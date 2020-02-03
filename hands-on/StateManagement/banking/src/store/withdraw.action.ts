import { IAction } from './customStore';

export const Withdraw = (accountNumber: string, amount: number): IAction => ({
	type: 'WITHDRAW',
	payload: {
		accountNumber: accountNumber,
		amount: amount
	}
});
