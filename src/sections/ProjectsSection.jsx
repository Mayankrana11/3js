const projects = [
  {
    title: "IC (I See) Anomaly Detector",
    stack: "LocalLLM • Computer Vision • Js • Python",
    description:
      "Advanced anomaly detection platform with intelligent monitoring pipelines and immersive visual analytics.",
    github: "https://github.com/Mayankrana11/IC-ANOMALY_DETECTOR.git",
    live: "https://sentry-vision.netlify.app/",
  },

  {
    title: "SwiftRide - Ride Hailing Management System",
    stack: "React • Node.js • PostgreSQL",
    description:
      "Full-stack ride hailing ecosystem featuring account management, booking flows and scalable backend services.",
    github: "https://github.com/Mayankrana11/DBMS-project.git",
    live: "https://ride-management.netlify.app/",
  },

  {
    title: "ManasAi - AI Powered Medical Health Assistant",
    stack: "Llama Local LLM • Firebase • React",
    description:
      "Conversational healthcare assistant with voice interaction, persistent chat history, and intelligent responses.",
    github: "https://github.com/Mayankrana11/ManasAi.git",
    live: "https://manas-plus.netlify.app/",
  },

  {
    title: "Haru No Yorokobi - Restaurant POS System",
    stack: "React • Express • Node.js",
    description:
      "Modern restaurant ordering ecosystem with immersive UI, checkout flows, and live order management.",
    github: "https://github.com/Mayankrana11/Restaurant-POS-System.git",
    live: "https://haru-no-yorokobi.netlify.app/",
  },

  {
    title: "Fleet Management System JAVA GUI",
    stack: "Java • Swing • OOP",
    description:
      "Desktop fleet tracking and management system built with Java GUI architecture and modular components.",
    github: "https://github.com/Mayankrana11/Fleet-Management-System-GUI.git",
  },

  {
    title: "University ERP",
    stack: "Java • MySQL • AWT • Swing",
    description:
      "Centralized academic ERP platform handling attendance, records, scheduling, and administration workflows.",
    github: "https://github.com/Mayankrana11/University-ERP.git",
  },

  {
    title: "Shinsou Chess",
    stack: "C/C++ • React • Chess Engine • UI/UX",
    description:
      "Interactive cinematic chess platform with move highlighting, smooth gameplay, and modern visuals.",
    github: "https://github.com/Mayankrana11/shinsou-chess.git",
    live: "https://shinshou-chess-engine.netlify.app/",
  },

  {
    title: "RV32I-Emulation-Suite",
    stack: "Python • RISC-V • Systems",
    description:
      "Custom RV32I instruction emulation environment featuring low-level architecture experimentation of RV Assembler & Simulator",
    github: "https://github.com/Mayankrana11/RV32I-Emulation-Suite.git",
  },

  {
    title: "SimpleOS - Lightweight OS built over EGOS2000",
    stack: "C • Operating Systems",
    description:
      "Minimal operating system implementation exploring scheduling, memory, and process handling.",
    github: "https://github.com/Mayankrana11/OS-SimpleOS.git",
  },

  {
    title: "OS - SimpleMultithreader",
    stack: "C/C++ • Concurrency • Threads",
    description:
      "Custom multithreading implementation demonstrating synchronization and low-level thread management.",
    github: "https://github.com/Mayankrana11/OS-SimpleMultithreader.git",
  },

  {
    title: "OS - SimpleSmartLoader",
    stack: "C • ELF Loading • Systems",
    description:
      "Experimental smart loader architecture for efficient executable loading and runtime handling.",
    github: "https://github.com/Mayankrana11/OS-SimpleSmartLoader.git",
  },

  {
    title: "OS - SimpleScheduler",
    stack: "C • CPU Scheduling",
    description:
      "Scheduling subsystem exploring process queues, execution ordering, and runtime optimization.",
    github: "https://github.com/Mayankrana11/OS-SimpleScheduler.git",
  },

  {
    title: "OS - SimpleUnixTerminal",
    stack: "C • Shell • Unix",
    description:
      "Custom Unix-style terminal implementation supporting commands, parsing, and process execution.",
    github: "https://github.com/Mayankrana11/OS-SimpleUnixTerminal.git",
  },

  {
    title: "OS - SimpleLoader",
    stack: "C • Systems • Runtime",
    description:
      "Lightweight executable loader implementation exploring runtime memory management principles.",
    github: "https://github.com/Mayankrana11/OS-SimpleLoader.git",
  },
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-header">
        <p className="section-label">
          PROJECTS
        </p>

        <h2>
          Selected <br />
          Work
        </h2>

        <p className="projects-subtext">
          Systems, interfaces, and immersive
          digital experiences across AI,
          full-stack engineering, and systems
          programming.
        </p>
      </div>

      <div className="projects-carousel-wrapper">
        <div className="projects-carousel-track">
          {[...projects, ...projects].map(
            (project, index) => (
              <div
                className="project-card-modern"
                key={index}
              >
                <div className="project-card-content">
                  <p className="project-stack">
                    {project.stack}
                  </p>

                  <h3>{project.title}</h3>

                  <p className="project-description">
                    {project.description}
                  </p>

                  <div className="project-links">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub →
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="live-link"
                      >
                        Live →
                      </a>
                    )}
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}