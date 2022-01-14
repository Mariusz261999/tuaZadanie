import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import MyMessage from './MyMessage';
import { useEffect } from 'react';

const ChatView = (props) =>{
    const [messages, setMessage] = React.useState({mess:[]});

      const addMessage=(text)=>{
        const newMess={
            id: messages.mess.length +1,
            text:text,
        }
        setMessage(prevState=>({
          mess: [...prevState.mess, newMess]
        }))
      }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            if(newMessage!==""){
                addMessage(newMessage)
                e.target.value="";
            }
            else{
                alert("You cannot send an empty message");
            }
        }
    }

    useEffect(()=>{
        const data = localStorage.getItem("my-messages");
        if(data){
            setMessage(JSON.parse(data));
        }
    }, [])

    useEffect(()=>{
        localStorage.setItem("my-messages", JSON.stringify(messages));
    })
    
    return(
        <>
            <div className='square'> 
            <div className="appBar">
                <button onClick={props.onClick}> <FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                <p><span></span> JERONIMO</p>
            </div>

            <MyMessage messages={messages}></MyMessage>
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