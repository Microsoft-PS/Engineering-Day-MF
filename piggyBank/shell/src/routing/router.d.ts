import { IRouteConfig } from "../interfaces/routeConfig.interface";
export default class Router {
    static Routes: {
        [key: string]: IRouteConfig;
    };
    static LoadedRouteConfigs: {
        [key: string]: IRouteConfig;
    };
    static ErrorLocation: string;
    addRoute: (route: IRouteConfig) => void;
    loadComponent: (locationHash: string) => void;
    private getRootElement;
}
