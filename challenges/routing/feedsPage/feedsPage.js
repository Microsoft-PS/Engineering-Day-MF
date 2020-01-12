class FeedsPage extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <div>
                <ul>
                    <li>
                        <feed-elem></feed-elem>
                    </li>
                    <li>
                        <feed-elem></feed-elem>
                    </li>
                    <li>
                        <feed-elem></feed-elem>
                    </li>
                </ul>
            </div>
        `;
    }
}

window.customElements.define("feeds-page", FeedsPage);