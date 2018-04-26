import React, { Component } from 'react';
import '../../App.css';


function Dropdown() {
    return (
            <div>
                <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    •••
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a class="dropdown-item" href="#">SECRET</a>
                    <a class="dropdown-item" href="#">REASONS</a>
                </div>
                </div>
            </div>
        );
    }
export default Dropdown;


