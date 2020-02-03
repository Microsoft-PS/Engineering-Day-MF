export const createStore = (callback: (state: any, action: IAction) => {}) => {
    let state: any;
    let listeners = [];

    const getState = (): any => state;

    const dispatch = (action: IAction) => {
        state = callback(state, action);
        if (listeners.length > 0) {
            listeners.forEach(listener => {
                listener();
            });
        }
    }

    const subscribe = (listener:() => {}) => {
        listeners.push(listener);

        return () => {
            listeners = listeners.filter(l => l !== listener);
        }
    }

    dispatch(<any>{});

    return {
        getState,
        dispatch,
        subscribe
    }
}


export interface IAction {
    type: string;
    payload: any;
}