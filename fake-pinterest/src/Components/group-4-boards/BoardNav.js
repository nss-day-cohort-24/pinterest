import React, { Component } from 'react';
import { Button } from 'reactstrap';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class BoardNav extends Component {

    render() {
        return (
            <div>
                <div>
                    <div>
                        <Button color="success">Boards</Button>
                        <Button color="success">Pins</Button>
                        <Button color="success">Tries</Button>
                        <Button color="success">Topics</Button>
                    </div>
                    <div>
                        <div>Sort boards</div>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 A to Z
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">Last saved to</a>
                                <a className="dropdown-item" href="#">A to Z</a>
                                <a className="dropdown-item" href="#">Newest</a>
                                <a className="dropdown-item" href="#">Oldest</a>
                                <a className="dropdown-item" href="#">Drag and Drop</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default BoardNav;