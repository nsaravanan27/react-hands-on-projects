import React, { Component } from 'react';
import './App.css';
import BuggyCounter from './Container/BuggyCounter';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

class App extends Component {
  
  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <ErrorBoundary><BuggyCounter/></ErrorBoundary>
        <BuggyCounter/>
      </div>
    );
  }
}

export default App;
