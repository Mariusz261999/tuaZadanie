import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'
import MyMessage from './MyMessage';
import { useEffect } from 'react';

const ChatView = (props) =>{
    const [messages, setMessage] = React.useState({mess:[]});

    const addMessage=(text, isMyMessage)=>{
        if(messages.mess.length>0){
            console.log(messages.mess[messages.mess.length-1].isMyMessage);
            if((messages.mess[messages.mess.length-1].isMyMessage===true && isMyMessage===true) || (messages.mess[messages.mess.length-1].isMyMessage===false && isMyMessage===false)){
                const newMess={
                    id: messages.mess.length +1,
                    text:text,
                    isMyMessage: isMyMessage,
                    firstMessage: false,
                }
                setMessage(prevState=>({
                    mess: [...prevState.mess, newMess]
                }))
            } else{
                const newMess={
                    id: messages.mess.length +1,
                    text:text,
                    isMyMessage: isMyMessage,
                    firstMessage: true,
                }
                setMessage(prevState=>({
                    mess: [...prevState.mess, newMess]
                }))
            }
        }
        else{
            const newMess={
                id: messages.mess.length +1,
                text:text,
                isMyMessage: isMyMessage,
                firstMessage: true,
            }
            setMessage(prevState=>({
                mess: [...prevState.mess, newMess]
            }))
        }
        
    }
    function handleKeyPress(e){
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            if(newMessage!==""){
                addMessage(newMessage, true)
                e.target.value="";
            }
            else{
                alert("You cannot send an empty message");
            }
        }
    }
    function handleKeyPresse(e){
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            if(newMessage!==""){
                addMessage(newMessage, false)
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
            <input type="text" className='bigione' placeholder="type something..." onKeyPress={handleKeyPresse}/>
            </div>
        </>
         )
}
export default ChatView