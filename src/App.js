import React, { Component } from 'react';
import './App.css';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <h2>Let's get started</h2>
      </div>
    );
  }
}

export default App;
