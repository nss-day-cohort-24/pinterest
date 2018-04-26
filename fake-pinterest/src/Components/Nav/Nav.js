import React, { Component } from 'react';
import squiggle from './img/squiggleline.png';
import PinterestLogo from '../../Images/PinterestLogo.svg';
import PinterestUserSmall from '../../Images/PinterestUserSmall.png';
import PinterestMessageLogo from '../../Images/PinterestMessageLogo.svg';
import Pinterest3Dots from '../../Images/Pinterest3Dots.svg';


function Nav() {
    return (
        <nav className="d-flex justify-content-between">
            <button type="button"><img src={PinterestLogo} alt="PinterestLogo"/></button>
            <input placeholder="Search" type="text" />
            <button type="button">Home</button>
            <button type="button">Following</button>
            <button type="button">Explore</button>
            <button type="button"><img src={PinterestUserSmall} alt="" />Lindsay</button>
            <button type="button"><img src={PinterestMessageLogo} alt="" /></button>
            <button type="button"><img src={Pinterest3Dots} alt="" /></button>       
        </nav>
    );
}


export default Nav;


