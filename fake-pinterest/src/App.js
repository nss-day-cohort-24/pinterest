import React, { Component } from 'react';
import './App.css';
import Boards from './Components/group-4-boards/Boards';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <Boards />
        </div>
      </div>
    );
  }
}

export default App;
