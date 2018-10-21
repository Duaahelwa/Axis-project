import React, { Component } from "react";
import Users from "../services/UserServices/Users";
import SitesServices from "../services/SitesServices";

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameValid: false,
            password: '',
            passwordValid: false,
            loginDisabled: true,
            getAllUsers: false,
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
        let newGetAllUsers = !this.state.getAllUsers;
        this.setState({
            getAllUsers: newGetAllUsers
        });


    }

    render() {
        if (! this.state.getAllUsers) {
            return (
                <div >
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
            );
        } else {
            return (
                <div>
                    <SitesServices username={this.state.username} password={this.state.password} />
                    {/* <LoginAuthentication users={this.props.users} username={this.state.username} password={this.state.password} /> */}
                </div>
            )
        }

    }
}

export default LoginPage;