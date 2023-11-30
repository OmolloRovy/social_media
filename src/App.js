import "./App.css"
// eslint-disable-next-line no-unused-vars
import { useState, createContext } from 'react'

//react router dom documentatios
import { BrowserRouter as Router, Routes, Route, } from "react-router-dom";
import { Home } from "./pages/Home";
import { Navbar } from "./pages/navbar";
import { Contact } from "./pages/contact";
import { Profile } from "./pages/profile";
import { Query, QueryClient, QueryClientProvider } from "@tanstack/react-query";

export const AppContext = createContext();

function App() {
  const client = new QueryClient();
 
    return (
   <div className="App">
    <QueryClientProvider client={client}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1> 404:Page Not Found</h1>} />
        </Routes>
      </Router>
  </QueryClientProvider>
</div>
  );
}

export default App;

