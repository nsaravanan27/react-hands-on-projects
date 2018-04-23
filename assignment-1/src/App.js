import React, { Component } from 'react';
import './App.css';
import UserInput from './component/UserInput';
import UserOutput from './component/UserOutput';

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
        <UserInput name={this.state.username} change={this.changeHandler}/>
        <UserOutput name={this.state.username}/>
        <UserOutput name="mac"/>
      </div>
    );
  }
}

export default App;
