import React, { useEffect } from "react";

interface BlogPostProps {
  title: string;
  subtitle?: string;
  author: string;
  date: string;
  content: React.ReactNode;
}

const BlogPost: React.FC<BlogPostProps> = ({
  title,
  subtitle,
  author,
  date,
  content,
}) => {
  useEffect(() => {
    // Load MathJax if not already loaded
    if (!(window as any).MathJax) {
      (window as any).MathJax = {
        tex: {
          inlineMath: [
            ["$", "$"],
            ["\\(", "\\)"],
          ],
          displayMath: [
            ["$$", "$$"],
            ["\\[", "\\]"],
          ],
        },
      };

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js";
      script.async = true;
      script.onload = () => {
        // Typeset after MathJax is loaded
        if ((window as any).MathJax && (window as any).MathJax.typesetPromise) {
          (window as any).MathJax.typesetPromise();
        }
      };
      document.head.appendChild(script);
    } else {
      // If MathJax is already loaded, check if typesetPromise exists and call it
      if ((window as any).MathJax.typesetPromise) {
        (window as any).MathJax.typesetPromise();
      } else if ((window as any).MathJax.typeset) {
        (window as any).MathJax.typeset();
      }
    }

    // Trigger Prism.js syntax highlighting
    if ((window as any).Prism) {
      (window as any).Prism.highlightAll();
    }
  }, []);

  return (
    <div className="blog-post">
      <article className="blog-article">
        <header className="blog-header">
          <h1 className="blog-title">{title}</h1>
          {subtitle && <p className="blog-subtitle">{subtitle}</p>}
          <div className="blog-meta">
            <div className="blog-author-info">
            <div className="blog-author-small">{author}</div>
              <p className="blog-date">{date}</p>
            </div>
          </div>
        </header>
        <div className="blog-content">{content}</div>
      </article>
    </div>
  );
};

export default BlogPost;
