import React from 'react'
import './Home.css'


import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

function Home() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  
   
  return (
    <>
      <div id="Home" className="home">
        <div className="home-flex">
          <div
            className="left-content"
            data-aos="fade-down"
            data-aos-delay="2000"
          >
            <p>Hello, My name is</p>
            <h1>Deepak Bisht</h1>
            <h2>
              And I'm a <span className="typing"> </span>
            </h2>

            <a
              className="resumeCentre"
              href="https://drive.google.com/file/d/1fCf6tew3cZQ-UIpllBglzU2rvnCecMke/view?usp=share_link"
              download="deepak_bisht_resume"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </div>
          <div
            id="imgC"
            className="right-content"
            data-aos="fade-up"
            data-aos-delay="2000"
          >
            <img
              src="https://avatars.githubusercontent.com/u/101567061?v=4"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home

