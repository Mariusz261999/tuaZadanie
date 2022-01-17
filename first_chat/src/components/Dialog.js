import React from 'react';
import { useEffect } from 'react';

const Dialog = props => {
    const texts = [...props.messages.mess].map(mess=>(
        mess.isMyMessage===true ?
            mess.firstMessage===true? 
                <div key={mess.id}>
                <div className='userPhoto'>
                        <img src="https://www.seekpng.com/png/full/356-3562377_personal-user.png" alt=""/>
                    </div>
                <div className='myWrapper' > 
                    <div className="myMessage" >
                        <p>{mess.text}</p>
                    </div>
                </div>
                </div>
            : 
                <div className='myWrapper' key={mess.id}>
                <div className="myMessage" >
                    <p>{mess.text}</p>
                    <p>{mess.firstMessage}</p>
                </div>
                </div>
        : 
            mess.firstMessage===true?
                <div key={mess.id}>
                <div className='botPhoto'>
                        <img src="https://www.nicepng.com/png/detail/207-2077371_bots-instagram-logo-round-blue.png" alt=""/>
                </div>
                <div className='botWrapper' key={mess.id} >
                    <div className="botMessage">
                        <p>{mess.text}</p>
                    </div>      
                </div>
                </div>
            :
                <div className='botWrapper' key={mess.id} >
                    <div className="botMessage">
                        <p>{mess.text}</p>
                    </div>      
                </div>
    ));
    useEffect(()=>{
        var objDiv = document.querySelector('.center');
        objDiv.scrollTop = objDiv.scrollHeight;
    })
    return(
        <>
           <div className='center'>
               <div className='Messages'>{texts}</div>
            </div> 
        </>
    )

}

export default Dialog