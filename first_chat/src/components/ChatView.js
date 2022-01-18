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
    const messageAPI = 'https://actionbot-demo.eu-de.mybluemix.net/test-api/message';
    const authorizationAPI = 'https://actionbot-demo.eu-de.mybluemix.net/test-api/auth';

    const addMessage=(text, isMyMessage)=>{
                const newMess={
                    id: Math.floor(Math.random() * 1000)*Date.now(),
                    text,
                    isMyMessage,
                }
                setMessage(prevState=>({
                    mess: [...prevState.mess, newMess]
                }))
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
                    body: JSON.stringify({ text: "text"})
                };
                 fetch(messageAPI, requestOptions)
                    .then(response => {
                        if(response.ok){
                        return response;
                    }
                        throw Error(response.status);
                    })
                    .then(response => response.json())
                    .then(data  => {
                     for (let i = 0; i < data.messages.length; i++) {
                        addMessage(data.messages[0].value, false);
                      }
                    })
                    .catch(error => console.log(error))
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
        fetch(authorizationAPI, requestOptions)
            .then(response => {
                if(response.ok){
                return response;
            }
                throw Error(response.status);
            })
            .then(response => response.json())
            .then(data  => {
                localStorage.setItem("authorization", JSON.stringify(data));
                getData(data);
            })
            .catch(error => console.log(error))
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