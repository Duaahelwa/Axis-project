import React, { Component } from "react";
import GetAllSites from "./GetAllSites";
import Login from "../pages/Login";


class LoginAuthentication extends Component {


    render() {

        const users = this.props.users;
        const username = this.props.username;
        const password = this.props.password;

        const logInUser = users.find((user) => (user.username === username) && (user.password===password))
         

        if (logInUser == null) {
            alert("user is not registered");
            return (
                <Login users={this.props.users}/>
            );
        } else  {
            return (
                <GetAllSites username={this.props.username} />
            );
            
            
        }
    }
}

export default LoginAuthentication;