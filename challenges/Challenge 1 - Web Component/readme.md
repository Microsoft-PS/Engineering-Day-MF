# Challenge 1 - Web Components

## Instructions
1. Open the folder /challenges/Challenge 1 - Web Component/src in Visual Studio Code
2. Open a terminal in Visual Studio Code (Ctrl + Shift + `)
3. Run `npm i` (This will install all the dependencies).
4. The code for the Web Component must be written in `login.js` file under the 'Component' folder.
5. Refer the custom element in `index.html`.
6. Once you are done you can run/test the solution by running `npm run start` in the console.

## What to Build
1. Create an autonomous Web Component for Login UI with fields Username: Textbox, Password: Password and Login: Button.
2. On Click of Login Button the web component needs to dispatch a native JavaScript event “Login_Success”.
3. You can use the html for building the UI which is available in the file Login.html.


## Web Components Syntax
```
class CustomElement extends HTMLElement {
            constructor() {
                super();
                console.log("Custom Element created");
            }

            // Callback when then Element is connected to the DOM
            connectedCallback() {
                console.log("CustomElement has been connected to the DOM");
                this.innerHTML = "<div>Hello World</div>"
            }

            // Callback when a given attribute of the Component changes
            // To get the array of attributes that we want to observe
            static get observedAttributes() {
                return ["name"];
            }
            attributeChangedCallback(name, oldValue, newValue) {
                console.log("Attribute Changed! New Value + " + newValue + " Old value " + oldValue);
            }

            // Callback when the Custom Element is removed from the DOM
            // Generally used for cleanups (like cancelling any JS intervals)
            disconnectedCallback() {
                console.log("Cusom Element has been removed");
            }
        }
        // Telling the browser that for any "my-custom-element" tag construct that DOM element using the CustomElement class
        window.customElements.define("my-custom-element", CustomElement);
```