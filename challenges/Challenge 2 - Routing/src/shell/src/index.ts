import './styles.scss';
import { createBrowserHistory } from 'history';

var routes: any[] = [];

routes.push({
    URL: "#/login",
    ComponentName: "pb-login",
    ComponentFramework: "WebComponent"
});
routes.push({
    URL: "#/investments",
    ComponentName: "fixed-deposits",
    ComponentFramework: "WebComponent"
});

const renderComponent = (location: any) => {
    let hash = location.hash;
    let $root = document.getElementById("root");
    if (hash === "#/") {
        hash = "#/login";
    }
    let config = routes.find(route => route.URL === hash);
    if ($root.firstChild) {
        $root.removeChild($root.firstChild);
    }
    let component = document.createElement(config.ComponentName);
    $root.appendChild(component);
}

const appHistory = createBrowserHistory();
appHistory.listen(renderComponent);
if (window.location.hash !== "#/") {
    window.location.hash = "#/";
} else {
    renderComponent(window.location);
}


document.getElementById("root").addEventListener("Login_success", () => {
    window.location.hash = "#/investments"
});
