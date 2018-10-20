import React, { Component } from "react";
import Sites from "./Sites";

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameValid: false,
            password: '',
            passwordValid: false,
            loginDisabled: true,
            hideSites: true,
        };
    };
    handleChangeUsername = (e) => {
        let usernameValid = e.target.value.length > 6 ? true : false;
        let loginValid = this.state.passwordValid && usernameValid;
        this.setState({
            username: e.target.value,
            usernameValid: usernameValid,
            loginDisabled: !loginValid
        })
    };
    handleChangePassword = (e) => {
        let passwordValid = e.target.value.length > 6 ? true : false;
        let loginValid = this.state.usernameValid && passwordValid;
        this.setState({
            password: e.target.value,
            passwordValid: passwordValid,
            loginDisabled: !loginValid
        })
    };
    handleSubmit = (e) => {
        e.preventDefault(); 
    }


    handleClick = (e) => {
        let newHideSites = !this.state.hideSites;
        this.setState({
            hideSites: newHideSites
        });
      
        
    }

    render() {
        const { users } = this.props.users;
        const { username } = this.state.username;
       

        if (this.state.hideSites) {
            return (
                <div >
                     <div className="login-page">
                        <div className="login-form">

                   
                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <div >
                                    <label>username</label><br />
                                    <input type="text" value={this.state.username} onChange={this.handleChangeUsername} />
                                </div>

                                <div>
                                    <label>password</label><br />
                                    <input type="text" value={this.state.password} onChange={this.handleChangePassword} />
                                </div>

                                <div className="login-form-submit">
                                    <input type="submit" value="Login" disabled={this.state.loginDisabled} onClick={this.handleClick} />
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