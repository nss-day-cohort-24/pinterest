import React, { Component } from 'react';
import BoardNav from './BoardNav';
import Add from './Add';
import { Card, CardImg, CardBody, CardTitle } from 'reactstrap';


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
                <div>
                    <Card key={index}>
                        <CardImg top width="19%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                        <CardBody>
                            <CardTitle>{boards}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            )});
        return (
            <div>
                <div>
                    <BoardNav />
                    {boardElements}
                </div>
            </div>
        );
    }
}

export default Boards;