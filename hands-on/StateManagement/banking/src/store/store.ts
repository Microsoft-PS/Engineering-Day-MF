import { createStore } from 'redux';
import { AccountsReducer } from './account.reducer';

const reducer = AccountsReducer;
export const appStore = createStore(reducer);