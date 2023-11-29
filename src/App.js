import Axios from "axios";
import './App.css';
import { useEffect, useState} from "react";
// fetch("https://catfact.ninja/fact")
// .then((res)=>res.json())
// .then((data)=>{
// console.log(data);
// }); you can alternatively use axios

function App() {
 const [catFact, setCatFact]= useState("")

 useEffect(()=>{
  Axios.get("https://catfact.ninja/fact").then((res)=>{
    setCatFact(res.data.fact)
  })
 },[]);

  return (
    <div className="App">
      <button>Generate Cat Fact</button>
     <p>{catFact}</p>
      </div>
   
  );
}

export default App;
