import React, { Component } from 'react';
import './App.scss';
import { Navbar } from './common/Navbar';
import { Sidenav } from './common/Sidenav';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidenav />
      </div>
    );
  }
}

export default App;
