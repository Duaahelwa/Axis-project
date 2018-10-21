import React, { Component } from "react";
import DevicesPage from "../pages/DevicesPage";


class DevicesServices extends Component {
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
        const sites = this.props.sites;
        const siteId = this.props.siteId;
       
            return (
                <div >
                   <DevicesPage sites={this.props.sites} devices={this.state.devices} />
                </div>
            );
        

    }
}

export default DevicesServices;