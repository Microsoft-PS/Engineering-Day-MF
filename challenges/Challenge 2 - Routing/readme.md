# Challenge 2 - Routing
Create a routing framework for routing between 2 Web Components.


## Instructions
1. Go to folder 'challenges -> Challenge 2 - Routing -> src'.
2. Open the shell folder in Visual Studio Code
3. Run `npm i` to install all the dependencies.
4. Run `npm run start` to run/test the shell application. The configuration has been set to host the application in http://localhost:9000 in your local machine.

## What you need to build
1. You are building a Shell/Portal application where you need to load 2 Web Components based on the application route.
2. You have 2 Web Components
    1. pb-login - You have already build and hosted this component in http://localhost:9001 in your local machine (enusre that the previous solution is running)
    2. fixed-deposits - This Web Component has been created in Angular 8 and has already been hosted referred in your Shell Application (you don't need to do anything for this) 
3. When the application is navigated to https://localhost:9000/#/login route you need to load the Login web Component.
4. When the application is navigated to https://localhost:9000/#/investments you need to load the fixed-deposits Web Component.
5. The starter code has already been written in the `index.ts` and `index.html` file in the Shell application.
6. Whenver the route changes, a callback has been written which will call the `renderComponent` method. You will need to implement the `renderComponent` method in `index.ts`.

## Hints
1. A `<div>` element with id `root` has been created in the `index.html`. You will need to load the Web Components (pb-login and fixed-deposits) as a Child to this root element
2. Take a look at `removeChild`, `window.createCustomElement` and `appendChild` method.
2. When a new route is encountered you will need to identify the Web Component (or Custom Element) that needs to be loaded as part of the route. The configuration for that has been kept in the `routes` variable.
