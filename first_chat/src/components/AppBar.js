import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const AppBar = props =>{
    return(
        <>
         <div className="appBar">
                <button onClick={props.onClick}> <FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                <p><span></span> {props.botName}</p>
            </div>
        </>
         )
}
export default AppBar