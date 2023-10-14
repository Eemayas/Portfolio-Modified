import React, { useRef, useState } from "react";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "../utils/motion";
import { styles } from "../style";
import { Tilt } from "react-tilt";
// import { contacts } from "../constants";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import { EditIcon, DeleteIcons } from "../assets";

import {
  deleteSocialMedia,
  patchSocialMedia,
  postSocialMedia,
} from "../action/socialMediaAction";
const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    logo: "",
    links: "",
  });
  const [id, setId] = useState("0");
  const socialMedias = useSelector((state) => state.SocialMediaReducer);
  const adminState = useSelector((state) => state.AdminReducer);
  return (
    <>
      <div className="bg-black-100 rounded-2xl">
        <div className="p-8">
          <motion.div variants={textVariant()}>
            <p className={styles.sectionSubText}>Get In Touch.</p>
            <h2 className={styles.sectionHeadText}>Contacts</h2>
          </motion.div>
        </div>
        {socialMedias.length ? (
          <div className="flex flex-row flex-wrap justify-center gap-10 pb-10">
            {socialMedias.map((socialMedia, index) => (
              <ContactCard
                adminState={adminState}
                setForm={setForm}
                setId={setId}
                index={index}
                key={`socialMedia-${index}`}
                name={socialMedia.name}
                links={socialMedia.links}
                logo={socialMedia.logo}
                _id={socialMedia._id}
              />
            ))}
          </div>
        ) : (
          <CircularProgress aria-label="Uploading progress: 50%" />
        )}
      </div>
      <SocialMediaForm
        adminState={adminState}
        setId={setId}
        form={form}
        setForm={setForm}
        id={id}
      />
    </>
  );
};

const ContactCard = ({
  adminState,
  index,
  name,
  links,
  logo,
  _id,
  setForm,
  setId,
}) => {
  const dispatch = useDispatch();
  return (
    <Tilt className="xs:w-[110px] w-[110px] ">
      <motion.div variants={fadeIn("right", "spring", 0.25 * index, 0.55)}>
        <div className="w-full green-pink-gradient p-[1px] rounded-[30px] shadow-card ">
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
        </div>
        <div
          className="flex items-end flex-col justify-normal  xs:justify-end"
          style={{ display: adminState ? "block" : "none" }}
        >
          <button
            onClick={() => {
              setId(_id);
              setForm({ name: name, logo: logo, links: links });
            }}
            className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <img src={EditIcon} className="h-[20px] w-[20px]" alt="Edit Icon" />
          </button>
          <button
            onClick={() => {
              dispatch(deleteSocialMedia(_id));
            }}
            className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
          >
            <img
              className="h-[20px] w-[20px]"
              src={DeleteIcons}
              alt="Delete Icon"
            />
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

const SocialMediaForm = ({ adminState, setId, form, setForm, id }) => {
  const dispatch = useDispatch();
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();

    if (id != "0") {
      dispatch(patchSocialMedia(id, form));
    } else {
      dispatch(postSocialMedia(form));
    }
    setId("0");
    setForm({
      title: "",
      selectedImage: "",
    });

    setLoading(false);
  };
  return (
    <>
      <div
        className={`mt-12 flex md:w-[80%]  xl:flex-row flex-col gap-10 overflow-hidden`}
        style={{ display: adminState ? "block" : "none" }}
      >
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          {/* <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Let's Talk.</h3> */}

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder="Facebook/Twitter"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Links</span>
              <input
                type="url"
                name="name"
                value={form.links}
                onChange={(e) => setForm({ ...form, links: e.target.value })}
                placeholder="https://www.facebook.com/"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">
                Select an Logo
              </span>
              <div className="cursor-pointer bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium hover:bg-blue-600 transition duration-300">
                <FileBase
                  type="file"
                  multiple={false}
                  onDone={({ base64 }) => setForm({ ...form, logo: base64 })}
                />
              </div>
            </label>

            {form.logo && (
              <div className="mt-4">
                <span className="text-white font-medium mb-4">
                  Selected Image:
                </span>
                <img
                  src={form.logo}
                  alt="Selected"
                  // className="max-w-full mt-2 rounded-sm"
                  className="max-w-full mt-2 rounded-[40px] border-4 border-red-500"
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

export default SectionWrapper(Contact, "contact");
