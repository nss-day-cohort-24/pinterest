import React, { Component } from 'react';
import './App.css';
import Modhead from './Components/Modals/ModHead';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
            <Modhead
            title={"create"} />
        </div>
      </div>
    );
  }
}

export default App;
