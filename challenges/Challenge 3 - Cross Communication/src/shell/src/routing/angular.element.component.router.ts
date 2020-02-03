import { IRouteConfig } from "../interfaces/routeConfig.interface";
import { IComponentRouter } from "../interfaces/component.router.interface";

export class AngularElementComponentRouter implements IComponentRouter {

    Mount($root: HTMLElement, routeConfig: IRouteConfig): void {
        const component = document.createElement(routeConfig.ComponentName);
        $root.appendChild(component);
    }

    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void {
        if ($root.firstChild !== undefined && $root.firstChild !== null) {
            $root.removeChild($root.firstChild);
        }
    }
}