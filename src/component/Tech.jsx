import React from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn } from "../utils/motion.js";

const TechCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[120px] w-[120px] ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
        variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
      >
        <div className="bg-tertiary rounded-[30px] ">
          <img
            loading="lazy"
            src={icon}
            alt={title}
            className="w-full h-full object-contain py-5 px-5"
          ></img>

          <div className=" pb-2 truncate  w-full text-secondary font-quicksand flex flex-col items-center justify-center">
            {title}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechCard
          index={index}
          key={technology.name}
          icon={technology.icon}
          title={technology.name}
        />
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "tech");
