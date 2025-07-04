import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import TerminalHero from "./components/TerminalHero";
import AboutSection from "./components/AboutSection";
import ContactSection from "./components/ContactSection";
import ProjectsSection from "./components/ProjectsSection";
import BlogsSection from "./components/BlogsSection";
import GroupTheoryPost from "./components/GroupTheoryPost";
import LibP2PPost from "./components/LibP2PPost";
import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <TerminalHero greeting="Hi there!" />
              <main id="main-content">
                <div className="container">
                  <section className="content-section" id="about-contact">
                    <AboutSection />
                    <ContactSection />
                  </section>
                </div>
              </main>
            </>
          }
        />
        <Route
          path="/projects"
          element={
            <>
              <Navbar />
              <ProjectsSection />
            </>
          }
        />
        <Route
          path="/blogs"
          element={
            <>
              <Navbar />
              <BlogsSection />
            </>
          }
        />
        <Route
          path="/blog/group-theory"
          element={
            <>
              <Navbar />
              <GroupTheoryPost />
            </>
          }
        />
        <Route
          path="/blog/libp2p-peer-discovery"
          element={
            <>
              <Navbar />
              <LibP2PPost />
            </>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
