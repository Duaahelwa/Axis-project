import React, { Component } from "react";
import Login from "../pages/Login";


class GetAllUsers extends Component {
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
                   <Login users={this.state.users} />
                </div>
            )
        

    }
}

export default GetAllUsers;