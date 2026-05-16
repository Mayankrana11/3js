export default function ContactSection() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-card">
        <h2>Get In Touch</h2>

        <p>
          I'm currently open to new opportunities and
          interesting projects.
        </p>

        <form
          action="https://formspree.io/f/xrbobzwv"
          method="POST"
          className="contact-form"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          />

          <textarea
            name="message"
            rows="6"
            placeholder="Message"
            required
          />

          <button type="submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}