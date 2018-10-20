import React, { Component } from "react";
import GetAllSites from "./GetAllSites";


class LoginAuthentication extends Component {


    render() {
        const users  = this.props.users;
        const username  = this.props.username;
        const password = this.props.password;
        const authenticatedUser = users.find((user)=> user.username === username);
        if((authenticatedUser.username === username) && (authenticatedUser.password === password) ){
            return (
                <div >
                    <GetAllSites username={this.props.username} />
                </div>
            );

        }else{
            alert("user or password are not correct")
        }
       


    }
}

export default LoginAuthentication;