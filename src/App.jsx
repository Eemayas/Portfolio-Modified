import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage';
import ProjectCollection from './ProjectCollection';
import ProjectSlider from './component/ProjectSlider';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchBio, fetchBioCard, fetchBioSkill, fetchContact, fetchData, fetchExperience, fetchProject, fetchTestimonial } from './action/dataAction.js';
import { fetchSocialMedia } from './action/socialMediaAction';

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
        <Routes>
          <Route path="/" element=
          {<LandingPage/>}/>
          <Route path="/projectcollection" element={<ProjectCollection />} />
          {/* <Route path="/projectcollection/slider" element={<ProjectSlider />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

// function DataList({ data, fetchData }) {
//   useEffect(() => {
//     fetchData();
//   }, [fetchData]);

//   return (
//     <div>
//       <h1>Data List</h1>
//       <ul>
//         {data.map((item) => (
//           <li key={item.id}>{item.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const mapStateToProps = (state) => ({
//   data: state.data,
// });


export default App;
