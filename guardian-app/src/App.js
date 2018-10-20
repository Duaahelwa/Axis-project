import React, { Component } from 'react';
import Sites from "./pages/Sites";
import Login from "./pages/Login";
import GetAllUsers from './components/GetAllUsers';

class App extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  render() {
    const { showSites } = this.state;
    // let show = (showSites) ? <Sites showSites={this.state.showSites} /> : <Login />;
    return (
      <div>
        <GetAllUsers  />
        {/* {show} */}
      </div>
    );
  }
}

export default App;