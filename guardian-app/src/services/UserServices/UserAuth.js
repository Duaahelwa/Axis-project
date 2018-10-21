import React, { Component } from "react";
import HomePage from "../../pages/HomePage";
import LoginPage from "../../pages/LoginPage"


class UserAuth extends Component {


    render() {

        const users = this.props.users;
        const username = this.props.username;
        const password = this.props.password;

        const logInUser = users.find((user) => (user.username === username) && (user.password===password))
         

        // if (logInUser == null) {
        //     alert("user is not registered");
        //     return (
        //         <HomePage />
        //     );
        // } 
        // else  {
            return (
                < LoginPage users={this.props.users} username={this.props.username} />
            );
            
            
        // }
    }
}

export default UserAuth;