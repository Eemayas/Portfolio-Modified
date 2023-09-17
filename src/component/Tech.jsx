import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn,slideIn } from "../utils/motion.js";
import FileBase from "react-file-base64";
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
    <><div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology, index) => (
        <TechCard
          index={index}
          key={technology.name}
          icon={technology.icon}
          title={technology.name}
        />
      ))}
    </div>
    <TechForm/>
    </>
    
  );
};

const TechForm = () => {
  const [form, setForm] = useState({
    title: "",
    selectedImage: "",
  });
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    console.log(form);
    e.preventDefault();
    setLoading(true);
    
  };
  return (
    <>
      <div
        className={`xl:mt-12 flex  xl:flex-row flex-col gap-10 overflow-hidden`}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Title</span>
              <input
                type="text"
                name="name"
                value={form.title}
                onChange={(e)=>setForm({ ...form, title: e.target.value })}
                placeholder="Web Developer/Flutter Developer/..."
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
         
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Image
              </span>
              <div className="cursor-pointer bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) =>
                  setForm({ ...form, selectedImage: base64 })
                  }
                />
              </div>
            </label>

            {form.selectedImage && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <img
                  src={form.selectedImage}
                  alt="Selected"
                  className="w-40 h-40 mt-2 rounded-[40px] border-4 border-red-500"
                />
              </div>
            )}
            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>
    </>
  );
};
export default SectionWrapper(Tech, "tech");
