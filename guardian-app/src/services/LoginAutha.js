
import React, { Component } from "react";
import Login from "../screens/Login";
import Sites from "../screens/Sites"
/* 
/*   client side Authentication
 */

class LoginAutha extends Component {
    render() {

        return (
            <div>
                {this.props.users.find((user) => user.username === this.props.username && user.password === this.props.password) ?

                    <Sites sites={this.props.sites} devices={this.props.devices} username={this.props.username} />
                    : <Login users={this.props.users} />
                }

            </div>
        );
    }

}
export default LoginAutha;