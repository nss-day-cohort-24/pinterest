import React, { Component } from 'react';
import './board.css'
import ModalExample from '../Modals/Modal'
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';

class Add extends Component {

    render() {
        return (
            <div>
                <Card className="pinCard col">
                    <ModalExample buttonLabel="create" />
                    <div className="createBoard">Create board</div>
                </Card>
                

            </div>
        );
    }
}

export default Add;