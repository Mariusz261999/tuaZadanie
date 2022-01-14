import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const ChatView = props =>{
    let [state, setState] = React.useState("");

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            setState(prev => [...prev, newMessage]);
             e.target.value="";
        }
    }
    const texts = [...state].map(text=>(
        <div>
            <p>{text}</p>
        </div>
    ));
    
    return(
        <>
            <div className='square'> 
            <div className="appBar">
                <button onClick={props.onClick}> <FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                <p><span></span> JERONIMO</p>
            </div>
            <div className="center">{texts}</div>
            <div className="downBar">
                <FontAwesomeIcon icon={faSmile} style={{color:  "grey"} }/>
                <input type="text" className="message" placeholder="type something..." onKeyPress={handleKeyPress}/>
                <FontAwesomeIcon icon={faPaperclip} style={{color:  "grey"} }/>
            </div>
            </div>
        </>
         )
}
export default ChatView