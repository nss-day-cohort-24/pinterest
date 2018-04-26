import React, { Component } from 'react';
import  './button.css';

class Button extends Component {

    render() {
        return (
            <button className="boardButton">{this.props.name}</button>
        );
    }
}

export default Button;