import React, { Component } from "react";

/* 
/* A component use to render the devices details after a button is clicked
 */ 


class DeviceDetails extends Component {
    render(){
        return (
            <div>
                {this.props.devices.filter((device) => device.id === this.props.deviceId).map((device) =>
    
                        <ul key={device.id} >
                            <li >title{device.title}</li>
                            <li >description{device.description}</li>
                            <li >model{device.model}</li>
                            <li >version{device.version}</li>
                            <li>Is device enabled{device.enabled}</li>
                            <li>Is device connected{device.connected}</li>
                            {/* <div> 
                                    {
                                    device.storages.map((storage)=>
                                    <li> {storage.id}</li>
                                    <li> {storage.state}</li>
                                    )}
                                    </div> */}
                        </ul>
                    )}
            </div>
        )
    }
}

export default DeviceDetails;

