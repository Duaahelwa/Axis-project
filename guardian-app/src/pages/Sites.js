import React, { Component } from 'react';

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
        const { sites } = this.state;
        const username = this.props.username;
        let userSites = sites.filter((site) => site.owner === username).map
            ((site) => <li key={site.id}>{site.title}</li>)

        return (
            <div className="App">
                <h1>List of sites</h1>
                <ul>
                    {userSites}
                </ul>
            </div>
        );
    }
}

export default Sites;