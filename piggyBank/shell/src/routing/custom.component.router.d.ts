import { IComponentRouter } from "../interfaces/component.router.interface";
import { IRouteConfig } from "../interfaces/routeConfig.interface";
export declare class CustomComponentRouter implements IComponentRouter {
    Mount($root: HTMLElement, routeConfig: IRouteConfig): void;
    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void;
}
