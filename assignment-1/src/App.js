import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';
import './component/User.css'

class App extends Component {

  state = {username: 'appu'}

  changeHandler = (event) => {
    this.setState({
      username : event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Assignment 1</h1>
        <div className = "User">
          <UserInput name={this.state.username} change={this.changeHandler} />
          <UserOutput name={this.state.username} />
        </div>
        <div className = "User">
          <UserInput />
          <UserOutput name="mac" />
        </div>
      </div>
    );
  }
}

export default App;
