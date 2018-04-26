import React, { Component } from 'react';
import './App.css';
import Nav from './Components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
