import React, { useRef, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { services } from "../constants";
import { fadeIn, slideIn } from "../utils/motion.js";
import { SectionWrapper } from "../hoc";
import { EditIcon, DeleteIcons } from "../assets";
// import { Form } from "react-router-dom";
// import { styles } from "../style";
import FileBase from "react-file-base64";
import { deleteBioCard, patchBioCard, postBio, postBioCard } from "../action/dataAction";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const ServiceCard = ({ setId, _id, index, title, selectedImage, setForm }) => {
  const dispatch = useDispatch();
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
            id={_id}
            loading="lazy"
            src={selectedImage}
            alt={title}
            className="w-16 h-16 object-contain "
          ></img>
          <h3 className="text-white text-[20px] font-bold text-center ">
            {title}
          </h3>
        </div>
      </motion.div>
      <div className="flex items-end flex-col justify-normal  xs:justify-end">
        <button
             onClick={() => {
              setId(_id);
              setForm({ title:title,
              selectedImage: selectedImage,});
            }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <img src={EditIcon} className="h-[20px]" alt="Edit Icon" />
        </button>
        <button
         onClick={() => {
          dispatch(deleteBioCard(_id))
        }}
          className="bg-tertiary flex justify-end mt-2 py-3 px-5 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-slate-500"
        >
          <img className="h-[20px]" src={DeleteIcons} />
        </button>
      </div>
      <div className="flex flex-col justify-normal  xs:justify-end">
      
       
      </div>
    </Tilt>
  );
};
const About2 = () => {
  const [form, setForm] = useState({
    title: "",
    selectedImage: "",
  });
  const [id, setId] = useState("0");

  const bioCards = useSelector((state) => state.BioCardReducer);
  // console.log(bioCards);
  return (
    <>
      <div className=" flex flex-wrap gap-10">
        {bioCards.length ? (
          bioCards.map((service, index) => {
            return (
              <ServiceCard
                setForm={setForm}
                setId={setId}
                key={service.title}
                index={index}
                title={service.title}
                {...service}
              />
            );
          })
        ) : (
          <CircularProgress />
        )}
      </div>
      <About2Form setId={setId} id={id} form={form} setForm={setForm} />
    </>
  );
};

const About2Form = ({setId, id, form, setForm }) => {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  // const [form, setForm] = useState({
  //   title: "",
  //   selectedImage: "",
  // });
  const formRef = useRef();
 
  const handleSubmit = (e) => {
    setLoading(true);
    console.log(form);
    e.preventDefault();
    if(id!="0") {
      dispatch(patchBioCard(id,form));
    }else{
      dispatch(postBioCard(form));
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
// const About2Form = () => {
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const formRef = useRef();
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => {
//     const { target } = e;
//     const { name, value } = target;

//     setForm({
//       ...form,
//       [name]: value,
//     });
//   };
//   const handleSubmit = (e) => {
//     console.log(form);
//     e.preventDefault();
//     setLoading(true);

//   };
//   return (
//     <>
//       <div
//         className={`xl:mt-12 flex  xl:flex-row flex-col gap-10 overflow-hidden`}
//       >
//         <motion.div
//           variants={slideIn("left", "tween", 0.2, 1)}
//           className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
//         >
//           <p className={styles.sectionSubText}>Get in touch</p>
//           <h3 className={styles.sectionHeadText}>Let's Talk.</h3>

//           <form
//             ref={formRef}
//             onSubmit={handleSubmit}
//             className="mt-12 flex flex-col gap-8"
//           >
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Name</span>
//               <input
//                 type="text"
//                 name="name"
//                 value={form.name}
//                 onChange={handleChange}
//                 placeholder="What's your good name?"
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your email</span>
//               <input
//                 type="email"
//                 name="email"
//                 value={form.email}
//                 onChange={handleChange}
//                 placeholder="What's your email address?"
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>
//             <label className="flex flex-col">
//               <span className="text-white font-medium mb-4">Your Message</span>
//               <textarea
//                 rows={7}
//                 name="message"
//                 value={form.message}
//                 onChange={handleChange}
//                 placeholder="What you want to say?"
//                 className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
//                 required
//               />
//             </label>

//             <button
//               type="submit"
//               className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
//             >
//               {loading ? "Sending..." : "Send"}
//             </button>
//           </form>
//         </motion.div>
//       </div>
//     </>
//   );
// };
export default SectionWrapper(About2, "");
