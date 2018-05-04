import React, { Component } from 'react';
import './App.css';
import CustomInput from './component/CustomInput';

class App extends Component {

  onClick = () => {
    console.log(this.firstname.value);
  }

  onKeyUp = (valType, e) => {
    if (e.keyCode === 13) {
      console.log(e.keyCode);
      console.log(valType);
      switch (valType) {
        case 'firstname':
          this.lastname.focus();
          break;
        case 'lastname':
          this.age.focus();
          break;
        default: 
          this.submit.focus();
      }
    }
  }
  
  render () {
    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <div>
          <CustomInput label="First Name" myref={input => {this.firstname = input}} onKeyUp={this.onKeyUp.bind(this, 'firstname')}/>
          <CustomInput label="Last Name" myref={input => {this.lastname = input}} onKeyUp={this.onKeyUp.bind(this, "lastname")}/>   
          <CustomInput label="Age" myref={input => {this.age = input}} onKeyUp={this.onKeyUp.bind(this, "age")} />

          <input type="submit" ref={input => {this.submit = input}} value="submit" onClick={this.onClick}/>  
        </div>
      </div>
    );
  }
}

export default App;
