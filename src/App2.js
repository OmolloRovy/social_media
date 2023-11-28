//terenary operators and conditional rendering

import './App.css';
//altanertive if else representations
//  const age =15;
//  if (age >=18){
//   console.log(" IS OVER AGE");

//  }else{
//   console.log("IS UNDER AGE");
//  }
const age=21;
const isGreen = false;
function App() {
    return (
    <div className="App">
  
  {age >=18 ? <h1>over age</h1> : <h1>under age </h1>}
  <h1 style={{color: isGreen ? "green" : "red"}}>this is color</h1>  
  {isGreen && <button>COLOR</button>}
  </div>
  );
}


export default App;
