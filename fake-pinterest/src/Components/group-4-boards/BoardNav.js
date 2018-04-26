import React, { Component } from 'react';
import Button from './Button';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


class BoardNav extends Component {

    render() {
        return (
            <div id="boardNav">
                <div className="row justify-content-around align-items-center">
                    <div className="col-4">
                        <Button name="Boards" />
                        <Button name="Pins" />
                        <Button name="Tries" />
                        <Button name="Topics" />
                    </div>
                    <div className="col-3">
                        <p>Sort boards</p>
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 <p>A to Z</p>
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