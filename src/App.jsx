import ResumeUpload from "./components/hr-tools/ResumeUpload";   // <- import

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/"            element={<Home />} />
          <Route path="/sessions"    element={<Sessions />} />
          <Route path="/hackathons"  element={<Hackathons />} />
          <Route path="/hrnetwork"   element={<HRNetwork />} />

         
          <Route path="/aihelp" element={<AIHelp />}>
            <Route path="college" element={<CollegeSuggestions />} />
            <Route path="company" element={<CompanySuggestions />} />
            <Route path="career"  element={<CareerPath />} />
          </Route>

         
          <Route path="/resumeupload" element={<ResumeUpload />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
