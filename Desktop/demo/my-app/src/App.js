import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Produce from './components/Produce';
class App extends Component {
  render() {
    return (
        <div>
          <Header> </Header>
          <Produce></Produce>
        </div> 
    );
  }
}

export default App;
