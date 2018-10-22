import React, { Component } from "react";
import UserAuth from "./UserAuth";
import LoginPage from "../../pages/LoginPage";



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
            return (
                <div >
                   <LoginPage users={this.state.users} />
                </div>
            )
        

    }
}

export default Users;