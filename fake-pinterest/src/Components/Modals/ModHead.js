import React, {Component} from 'react';

function Modhead (props) {
    return (
        <div className=" flex-row">
            <h1>{props.title}</h1>
            <button type="button" className="close " aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}


export default Modhead;