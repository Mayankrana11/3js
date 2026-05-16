export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (!section) return;

    window.scrollTo({
      top: section.offsetTop,
      behavior: "smooth",
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
        onClick={() => scrollToSection("skills")}
      >
        Skills
      </button>

      <button
        onClick={() => scrollToSection("experience")}
      >
        Experience
      </button>

      <button
        onClick={() => scrollToSection("projects")}
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