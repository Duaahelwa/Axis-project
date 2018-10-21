import React, { Component } from "react";

class DevicesPage extends Component {

    render() {
        const devices = this.props.devices;
        const siteId = this.props.siteId;
        return (
            <div >
                <h1>List of devices</h1>
                <ul>
                    {
                        devices.filter((device) => device.site_id === siteId).map((device) =>
                            <li key={device.id}>{device.title}</li>

                        )}
                </ul>

            </div>

        );
    }


}


export default DevicesPage;