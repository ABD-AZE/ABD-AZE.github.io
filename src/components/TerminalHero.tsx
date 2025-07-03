import React, { useEffect, useRef, useState } from "react";

interface TerminalHeroProps {
  greeting?: string;
}

const TerminalHero: React.FC<TerminalHeroProps> = ({
  greeting = "Hi there!",
}) => {
  const [typed, setTyped] = useState("");
  const iRef = useRef(0);

  useEffect(() => {
    setTyped("");
    iRef.current = 0;
    let timeoutId: number;

    const typeWriter = () => {
      if (iRef.current < greeting.length) {
        setTyped(greeting.substring(0, iRef.current + 1));
        iRef.current++;
        timeoutId = window.setTimeout(typeWriter, 100);
      }
    };

    typeWriter();

    return () => {
      if (timeoutId) window.clearTimeout(timeoutId);
    };
  }, [greeting]);

  const scrollDown = () => {
    const el = document.getElementById("main-content");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="terminal-hero" id="hero">
      <div className="terminal-window hero-window">
        <div className="terminal-header">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="terminal-content hero-content">
          <span className="prompt">abdaze@home:~$ </span>
          <span>{typed}</span>
          <span className="cursor"> </span>
        </div>
      </div>
      <div className="scroll-down" onClick={scrollDown}>
        <i className="fa fa-chevron-down"></i>
      </div>
    </section>
  );
};

export default TerminalHero;
