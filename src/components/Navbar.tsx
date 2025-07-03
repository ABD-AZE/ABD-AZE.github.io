import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleToggle = () => setMenuOpen(!menuOpen);
  const handleLinkClick = () => setMenuOpen(false);

  // Scroll to top when navigating to different pages
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== "/") {
      // If not on home page, navigate to home first then scroll to section
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    handleLinkClick();
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    handleLinkClick();
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="nav-brand">
          {location.pathname === "/" ? (
            <button className="nav-brand-link" onClick={scrollToTop}>
              <i className="fa fa-home" aria-hidden="true"></i> abdaze
            </button>
          ) : (
            <Link to="/" className="nav-brand-link">
              <i className="fa fa-home" aria-hidden="true"></i> abdaze
            </Link>
          )}
        </div>
        <div className={`nav-links${menuOpen ? " active" : ""}`}>
          <button
            className="nav-link"
            onClick={() => scrollToSection("about-contact")}
          >
            About
          </button>
          <button
            className="nav-link"
            onClick={() => scrollToSection("contact-section")}
          >
            Contact
          </button>
          <Link to="/projects" className="nav-link" onClick={handleLinkClick}>
            Projects
          </Link>
          <Link to="/blogs" className="nav-link" onClick={handleLinkClick}>
            Blog
          </Link>
        </div>
        <div
          className={`mobile-menu-toggle${menuOpen ? " active" : ""}`}
          onClick={handleToggle}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
