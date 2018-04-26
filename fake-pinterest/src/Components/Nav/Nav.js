import React, { Component } from 'react';
import '../../App.css';
import squiggle from './img/squiggleline.png';


function Nav() {
    return (
        <nav className="d-flex justify-content-between">
            <button className="nav-button" type="button"><img src={squiggle} alt="" /></button>
            <input placeholder="Search" type="text" />
            <button className="nav-button" type="button">Home</button>
            <button className="nav-button" type="button">Following</button>
            <button className="nav-button" type="button">Explore</button>
            <button className="nav-button" type="button"><img src={squiggle} alt="" />Lindsay</button>
            <button className="nav-button" type="button"><img src={squiggle} alt="" /></button>
            <button className="nav-button" type="button"><img src={squiggle} alt="" /></button>       
        </nav>
    );
}


export default Nav;


