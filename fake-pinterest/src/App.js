import React, { Component } from 'react';
import './App.css';
import ModalExample from './Components/Modals/Modal';
import Modhead from './Components/Modals/ModHead';
import Boards from './Components/group-4-boards/Boards';
import Profile from './Components/Profile';
import Nav from './Components/Nav/Nav.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Nav />
          <Profile />
          
          <Boards />
        </div>
      </div>
    );
  }
}

export default App;
