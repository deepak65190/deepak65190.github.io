import React from 'react'
import './ProjectBox.css'

import { useEffect } from 'react'
import Aos from "aos"
import 'aos/dist/aos.css'

function ProjectBox(props) {
  useEffect(() =>{
    Aos.init({
      duration : 1000
    })
  },[])
  return (
    <div className="projectbox">
      <img src={props.img} alt="images" />
      <div className='projectDetails'>{props.detail}</div>
      <div className="details">
        <p>{props.title}</p>
        <p> Teck-Stack used- {props.tack}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          className="livep"
          href={props.link2}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live
        </a>
      </div>
    </div>
  );
}

export default ProjectBox

