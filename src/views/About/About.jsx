import React from 'react'
import './About.css'
import img8 from '../../../src/images/home_page.png'
import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import img9 from '../../images/about_page.png'

function About() {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
 
  return (
    <>
      <div id="About" className="about">
        <h1>About me</h1>
        <div className="about-flex" data-aos="fade-up">
          <div className="left-content">
            <img src={img8} alt="" />
          </div>
          <div className="right-content">
            <h2>I'm Deepak Bisht</h2>
            <p>
              Hii , Folks my name is Deepak bisht.Logical and results-driven
              Full Stack Developer dedicated to building and optimizing
              user-focused websites and applications .Technically proficient and
              analytical problem solver seeking a career with a progressive
              organization .{" "}
            </p>
            <h4 className="whiteColor">EDUCATION</h4>

            <p className="whiteColor">Full Stack Web Development</p>
            <p className="eduMasai">Masai School (remote)</p>
            <p className="diplomaM">Diploma in Mechanical Engineering</p>
            <p className="eduMasai">Delhi ,2021</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default About
