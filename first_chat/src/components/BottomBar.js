import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip } from '@fortawesome/free-solid-svg-icons'

const BottomBar = props =>{
    return(
        <>
            <div className="downBar">
                <FontAwesomeIcon icon={faSmile} style={{color:  "grey"} }/>
                <input type="text" className="message" placeholder="type something..." onKeyPress={props.onKeyPress}/>
                <FontAwesomeIcon icon={faPaperclip} style={{color:  "grey"} }/>
            </div>
        </>
         )
}
export default BottomBar