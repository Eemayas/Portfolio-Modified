import React, { useRef, useState } from "react";
import { color, motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../style";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { FaMapMarkedAlt } from "react-icons/fa";
import { RiMailSendLine } from "react-icons/ri";
import { BsTelephonePlus } from "react-icons/bs";

const LetsTalk = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
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
    emailjs
      .send(
        "service_ar5qbfv",
        "template_i630qnb",
        {
          from_name: form.name,
          to_name: "Prashant",
          from_email: form.email,
          to_email: "prashantmanandhar2002@gmail.com",
          message: form.message,
        },
        "RPLFkx6l9sVg9jnxP"
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you!! I will get back to you as soon as possible.");
          setForm({ name: "", email: "", message: "" });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
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
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Let's Talk.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your good name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email address?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:flex-col flex gap-5 xs:flex-wrap align-middle  h-auto "
        >
          <div className="mb-6 flex items-center flex-col justify-evenly  w-full bg-black-100 md:w-96 p-5 rounded-2xl min-h-[200px] sm:w-[360px]  ">
            <BsTelephonePlus size={30} /> <h4 className=" m-0">Phone</h4>
            <hr className="mt-2 mb-2 w-full   bg-white " />
            <div className="small text-black-50">+9779860440088</div>
          </div>
          <div className="md:w-96 mb-6 flex items-center flex-col justify-evenly  w-full bg-black-100 p-5 rounded-2xl min-h-[200px] sm:w-[360px] ">
            <RiMailSendLine size={30} />
            <h4 className=" m-0">Email Address</h4>
            <hr className="mt-2 mb-2 w-full  bg-white " />
            <div className="small text-black-50">
              prashantmanandhar2002@gmail.com
            </div>
          </div>
          <div className="md:w-96 mb-6 flex items-center flex-col justify-evenly  w-full bg-black-100 p-5 rounded-2xl min-h-[200px] sm:w-[360px] ">
            <FaMapMarkedAlt size={30} />
            <h4 className=" m-0">Address</h4>
            <hr className="mt-2 mb-2 w-full  bg-white " />
            <div className="small text-black-50">Banepa 7,Kavre Nepal</div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SectionWrapper(LetsTalk);