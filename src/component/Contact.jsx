import React from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
import { contacts } from "../constants";

const Contact = () => {
  return (
    <div className="bg-black-100 rounded-2xl">
      <div className="p-8">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Get In Touch.</p>
          <h2 className={styles.sectionHeadText}>Contacts</h2>
        </motion.div>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 pb-10">
        {contacts.map((contact, index) => (
          <ContactCard
            index={index}
            key={`contacts-${index}`}
            name={contact.name}
            links={contact.links}
            logo={contact.logo}
          />
        ))}
      </div>
    </div>
  );
};

const ContactCard = ({ index, name, links, logo }) => {
  return (
    <Tilt className="xs:w-[110px] w-[110px] ">
      <motion.div
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
        variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
      >
        <div
          className="bg-tertiary rounded-[30px] "
          onClick={() => window.open(links, "_blank")}
        >
          <img
            loading="lazy"
            src={logo}
            alt={name}
            className="w-full h-full object-contain py-5 px-5"
          ></img>

          <div className=" pb-2 truncate  w-full text-secondary font-quicksand flex flex-col items-center justify-center">
            {name}
          </div>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default SectionWrapper(Contact, "contact");
