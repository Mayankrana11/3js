import Navbar from "./components/Navbar";

import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import SkillsSection from "./sections/SkillsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";

export default function App() {
  return (
    <main className="app">
      <Navbar />

      <HeroSection />

      <section
        id="about"
        className="section"
      >
        <AboutSection
          title="MAYANK RANA"
          description="I am a curious learner and a passionate B.Tech student who thrives on building thoughtful, data-driven, and elegant digital experiences. Currently diving into full-stack development with express-react and other modern web technologies. Beyond coding, I enjoy cinematic design using Unreal Engine 5 where creativity meets technology. I’m passionate about solving problems that balance logic and imagination, and I’m always eager to learn something new."
        />
      </section>

      <section
        id="skills"
        className="section"
      >
        <SkillsSection
          skills={[
            "React",
            "Three.js",
            "Node.js",
            "Express",
            "MongoDB",
            "PostgreSQL",
            "Firebase",
            "Supabase",
            "JavaScript",
            "TypeScript",
            "C++",
            "Python",
            "Tailwind CSS",
            "Framer Motion",
            "GSAP",
            "WebGL",
            "REST APIs",
            "Git",
            "Render",
            "Vercel",
          ]}
        />
      </section>

      <section
        id="experience"
        className="section"
      >
        <ExperienceSection
          experiences={[
            {
              role: "Full Stack Developer",
              company: "Independent Projects",
              period: "2023 — Present",
              description:
                "Built immersive web experiences, AI-powered systems, real-time applications, and interactive 3D interfaces using React, Three.js, Node.js, Firebase, and modern web technologies.",
            },

            {
              role: "Frontend & UI Engineer",
              company: "Personal Portfolio & Creative Systems",
              period: "2024 — Present",
              description:
                "Focused on cinematic UI design, smooth animations, parallax systems, glassmorphism interfaces, and premium frontend experiences inspired by Apple and Awwwards aesthetics.",
            },

            {
              role: "AI & Backend Systems Developer",
              company: "Manas+ AI",
              period: "2025",
              description:
                "Developed conversational AI systems with voice interaction, Firebase integration, persistent memory, and LLM-powered backend infrastructure.",
            },
          ]}
        />
      </section>

      <section
        id="projects"
        className="section"
      >
        <ProjectsSection
          projects={[
            {
              title: "Manas+ AI",
              tech: "React • Node.js • Firebase • Ollama",
              description:
                "A cinematic AI assistant featuring voice interaction, persistent chat history, intelligent responses, and immersive UI design.",
            },

            {
              title: "3D Interactive Portfolio",
              tech: "React • Three.js • GSAP",
              description:
                "A premium cinematic portfolio experience with animated moon backgrounds, parallax interactions, smooth motion systems, and immersive transitions.",
            },

            {
              title: "Restaurant Ordering Platform",
              tech: "React • Express • PostgreSQL",
              description:
                "A modern food ordering application with dynamic menus, checkout systems, multiple payment flows, and responsive UI.",
            },

            {
              title: "Chrome Extension Systems",
              tech: "JavaScript • Chrome APIs",
              description:
                "Developed productivity-focused browser extensions with interactive overlays, automation systems, and custom UI experiences.",
            },
          ]}
        />
      </section>

      <ContactSection />

      <div className="grain" />
    </main>
  );
}