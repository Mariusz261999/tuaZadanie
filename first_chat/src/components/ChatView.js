import React from 'react';
import Dialog from './Dialog';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import { useEffect } from 'react';

const ChatView = (props) =>{
    const [messages, setMessage] = React.useState({mess:[]});

    const addMessage=(text, isMyMessage)=>{
        if(messages.mess.length>0){
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

    const handleKeyPress=(e)=>{
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
    const handleKeyPresse=(e)=>{
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
            
            <AppBar onClick={props.onClick}></AppBar>
            <Dialog messages={messages}></Dialog>
            <BottomBar onKeyPress={handleKeyPress}></BottomBar>

            <div className='botInput'>
                <p>Bot message</p>
                <input type="text" placeholder="type something..." onKeyPress={handleKeyPresse}/>
            </div>
            </div>
        </>
         )
}
export default ChatView