import React from 'react';

function UserInput(props) {
    return (<div>
        <input type='text' onChange={props.change}/>
    </div>)
}

export default UserInput;