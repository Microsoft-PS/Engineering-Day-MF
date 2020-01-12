class Error extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <span class='error'>Some error ocurred</span>
            </div>
        `;
    }
}

window.customElements.define('error-page', Error);