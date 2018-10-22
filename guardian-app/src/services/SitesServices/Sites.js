import React, { Component } from 'react';
import SitesPage from '../../pages/SitesPage';

class Sites extends Component {
    // Initialize the state
    constructor(props) {
        super(props);
        this.state = {
            sites: []
        }
    }

    async componentDidMount() {
        try {
            await fetch('/sites')
                .then(res => res.json())
                .then(sites => this.setState({ sites }))
        } catch (error) {
            console.error('Error:', error);
        }
    }

    render() {
        const username = this.props.username;
        const users = this.props.users;
        const sites = this.state.sites;
         {
            return (
                <div className="App">
                    <SitesPage username={this.props.username} sites={this.state.sites} />
                </div>
            );
        }
    }
}

export default Sites;