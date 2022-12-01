import React from 'react'
import './Project.css'

import Aos from "aos"
import { useEffect } from 'react'
import 'aos/dist/aos.css'

import ProjectBox from '../../components/ProjectBox/ProjectBox'
import img7 from  '../../images/TextUtils.png'
import img5 from  '../../images/Portfolio.png'
import img3 from  '../../images/3.png'
import img4 from  '../../images/Gym.png'
import img1 from  '../../images/img1.png'
import img2 from  '../../images/1.png'
import img6 from  '../../images/TexttoSpeech.png'

function Project() {
  useEffect(() =>{
    Aos.init({
      duration : 500
    })
  },[])
  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="Lovoda"
              img={img1}
              link="https://github.com/deepak65190/exuberant-place-760/tree/main/vite-project"
            />
            <ProjectBox title="Location Tracker" img={img2} link="" />
            <ProjectBox
              title="SmatBot"
              img={img3}
              link="https://github.com/Raj4709267/loose-governor-5352"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project
