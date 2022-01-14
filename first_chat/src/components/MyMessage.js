import React from 'react';
// import { useEffect } from 'react';

const MyMessage = props => {
    const texts = [...props.messages.mess].map(mess=>(
        <div className="myMessage" key={mess.id}>
            <p>{mess.text}</p>
        </div>
    ));
    return(
        <>
           <div className='center'>
               <div className='myMessages'>{texts}</div>
            </div> 
        </>
    )

}

export default MyMessage