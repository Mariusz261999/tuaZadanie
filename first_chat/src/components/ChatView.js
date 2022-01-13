import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const ChatView = props =>{
    let [text, setText] = React.useState([]);
    const handlerOnChange=(e)=>{
    }
    const handleSubmit=(e)=>{
        console.log(e.target.value);
    }
    function handleKeyPress(e){
        if(e.key === 'Enter'){
            let newMessage = e.target.value;
            console.log(newMessage);
            setText(text.push(newMessage));
            console.log("Log new text");
            console.log(text);
            // e.target.value="";
        }
    }
    return(
        <>  
            <div className='square'> 
            <div className="appBar">
                <button onClick={props.onClick}> <FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                <p><span></span> JERONIMO</p>
            </div>
            <div className="center">{text[0]}</div>
            <div className="downBar">
                <FontAwesomeIcon icon={faSmile} style={{color:  "grey"} }/>
                <input type="text" className="message" placeholder="type something..." onChange={handlerOnChange} onSubmit={handleSubmit} onKeyPress={handleKeyPress}/>
                <FontAwesomeIcon icon={faPaperclip} style={{color:  "grey"} }/>
            </div>
            </div>
        </>
         )
}
export default ChatView