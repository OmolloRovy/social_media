//states and usesate hook
// sates are just variables that hold data
import './App.css';
import{ useState } from 'react';

function App() {
const [textColor, setTextColor]= useState("");


  return (
    <div className="App">
    <button onClick={()=> {
setTextColor(textColor==="black" ? "red" : "black")
    }}>SHOW/HIDE</button>
      <h1 style={{color:textColor}}> HI MY NAME IS VANISTELROOY </h1>
  </div> 
  );  
}

export default App;
