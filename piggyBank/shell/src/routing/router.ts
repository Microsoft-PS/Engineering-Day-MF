import { IRouteConfig } from "../interfaces/routeConfig.interface"
import { StrategicRouter } from "./strategic.router";

export default class Router {

    static Routes: {[key: string]: IRouteConfig} = window["Routes"] || {};
    static LoadedRouteConfigs: {[key: string]: IRouteConfig}= {};
    //static LastVisitedRouteConfig: IRouteConfig = null;
    static ErrorLocation = "/error";

    addRoute = (route: IRouteConfig): void => {
        if (!Router.Routes[route.URL]) {
            Router.Routes[route.URL] = route;
        }
    }

    loadComponent = (locationHash: string, completeHash: boolean = false) => {
        let routeConfig = Router.Routes[locationHash];
        if (routeConfig === undefined || routeConfig === null) {
            routeConfig = Router.Routes[Router.ErrorLocation];
        }
        const $root = this.getRootElement(routeConfig);

        const strategicRouter = new StrategicRouter();
        if (Router.LoadedRouteConfigs[$root.id] !== undefined && Router.LoadedRouteConfigs[$root.id] !== null) {
            if (Router.LoadedRouteConfigs[$root.id].URL.startsWith(locationHash) && !completeHash) {
                return;
            }
            strategicRouter.Unmount($root, Router.LoadedRouteConfigs[$root.id]);
        }
        strategicRouter.Mount($root, routeConfig);
        Router.LoadedRouteConfigs[$root.id] = routeConfig;
    }

    private getRootElement = (routeConfig: IRouteConfig) => {
        if (routeConfig.NestedRootElementId !== undefined && routeConfig.NestedRootElementId !== null) {
            return document.getElementById(routeConfig.NestedRootElementId);
        }
        return document.getElementById("root");
    }
}
