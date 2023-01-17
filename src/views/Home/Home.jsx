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
            <p className='hellow'>Hello, My name is</p>
            <h1>Deepak Bisht</h1>
            <h2 className='webDevAnime'>
              And I'm a <span className="typing"> </span>
            </h2>

            <a
              className="resumeCentre"
              href="resume.pdf"
              download ="Deepak_Bisht_Resume"
              
             
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
            <img className='profilePic'
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

