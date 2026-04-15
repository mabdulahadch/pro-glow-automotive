import { useEffect, useState, useRef } from "react";
import logo from "@/assets/Vector1.png";

import carBg from "@/assets/car.png";

const SERVICES = ["PPF", "Ceramic Coating", "Vinyl Wrap", "Auto Detailing", "Restoration"];

const Hero = () => {
  const [loaded, setLoaded] = useState(false);
  const [serviceIndex, setServiceIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animRef = useRef<number>();

  // Typewriter effect
  useEffect(() => {
    const current = SERVICES[serviceIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayText === current) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setServiceIndex((i) => (i + 1) % SERVICES.length);
    } else {
      timeout = setTimeout(() => {
        setDisplayText(isDeleting
          ? current.slice(0, displayText.length - 1)
          : current.slice(0, displayText.length + 1)
        );
      }, isDeleting ? 40 : 80);
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, serviceIndex]);

  // Particle canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles: {
      x: number; y: number; vx: number; vy: number;
      size: number; alpha: number; color: string;
    }[] = [];

    const colors = ["#2b8fd4", "#5bc4f5", "#ffffff", "#1a6eb5"];

    for (let i = 0; i < 80; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        size: Math.random() * 1.5 + 0.3,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 120) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(43, 143, 212, ${0.06 * (1 - dist / 120)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + Math.floor(p.alpha * 255).toString(16).padStart(2, "0");
        ctx.fill();
      });

      animRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      window.removeEventListener("resize", resize);
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 120);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#03080f" }}
    >
      {/* Background Layers */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Image Layer - Invisible on Mobile (Back Layer) */}
        <div
          className="absolute inset-0 z-0 hidden md:block"
          style={{
            backgroundImage: `url(${carBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            filter: "brightness(1) contrast(1.1)",
          }}
        />
        {/* Gradient Layer (Front Layer) */}
        <div
          className="absolute inset-0 z-10"
          style={{
            background: `
              linear-gradient(
                to bottom,
                rgba(18, 38, 66, 0.85) 0%,
                rgba(3,8,15,0.7) 40%,
                rgba(3,8,15,0.95) 100%
              )
            `,
          }}
        />
      </div>


      {/* Particle canvas */}
      {/* <canvas ref={canvasRef} className="absolute inset-0 z-0" style={{ opacity: 0.9 }} /> */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" style={{ opacity: 0.6 }} />

      {/* Diagonal speed lines */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute"
            style={{
              top: `${10 + i * 15}%`,
              left: "-10%",
              width: "120%",
              height: "1px",
              background: `linear-gradient(90deg, transparent, rgba(43,143,212,${0.04 + i * 0.01}), transparent)`,
              transform: "rotate(-8deg)",
              animation: `slideRight ${3 + i * 0.5}s ease-in-out infinite alternate`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Radial glow center */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, rgba(43,143,212,0.08) 0%, transparent 70%)",
        }}
      />

      {/* Corner accent lines */}
      {/* <div className="absolute top-8 left-8 z-10 w-16 h-16" style={{ borderTop: "2px solid rgba(91,196,245,0.4)", borderLeft: "2px solid rgba(91,196,245,0.4)" }} />
      <div className="absolute top-8 right-8 z-10 w-16 h-16" style={{ borderTop: "2px solid rgba(91,196,245,0.4)", borderRight: "2px solid rgba(91,196,245,0.4)" }} />
      <div className="absolute bottom-8 left-8 z-10 w-16 h-16" style={{ borderBottom: "2px solid rgba(91,196,245,0.4)", borderLeft: "2px solid rgba(91,196,245,0.4)" }} />
      <div className="absolute bottom-8 right-8 z-10 w-16 h-16" style={{ borderBottom: "2px solid rgba(91,196,245,0.4)", borderRight: "2px solid rgba(91,196,245,0.4)" }} /> */}

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">

        {/* Logo with glow ring */}
        <div
          className="relative inline-block mb-10"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0) scale(1)" : "translateY(20px) scale(0.92)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        >
          <div
            className="absolute inset-0 rounded-full"
            style={{
              background: "radial-gradient(circle, rgba(43,143,212,0.25) 0%, transparent 70%)",
              filter: "blur(20px)",
              transform: "scale(1.4)",
            }}
          />
          <img
            src={logo}
            alt="Protomotive"
            className="relative h-28 md:h-36 w-auto mx-auto"
            style={{ filter: "drop-shadow(0 0 30px rgba(91,196,245,0.4))" }}
          />
        </div>

        {/* Eyebrow label */}
        <div
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.8s cubic-bezier(0.22, 1, 0.36, 1) 0.2s",
          }}
        >
          <span
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] uppercase mb-6"
            style={{ color: "#5bc4f5" }}
          >
            <span style={{ width: 32, height: 1, background: "#2b8fd4", display: "inline-block" }} />
            DHA Phase 8 · Lahore
            <span style={{ width: 32, height: 1, background: "#2b8fd4", display: "inline-block" }} />
          </span>
        </div>

        {/* Main headline */}
        <h1
          className="font-heading font-black tracking-tight mb-4 leading-none"
          style={{
            fontSize: "clamp(2.8rem, 4vw, 6.5rem)",
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(24px)",
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.35s",
          }}
        >
          <span style={{ color: "#ffffff" }}>WHERE PRECISION</span>
          <br />
          <span
            style={{
              background: "linear-gradient(135deg, #2b8fd4 0%, #5bc4f5 50%, #2b8fd4 100%)",
              backgroundSize: "100% auto",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              animation: "shimmer 3s linear infinite",
            }}
          >
            MEETS PASSION
          </span>
        </h1>

        {/* Typewriter service line */}
        <div
          className="mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.5s",
          }}
        >
          <p className="font-heading text-base md:text-lg uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.45)" }}>
            Premium{" "}
            <span
              className="font-semibold"
              style={{
                color: "#5bc4f5",
                borderBottom: "2px solid rgba(91,196,245,0.4)",
                paddingBottom: "1px",
                minWidth: "160px",
                display: "inline-block",
                textAlign: "left",
              }}
            >
              {displayText}
              <span
                style={{
                  display: "inline-block",
                  width: 2,
                  height: "1em",
                  background: "#5bc4f5",
                  marginLeft: 2,
                  verticalAlign: "middle",
                  animation: "blink 1s step-end infinite",
                }}
              />
            </span>{" "}
            in Lahore
          </p>
        </div>

        <div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? "translateY(0)" : "translateY(16px)",
            transition: "all 0.9s cubic-bezier(0.22, 1, 0.36, 1) 0.65s",
          }}
        >
          <a
            href="#booking"
            className="group relative px-9 py-4 font-semibold text-sm tracking-widest uppercase overflow-hidden"
            style={{
              background: "linear-gradient(135deg, #1a6eb5, #2b8fd4)",
              color: "#fff",
              borderRadius: 4,
              boxShadow: "0 0 30px rgba(43,143,212,0.35), inset 0 1px 0 rgba(255,255,255,0.1)",
              transition: "all 0.3s ease",
              fontFamily: 'Orbitron, sans-serif'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 50px rgba(43,143,212,0.6), inset 0 1px 0 rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.boxShadow = "0 0 30px rgba(43,143,212,0.35), inset 0 1px 0 rgba(255,255,255,0.1)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            <span className="relative z-10">Book Appointment</span>
          </a>
          <a
            href="#before-after"
            className="px-9 py-4 font-semibold text-sm tracking-widest uppercase"
            style={{
              color: "#5bc4f5",
              border: "1px solid rgba(91,196,245,0.3)",
              borderRadius: 4,
              background: "rgba(43,143,212,0.05)",
              backdropFilter: "blur(8px)",
              transition: "all 0.3s ease",
              fontFamily: 'Orbitron, sans-serif'
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(43,143,212,0.12)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,196,245,0.6)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLElement).style.background = "rgba(43,143,212,0.05)";
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(91,196,245,0.3)";
              (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
            }}
          >
            View Our Work
          </a>
        </div>

        {/* Stat strip */}
        <div
          className="flex justify-center gap-0"
          style={{
            opacity: loaded ? 1 : 0,
            transition: "all 1s cubic-bezier(0.22, 1, 0.36, 1) 0.85s",
          }}
        >
          {[
            { value: "1,055+", label: "Jobs Done" },
            { value: "15.3K", label: "Followers" },
            { value: "5★", label: "Rated" },
          ].map((stat, i) => (
            <div
              key={i}
              className="px-8 py-3 text-center"
              style={{
                borderLeft: i > 0 ? "1px solid rgba(91,196,245,0.15)" : "none",
              }}
            >
              <div
                className="font-heading font-black text-xl md:text-2xl"
                style={{ color: "#5bc4f5" }}
              >
                {stat.value}
              </div>
              <div
                className="text-xs tracking-widest uppercase mt-0.5"
                style={{ color: "rgba(255,255,255,0.35)" }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: loaded ? 1 : 0, transition: "opacity 1s ease 1.2s" }}
      >
        <span className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(255,255,255,0.25)" }}>
          Scroll
        </span>
        <div
          className="w-px h-12"
          style={{
            background: "linear-gradient(to bottom, rgba(91,196,245,0.6), transparent)",
            animation: "pulseHeight 2s ease-in-out infinite",
          }}
        />
      </div>

      {/* Keyframe injection */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: 200% center; }
          100% { background-position: -200% center; }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        @keyframes slideRight {
          0% { transform: rotate(-8deg) translateX(-5%); }
          100% { transform: rotate(-8deg) translateX(5%); }
        }
        @keyframes pulseHeight {
          0%, 100% { opacity: 0.6; transform: scaleY(1); }
          50% { opacity: 1; transform: scaleY(1.15); }
        }
      `}</style>
    </section>
  );
};

export default Hero;