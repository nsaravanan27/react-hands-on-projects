import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  state = {
    length : 0
  }

  changeHandler = (event) => {
    this.setState({
        length : event.target.value.length
    });
  }

  render() {
    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler}/>
        <p>Length of the input string : {this.state.length}</p>
      </div>
    );
  }
}

export default App;
