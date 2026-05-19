import lenis from "../lib/lenis";

export default function Navbar() {
  const scrollToSection = (id, offset = 0) => {
    const element = document.getElementById(id);

    if (!element) return;

    lenis.scrollTo(element, {
      duration: 1.8,
      offset,
    });
  };

  return (
    <nav className="navbar">
      <button
        onClick={() => scrollToSection("about")}
      >
        About
      </button>

      <button
        onClick={() => scrollToSection("skills", 120)}
      >
        Skills
      </button>

      <button
        onClick={() => scrollToSection("experience", 200)}
      >
        Experience
      </button>

      <button
        onClick={() => scrollToSection("projects", 120)}
      >
        Projects
      </button>

      <a href="/docs/resume.pdf" download>
        Resume
      </a>

      <button
        onClick={() => scrollToSection("contact")}
      >
        Contact
      </button>
    </nav>
  );
}