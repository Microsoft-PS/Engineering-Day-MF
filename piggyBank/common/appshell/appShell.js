class AppShell extends HTMLElement {

    connectedCallback() {
        this.innerHTML = `
            <pb-navbar></pb-navbar>
            <div id="app"></div>
        `;
    }
}

window.customElements.define("pb-app-shell", AppShell);