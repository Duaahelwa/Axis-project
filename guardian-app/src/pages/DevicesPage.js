import React, { Component } from "react";
import { ListItem, List, Typography, Grid } from "@material-ui/core";

class DevicesPage extends Component {

    render() {
        const devices = this.props.devices;
        const siteId = this.props.siteId;
        return (
            <Grid container justify="center"  style={{ padding: 24 }}>
                <Typography style={{ padding: 24 }} variant="title" color="inherit">List of devices</Typography>

                <List>
                    {devices ?
                        devices.filter((device) => device.site_id === siteId).map((device) =>
                            <Grid item  >
                                <ListItem key={device.id}>{device.title}</ListItem>
                            </Grid >

                        ) : null}
                </List>

            </Grid>

        );
    }


}


export default DevicesPage;