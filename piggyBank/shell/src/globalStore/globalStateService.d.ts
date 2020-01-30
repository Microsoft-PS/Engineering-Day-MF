import { Store } from 'redux';
import { IAction } from './action.interface';
export declare class GlobalStoreService {
    private _stores;
    private _globalActions;
    private constructor();
    static getInstance(): GlobalStoreService;
    register(appId: string, store: Store<any, any>, allowedActions: string[]): void;
    dispatchGlobal(action: IAction<any>): void;
    getState(appId: string): any;
    subscribe(appId: string, callback: () => {}): void;
}
