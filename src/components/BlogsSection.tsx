import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface Blog {
  id: number;
  title: string;
  date: string;
  description: string;
  url?: string;
}

const BlogsSection: React.FC = () => {
  const [typedText, setTypedText] = useState("");
  const welcomeMessage = "Welcome to my blog archive!";

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

  const blogs: Blog[] = [
    {
      id: 1,
      title: "Group Theory Unmasked: Building Zero-Knowledge from Symmetry",
      date: "April 21, 2025",
      description:
        "An intuitive guide to the algebra that makes proving without revealing possible.",
      url: "/blog/group-theory",
    },
    {
      id: 2,
      title: "How to Build a Terminal Portfolio Website",
      date: "June 15, 2025",
      description:
        "A comprehensive guide to creating a cyberpunk-themed portfolio using HTML, CSS, and JavaScript with terminal aesthetics.",
      url: "#",
    },
    {
      id: 3,
      title: "Zero Knowledge Proofs: A Gentle Introduction",
      date: "May 10, 2025",
      description:
        "Understanding the fundamentals of zero-knowledge cryptography and its applications in modern blockchain technology.",
      url: "#",
    },
    {
      id: 4,
      title: "Competitive Programming Tips for Beginners",
      date: "April 1, 2025",
      description:
        "Essential strategies and techniques to excel in competitive programming contests and improve problem-solving skills.",
      url: "#",
    },
  ];

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
            <span className="prompt">abdaze@home:~/blogs$ </span>
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
            <div className="blogs-section">
              <h1 className="section-title">My Blogs</h1>
              <div className="blog-grid">
                {blogs.map((blog) => (
                  <div key={blog.id} className="blog-item">
                    {blog.url && blog.url.startsWith("/") ? (
                      <Link to={blog.url} className="blog-link">
                        {blog.title}
                      </Link>
                    ) : (
                      <a
                        href={blog.url}
                        className="blog-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {blog.title}
                      </a>
                    )}
                    <span className="blog-date">{blog.date}</span>
                    <p className="blog-description">{blog.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default BlogsSection;
