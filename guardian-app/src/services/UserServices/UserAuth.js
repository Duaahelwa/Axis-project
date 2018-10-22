import React, { Component } from "react";
import HomePage from "../../pages/HomePage";
import Sites from "../SitesServices/Sites";
import Users from "./Users";


class UserAuth extends Component {


    render() {
        const users = this.props.users;
        const username = this.props.username;
        const password = this.props.password;
        const loginUser = users.find((user) => user.username === username && user.password === password)

        return (
            <div>
                {
                    loginUser ? <Sites users={this.props.users} username={this.props.username} /> : < Users />
                }
            </div>
        );
    }
}

export default UserAuth;