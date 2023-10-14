import "./App.css";
import { BrowserRouter } from "react-router-dom";
// import LandingPage from "./LandingPage";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";

import { fetchSocialMedia } from "./action/socialMediaAction";
import { fetchBio } from "./action/bioAction";
import { fetchBioCard } from "./action/bioCardAction";
import { fetchBioSkill } from "./action/bioSkillAction";
import { fetchProject } from "./action/projectAction";
import { fetchContact } from "./action/contactAction";
import { fetchTestimonial } from "./action/testinomialAction";
import { fetchExperience } from "./action/experiencesAction";
import { IS_ADMIN } from "./constant";

import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import About2 from "./component/About2";
import Skills from "./component/Skills";
import Projects from "./component/Projects";
import LetSTalk from "./component/Let'sTalk";
import Contact from "./component/Contact";
import Feedbacks from "./component/Feedbacks";
// import Experience from "./component/Experience";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: IS_ADMIN, payload: false });
    dispatch(fetchBio());
    dispatch(fetchBioCard());
    dispatch(fetchBioSkill());
    dispatch(fetchProject());
    dispatch(fetchContact());
    dispatch(fetchSocialMedia());
    dispatch(fetchTestimonial());
    dispatch(fetchExperience());
  }, [dispatch]);
  // console.log(adminState);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <About2 />
          {/* <Experience/> */}
          <Skills />
          <Projects />
          <Feedbacks />
          <div className="relative z-0 bg-primary">
            <LetSTalk />
            <Contact />
          </div>
        </div>
        <div className="fixed bottom-5 right-5">
          <Popup />
          {/* <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
            onClick={() => {
              // console.log(!adminState)
              // dispatch({ type: IS_ADMIN, payload: !adminState });
            }}
          >
            Button
          </button> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

const Popup = () => {
  const adminState = useSelector((state) => state.AdminReducer);
  const dispatch = useDispatch();
  const formRef = useRef();
  const [showPopup, setShowPopup] = useState(false);
  const [adminPin, setAdminPin] = useState("");
  const [loading, setLoading] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  const handleSubmit = (e) => {
    setLoading(true);
    console.log(adminPin);
    if (adminPin == "2533") {
      dispatch({ type: IS_ADMIN, payload: !adminState });
    }
    setAdminPin("");
    setShowPopup(!showPopup);
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center ">
      <button
        onClick={togglePopup}
        className="bg-transparent text-transparent hover:bg-blue-700 hover:text-white font-bold py-2 px-4 rounded-full"
        // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        .
      </button>
      {showPopup && (
        //
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div
            className={` flex  bg-black-100 p-8 rounded-2xl xl:flex-row flex-col gap-10 overflow-hidden`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className=" flex flex-col gap-8"
            >
              <label className="flex flex-col">
                <span className="text-white font-medium mb-4">PIN</span>
                <input
                  type="text"
                  name="name"
                  value={adminPin}
                  onChange={(e) => {
                    setAdminPin(e.target.value);
                  }}
                  placeholder="PIN"
                  className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                  required
                />
              </label>
              <div className="flex flex-row gap-4"  >
                <button
                  type="submit"
                  className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                >
                  {loading ? "Sending..." : "Send"}
                </button>
                <button className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                onClick={()=>setShowPopup(!showPopup)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
