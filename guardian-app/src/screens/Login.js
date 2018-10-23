import React, { Component } from "react";
import { TextField, Grid, Card, Button, CardContent } from "@material-ui/core";
import Home from "./Home";
import Sites from "./Sites";

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
            showUserScreen: false
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
        let newShowUserScreen = !this.state.showUserScreen;
        this.setState({
            showUserScreen: newShowUserScreen
        });
    }

    render() {
        return (
            <div>
                {!this.state.showUserScreen ?
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
                    <div>
                        {this.props.users.find((user) => user.username === this.state.username && user.password === this.state.password) ?//client side Authentication
                            <Sites sites={this.props.sites} devices={this.props.devices} username={this.state.username} />
                            : <div>
                                alert("you entered wrong username or password try again")
                    <Home />
                            </div>}
                    </div>}
            </div>
        );
    }





}

export default Login;