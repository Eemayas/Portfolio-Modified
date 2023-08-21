import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { ProfilePic2 } from "../assets";
import { fadeIn, textVariant } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";
import { Avatar } from "@mui/material";
const ProfileAvatars = () => {
  return (
    <div className="w-full h-60  flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <Avatar
          style={{ height: "80%", width: "80%" }}
          className=" border-4 border-transparent animate-circle-rotate"
          src={ProfilePic2}
          alt={"profile Pic"}
        />
        <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div>
      </div>
    </div>
  );
};
const About = () => {
  const Bio = `"Hello there! I am a highly skilled computer engineering professional with expertise in various programming languages such as C, C++, Flutter, Dart, React, HTML, CSS, and JavaScript. I am a quick learner and always eager to take on new challenges that help me further expand my skillset. In my free time, I love to indulge in my hobbies of cycling and reading novels and comics. My passion for technology and innovation drives me to continuously learn and stay up-to-date with the latest trends in the industry. With my strong work ethic and exceptional problem-solving skills, I am confident in my ability to contribute to any project I am a part of. Thank you for taking the time to read my bio, and I look forward to potentially working with you!"`;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <div className="md:flex-row flex flex-col-reverse justify-around">
        <motion.p
          className="md:w-[50%] mt-4 w-[100%] text-justify text-secondary text-[17px]  leading-[30px]"
          variants={fadeIn("", "", 0.1, 1)}
        >
          {Bio}
        </motion.p>
        <ProfileAvatars />
      </div>
    </>
  );
};
export default SectionWrapper(About, "about");
