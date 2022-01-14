import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSmile, faPaperclip, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons'


const ChatView = props =>{
    const [messages, setMessage] = React.useState({messages:[
        {
          id:1,
          text:'Default message 1',
        },
        {
          id:2,
          text:'Default message 2',
        },
      ]});

      const addTask=(text)=>{
        const task={
            id: messages.messages.length +1,
            text:text,
        }
        setMessage(prevState=>({
          messages: [...prevState.messages, task]
        }))
      }

    function handleKeyPress(e){
        if(e.key === 'Enter'){
            const newMessage = e.target.value;
            addTask(newMessage)
            e.target.value="";
        }
    }
    const texts = [...messages.messages].map(task=>(
        <div key={task.id}>
            <p>{task.text}</p>
        </div>
    ));
    
    return(
        <>
            <div className='square'> 
            <div className="appBar">
                <button onClick={props.onClick}> <FontAwesomeIcon icon={faArrowCircleLeft}/></button>
                <p><span></span> JERONIMO</p>
            </div>
            <div className="center"><div key={texts.id}>{texts}</div></div>
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