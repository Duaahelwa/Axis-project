
import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import ApiServices from "../services/ApiServices";

class Home extends Component {
    render() {
        return (
            <div>
                <Typography align="center" style={{padding: 24}}variant="title" color="inherit">Welcome</Typography>
                <ApiServices />
            </div>
        );
    }
}
export default Home;