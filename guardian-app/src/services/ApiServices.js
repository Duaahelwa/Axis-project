import React, { Component } from "react";
import Login from "../screens/Login";

/* 
/*   Api services fetch all data from Api when the server and webserver is running
*/

class ApiServices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            sites:[],
            devices:[]
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
        try {
            await fetch('/sites')
                .then(res => res.json())
                .then(sites => this.setState({ sites }))
        } catch (error) {
            console.error('Error:', error);
        }
        try {
            await fetch('/devices')
                .then(res => res.json())
                .then(devices => this.setState({ devices }))
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        return (
            <div >
                
                <Login users={this.state.users} sites={this.state.sites} devices={this.state.devices} />
                
            </div>
        )
    }
}

export default ApiServices;