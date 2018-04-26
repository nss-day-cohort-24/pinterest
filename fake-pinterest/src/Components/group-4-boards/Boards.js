import React, { Component } from 'react';
import BoardNav from './BoardNav';
import Add from './Add';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';
import './board.css';


class Boards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            boards: ["BBLAG", "BBLAG","BBLAG"]
        }
    }
    render() {
        let stateBoards = this.state.boards;
        let boardElements = stateBoards.map((boards, index) => {
            return (
                <Card className="pinCard col-3">
                    <CardImg src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody className="cardBody">
                        <CardTitle className="cardTitle">{boards}</CardTitle>
                    </CardBody>
                </Card>
            )});
        return (
            <div>
                <div>
                    <BoardNav />
                    <div className="row justify-content-around">
                    <Add />
                        {boardElements}
                    </div>
                </div>
            </div>
        );
    }
}

export default Boards;