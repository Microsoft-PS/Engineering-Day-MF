export interface IRouteConfig {
    URL: string;
    ComponentName: string;
    ComponentFramework: string;
    MountFuncName?: string;
    UnmountFuncName?: string;
    NestedRootElementId?: string;
}
