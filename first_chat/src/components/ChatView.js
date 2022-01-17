import React from 'react';
import Dialog from './Dialog';
import AppBar from './AppBar';
import BottomBar from './BottomBar';
import { useEffect } from 'react';

const ChatView = (props) =>{
    const [messages, setMessage] = React.useState({mess:[]});
    const [authorization, setAuthorization] = React.useState();
    const [botName, setBotName] = React.useState();
    const [avatar, setAvatar] = React.useState();

    const addMessage=(text, isMyMessage)=>{
        if(messages.mess.length>0){
            if((messages.mess[messages.mess.length-1].isMyMessage===true && isMyMessage===true) || (messages.mess[messages.mess.length-1].isMyMessage===false && isMyMessage===false)){
                const newMess={
                    id: Math.floor(Math.random() * 1000)*Date.now(),
                    text:text,
                    isMyMessage: isMyMessage,
                }
                setMessage(prevState=>({
                    mess: [...prevState.mess, newMess]
                }))
            } else{
                const newMess={
                    id: Math.floor(Math.random() * 1000)*Date.now(),
                    text:text,
                    isMyMessage: isMyMessage,
                }
                setMessage(prevState=>({
                    mess: [...prevState.mess, newMess]
                }))
            }
        }
        else{
            const newMess={
                id: Math.floor(Math.random() * 1000)*Date.now(),
                text:text,
                isMyMessage: isMyMessage,
            }
            setMessage(prevState=>({
                mess: [...prevState.mess, newMess]
            }))
        }
        
    }

    const sendMessage=(e)=>{
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            if(newMessage!==""){
                addMessage(newMessage, true)
                e.target.value="";
                const requestOptions = {
                    method: 'POST',
                    headers: { 'Authorization': authorization },
                    body: JSON.stringify({ text: "ok "})
                };
                 fetch('https://actionbot-demo.eu-de.mybluemix.net/test-api/message', requestOptions)
                    .then(response => response.json())
                    .then(data  => {
                     console.log(data);
                     console.log(data.messages.length);
                     let a= data.messages.length;
                     for (let i = 0; i < a; i++) {
                        addMessage(data.messages[i].value, false);
                      }
                      console.log(messages);
                    })
            }
            else{
                alert("You cannot send an empty message");
            }
        }
    }
    const getData=(data)=>{
        setAuthorization(data.token);
        setBotName(data.botData.name);
        setAvatar(data.botData.avatar);
    }
    useEffect(()=>{
        const data = localStorage.getItem("my-messages");
        if(data){
            setMessage(JSON.parse(data));
        }
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: 'test', password: 'test123' })
        };
        fetch('https://actionbot-demo.eu-de.mybluemix.net/test-api/auth', requestOptions)
            .then(response => response.json())
            .then(data  => {
                localStorage.setItem("authorization", JSON.stringify(data));
                getData(data);
            });
    },[])
    useEffect(()=>{
        localStorage.setItem("my-messages", JSON.stringify(messages));
    }) 


      return(
        <>
            <div className='square'> 
            <AppBar onClick={props.onClick} botName={botName}></AppBar>
            <Dialog messages={messages} avatar={avatar}></Dialog>
            <BottomBar onKeyPress={sendMessage}></BottomBar>
            </div>
        </>
         )
}
export default ChatView