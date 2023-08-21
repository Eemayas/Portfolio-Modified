import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from './LandingPage';
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Routes>
          <Route path="/" element=
          {<LandingPage/>}/>
          {/* <Route path="/projectcollection" element={<ProjectCollection />} />
          <Route path="/projectcollection/slider" element={<ProjectSlider />} /> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
