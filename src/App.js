import { useState } from 'react';
import { Text } from "./Text";
import './App.css';

function App() {
 const [showText,setShowText]= useState("")
  return (
    <div classNam e="App">
      <button
      onClick={()=>{
        setShowText(!showText)
      }}
      >Show Text</button>
      {showText && <Text />}  
      </div>
   
  );
}

export default App;
// mounting, updating and unmounting stages
// componemts life cycle and use effects hook