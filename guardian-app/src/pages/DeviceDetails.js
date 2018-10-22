import React, { Component } from "react";
import {Button, CardContent, Card, ListItem, List, Grid} from "@material-ui/core/Button";

class DeviceDetails extends Component {

    render() {
        const devices = this.props.devices;
        const deviceId = this.props.deviceId;
        return (
            <div>
                {
                    this.props.devices.filter((device) => device.id === deviceId).map((device) =>
                        
                            <ul key={device.id} >
                                <li >{device.description}</li>
                            </ul>
                    ) }
            </div>
        )
    }




}

export default DeviceDetails;