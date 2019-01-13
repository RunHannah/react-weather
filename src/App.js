import React, { Component } from 'react';
import './App.css';

import Nav from './components/Nav';
import Main from './components/Main';
import GetWeather from './components/GetWeather';

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Main />
        <GetWeather />
      </div>
    );
  }
}

export default App;
