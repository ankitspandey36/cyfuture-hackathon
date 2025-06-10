import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Sessions from './Sessions';
import Hackathons from './Hackathons';
import HRNetwork from './HRNetwork';

import AIHelp from './components/ai-help/AIHelp';
import CollegeSuggestions from './components/ai-help/CollegeSuggestions';
import CompanySuggestions from './components/ai-help/CompanySuggestions';
import CareerPath from './components/ai-help/CareerPath';
import ResumeUpload from './ResumeUpload';

const App = () => {
  return (
    <Router>
      <Routes>
        {/* All routes share this layout */}
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/sessions" element={<Sessions />} />
          <Route path="/hackathons" element={<Hackathons />} />
          <Route path="/hrnetwork" element={<HRNetwork />} />

          {/* Nested routing for AIHelp */}
          <Route path="aihelp" element={<AIHelp />}>
            <Route path="aihelp" element={<CollegeSuggestions />} />
            <Route path="company" element={<CompanySuggestions />} />
            <Route path="career" element={<CareerPath />} />
          </Route>

          <Route path="/resumeupload" element={<ResumeUpload />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
