//import logo from './logo.svg';
import React from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Main from "./components/Main";
import './App.css';
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';

function App() {
  const [darkMode, setDarkMode] = React.useState(false);

  function toggleDarkMode() {
    setDarkMode((prevMode) => !prevMode);
  }

  return (
    <div className={darkMode ? "body-dark" : "body-light"}>
      <Nav darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <div className="container-page"> 
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/About' element={<About />} />
          <Route path='/Privacy' element={<Privacy />} />
          <Route path='/Contact' element={<Contact />} />
        </Routes>
      </div>
      <Hero darkMode={darkMode} />
      <Main darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;