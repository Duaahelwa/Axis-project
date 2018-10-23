import React, { Component } from "react";
import { TextField, Grid, Card, Button, CardContent } from "@material-ui/core";
import LoginAutha from "../services/LoginAutha";

/* 
/*   Login interface 
 */
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            usernameValid: false,
            password: '',
            passwordValid: false,
            loginDisabled: true,
            submit: false
        };
    };

    /* 
    /*   Apply validation on username and password
    */
    handleChangeUsername = (e) => {
        let usernameValid = e.target.value.length > 0 ? true : false;
        let loginValid = this.state.passwordValid && usernameValid;
        this.setState({
            username: e.target.value,
            usernameValid: usernameValid,
            loginDisabled: !loginValid
        })
    };
    handleChangePassword = (e) => {
        let passwordValid = e.target.value.length > 0 ? true : false;
        let loginValid = this.state.usernameValid && passwordValid;
        this.setState({
            password: e.target.value,
            passwordValid: passwordValid,
            loginDisabled: !loginValid
        })
    };
    handleSubmit = (e) => {
        e.preventDefault();
        let modifySubmit = !this.state.submit;
        this.setState({
            submit: modifySubmit
        });
    }

    render() {
        return (
            <div>
                {!this.state.submit ?
                    <Grid container justify="center" spacing={24} style={{ padding: 24 }}>
                        <Card>
                            <CardContent>
                                <form onSubmit={(e) => this.handleSubmit(e)}>
                                    <Grid item   >
                                        <TextField label="username" style={{ padding: 24 }} margin="normal" value={this.state.username} onChange={this.handleChangeUsername} />
                                    </Grid>

                                    <Grid item  >
                                        <TextField label="password" style={{ padding: 24 }} margin="normal" value={this.state.password} onChange={this.handleChangePassword} />
                                    </Grid>

                                    <Grid item >
                                        <Button variant="outlined" color="primary" type="submit" disabled={this.state.loginDisabled}  >
                                            Login
                                    </Button>
                                    </Grid>
                                </form>
                            </CardContent>
                        </Card>

                    </Grid> :

                    <LoginAutha users={this.props.users} sites={this.props.sites} devices={this.props.devices} username={this.state.username} password={this.state.password} />
                }
            </div>
        );
    }
}

export default Login;