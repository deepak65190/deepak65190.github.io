import React from "react";
import { Text, Stack ,Box } from "@chakra-ui/react";
import styles from "./About.module.css";
function About() {
  return (
    <>
      <div className={styles.about}>
        <Stack spacing="10px">
          <Text as='b' color='tomato' fontSize='3xl'>Who am I ?</Text>
         <Text fontSize="2xl">
            Driven by ambition and fuelled by determination,
          </Text>
          <div className={styles.me}>  <Text as="i" >
            Hii folks my name is Deepak bisht. An enthusiastic fresher seeking a
            career with a progressive organization to capitalize my skills and
            abilities in the field of information technology and eager to learn
            new technologies and methodologies .
          </Text></div>
          <Text as='b' color='tomato' fontSize='3xl'>Education</Text>
          <Text>2022-present</Text>3<Text>Full Stack Web Development</Text>3
          <Text>Masai School (remote)</Text>
          <Text> Diploma in Mechanical Engineering </Text>
          <Text> Delhi ,2021</Text>
        </Stack>
      </div>
    </>
  );
}
export default About;
