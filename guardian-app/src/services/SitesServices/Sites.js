import React, { Component } from 'react';
import SitesScreen from '../../screens/SitesScreen';

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
            return (
                <div className="App">
                    <SitesScreen username={this.props.username} sites={this.state.sites} />
                </div>
            );
    }
}

export default Sites;