import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './component/ValidationComponent';
import CharComponent from './component/CharComponent';

class App extends Component {
  
  state = {
    value: '',
    length : 0
  }

  changeHandler = (event) => {
    const val = event.target.value;

    this.setState({
        value : val,
        length : val.length
    });
  }

  removeHandler = (ch) => {
    this.setState({
      value : this.state.value.replace(ch, '')
    });
  }

  render() {    
    let charComponent = null;
    if(this.state.value.length>0) {
      charComponent = this.state.value.split('').map((ch)=>{
          return <CharComponent key={ch} charValue={ch} remove={() => this.removeHandler(ch)}/>  
      });
    }

    return (
      <div className="App">
        <input type="text" onChange={this.changeHandler} value={this.state.value}/>
        <p>Length of the input string : {this.state.length}</p>
        <ValidationComponent length={this.state.length}/>
        <div>
          {charComponent}
        </div>
      </div>
    );
  }
}

export default App;
