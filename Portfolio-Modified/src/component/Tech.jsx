import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { EditIcon, DeleteIcons } from "../assets";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { technologies } from "../constants";
import { motion } from "framer-motion";
import { Tilt } from "react-tilt";
import { fadeIn, slideIn } from "../utils/motion.js";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import {
  postBioSkill,
  patchBioSkill,
  deleteBioSkill,
} from "../action/dataAction";
import { CircularProgress } from "@material-ui/core";

const TechCard = ({ setForm, setId, _id, index, title, selectedImage }) => {
  const dispatch = useDispatch();
  return (
    <Tilt className="xs:w-[120px] w-[120px] ">
      <motion.div  variants={fadeIn("right", "spring", 0.25 * index, 0.55)}>
      <div
        className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card "
       
      >
        <div className="bg-tertiary rounded-[30px] ">
          <img
            id={_id}
            loading="lazy"
            src={selectedImage}
            alt={title}
            className="w-full h-full object-contain py-5 px-5"
          ></img>

          <div className=" pb-2 truncate  w-full text-secondary font-quicksand flex flex-col items-center justify-center">
            {title}
          </div>
        </div>
      </div>
      <div className="flex items-end flex-col justify-normal  xs:justify-end">
        <button
          onClick={() => {
            
            setId(_id);
            setForm({ title: title, selectedImage: selectedImage });
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <img src={EditIcon} className="h-[20px]" alt="Edit Icon" />
        </button>
        <button
          onClick={() => {
            dispatch(deleteBioSkill(_id));
          }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <img className="h-[20px]" src={DeleteIcons}  alt="Delete Icon"/>
        </button>
      </div>
      </motion.div>
    </Tilt>
  );
};
const Tech = () => {
  const [form, setForm] = useState({
    title: "",
    selectedImage: "",
  });
  const [id, setId] = useState("0");
  const bioSkils = useSelector((state) => state.BioSkillReducer);
  // console.log(bioSkils);
  return (
    <>
      {bioSkils.length ? (
        <div className="flex flex-row flex-wrap justify-center gap-10">
          {bioSkils.map((technology, index) => (
            <TechCard
              setForm={setForm}
              setId={setId}
              _id={technology._id}
              index={index}
              key={technology.title}
              selectedImage={technology.selectedImage}
              title={technology.title}
            />
          ))}
        </div>
      ) : (
        <CircularProgress />
      )}
      <TechForm setId={setId} id={id} form={form} setForm={setForm} />
    </>
  );
};

const TechForm = ({setId, id, form, setForm }) => {
  const dispatch = useDispatch();
// console.log(id);
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if(id!="0") {
    dispatch(patchBioSkill(id,form));
    }else{
    dispatch(postBioSkill(form));
    }
    setId("0");
    setForm({
      title: "",
      selectedImage: "",
      })
    setLoading(false);
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
              <span className="text-white font-medium mb-4">Title</span>
              <input
                type="text"
                name="name"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                placeholder="C/C++/Flutter/...."
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
