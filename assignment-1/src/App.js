import React, { Component } from 'react';
import './App.css';
import UserOutput from './component/UserOutput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserOutput name="appu"/>
        <UserOutput name="mac"/>
      </div>
    );
  }
}

export default App;
