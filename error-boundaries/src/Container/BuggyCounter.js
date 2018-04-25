import React, { Component } from 'react';

class BuggyCounter extends Component {
    state = {
        counter: 0
    }

     clickHandler = () => {
        this.setState(prevState=>({
            counter:prevState.counter + 1
        }));
    }

    render() {
        if(this.state.counter === 5) {
            throw new Error("Something went wrong...");
        }
        return (
            <div onClick={this.clickHandler}>
                {this.state.counter}
            </div>
        );
    }
}

export default BuggyCounter;