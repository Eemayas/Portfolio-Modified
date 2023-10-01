import React from "react";
import { styles } from "./style";
import { SectionWrapper } from "./hoc";
import { motion } from "framer-motion";
import { textVariant } from "./utils/motion";
import { projects } from "./constants";

import ProjectCard from "./component/ProjectCard";
const ProjectCollection = () => {
 
  return (
    <div className="min-h-[100vh]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My Works.</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className=" mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(ProjectCollection);
