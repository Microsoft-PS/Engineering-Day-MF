class Navbar extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <a class="navbar-brand">Piggy Bank</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
                </button>
            
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active" id="banking-tab">
                        <a class="nav-link" href="#/app/banking">Banking <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item" id="investments-tab">
                        <a class="nav-link" href="#/app/investments">Investments</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#" id="investments-tab">Operations</a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                </form>
                </div>
            </nav>
        `;
        this.querySelectorAll("li").forEach(listNode => {
            listNode.addEventListener("click", (evt) => {
                this.querySelectorAll("li").forEach(node => {
                    node.classList.remove("active");
                });
                listNode.classList.add("active");
            });
        })
    }

}

window.customElements.define("pb-navbar", Navbar);