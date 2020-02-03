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

    // Remove Web Component (removeChild)

    // Instantiate new Element (createElement)

    // Append new Element (appendChild)
}

const appHistory = createBrowserHistory();

// Trigger the renderComponent method on every route change
appHistory.listen(renderComponent);
if (window.location.hash !== "#/") {
    window.location.hash = "#/";
} else {
    renderComponent(window.location);
}

// Attach an event handler to the Root here for listening to Login_success event
