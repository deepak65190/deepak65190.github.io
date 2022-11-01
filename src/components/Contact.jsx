import React from "react";
import styles from "./contact.module.css"
import { Text, Box, HStack ,Input, Stack ,Textarea, Button } from "@chakra-ui/react";
import {TbPhoneCall} from "react-icons/tb"
import {TfiEmail} from "react-icons/tfi" ;
import {ImLocation2} from "react-icons/im" ;
function Contact(){
    return (
                <>
                <div  className={styles.contact}>

<div ><Text fontSize='3xl' as="b" color="tomato" >CONTACT ME</Text></div>
<HStack mt={20}  >
    <Stack spacing={15}   m={20} >
<Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box >< TfiEmail style={{color:"#036DEC"}}/></Box>
    <Box className={styles.hoverEPL}><a href="mailto:bisht65190@gmail.com"><Text  fontSize='1xl' as="b">EMAIL-bisht65190@gmail.com</Text></a></Box>
                </HStack>
            </Box>
<Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box >< TbPhoneCall style={{color:"#036DEC"}}/></Box>
                 <Box className={styles.hoverEPL}><a href="tel:+9625528158"><Text  fontSize='1xl' as="b">CALL : 9625528158</Text></a></Box>
                </HStack>
            </Box>
<Box style={{marginTop:"4%"}}>
                <HStack>
                    <Box >< ImLocation2 style={{color:"#036DEC"}}/></Box>
                    <Box className={styles.hoverEPL}><a href="mailto:bisht65190@gmail.com"><Text  fontSize='1xl' as="b">LOCATION -   Delhi-110043</Text></a></Box>
                </HStack>
            </Box></Stack>
    {/* <Box w='45%' mt={-50}><Stack space={5}>
   
    <Box><a href="">< style={{color:"#DD4B25"}}/> <Text  fontSize='2xl' as="b" ></Text></a></Box>
    <Box><Text  fontSize='2xl' as="b"></Text></Box></Stack>
    </Box> */}
    
    <Box w='45%' mt={10}  >
        <Stack spacing={10} >
<Input size='lg' type="text"   placeholder='Name'></Input>
<Input  size='lg' type="email"  placeholder='Email'></Input>
<Textarea   resize={30} placeholder='How can I help you  ...? ' />
<Button  size='lg'  colorScheme='teal'>SEND</Button>
</Stack>
         </Box>
</HStack>
                </div>
        </>
    )
}
export default Contact
{/* <HStack  >
    <Box w='45%'> 
    <Box><Text>deepak65190@gmail.com</Text></Box>
    <Box><Text>9625528158</Text></Box>
    <Box><Text>Delhi-110043</Text></Box>
    </Box>
    <Box w='45%' mt={10}  >
        <Stack spacing={10} >
<Input type="text"   placeholder='Name'></Input>
<Input  type="email"  placeholder='Email'></Input>
<Textarea placeholder='How can I help you  ...? ' />
<Button colorScheme='teal'>submit</Button>
</Stack>
         </Box>
</HStack> */}
{/* <div style={{border:"2px solid red"}}></div> */}