import React, { Component } from 'react';
import './App.css';
import logo from './logo.png';
import Form from './Form.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Form Validation</h2>
        </div>
        <Form />
      </div>
    );
  }
}

export default App;
