// src/App.js
import React, { useState, useEffect } from 'react';
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Main from "./components/Main/Main";
import About from "./pages/About";
import Privacy from "./pages/Privacy";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import { Route, Routes } from 'react-router-dom';
import './styles/Global.css'; // Import global styles

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode((prevMode) => !prevMode);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('body-dark');
      document.body.classList.remove('body-light');
    } else {
      document.body.classList.add('body-light');
      document.body.classList.remove('body-dark');
    }
  }, [darkMode]);

/* open Router here */
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