import { Box } from '@chakra-ui/react'
 import './App.css';
 import { Link } from "react-scroll";

import Home from './components/Home';
import About from './components/About';
import Skills from "./components/Skills" ;
import Contact from './components/Contact';


function App() {
  return (<>
   <div className="App">
      <header className="nav">
        <nav className="nav__container__actions">
          <ul>
            <li>
              <Link activeClass="active" smooth spy to="Home">
              Home
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="About">
              About
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Skills">
              Skills
              </Link>
            </li>
            <li>
              <Link activeClass="active" smooth spy to="Contact">
              Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <section  id="Home"> <Home/></section>
      <section  id="About" style={{marginTop:'20px'}}> <About/> </section>
      <section id="Skills"  style={{marginTop:'20px'}}> <Skills/></section>
      <section id="Contact" style={{marginTop:'20px'}}> <Contact/></section>
    </div>
  </>
   
  
   
  );
}

export default App;
 
{/* 


  */}