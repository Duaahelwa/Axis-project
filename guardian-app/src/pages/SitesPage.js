import React, { Component } from 'react';
import Devices from '../services/DeviceServices/Devices';



class SitesPage extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            hideDevices:true
        }
    }


    handleHideDevices = (e)=> {
        let showDevices = !this.state.hideDevices;
        this.setState({
           hideDevices : showDevices
        })
    }

    render() {
        const sites  = this.props.sites;
        const username = this.props.username;
        // let jsx = (this.state.hideDevices) ? <GetAllDevices sites={this.state.sites} /> : null;
            
        // let userSites =sites.filter((site) => site.owner === username).map((site) => <li key={site.id}>{site.title}</li>) 
        return (
            <div className="App">
                <h1>List of sites</h1>
                <ul>
                    {
                        sites.filter((site) => site.owner === username).map((site) => 
                            <div>
                            <li key={site.id}>{site.title}</li>
                            <button  value={site.id} onClick ={this.handleHideDevices}>show devices</button>
                            {(this.state.hideDevices) ? null : <Devices siteId={site.id} sites={this.state.sites} />  }
                            </div>
                        
                        )}
                </ul>

            </div>
        );
    }
}

export default SitesPage;