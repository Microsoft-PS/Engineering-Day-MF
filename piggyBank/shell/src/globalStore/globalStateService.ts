import { Store } from 'redux';
import { IAction } from './action.interface';

export class GlobalStoreService {
    private _stores: { [key: string]: Store }
    private _globalActions: { [key: string]: Array<string> }

    private constructor() { 
        this._stores = {};
        this._globalActions = {};
    }

    public static getInstance() {
        let globalStore: GlobalStoreService = window["GlobalStoreInstance"] || null;
        if (globalStore === undefined || globalStore === null) {
            globalStore = new GlobalStoreService();
            window["GlobalStoreInstance"] = globalStore;
        }
        return globalStore;
    }

    public register(appId: string, store: Store<any, any>, allowedActions: string[]) {
        this._stores[appId] = store;
        this._globalActions[appId] = allowedActions;
    }

    public dispatchGlobal(action: IAction<any>) {
        for (let app in this._stores) {
            let appGlobalActions = this._globalActions[app];
            if (appGlobalActions === undefined || appGlobalActions === null || appGlobalActions.length === 0) {
                continue;
            }
            let isActionRegisteredByApp = appGlobalActions.some(actionType => actionType === action.type);
            if (isActionRegisteredByApp) {
                this._stores[app].dispatch(action);
            }
        }
    }

    public getState(appId: string) {
        const appStore = this._stores[appId];
        if (appStore === undefined || appStore === null) {
            return null;
        }
        return {
            ...appStore.getState()
        }
    }

    public subscribe(appId: string, callback: () => {}) {
        const appStore = this._stores[appId];
        if (appStore === undefined || appStore === null) {
            return;
        }
        appStore.subscribe(callback);
    }
}
