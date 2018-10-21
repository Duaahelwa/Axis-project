import React, { Component } from "react";
import NavBar from "./component/NavBar";
import { Link } from 'react-router';
import HomePage from "./pages/HomePage";


class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <HomePage />
      </div>
    );
  }
}



export default App;