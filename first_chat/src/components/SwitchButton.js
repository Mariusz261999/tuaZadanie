import React from 'react';

const SwitchButton = props =>{
    return(
        <>
         <img src='https://cdn.liveagent.com/app/uploads/2020/07/LiveAgent-academy-free-live-chat-software.svg' className='chatbutton' alt="" onClick={props.onClick}>{props.name}</img>
        </>
         )
}
export default SwitchButton