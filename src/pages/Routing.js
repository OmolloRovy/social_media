import "./App.css"

//react router dom documentatios
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom";
import { Home } from "./pages/Home";
import { Menu } from "./pages/menu";
import { Navbar } from "./pages/navbar";
import { Contact } from "./pages/contact";
function App() {
 

  return (
    <div className="App">
    <Router>
    <Navbar />
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/menu" element={<Menu />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="*" element={<h1> 404:Page Not Found</h1>}/>
    </Routes>
        </Router>
    
    
    </div>
  );
}

export default App;
