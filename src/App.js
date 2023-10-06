import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="App">
<Navbar />
<Home id="home"/>
<About id="about"/>
<Skills id="skills" />
<Projects id="projects" />
<Contact/>
    </div>
  );
}

export default App;
