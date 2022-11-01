import React from "react";
import styles from "./skills.module.css"
import { Text, HStack ,Box } from "@chakra-ui/react";
import { AiFillHtml5 ,AiOutlineFieldTime } from "react-icons/ai";
import { IoLogoCss3  } from "react-icons/io";
import {TbBrandJavascript} from "react-icons/tb"
import {GrReactjs} from "react-icons/gr"
import {SiRedux ,SiChakraui ,SiExpress,SiMongodb, SiPostman ,SiAdobephotoshop ,SiAdobepremierepro ,SiMicrosoftoffice ,SiMinds  } from "react-icons/si"
import {FaNodeJs ,FaNpm} from "react-icons/fa"
import {RiTeamFill} from "react-icons/ri"

function Skills(){
    return (
        <>
      <div className={styles.Skills}>
        <div className={styles.fbs}>
            <div style={{borderRadius:"30px"}}>
                <Box><Text as='b' color='tomato' fontSize='3xl'>Front-End Development</Text></Box>
           
            <Box style={{ marginTop:"5%" }}>
                <HStack>
                    <Box  className={styles.reactIS}><AiFillHtml5 style={{color:"#DD4B25"}}  /></Box>
                    <Box><Text>HTML</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><IoLogoCss3 style={{color:"#254BDD"}}/></Box>
                    <Box><Text>CSS</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><TbBrandJavascript style={{color:"#CFB431"}}/></Box>
                    <Box><Text>JAVASCRIPT</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><GrReactjs style={{color:"#5ED3F3"}}/></Box>
                    <Box><Text>REACT JS</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiRedux style={{color:"#DD4B25"}}/></Box>
                    <Box><Text>REDUX</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiChakraui style={{color:"#5CCAC9"}}/></Box>
                    <Box><Text>CHAKRA-UI</Text></Box>
                </HStack>
            </Box>
           
           
            </div>
            <div style={{borderRadius:"30px"}}>
                <Box><Text  as='b' color='tomato' fontSize='3xl'>Back-End Developmenet</Text></Box>
                <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><FaNodeJs style={{color:"#70A660"}}/></Box>
                    <Box><Text>NODE JS</Text></Box>
                </HStack>
            </Box>
                <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiExpress style={{color:"#7E7E7E"}}/></Box>
                    <Box><Text>EXPRESS JS</Text></Box>
                </HStack>
            </Box>
                <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiMongodb style={{color:"#023430"}}/></Box>
                    <Box><Text>MONGO DB</Text></Box>
                </HStack>
            </Box>
            {/* 
            <Box><Text>MongoDB</Text></Box> */}
            </div>
        </div>
        <div>
        <div className={styles.sos}>
        <div style={{borderRadius:"30px"}}>
        <Text  as='b' color='tomato' fontSize='3xl'>Other Skills or Tools</Text>
        <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiMongodb style={{color:"#023430"}}/></Box>
                    <Box><Text>VS CODE</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><FaNpm style={{color:"#C53635"}}/></Box>
                    <Box><Text>NPM</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiPostman style={{color:"#F26634"}}/></Box>
                    <Box><Text>POST MAN</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiAdobephotoshop style={{color:"#2FA3F7"}}/></Box>
                    <Box><Text>PHOTOSHOP</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiAdobepremierepro style={{color:"#9494F7"}}/></Box>
                    <Box><Text>ADOBE PREMIERE PRO</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiMicrosoftoffice style={{color:"#D03902"}}/></Box>
                    <Box><Text>MS OFFICE</Text></Box>
                </HStack>
            </Box>
        
        </div>
         <div style={{borderRadius:"30px"}}>
         <Box><Text  as='b' color='tomato' fontSize='3xl'>Soft Skills</Text></Box>
         <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><SiMinds style={{color:"#F29C3D"}}/></Box>
                    <Box><Text>CREATIVE MINDSET</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><RiTeamFill style={{color:"#00B3E6"}}/></Box>
                    <Box><Text>TEAM MANAGEMENT</Text></Box>
                </HStack>
            </Box>
            <Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box className={styles.reactIS}><AiOutlineFieldTime style={{color:"#D03902"}}/></Box>
                    <Box><Text>TIME MANAGEMENT</Text></Box>
                </HStack>
            </Box>
         {/* <Box><Text>CREATIVE MINDSET</Text></Box>
            <Box><Text>TEAM MANAGEMENT</Text></Box>
            <Box><Text>tIME MANAGEMENT</Text></Box> */}
         </div>
        </div>
            
        </div>
        
      </div>
        </>
    )
}
export default Skills
 

            

            
            
         
           
          