import React from 'react';
import { useEffect } from 'react';

const Dialog = props => {
    const texts = [...props.messages.mess].map(mess=>(
        mess.isMyMessage===true ?
                <div key={mess.id} className='myDIV'>
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
                <div key={mess.id} className='botDIV'>
                <div className='botPhoto'>
                        <img src={props.avatar} alt=""/>
                </div>
                <div className='botWrapper' key={mess.id} >
                    <div className="botMessage">
                        <p>{mess.text}</p>
                    </div>      
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