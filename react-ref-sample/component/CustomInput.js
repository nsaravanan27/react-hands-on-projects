import React from 'react';

const customInput = (props) => {
    return (
        <div>
            <span>{props.label} </span>
            <input ref={props.myref} type="text" onKeyUp={props.onKeyUp} />
            <br />
        </div>
    );
}

export default customInput;