import './App.css';
function App() {
  const users = [
{name: "vanistelrooy",age: 21},
{name: "lrooy",age: 23},
{name: "vanistel",age: 24},

  ];
 
  return (
    <div className="App">
  { users.map((user,key)=>{
return (
  <User name={user.name} age={user.age}/>
);
  })} 
 
  </div>
  );
}

const User=(props)=>{
  return <div>
  {props.name} {props.age}
  </div>; 
}
export default App;
