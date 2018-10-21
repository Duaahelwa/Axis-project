import React, { Component } from "react";
import UserAuth from "./UserAuth";



class Users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
        };
    };
 
    async componentDidMount() {
        try {
            await fetch('/users')
                .then(res => res.json())
                .then(users => this.setState({ users }))
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
       const username = this.props.username;
       const password = this.props.password;
            return (
                <div >
                   <UserAuth users={this.state.users} username={this.props.username} password={this.props.password} />
                </div>
            )
        

    }
}

export default Users;