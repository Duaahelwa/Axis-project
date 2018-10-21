
import React, { Component } from "react";
import Users from "../services/UserServices/Users";
import Typography from "@material-ui/core/Typography";

class HomePage extends Component {
    render() {
        return (
            <div>
                <Typography align="center" style={{padding: 24}}variant="title" color="inherit">Welcome</Typography>
                <Users />
            </div>
        );
    }
}
export default HomePage;