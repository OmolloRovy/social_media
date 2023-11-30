import "./App.css"
import {useState, createContext} from 'react'

//react router dom documentatios
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/navbar";
import { Contact } from "./pages/contact";
import { Profile } from "./pages/profile";

export const AppContext=createContext();

function App() {
  
const [username, setUsername]= useState("Vanistelroy.ma")
  return (
    <div className="App">
    <AppContext.Provider value={{username, setUsername }}>
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/profile" element={<Profile  />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<h1> 404:Page Not Found</h1>}/>
    </Routes>
        </Router>
        </AppContext.Provider>
    
    </div>
  );
}

export default App;
//home and profil
