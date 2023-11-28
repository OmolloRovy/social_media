//prop is a javascript object  that exsit in an agumanet component
//component is a jsx file that returns a ui
//jsx is a mix between the variables in js and html
import './App.css';

function App() {
  // const name =  <h1> Vanistelrooy</h1>;
  // const age = <h2>21</h2>;
  // const email =<h2>@masime.com</h2>;
 
  return (
    <div className="App">
    <User name="vireal" age ={21} email="nateeial,com"/>
    <User name="alien3" age ={201} email="alien1,com"/>
    <User name="alien2" age ={212} email="alien2,com"/>
    <User name="allien" age ={215} email="alien3,com"/>

    </div>
  );
}

// eslint-disable-next-line no-unused-vars
const props={
  name: "virael", 
  age:21,
  email:"natea,com"
}

// const GetName =()=>{
//   return {}
// }
const User=(props)=>{
return(
 <div>
 <h1>{props.name}</h1>
 <h1>{props.age}</h1>
 <h1>{props.email}</h1>
 </div>
)
}

export default App;
