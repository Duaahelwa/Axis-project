import React, { Component } from 'react';
import Sites from "../pages/Sites";

class GetAllSites extends Component {
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
        
        return (
            <div className="App">
              <Sites username={this.props.username} sites={this.state.sites} /> 
            </div>
        );
    }
}

export default GetAllSites;