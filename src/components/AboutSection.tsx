import React from 'react';

const AboutSection: React.FC = () => (
  <div className="about-section">
    <h1 className="section-title">About Me</h1>
    <div className="info-grid">
      <div className="info-item">
        <span className="info-label">Name:</span>
        <span className="info-value">Abdullah Azeem</span>
      </div>
      <div className="info-item">
        <span className="info-label">Institute:</span>
        <span className="info-value">Indian Institute of Technology Roorkee</span>
      </div>
      <div className="info-item">
        <span className="info-label">Degree:</span>
        <span className="info-value">B.Tech. (Computer Science and Engineering)</span>
      </div>
      <div className="info-item">
        <span className="info-label">Areas of Interest:</span>
        <span className="info-value">Systems programming, Competitive programming, Blockchain Development, Machine Learning, Zero Knowledge Cryptography</span>
      </div>
      <div className="info-item">
        <span className="info-label">Internship:</span>
        <span className="info-value">Summer of Bitcoin at Braidpool</span>
      </div>
      <div className="info-item">
        <span className="info-label">Positions:</span>
        <span className="info-value">Developer, Blockchain Society IITR<br />Member, Programming and Algorithms Group IITR</span>
      </div>
    </div>
  </div>
);

export default AboutSection; 