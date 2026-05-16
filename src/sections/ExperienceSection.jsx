export default function ExperienceSection({
  experiences,
}) {
  return (
    <section id="experience" className="experience-section">
      <div className="section-content">
        <p className="section-label">
          EXPERIENCE
        </p>

        <h2>Experience</h2>

        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience-card"
            >
              <div className="experience-top">
                <h3>{exp.role}</h3>

                <span>
                  {exp.period}
                </span>
              </div>

              <h4>{exp.company}</h4>

              <p>{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}