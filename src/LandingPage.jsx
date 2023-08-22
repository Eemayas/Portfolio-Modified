import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import About2 from "./component/About2";
import Tech from "./component/Tech";
// import Experience from "./component/Experience";
import Works from "./component/Works";
// import Feedbacks from "./component/Feedbacks";
import LetSTalk from "./component/Let'sTalk";import Contact from "./component/Contact";
const LandingPage = () => { 
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      <About />
      <About2 />
      {/* <Experience/> */}
      <Tech />
      <Works />
      {/* <Feedbacks/> */}
      <div className="relative z-0 bg-primary">
        <LetSTalk />
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
