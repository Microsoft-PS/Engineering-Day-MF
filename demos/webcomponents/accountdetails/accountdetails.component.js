class BankAccountDetailsComponent extends HTMLElement {
    constructor() {
        super();
        console.log("constructor invoked for BankAccountDetailsComponent Javascript WebComponents...");
        this.accountbalance = '100000';
        this.accounttype = 'Savings';
    }

    // This will get invoked with the custom element is added to DOM
    connectedCallback() {
        this.renderUI();
        console.log("connectedCallback invoked...");
    }

    renderUI() {
        this.innerHTML = this.getHtml();
    }

    // This will get invoked when the custom element is disconnected/removed from the DOM 
    disconnectedCallback() {
        console.log("disconnectedCallback invoked for BankAccountDetailsComponent...");
    }

    // This tells which property should be observed for change. 
    static get observedAttributes() {
        return ["accountbalance", "accounttype"];
    }

    // Will get invoked if the value of observed property is changed 
    attributeChangedCallback(attrName, oldVal, newVal) {
        switch (attrName) {
            case "accounttype":
                this.accounttype = newVal;
                this.renderUI();
                break;
            case "accountbalance":
                this.accountbalance = newVal;
                this.renderUI();
                break;
        }

        console.log("attributeChangedCallback invoked...");
    }

    getHtml() {
        return `
        <div class="card border-secondary mb-3" style="max-width: 25rem;">
            <div class="card-header">` + this.accounttype + ` Accounts</div>
            <div class="card-body text-secondary">
                <h5 class="card-title">Account Number: 653983822</h5>
                <p class="card-text" is="customized-paragraph">Account Balance: ` + this.accountbalance + ` </p>
                <p class="card-text">
                    <a href="#">Mini Statement</a> | <a href="#">Account Statement</a> | <a href="#">Payments</a>
                </p>
                <p>Powered by JavaScript Custom Element </p>
            </div>
        </div>`;
    }
}
window.customElements.define("accountdetails-component", BankAccountDetailsComponent);















//is="customized-paragraph"