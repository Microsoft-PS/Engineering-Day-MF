import './styles.scss';
import Router from './routing/router';
import { createBrowserHistory } from 'history';
import { GlobalStoreService } from './globalStore/globalStateService';

const router = new Router();

router.addRoute({
    URL: "/",
    ComponentName: "pb-login",
    ComponentFramework: "WebComponent"
});
router.addRoute({
    URL: "/login",
    ComponentName: "pb-login",
    ComponentFramework: "WebComponent"
});
router.addRoute({
    URL: "/app",
    ComponentName: "pb-app-shell",
    ComponentFramework: "WebComponent"
});
router.addRoute({
    URL: "/app/banking",
    ComponentName: "Accounts",
    ComponentFramework: "Custom",
    NestedRootElementId: "app",
    MountFuncName: "mountAccounts",
    UnmountFuncName: "unmountAccounts"
});
router.addRoute({
    URL: "/app/investments",
    ComponentName: "fixed-deposits",
    ComponentFramework: "AngularElement",
    NestedRootElementId: "app"
});

const renderComponent = (location: any) => {
    const currentHash = <string>location.hash;
    var urlParts = currentHash.split("/");
    let routeToBeRendered = "/";
    urlParts.forEach(urlPart => {
        if (urlPart !== "") {
            if (urlPart !== "#") {
                routeToBeRendered = routeToBeRendered + urlPart;
                let isCompleteHash = urlPart === urlParts[urlParts.length - 1];
                router.loadComponent(routeToBeRendered, isCompleteHash);
                routeToBeRendered = routeToBeRendered + "/";
            } else {
                router.loadComponent(routeToBeRendered);
            }
        }
    });
}

const appHistory = createBrowserHistory();
appHistory.listen(renderComponent);
if (window.location.hash !== "#/") {
    window.location.hash = "#/";
} else {
    renderComponent(window.location);
}


document.getElementById("root").addEventListener("Login_success", () => {
    window.location.hash = "#/app/banking"
});

GlobalStoreService.getInstance();