import { WebComponentRouter } from "./web.component.router";
import { CustomComponentRouter } from './custom.component.router';
import { AngularElementComponentRouter } from './angular.element.component.router';
import { IRouteConfig } from "../interfaces/routeConfig.interface";
import { IComponentRouter } from "../interfaces/component.router.interface";

export class StrategicRouter implements IComponentRouter {
    private _webComponentRouter: IComponentRouter;
    private _angularElementComponentRouter: IComponentRouter;
    private _customComponentRouter: IComponentRouter;
    constructor() {
        this._webComponentRouter = new WebComponentRouter();
        this._angularElementComponentRouter = new AngularElementComponentRouter();
        this._customComponentRouter = new CustomComponentRouter();
    }

    Mount($root: HTMLElement, routeConfig: IRouteConfig): void {
        switch (routeConfig.ComponentFramework) {
            case "WebComponent":
                return this._webComponentRouter.Mount($root, routeConfig);
            case 'AngularElement':
                return this._angularElementComponentRouter.Mount($root, routeConfig);
            case "Custom":
                return this._customComponentRouter.Mount($root, routeConfig);
        }
    }

    Unmount($root: HTMLElement, routeConfig: IRouteConfig): void {
        switch (routeConfig.ComponentFramework) {
            case "WebComponent":
                return this._webComponentRouter.Unmount($root, routeConfig);
            case 'AngularElement':
                return this._angularElementComponentRouter.Unmount($root, routeConfig);
            case "Custom":
                return this._customComponentRouter.Unmount($root, routeConfig);
        }
    }
}