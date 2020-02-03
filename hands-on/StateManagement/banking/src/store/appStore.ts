import { IAction } from './customStore';
import { IBankingState, IAccountState } from './state';

const defaultState: IBankingState = {
	accounts: [
		{
			number: 'BRDG7172744',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: null,
			balance: 15000
		},
		{
			number: 'BROL192898',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Himanshu Gupta',
			balance: 45000
		},
		{
			number: 'BRAA107829',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Rohit K',
			balance: 500000
		},
		{
			number: 'BRFE67218226',
			holderName: 'Pratik Bhattacharya',
			secondaryHolder: 'Pratik Golcha',
			balance: 12000
		}
	]
};

const reducer = (state: any = defaultState, action: IAction) => {
	
};

const accountReducer = (state: IAccountState, action: IAction): IAccountState => {
	switch (action.type) {
		case 'DEPOSIT':
			if (action.payload.accountNumber === state.number)
				return {
					...state,
					balance: state.balance + action.payload.amount
				};
			else return state;
		case 'WITHDRAM':
			if (action.payload.accountNumber === state.number)
				return {
					...state,
					balance: state.balance - action.payload.amount
                };
            else return state;
	}
};
