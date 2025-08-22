import React, { useState, useEffect } from "react";

interface Project {
  id: number;
  title: string;
  tech: string;
  description: string;
  githubUrl?: string;
  demoUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const welcomeMessage = "Check out my latest projects!";

  useEffect(() => {
    setTypedText(""); // Reset typed text
    let i = 0;
    let timeoutId: number;

    const typeWriter = () => {
      if (i < welcomeMessage.length) {
        setTypedText(welcomeMessage.substring(0, i + 1));
        i++;
        timeoutId = window.setTimeout(typeWriter, 100);
      }
    };

    typeWriter();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [welcomeMessage]);

  const projects: Project[] = [];

  return (
    <>
      <section className="terminal-hero" id="hero">
        <div className="terminal-window hero-window">
          <div className="terminal-header">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>
          <div className="terminal-content hero-content">
            <span className="prompt">abdaze@home:~/projects$ </span>
            <span id="typed-welcome">{typedText}</span>
            <span className="cursor"> </span>
          </div>
        </div>
        <div
          className="scroll-down"
          onClick={() =>
            document
              .getElementById("main-content")
              ?.scrollIntoView({ behavior: "smooth" })
          }
        >
          <i className="fa fa-chevron-down"></i>
        </div>
      </section>
      <main id="main-content">
        <div className="container">
          <section className="content-section">
            <div className="projects-section">
              <h1 className="section-title">My Projects</h1>
              <div className="project-grid">
                {projects.length === 0 ? (
                  <div className="empty-state">
                    <p>No projects to display at the moment. Check back soon!</p>
                  </div>
                ) : (
                  projects.map((project) => (
                    <div key={project.id} className="project-item">
                      <a
                        href="#"
                        className="project-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {project.title}
                      </a>
                      <span className="project-tech">{project.tech}</span>
                      <p className="project-description">{project.description}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default ProjectsSection;
