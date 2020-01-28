import { IComponentRouter } from "../interfaces/component.router.interface";
import { IRouteConfig } from "../interfaces/routeConfig.interface";

export class CustomComponentRouter implements IComponentRouter {

    Mount($root: HTMLElement, routeConfig: IRouteConfig): void {
        const rootElementId = $root.id;
        const customMountStrategy = routeConfig.MountFuncName;
        if (window && window[customMountStrategy]) {
            window[customMountStrategy](rootElementId)
        }
    }

    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void {
        const rootElementId = $root.id;
        const customUnmountStrategy = routeConfig.UnmountFuncName;
        if (window && window[customUnmountStrategy]) {
            window[customUnmountStrategy](rootElementId)
        }
    }
}