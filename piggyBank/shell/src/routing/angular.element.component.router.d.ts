import { IRouteConfig } from "../interfaces/routeConfig.interface";
import { IComponentRouter } from "../interfaces/component.router.interface";
export declare class AngularElementComponentRouter implements IComponentRouter {
    Mount($root: HTMLElement, routeConfig: IRouteConfig): void;
    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void;
}
