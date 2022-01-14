import React from 'react';

const MyMessage = props => {
    const texts = [...props.messages.mess].map(mess=>(
        console.log(mess.firstMessage),
        mess.isMyMessage===true ?
            mess.firstMessage===true? 
                <div className='myWrapper' key={mess.id}>
                    <p>Zdjęcie</p>
                    <div className="myMessage" >
                        <p>{mess.text}</p>
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
                <div className='botWrapper' key={mess.id} >
                    <p>Zdjęcie</p>
                    <div className="botMessage">
                        <p>{mess.text}</p>
                    </div>      
                </div>
            :
                <div className='botWrapper' key={mess.id} >
                    <div className="botMessage">
                        <p>{mess.text}</p>
                    </div>      
                </div>
    ));
    return(
        <>
        {console.log(props.messages)}
           <div className='center'>
               <div className='myMessages'>{texts}</div>
            </div> 
        </>
    )

}

export default MyMessage