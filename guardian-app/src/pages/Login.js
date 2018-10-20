import React, { Component } from "react";
import Sites from "./Sites";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            username: '',
            usernameValid: false,
            password: '',
            passwordValid: false,
            submitDisabled: true,
            hideSites: true,
        };
    };
    handleChangeUsername = (e) => {
        let usernameValid = e.target.value.length > 6 ? true : false;
        let submitValid = this.state.passwordValid && usernameValid;
        this.setState({
            username: e.target.value,
            usernameValid: usernameValid,
            submitDisabled: !submitValid
        })
    };
    handleChangePassword = (e) => {
        let passwordValid = e.target.value.length > 6 ? true : false;
        let submitValid = this.state.usernameValid && passwordValid;
        this.setState({
            password: e.target.value,
            passwordValid: passwordValid,
            submitDisabled: !submitValid
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
    }
    async componentDidMount() {
        try {
            await fetch('/users')
                .then(res => res.json())
                .then(users => this.setState({ users }))
        } catch (error) {
            console.error('Error:', error);
        }
    }

    handleClick = (e) => {
        let newHideSites = !this.state.hideSites;
        this.setState({
            hideSites: newHideSites
        })
    }

    render() {
        const { users } = this.state.users;
        const { username } = this.state.username;

        if (this.state.hideSites) {
            return (
                <div >
                     <div className="login-page">
                        <div className="login-form">

                   
                            <form onSubmit={this.handleSubmit}>
                                <div >
                                    <label>username</label><br />
                                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                                </div>

                                <div>
                                    <label>password</label><br />
                                    <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
                                </div>

                                <div className="login-form-submit">
                                    <input type="submit" value="Login" disabled={this.state.submitDisabled} onClick={this.handleClick} />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div>
                    <Sites username={this.state.username} />
                </div>
            )
        }

    }
}

export default Login;