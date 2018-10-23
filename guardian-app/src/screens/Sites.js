import React, { Component } from "react";
import Devices from "./Devices";
import { Typography, Grid, Card } from "@material-ui/core";

/* 
/* Component  used to generate a list of sites that belong to a the logged in user
 */
class Sites extends Component {

    render() {
        return (

            <Card style={{ padding: 24 }} >

                <Typography style={{ padding: 24 }} variant="title" color="inherit">List of sites</Typography>

                {this.props.sites ?
                    this.props.sites.filter((site) => site.owner === this.props.username).map((site, index) =>

                        <div>
                            <Grid item xs={12} sm={6} lg={4} xl={3}>{site.title} </Grid>
                            <Devices devices={this.props.devices} siteId={site.id} />
                        </div>
                        
                    ) : null}
            </Card>

        );
    }

}
export default Sites;
