import React, { Component } from 'react';
import './App.css';
import ModalExample from './Components/Modals/Modal';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
        <ModalExample buttonLabel="string"/>
        </div>
      </div>
    );
  }
}

export default App;
