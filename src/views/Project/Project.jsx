import React from "react";
import "./Project.css";

import Aos from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

import ProjectBox from "../../components/ProjectBox/ProjectBox";


import img3 from "../../images/3.png";

import img1 from "../../images/img1.png";
import img2 from "../../images/1.jpg";


function Project() {
  useEffect(() => {
    Aos.init({
      duration: 300,
    });
  }, []);

  return (
    <div id="Project" className="project">
      <h1>My Projects</h1>
      <div data-aos="fade-up">
        <div className="boxes">
          <div className="carousel owl-carousel">
            <ProjectBox
              title="Lovoda"
              detail="LOVODA is a women's fashion brand established in the charming city of Baltimore, MD. Founded by two siblings."
              tack="React | CSS |Chakra-UI |Router "
              img={img1}
              link2="https://resilient-longma-fdf94c.netlify.app/"
              link="https://github.com/deepak65190/exuberant-place-760/tree/main/vite-project"
            />
            <ProjectBox
              title="Location Tracker"
              detail="It is a website used to locate your live location.
"
              tack="HTML| CSS | JAVASCRIPT"
              img={img2}
              link="https://github.com/deepak65190/Location-Tracker"
              link2="https://elegant-dragon-49b412.netlify.app/"
            />
            <ProjectBox
              title="SmatBot"
              detail="SmatBot is a time tracker software lets you
to track time and analyze productivity to see
how your and your team's time is spent ."
              tack="HTML | CSS | JAVASCRIPT "
              link2="https://cerulean-brigadeiros-96b16b.netlify.app/"
              img={img3}
              link="https://github.com/Raj4709267/loose-governor-5352"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
