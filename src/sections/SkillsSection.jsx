export default function SkillsSection() {

  const skills = [
    "Data Structures & Algorithms Design",
    "Java • Object Oriented Programming",
    "JavaScript / TypeScript",

    "Python • C • C++",
    "React • Next.js • Node.js",
    "Firebase • MySQL • Supabase",

    "OCR • NLP • Hugging Face",
    "Vercel • Netlify • Render",
    "UE5 • After Effects • Premiere Pro • Filmora • Figma",
  ];

  return (
    <section id="skills" className="skills-section">

      <div className="skills-piano-layer">
        <img
          src="/images/piano.png"
          alt="Piano"
          className="piano-image"
        />
      </div>

      <div className="skills-content">
        <p className="section-label">SKILLS</p>

        <h2>
          Technologies
          <br />
          & Tools
        </h2>

        <p className="skills-description">
          I approach development like composition — balancing structure,
          rhythm, interaction, and emotion to create immersive digital
          experiences.
        </p>

        <div className="skills-grid-new">
          {skills.map((skill, index) => (
            <div className="skill-pill" key={index}>
              {skill}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}