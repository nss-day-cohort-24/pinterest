import React, { Component } from 'react';
import '../../App.css';
import PinterestLogo from '../../Images/PinterestLogo.svg';
import PinterestUserSmall from '../../Images/PinterestUserSmall.png';
import PinterestMessageLogo from '../../Images/PinterestMessageLogo.svg';
import Pinterest3Dots from '../../Images/Pinterest3Dots.svg';



function Nav() {
    return (
        <nav className="d-flex justify-content-between my-3">
            <button className="nav-button" type="button"><img src={PinterestLogo} alt="PinterestLogo"/></button>
            <input placeholder="Search" type="text" />
            <button className="nav-button" type="button">Home</button>
            <button className="nav-button" type="button">Following</button>
            <button className="nav-button" type="button">Explore</button>
            <button className="nav-button" type="button"><img className="lilimage" src={PinterestUserSmall} alt="" />Lindsay</button>
            <button className="nav-button" type="button"><img src={PinterestMessageLogo} alt="" /></button>
            <button className="nav-button" type="button"><img src={Pinterest3Dots} alt="" /></button>       

        </nav>
    );
}


export default Nav;


