import React, { Component } from "react";
import Users from "../services/UserServices/Users";
import Sites from "../services/SitesServices/Sites";
import { TextField, Grid, Card, Button, CardContent } from "@material-ui/core";


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
        if (!this.state.getAllUsers) {
            return (
                <Grid container justify="center" spacing={24} style={{ padding: 24 }}>
                    <Card>
                        <CardContent>

                            <form onSubmit={this.handleSubmit.bind(this)}>
                                <Grid item   >
                                    <TextField label="username" style={{ padding: 24 }} margin="normal" value={this.state.username} onChange={this.handleChangeUsername} />
                                </Grid>

                                <Grid item  >
                                    <TextField label="password" style={{ padding: 24 }} margin="normal" value={this.state.password} onChange={this.handleChangePassword} />
                                </Grid>

                                <Grid item >
                                    <Button variant="outlined" color="primary" type="submit" disabled={this.state.loginDisabled} onClick={this.handleClick} >
                                        Login
                                    </Button>
                                </Grid>

                            </form>

                        </CardContent>
                    </Card>
                </Grid>
            );
        } else {
            return (
                <div>
                    <Sites username={this.state.username} password={this.state.password} />
                </div>
            )
        }
    }
}

export default LoginPage;