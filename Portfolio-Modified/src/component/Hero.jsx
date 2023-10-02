import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { TypeAnimation } from "react-type-animation";
import { ProfilePic2 } from "../assets";
import { SectionWrapper } from "../hoc";
import { contacts } from "../constants";
import { fadeIn} from "../utils/motion";
import "font-awesome/css/font-awesome.min.css";

const Hero = () => {
  return (
    <section className=" mt-20 md:mt-10 mx-auto">
      <div
        className={` bg-white bg-opacity-10 backdrop-blur-lg rounded-[50px] drop-shadow-lg w-full h-fit md:min-h-[80%] max-w-7xl mx-auto flex flex-col-reverse md:flex-row  p-6 md:p-20  gap-5 items-center border-transparent animate-circle-rotate`}
      >
        <div className="m-0 w-[60%]">
          <div
            className={`inset-0 sm:w-[60%] mx-auto flex flex-row items-center justify-center gap-5`}
          >
            <div className="flex flex-col justify-center items-center mt-5">
              <div className="w-5 h-5 rounded-full bg-[#915eff]" />
              <div className="w-1 sm:h-80 h-40 violet-gradient" />
            </div>
            <div>
              <h1 className={`${styles.heroHeadText}`}>
                Hi, I'm{" "}
                <span className="text-[#915eff] ">
                  <TypeAnimation
                    sequence={["Prashant Manandhar", 1000]}
                    wrapper="span"
                    cursor={false}
                  />
                </span>
              </h1>
              <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
                <TypeAnimation
                  sequence={[
                    "Flutter Developer..",
                    1000,
                    "React Developer..",
                    1000,
                    "Web Developer..",
                    1000,
                  ]}
                  cursor={true}
                  repeat={Infinity}
                  wrapper="span"
                />
              </p>
            </div>
          </div>
          <div className="pt-4 flex flex-row flex-wrap justify-center gap-5 md:gap-10">
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

        <ProfileAvatars />
      </div>
      <div className="mt-2 w-full flex justify-center items-center">
        <a href="#about" aria-label="Scroll to About Section">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                reportType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

const ProfileAvatars = () => {
  return (
    <div className="w-full h-60  flex justify-center items-center md:h-80 md:w-80">
      <div className="w-60 relative flex justify-center items-center md:w-full h-full">
        <img
          src={ProfilePic2}
          alt=".."
          // className="shadow-slate-500 shadow-md aspect-w-16 aspect-h-9 w-48 h-27 rounded-2xl bg-center bg-cover duration-500 object-cover"
          loading="lazy"
          className="shadow-slate-500 shadow-md aspect-w-16 aspect-h-9 w-60 h-60 rounded-2xl bg-center bg-cover duration-500 object-cover"
        />
      </div>
    </div>
  );
};
const ContactCard = ({ index, name, links, logo }) => {
  return (
    <motion.div
      className="xs:w-[50px] w-[50px] green-pink-gradient p-[1px] rounded-[10px] shadow-card "
      variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
    >
      <div
        className="bg-tertiary rounded-[10px] "
        onClick={() => window.open(links, "_blank")}
      >
        <img
          src={logo}
          alt={name}
          loading="lazy"
          className="w-full h-full object-contain"
        ></img>
      </div>
    </motion.div>
  );
};

// const ContactCard = ({ index, name, links, logo }) => {
//   return (
//     <motion.div
//       className="green-pink-gradient p-[1px] rounded-[10px] shadow-card "
//       variants={fadeIn("right", "spring", 0.25 * index, 0.55)}
//     >
//       <div className="flex justify-center items-center h-[45px] w-[45px] bg-tertiary rounded-[10px]" onClick={() => window.open(links, "_blank")}>
//     <i className={`${logo} text-white text-[60px]`}></i>
// </div>
//     </motion.div>
//   );
// };


export default SectionWrapper(Hero);

{
  /* <div
        className={`${styles.paddingX} absolute top-[120px]  max-w-7xl mx-auto flex flex-col-reverse md:flex-row  gap-5  `}
      >
        <div
          className={`inset-0 sm:w-[60%] mx-auto flex flex-row items-start gap-5`}
        >
          <div className="flex flex-col justify-center items-center mt-5">
            <div className="w-5 h-5 rounded-full bg-[#915eff]" />
            <div className="w-1 sm:h-80 h-40 violet-gradient" />
          </div>
          <div>
            <h1 className={`${styles.heroHeadText}`}>
              Hi, I'm{" "}
              <span className="text-[#915eff] ">
                <TypeAnimation
                  sequence={["Prashant Manandhar", 1000]}
                  wrapper="span"
                  cursor={false}
                />
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-white-100 `}>
              <TypeAnimation
                sequence={[
                  "Flutter Developer..",
                  1000,
                  "React Developer..",
                  1000,
                  "Web Developer..",
                  1000,
                ]}
                cursor={true}
                repeat={Infinity}
                wrapper="span"
              />
            </p>
          </div>
        </div>
        <ProfileAvatars />
      </div> */
}

{
  /* <Avatar
          style={{ height: "80%", width: "80%" }}
          className=" border-4 border-transparent animate-circle-rotate"
          src={ProfilePic2}
          alt={"profile Pic"}
        /> */
}
{
  /* <div className="absolute w-full h-full border-t-4 border-b-4 border-t-lime-500 border-b-blue-500 border-opacity-50 rounded-full animate-spin-right"></div>
        <div className="absolute w-[85%] h-[85%] border-l-4 border-r-4 border-l-[#ff0000] border-r-[#ff8000] border-opacity-50 rounded-full animate-spin-left"></div> */
}
