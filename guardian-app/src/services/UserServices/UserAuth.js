import React, { Component } from "react";
import Sites from "../SitesServices/Sites";
import Users from "./Users";


const UserAuth = () => {
    const loginUser = this.props.users.find((user) => user.username === this.props.username && user.password === this.props.password)
    return (
        <div>
            {loginUser ? <Sites users={this.props.users} username={this.props.username} /> : < Users /> }
        </div>
    );
}

export default UserAuth;