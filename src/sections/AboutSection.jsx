export default function AboutSection({
  title,
  description,
}) {
  return (
    <section id="about" className="about-section">
      <div className="section-content">
        <p className="section-label">
          B.Tech Sophomore at IIITD | Always Learning, Always Building
        </p>

        <h2>{title}</h2>

        <p className="section-description">
          {description}
        </p>
      </div>
    </section>
  );
}