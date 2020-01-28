import { IRouteConfig } from "./routeConfig.interface";
export interface IComponentRouter {
    Mount(root: HTMLElement, routeConfig: IRouteConfig): void;
    Unmount(root: HTMLElement, routeConfig: IRouteConfig): void;
}
