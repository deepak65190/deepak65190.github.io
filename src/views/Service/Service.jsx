import React ,{useEffect} from 'react'
import './Service.css'
import Aos from "aos";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { AiFillHtml5, AiOutlineFieldTime } from "react-icons/ai";
import {
  SiRedux,
  SiChakraui,
  SiExpress,
  SiMongodb,
  SiPostman,
  SiAdobephotoshop,
  SiAdobepremierepro,
  SiMicrosoftoffice,
  SiMinds,
} from "react-icons/si";
import { FaNodeJs, FaNpm } from "react-icons/fa";
import { RiTeamFill } from "react-icons/ri";
function Service() {
   useEffect(() => {
     Aos.init({
       duration: 1000,
     });
   }, []);
  return (
    <>
      <div id="Services" className="services">
        <h1>Skills & Tools </h1>

        <div className="allFsD">
          <div className="FBskills">
            <div className="Skillicon">
              <div>
                <span className="skilgap">HTML</span>{" "}
                <AiFillHtml5 size={60} style={{ color: "#DD4B25" }} />
              </div>
              <div>
                <span className="skilgap">CSS</span>
                <IoLogoCss3 size={60} style={{ color: "#254BDD" }} />
              </div>
              <div>
                <span className="skilgap">JAVASCRIPT</span>
                <TbBrandJavascript size={60} style={{ color: "#CFB431" }} />
              </div>
              <div>
                <span className="skilgap">React Js</span>
                <GrReactjs size={60} style={{ color: "#5ED3F3" }} />
              </div>
              <div>
                <span className="skilgap"> REDUX</span>
                <SiRedux size={60} style={{ color: "#DD4B25" }} />
              </div>
              <div>
                <span className="skilgap">Chakra -UI</span>
                <SiChakraui size={60} style={{ color: "#5CCAC9" }} />
              </div>
            </div>
            <div className="Skillicon">
              <div>
                <span className="skilgap"> Node JS</span>
                <FaNodeJs size={60} style={{ color: "#70A660" }} />
              </div>
              <div>
                <span className="skilgap">EXPRESS</span>
                <SiExpress size={60} style={{ color: "#7E7E7E" }} />
              </div>
              <div>
                <span className="skilgap">Mongo DB</span>
                <SiMongodb size={60} style={{ color: "#023430" }} />
              </div>
              <div>
                <span className="skilgap">NPM</span>
                <FaNpm size={60} style={{ color: "#C53635" }} />
              </div>
              <div>
                <span className="skilgap">Post Man</span>
                <SiPostman size={60} style={{ color: "#F26634" }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service
