import React from 'react';
import './Project.css';
import { Image }from 'react-bootstrap';

const Project = ({source, title, url}) => {
    return(
        <a className ="websites" href={url}>
            <Image src={'.'+source} alt="work" responsive rounded className="center-image"/>
            <span className="description"><b>{title}</b> 
            </span>
        </a>
    );
}


export default Project;