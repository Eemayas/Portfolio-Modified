import React, { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../style";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import FileBase from "react-file-base64";
// import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
const ProjectCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className="relative w-full h-[230px]">
          <img
            loading="lazy"
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const navigate = useNavigate();
  const hanndleNavigatetoProjectCollection = () => {
    return navigate("./projectcollection");
  };
  const projectDescription = `Below are a few selected projects that demonstrate my skills and experience, showcasing real-world examples of my work. Each project is accompanied by a brief description, as well as links to code repositories and live demos. These projects serve as tangible evidence of my ability to tackle intricate challenges, adapt to various technologies, and efficiently handle project management`;
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px] "
        >
          {projectDescription}
        </motion.p>
      </div>
      <div className=" mt-20 flex flex-wrap justify-center gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
      <div className="flex justify-normal  xs:justify-end">
        <button
          onClick={hanndleNavigatetoProjectCollection}
          className="bg-tertiary flex justify-end mt-5 py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          See More Projects
          <div className="flex items-center xs:pt-1 pt-3  ml-3 ">
            <i className="fa fa-arrow-right text-[18px]"></i>
          </div>
        </button>
      </div>
      <ProjectForm />
     
    </>
  );
};


const ProjectForm = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    tags: [],
    image: "",
    source_code_link: "",
    websitelinks: "",
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
        className={`mt-12 flex  xl:flex-row flex-col gap-10 overflow-hidden`}
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
              <span className="text-white font-medium mb-4">Project Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e)=>setForm({ ...form, name: e.target.value })}
                placeholder="Projects Names"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Project Descripton</span>
              <textarea
                rows={7}
                name="message"
                value={form.description}
                onChange={(e)=>setForm({ ...form, description: e.target.value })}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Project Tags</span>
              <input
                type="text"
                name="name"
                value={form.tags}
                onChange={(e) =>
                  setForm({ ...form, tags: [e.target.value.split(",")] })
                }
                placeholder="#flutter,#MongoDB"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Github Links</span>
              <input
                type="url"
                name="name"
                value={form.source_code_link}
                onChange={(e)=>setForm({ ...form, source_code_link: e.target.value })}
                placeholder="https://github.com/"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
             <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Website Links</span>
              <input
                type="url"
                name="name"
                value={form.websitelinks}
                onChange={(e)=>setForm({ ...form, websitelinks: e.target.value })}
                placeholder="https://www.manandharprashant.com.np/"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
           
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
                  setForm({ ...form, image: base64 })
                  }
                />
              </div>
            </label>

            {form.image && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <img
                  src={form.image}
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
export default SectionWrapper(Works, "project");
