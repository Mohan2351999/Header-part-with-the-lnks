import React, { Component } from 'react';
import logo from './components/logo.svg';
import './App.css';


import HeaderComponent from "./components/HeaderComponent"

class App extends Component {

  render() {
    return (
      <div>
          <HeaderComponent/>
      </div>
    );
  }
}

export default App;

