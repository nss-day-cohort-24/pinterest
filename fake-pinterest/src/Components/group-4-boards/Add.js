import React, { Component } from 'react';
import './add.css'
import ModalExample from '../Modals/Modal'
class Add extends Component {

    render() {
        return (
            <div>
                <div className="addBoard">
                    <ModalExample buttonLabel="create" />
                    <div>Create board</div>
                </div>
                

            </div>
        );
    }
}

export default Add;