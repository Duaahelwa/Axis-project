import React, { Component } from "react";
import { ListItem, List, Typography, Grid, Button } from "@material-ui/core";
import DeviceDetails from "./DeviceDetails";

class DevicesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: true,
            value: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e,index) => {
        e.preventDefault();
        let hideDetail = !this.state.showDetail;
        const value = e.currentTarget.value;
        this.setState({
            showDetail: hideDetail,
            value:value
        })
        console.log("this is clicked" +  e.currentTarget.value)
    }
    render() {
        const devices = this.props.devices;
        const siteId = this.props.siteId;
        const deviceId = this.props.deviceId;
        return (
            <Grid container justify="center" style={{ padding: 24 }}>
                <Typography style={{ padding: 24 }} variant="title" color="inherit">List of devices</Typography>

                <List>
                    {devices ?
                        devices.filter((device) => device.site_id === siteId).map((device,index) =>
                            <div key={device.id}>
                                <Grid item  >
                                    <ListItem >{device.title}</ListItem>
                                </Grid >
                                <Grid item  >
                                    <Button size="small" variant="outlined" color="primary" value={device.id} onClick={(e)=>this.handleClick(e,index)}>
                                    {this.state.showDetail ? "Show Details" : "Hide Details"}{device.id}
                                    </Button>
                                    {
                                    Number(this.state.value) === device.id ? <DeviceDetails devices={this.props.devices} deviceId={device.id}/>:null
                                    }
                                </Grid >
                            </div>
                        ) : null}
                </List>

            </Grid>

        );
    }


}


export default DevicesPage;