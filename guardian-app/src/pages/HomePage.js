
import React, { Component } from "react";
import Users from "../services/UserServices/Users";

class HomePage extends Component {
    render() {
        return (
            <div>
                <h3>Welcome</h3>
                <Users />
            </div>
        );
    }
}
export default HomePage;