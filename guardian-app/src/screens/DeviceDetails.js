import React, { Component } from "react";

/* 
/* A component use to render the devices details after a button is clicked
 */


class DeviceDetails extends Component {
    render() {
        return (
            <div>
                {this.props.devices.filter((device) => device.id === this.props.deviceId).map((device,index) =>

                    <ul key={index}>
                        <li >title{device.title}</li>
                        <li >description{device.description}</li>
                        <li >model{device.model}</li>
                        <li >version{device.version}</li>
                        <li>Is device enabled{device.enabled}</li>
                        <li>Is device connected{device.connected}</li>
                        {device.storages.map((storage) =>
                            <div key={index}>
                                <li > storage name {storage.id}</li>
                                <li > storage state {storage.state}</li>
                            </div>
                        )}
                    </ul>
                )}
            </div>
        )
    }
}

export default DeviceDetails;

