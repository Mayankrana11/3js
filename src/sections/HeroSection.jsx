import { useEffect, useRef } from "react";

export default function HeroSection() {
  const videoRef = useRef(null);
  const portraitRef = useRef(null);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;

    let currentX = 0;
    let currentY = 0;

    const handleMouseMove = (e) => {
      mouseX =
        (e.clientX / window.innerWidth - 0.5) * 100;

      mouseY =
        (e.clientY / window.innerHeight - 0.5) * 100;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    const animate = () => {
      currentX +=
        (mouseX - currentX) * 0.025;

      currentY +=
        (mouseY - currentY) * 0.025;

      const time =
        Date.now() * 0.00015;

      // Moon background animation
      if (videoRef.current) {
        const moonDrift =
          Math.sin(time * 0.7) * 30;

        videoRef.current.style.transform = `
          translate3d(
            calc(-50% + ${
              -currentX * 0.65 + moonDrift
            }px),
            calc(-50% + ${
              -currentY * 0.65
            }px),
            0
          )
          scale(1.06)
          rotate(${currentX * 0.003}deg)
        `;
      }

      // Portrait animation
      if (portraitRef.current) {
        const portraitFloatX =
        Math.sin(time * 0.6) * 4;

        const portraitFloatY =
        Math.cos(time * 1.2) * 10;

        const glow =
          Math.abs(currentX) * 0.0008;

        portraitRef.current.style.transform = `
          translate3d(
            ${
              currentX * 0.04 +
              portraitFloatX
            }px,
            ${
              currentY * 0.12 +
              portraitFloatY
            }px,
            0
          )
          scale(1.01)
          rotate(${currentX * 0.002}deg)
        `;

        portraitRef.current.style.filter = `
          grayscale(1)
          contrast(1.15)
          brightness(${0.78 + glow})
        `;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );
    };
  }, []);

  return (
    <div className="video-background">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="bg-video"
      >
        <source
          src="/videos/Moon.mp4"
          type="video/mp4"
        />
      </video>

      <div className="video-overlay" />

      <img
        ref={portraitRef}
        src="/images/mayank.png"
        alt="Mayank"
        className="hero-portrait"
      />

      <div className="ambient-glow" />
    </div>
  );
}