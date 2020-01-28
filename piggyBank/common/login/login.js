class Login extends HTMLElement {
    constructor() {
        super();

        // Shadow Root
        this.root = this.attachShadow({ mode: "open" });

        // Elements
        this.$userName = null;
        this.$password = null;
        this.$submit = null;
        this.$error = null;
        this.errorMessage = null;

        // Data
        this._credentials = [{
            "userId": "pratikb",
            "password": "Freedom123!"
        }, {
            "userId": "user1",
            "password": "password"
        }]
    }

    connectedCallback() {
        this.root.innerHTML = `
            <style>
                form {
                    border: 3px solid #f1f1f1;
                }

                /* Full-width inputs */
                input[type=text], input[type=password] {
                    width: 100%;
                    padding: 12px 20px;
                    margin: 8px 0;
                    display: inline-block;
                    border: 1px solid #ccc;
                    box-sizing: border-box;
                }
                
                .center {
                    margin: auto;
                    width: 50%;
                    padding: 10px;
                  }

                /* Set a style for all buttons */
                button {
                    background-color: #4CAF50;
                    color: white;
                    padding: 14px 20px;
                    margin: 8px 0;
                    border: none;
                    cursor: pointer;
                    width: 100%;
                }

                /* Add a hover effect for buttons */
                    button:hover {
                    opacity: 0.8;
                }

                /* Extra style for the cancel button (red) */
                .cancelbtn {
                    width: auto;
                    padding: 10px 18px;
                    background-color: #f44336;
                }

                /* Center the avatar image inside this container */
                .imgcontainer {
                    text-align: center;
                    margin: 24px 0 12px 0;
                }

                /* Avatar image */
                img.avatar {
                    width: 10%;
                    border-radius: 50%;
                }

                /* Add padding to containers */
                .container {
                    padding: 16px;
                }

                /* The "Forgot password" text */
                span.psw {
                    float: right;
                    padding-top: 16px;
                }

                /* Change styles for span and cancel button on extra small screens */
                @media screen and (max-width: 300px) {
                    span.psw {
                        display: block;
                        float: none;
                    }
                    .cancelbtn {
                        width: 100%;
                    }
                }
            </style>
            <form>
                <div class="imgcontainer">
                    <img src="http://localhost:9001/avatar.png" class="avatar" />
                </div>
                <div>
                    <div class="center">
                        <label for="username" class="center"><b>Username</b></label>
                        <input type="text" id="uname" placeholder="Enter your username" name="username" class="center" required/>
                        <br/>
                    </div>

                    <div class="center">
                        <label for="password" class="center"><b>Password</b></label>
                        <input type="password" id="pwd" placeholder="Enter your password" name="password" class="center" required/>
                        <br/>
                    </div>

                    <div class="center">
                        <div id="err-text"></div>
                    </div>

                    <div class="center">
                        <button type="button" id="login">Login</button>
                    </div>
                    
                </div>
            </form>
        `;
        this.$userName = this.root.getElementById("uname");
        this.$password = this.root.getElementById("pwd");
        this.$submit = this.root.getElementById("login");
        this.$error = this.root.getElementById("err-text")
        this.$submit.addEventListener("click", (evt) => {
            this.verifyPassword();
        });
    }

    verifyPassword() {
        const userName = this.$userName.value;
        const password = this.$password.value;

        const credential = this._credentials.find((c) => c.userId === userName);
        if (credential === undefined || credential === null) {
            this.$error.innerHTML = "Username doesn't exist";
            return;
        }
        if (credential.password !== password) {
            this.$error.innerHTML = "Wrong password";
            return;
        }

        this.dispatchEvent(new CustomEvent("Login_success",
            {
                bubbles: true,
                detail: {
                    "userId": userName
                }
            }));
    }

    set credentials(credentials) {
        if (this._credentials === credentials) return;
        this._credentials = credentials;
    }

    get credentials() {
        return this._credentials;
    }
}

window.customElements.define("pb-login", Login);