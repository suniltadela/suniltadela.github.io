import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom'; // Changed import here
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Experiencepage from './pages/Experiencepage/Experiencepage';
import Aboutpage from './pages/Aboutpage/Aboutpage';
import Skillspage from './pages/Skillpage/Skillpage';
import Mainnav from './components/Mainnav/Mainnav';
import { TypeAnimation } from 'react-type-animation'; 
import Contactpage from './pages/Contactpage/Contactpage';

function HomePage() {
  return ( 
    <div>
      <Navbar />
      <TypeAnimation
        className='app-header'
        sequence={["Hello, I'm Sunil Kumar, a Fullstack Developer, and this is my Portfolio...", 1000, ' ', 500]}
        style={{ fontSize: '2em' }}
        speed={55}
        repeat={Infinity}
      />
      <Aboutpage />
      <Experiencepage />
      <Skillspage />
    </div>
  );
}

function App() {
  return (
    <Router> {/* Changed HashRouter to Router here */}
      <div className="App">
        <Mainnav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<Aboutpage />} /> 
          <Route path="/experience" element={<Experiencepage />} />
          <Route path="/skills" element={<Skillspage />} /> 
          <Route path="/contact" element={<Contactpage />} />
        </Routes>
      </div>
    </Router> 
  );
}

export default App;
