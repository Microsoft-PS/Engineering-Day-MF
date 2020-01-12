class Login extends HTMLElement {
    connectedCallback() {
        this.innerHTML  =`
            <div>
                <form>
                    <label for='uname'>User Name</label>
                    <input type='text' id='uname' />
                    <br />
                    <label for='pwd'>Password</label>
                    <input type='password' id='pwd' />
                    <br />
                </form>
                <button type='submit'>
                    <a href="/feeds">Login</a>
                </input>
            </div>
        `
    }
}

window.customElements.define("login-page", Login);