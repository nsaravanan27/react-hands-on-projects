import React, { Component } from 'react';
import './App.css';
import UserOutput from './component/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput/>
        <UserOutput/>
      </div>
    );
  }
}

export default App;
