class Feed extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <span>Posted By: User 1</span>
                <span>Text: Some text</span>
            </div>
        `;
    }
}

window.customElements.define("feed-elem", Feed);