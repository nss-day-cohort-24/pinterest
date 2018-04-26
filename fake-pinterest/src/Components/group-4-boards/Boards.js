import React, { Component } from 'react';
import BoardNav from './BoardNav';
import Add from './Add';

class Boards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: []
        }
    }
    render() {
        return (
            <div>
                <div>
                    <BoardNav />
                </div>
            </div>
        );
    }
}

export default Boards;