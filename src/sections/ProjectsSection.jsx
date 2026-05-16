export default function ProjectsSection({
  projects,
}) {
  return (
    <section id="projects" className="projects-section">
      <div className="section-content">
        <p className="section-label">
          PROJECTS
        </p>

        <h2>Featured Projects</h2>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card"
            >
              <h3>{project.title}</h3>

              <span>
                {project.tech}
              </span>

              <p>
                {project.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}