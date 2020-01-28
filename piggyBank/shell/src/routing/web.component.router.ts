import { IComponentRouter } from "../interfaces/component.router.interface";
import { IRouteConfig } from "../interfaces/routeConfig.interface";

export class WebComponentRouter implements IComponentRouter {

    Mount($root: HTMLElement, routeConfig: IRouteConfig): void {
        const component = document.createElement(routeConfig.ComponentName);
        $root.appendChild(component);
    }

    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void {
        $root.removeChild($root.firstChild);
    }
}