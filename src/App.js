import Axios from "axios";
import './App.css';
import { useEffect, useState} from "react";

function App() {
const [party, setParty]=useState("")
const [family, setfamily]=useState("")
const [Office, setOffice]=useState("")
   return (
    <div className="App">
    <h1>Generate An Excuse</h1>
    <button>Party</button>
    <button>Family</button>
    <button>Office</button>
    <input />
      </div>
   
  );
}

export default App;
