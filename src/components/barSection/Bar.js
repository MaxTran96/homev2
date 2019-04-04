import React, { Component } from 'react';
import  { ProgressBar } from 'react-bootstrap';
import './Bar.css'
const Bar = ({label, status,point}) =>{
    return(
        <div>
            <ProgressBar label={`${label}`} bsStyle={`${status}`} now={`${point}`} />

        </div>
    );
}

export default Bar;