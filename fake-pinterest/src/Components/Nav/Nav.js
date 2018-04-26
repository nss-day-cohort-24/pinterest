import React, { Component } from 'react';
import squiggle from './img/squiggleline.png';


function Nav() {
    return (
        <nav className="d-flex justify-content-between">
            <button type="button"><img src={squiggle} alt="" /></button>
            <input placeholder="Search" type="text" />
            <button type="button">Home</button>
            <button type="button">Following</button>
            <button type="button">Explore</button>
            <button type="button"><img src={squiggle} alt="" />Lindsay</button>
            <button type="button"><img src={squiggle} alt="" /></button>
            <button type="button"><img src={squiggle} alt="" /></button>       
        </nav>
    );
}


export default Nav;


