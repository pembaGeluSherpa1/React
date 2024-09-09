import Nav from "./Navbar/Nav";
import "./App.css";
import Home from "./Home.jsx";
import About from "./About/About";
import Skill from "./Skills/Skills";
import Contact from "./Contact/Contact";
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Nav />
      <Routes>
      <Route path='/' element={<Home/> } />
      <Route path='/about' element={<About />} />
      <Route path='/skills' element={<Skill />} />
      <Route path='/Contact' element={<Contact />} />
      </Routes>
      </Router>
    </>
  );
}

export default App;
