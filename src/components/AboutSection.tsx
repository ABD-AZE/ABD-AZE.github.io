import React from "react";
import { Link } from "react-router-dom";

const AboutSection: React.FC = () => (
  <div className="about-section">
    <h1 className="section-title">About Me</h1>
    <div className="about-content">
      <p className="about-paragraph">
        My name is Abdullah Azeem, and I'm currently pursuing a B.Tech. in
        Computer Science and Engineering at the Indian Institute of Technology
        Roorkee. I have a strong interest in systems programming and blockchain
        development, and I'm also an enthusiastic competitive programmer.
        Currently I am building{" "}
        <a
          href="https://github.com/braidpool/"
          target="_blank"
          rel="noopener noreferrer"
          className="about-link"
        >
          Braidpool
        </a>{" "}
        as part of the Summer of Bitcoin, where I'm contributing to building
        decentralized Bitcoin mining infrastructure. On campus, I actively
        contribute as a developer at the Blockchain Society, IITR, and I'm also
        a member of the Programming and Algorithms Group.
      </p>

      <div className="about-navigation">
        <p className="nav-prompt">Explore my work:</p>
        <div className="about-nav-links">
          <Link to="/blogs" className="nav-btn">
            <i className="fas fa-blog"></i>
            Read My Blogs
          </Link>
          <Link to="/projects" className="nav-btn">
            <i className="fas fa-code"></i>
            View My Projects
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default AboutSection;
