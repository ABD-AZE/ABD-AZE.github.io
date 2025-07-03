import React from 'react';

const ContactSection: React.FC = () => {
  const copyDiscordUsername = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const discordUsername = 'abdaze';
    navigator.clipboard.writeText(discordUsername).then(
      () => alert('Discord username copied to clipboard!'),
      () => alert('Failed to copy Discord username.')
    );
  };

  return (
    <div className="contact-section" id="contact-section">
      <h1 className="section-title">Contact</h1>
      <div className="contact-info">
        <div className="contact-item">
          <i className="fas fa-envelope"></i>
          <a href="mailto:abdullahazeem770@gmail.com">abdullahazeem770@gmail.com</a>
        </div>
        <div className="contact-item">
          <i className="fas fa-phone"></i>
          <a href="tel:+918791162879">+91 8791162879</a>
        </div>
      </div>
      <div className="social-icons">
        <a href="https://github.com/ABD-AZE" target="_blank" rel="noopener noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href="https://x.com/0xabdaze" target="_blank" rel="noopener noreferrer" title="X">
          <i className="fab fa-x-twitter"></i>
        </a>
        <a href="#" onClick={copyDiscordUsername} title="abdaze">
          <i className="fab fa-discord"></i>
        </a>
        <a href="https://www.linkedin.com/in/abdullah-azeem-20a7b9285/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
    </div>
  );
};

export default ContactSection; 