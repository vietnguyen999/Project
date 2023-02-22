import React, { useState } from 'react';
//import Todoapp from './Todoapp';
import Todoapplocal from './Todoapplocal';
import Useeffect from './Useeffect';

function App() {
  const [show,setshow] = useState(false)
  return (
  // <Todoapplocal/>
   // <Todoapp/>
   <div style={{ padding: 30}} >
      <button onClick={() => setshow(!show)}>Enter</button>
      {show &&<Useeffect/>}
   </div>
   
  )
}
export default App;
