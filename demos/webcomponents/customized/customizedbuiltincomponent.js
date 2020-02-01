class CustomizedParagraph extends HTMLParagraphElement {
    constructor() {
        super();
        console.log("Customized Paragraph WebComponent initialized...");
    }

    connectedCallback() {
        this.style.backgroundColor = "red";
        this.style.fontWeight = "bold";
        this.style.color = "white";
    }
}
window.customElements.define("customized-paragraph", CustomizedParagraph, { extends: 'p' });