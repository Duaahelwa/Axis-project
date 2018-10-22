import React, { Component } from "react";
import Users from "../services/UserServices/Users";
import Sites from "../services/SitesServices/Sites";
import { TextField, Grid, Card, Button, CardContent } from "@material-ui/core";
import UserAuth from "../services/UserServices/UserAuth";


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
        let newGetAllUsers = !this.state.getAllUsers;
        this.setState({
            getAllUsers: newGetAllUsers
        });
    }

    render() {
        const users = this.props.users;
        if (!this.state.getAllUsers) {
            return (
                <Grid container justify="center" spacing={24} style={{ padding: 24 }}>
                    <Card>
                        <CardContent>

                            <form onSubmit={(e)=>this.handleSubmit(e)}>
                                <Grid item   >
                                    <TextField label="username" style={{ padding: 24 }} margin="normal" value={this.state.username} onChange={this.handleChangeUsername} />
                                </Grid>

                                <Grid item  >
                                    <TextField label="password" style={{ padding: 24 }} margin="normal" value={this.state.password} onChange={this.handleChangePassword} />
                                </Grid>

                                <Grid item >
                                    <button  className="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect"  variant="outlined" color="primary" type="submit" disabled={this.state.loginDisabled}  >
                                        Login
                                    </button>
                                </Grid>

                            </form>

                        </CardContent>
                    </Card>
                </Grid>
            );
        } else {
            return (
                <div>
                    <UserAuth users={this.props.users} username={this.state.username} password={this.state.password}/>
                </div>
            )
        }
    }
}

export default LoginPage;