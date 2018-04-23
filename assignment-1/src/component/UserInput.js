import React from 'react';

function UserInput(props) {
    const style = {
        background: 'greenyellow'
    }
    return (<div>
        <input type='text' style={style} onChange={props.change} value={props.name}/>
    </div>);
}

export default UserInput;