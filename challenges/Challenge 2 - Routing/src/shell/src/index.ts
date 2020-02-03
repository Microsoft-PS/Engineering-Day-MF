import './styles.scss';
import { createBrowserHistory } from 'history';

var routes: any[] = [];

// Configure the routes
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
    // Hint location.hash will give you the current hash

    // Unload the loaded component if any

    // Create new Custom Element

    // Load the new Custom Element
}

const appHistory = createBrowserHistory();

// Trigger the renderComponent method on every route change
appHistory.listen(renderComponent);
if (window.location.hash !== "#/") {
    window.location.hash = "#/";
} else {
    renderComponent(window.location);
}


document.getElementById("root").addEventListener("Login_success", () => {
    window.location.hash = "#/investments"
});
