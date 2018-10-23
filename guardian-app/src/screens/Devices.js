import React, { Component } from "react";
import DeviceDetails from "./DeviceDetails";
import { Typography, Grid, Button } from "@material-ui/core";

/* 
/* Component  used to generate a list of devices that belong to a site
 */ 

class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showDetail: true,
            value: ''
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick = (e, index) => {
        e.preventDefault();
        let hideDetail = !this.state.showDetail;
        const value = e.currentTarget.value;
        this.setState({
            showDetail: hideDetail,
            value: value
        })
       
    }

    render() {
    
        return (
            <div>
                <Typography style={{ padding: 24 }} variant="title" color="inherit">List of devices {this.props.siteId}</Typography>

                {this.props.devices ?
                    this.props.devices.filter((device) => device.site_id === this.props.siteId).map((device, index) =>
                        <Grid container spacing={24} style={{ padding: 24 }} key={device.id}>
                            <Grid item xs={12} sm={6} lg={4} xl={3}>{device.title}</Grid>
                            <Grid item xs={12} sm={6} lg={4} xl={3}><Button size="small" variant="outlined" color="primary" value={device.id} onClick={(e) => this.handleClick(e, index)}>
                                Details of {device.title}</Button>
                            </Grid>
                            {
                             !this.state.showDetail && 
                            <Grid item xs={12} sm={6} lg={4} xl={3}>
                            <DeviceDetails devices={this.props.devices} deviceId={device.id} />  
                            </Grid>
                            }
                        </Grid>
                    ) : null}
            </div>
        );
    }
}


export default Devices;


// Number(this.state.value) === site.id ?