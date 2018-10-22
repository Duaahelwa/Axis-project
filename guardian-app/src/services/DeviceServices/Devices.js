import React, { Component } from "react";
import DevicesScreen from "../../screens/DevicesScreen";


class Devices extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
        };
    };
 
    async componentDidMount() {
        try {
            await fetch('/devices')
                .then(res => res.json())
                .then(devices => this.setState({ devices }))
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
            return (
                <div >
                   <DevicesScreen sites={this.props.sites} devices={this.state.devices} siteId={this.props.siteId}/>
                </div>
            );
    }
}

export default Devices;