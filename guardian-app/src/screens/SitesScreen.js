import React, { Component } from "react";
import Devices from "../services/DeviceServices/Devices";
import { Typography, Grid, Card, Button,List,ListItem } from "@material-ui/core";

class SitesPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            devices: [],
            hideDevices: true,
            value: '',
            sameButton: false
        };
    };


    handleClick = (e, index) => {
        e.preventDefault();
        let showDevices = !this.state.hideDevices
        let value = e.currentTarget.value;
        this.setState({
            hideDevices: showDevices,
            value: value
        })

    }

    render() {
        const sites = this.props.sites;
        const username = this.props.username;


        return (
            <Grid container justify="center" style={{ padding: 24 }}>
                <Card style={{ padding: 24 }} >
                    
                        <Typography style={{ padding: 24 }} variant="title" color="inherit">List of sites</Typography>

                    {sites ?
                        sites.filter((site) => site.owner === username).map((site, index) =>
                        <Grid container spacing={8} style={{padding: 24}} key={site.id} >

            
                                <Grid item xs={12} sm={6} lg={4} xl={3}>{site.title} </Grid>
                                
                                    <Button size="small"variant="outlined" color="primary" value={site.id} onClick={(e) => this.handleClick(e, index)}>Devices</Button>
                              
                                <div>
                                    {Number(this.state.value) === site.id ?
                                        <Devices sites={this.props.sites} siteId={site.id} />
                                        : null}
                                </div>
                            </Grid>

                        ) : null}
                </Card>
            </Grid>
        );
    }

}
export default SitesPage;












// import React, {Component} from 'react';
                        // import Devices from '../services/DeviceServices/Devices';
// import {List, ListItem, Typography, Card, CardContent, Button, Grid } from "@material-ui/core";




// class SitesPage extends Component {
//     // Initialize the state
//     constructor(props) {
//         super(props);
//         this.state = {
//             hideDevices: true,
//             value:''
//         }
//     }


//     handleHideDevices = (e,index) => {
//         e.preventDefault();
//         let value = e.currentTarget.value;
//         let showDevices = !this.state.hideDevices;
//         this.setState({
//             hideDevices: showDevices,
//             value:value
//         })
//         console.log(this.state.value);
//     }

//     render() {
//         const sites = this.props.sites;
//         const username = this.props.username;
//         return (
//             <Grid container justify="center" style={{ padding: 24 }}>
//                 <Card>
//                     <Grid item >
//                         <Typography style={{ padding: 24 }} variant="title" color="inherit">List of sites</Typography>
//                     </Grid>
//                     <List type="Single-line list">
//                         {sites ?
//                             sites.filter((site) => site.owner === username).map((site,index) =>
//                                 <div key={site.id}>
//                                     <Grid item >
//                                         <ListItem >{site.title}</ListItem>
//                                     </Grid>
//                                     {/* <ListItem key={site.id}>
//                                      <Devices siteId={site.id} sites={this.props.sites} />
//                                      </ListItem> */}

//                                     <Grid item >
//                                     <ListItem >
//                                         <Button variant="outlined" color="primary" value={site.id} onClick={(e)=>this.handleHideDevices(e,index)}>{this.state.hideDevices? "Show Devices": "Hide Devices"}{site.id}</Button>
//                                         { !this.state.hideDevices &&   <Devices siteId={site.id} sites={this.state.sites} deviceId={this.state.value}/> }
//                                      </ListItem>
//                                     </Grid>
//                                 </div>
//                             ) : null}
//                     </List>
//                 </Card>
//             </Grid >
//         );
//     }
// }

// export default SitesPage;