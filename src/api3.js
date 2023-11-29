import Axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [generatedExuses, setGenaratedExcuses] = useState("");
 

  const FetchExcuse = (excuse) => {
    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setGenaratedExcuses(res.data[0].excuse);
    });
  };

  

  return (
    <div className="App">
      <h1>Generate An Excuse</h1>
      <button onClick={()=>FetchExcuse("party")}>Party</button>
      <button onClick={()=>FetchExcuse("family")}>Family</button>
      <button onClick={()=>FetchExcuse("office")}>Office</button>

      <p>{generatedExuses}  </p>
    </div>
  );
}

export default App;
