import React, { Component } from 'react';

class App extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      sites: []
    }
  }

  componentDidMount() {
    this.getData();
  }
  
  getData = () => {
    fetch('/sites')
      .then(res => res.json())
      .then(sites => this.setState({ sites }))
      .catch(error => console.error('Error:', error));
  }
  render() {
    const { sites } = this.state;

    return (
      <div className="App">
        <h1>List of sites</h1>
        <ul>
          {sites.map((site)=>
          <li >{site.title}</li>
          )}
        </ul>

      </div>
    );
  }
}

export default App;