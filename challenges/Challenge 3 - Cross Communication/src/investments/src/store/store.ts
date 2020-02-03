import { createStore, Store } from 'redux';
import { InvestmentReducer } from './investments.reducer';
import { InvestmentState } from './state';
import { IAction } from './action.interface';

export const AppStore: Store<InvestmentState, IAction<any>>  = createStore(InvestmentReducer);