import React, {Component} from 'react';

//Handles secret toggle button on both create and edit modal

export default function SecretToggle (props) {
    return (
        <label className="switch">
          <input type="checkbox"></input>
          <span className="slider round"></span>
        </label>
        )
}