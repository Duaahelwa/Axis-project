import React, { Component } from 'react';
import Devices from '../services/DeviceServices/Devices';
import { List, ListItem, Typography, Card, CardContent, Button, Grid } from "@material-ui/core";




class SitesPage extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            hideDevices: true
        }
    }


    handleHideDevices = (e) => {
        let showDevices = !this.state.hideDevices;
        this.setState({
            hideDevices: showDevices
        })
    }

    render() {
        const sites = this.props.sites;
        const username = this.props.username;
        return (
            <Grid container justify="center" style={{ padding: 24 }}>
                <Card>
                    <Grid item >
                        <Typography style={{ padding: 24 }} variant="title" color="inherit">List of sites</Typography>
                    </Grid>
                    <List type="Single-line list">
                        {sites ?
                            sites.filter((site) => site.owner === username).map((site) =>
                                <CardContent>
                                    <Grid item >
                                        <ListItem key={site.id}>{site.title}</ListItem>
                                    </Grid>
                                    <Grid item >
                                        <Button variant="outlined" color="primary" value={site.id} onClick={this.handleHideDevices}>show devices</Button>
                                        {(this.state.hideDevices) ? null : <Devices siteId={site.id} sites={this.state.sites} />}
                                    </Grid>
                                </CardContent>
                            ) : null}
                    </List>
                </Card>
            </Grid >
        );
    }
}

export default SitesPage;