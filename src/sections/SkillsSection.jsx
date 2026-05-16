export default function SkillsSection({
  skills,
}) {
  return (
    <section id="skills" className="skills-section">
      <div className="section-content">
        <p className="section-label">
          SKILLS
        </p>

        <h2>Technologies & Tools</h2>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div
              key={skill}
              className="skill-card"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}