
import React from "react";
import HomePage from "./Pages/HomePage";
import AboutMe from "./Pages/AboutMe";
import ProjectPage from "./Pages/ProjectPage";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router basename = {"https://skcodes2.github.io/Portfolio"}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>

    </Router>
  );
}

export default App;
