import React, { Component } from 'react';
import './App.css';
import Boards from './Components/group-4-boards/Boards';
import Nav from './Components/Nav/Nav.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Boards />
          <Nav />
        </div>
      </div>
    );
  }
}

export default App;
