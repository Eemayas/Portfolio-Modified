import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card "
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      >
        <div
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex flex-col justify-evenly items-center "
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            loading="lazy"
            src={icon}
            alt={title}
            className="w-16 h-16 object-contain "
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About2 = () => {
  return (
    <div className=" flex flex-wrap gap-10">
      {services.map((service, index) => {
        return (
          <ServiceCard
            key={service.title}
            index={index}
            title={service.title}
            {...service}
          />
        );
      })}
    </div>
  );
};

export default SectionWrapper(About2, "");
