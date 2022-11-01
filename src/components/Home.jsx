import React from "react";
import {Box ,HStack ,Text,Image} from "@chakra-ui/react"
import styles from "./home.module.css" 
import photo from "./photo.png"


function Home(){
    
    return(
        <>
      
  <div  className={styles.home}>
    <div><Text fontSize='4xl'> Hi <span>👋</span>Deepak Bisht this side ;</Text></div>
    <div>
    <Image
  borderRadius='full'
  boxSize='500px'
  src={photo}
  alt='Dan Abramov'
/>
    </div>
  </div>
    
        </>
    )
}
export default Home
{/* <Box className={styles.home}>
<HStack className={styles.imgN}>
<Box> Hi <span>👋</span>Deepak Bisht this side </Box>
<Box ><img src={photo} className={styles.myPhoto} alt="photo" /></Box> 

</HStack>
            
        </Box> */}