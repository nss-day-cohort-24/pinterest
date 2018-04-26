import React, { Component } from 'react';
import './add.css'

class Add extends Component {

    render() {
        return (
            <div>
                <div className="addBoard">
                    <img className="add" src={require('../../Images/PinterestAddCircle.svg')} alt="word" />
                    <div>Create board</div>
                </div>

            </div>
        );
    }
}

export default Add;