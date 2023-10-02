import './App.css';
import { BrowserRouter } from "react-router-dom";
import LandingPage from './LandingPage';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
// import { fetchBio, fetchBioCard, fetchBioSkill, fetchContact, fetchExperience, fetchProject, fetchTestimonial } from './action/dataAction';
import { fetchSocialMedia } from './action/socialMediaAction';
import { fetchBio } from './action/bioAction';
import { fetchBioCard } from './action/bioCardAction';
import { fetchBioSkill } from './action/bioSkillAction';
import { fetchProject } from './action/projectAction';
import { fetchContact } from './action/contactAction';
import { fetchTestimonial } from './action/testinomialAction';
import { fetchExperience } from './action/experiencesAction';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchBio());
    dispatch(fetchBioCard());
    dispatch(fetchBioSkill());
    dispatch(fetchProject());
    dispatch(fetchContact());
    dispatch(fetchSocialMedia());
    dispatch(fetchTestimonial());
    dispatch(fetchExperience());
  }, [ dispatch]);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
          <LandingPage/>
      </div>
    </BrowserRouter>
  );
}
export default App;
