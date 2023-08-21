import React from "react";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
const LandingPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <Hero />
      </div>
      {/* <About /> */}
      {/* <About2 /> */}
      {/* <Experience/> */}
      {/* <Tech /> */}
      {/* <Works /> */}
      {/* <Feedbacks/> */}
      {/* <div className="relative z-0 bg-primary"> */}
        {/* <LetSTalk /> */}
        {/* <Contact /> */}
      {/* </div> */}
      {/* <Project /> */}
    </div>
  );
};

export default LandingPage;
