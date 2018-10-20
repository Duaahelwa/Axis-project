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
      const getData = await fetch('/sites')
        .then(res => res.json())
        .then(sites => this.setState({ sites }))
    } catch (error) {
      console.error('Error:', error);
    }
  }
  
  render() {
    const { sites } = this.state;

    return (
      <div className="App">
        <h1>List of sites</h1>
        <ul>
          {sites.map((site) =>
            <li key={site.id}>{site.title}</li>
          )}
        </ul>

      </div>
    );
  }
}

export default Sites;