import React from 'react';
import '../style/App.css';
import SwitchButton from './SwitchButton';
import ChatView from './ChatView';

const App=()=> {
  let  [current, setCurrent] = React.useState(false);
    function hanldeClick() {
      setCurrent(current= !current);
    } 
    return (
      <>
        <div className="App">
          <SwitchButton className="chatbutton" onClick={hanldeClick}/>
          {current ?<ChatView onClick={hanldeClick}/> : null}
        </div>
      </>
    )
  
}

export default App;
