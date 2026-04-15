import { useEffect, useState } from "react";
import logo from "@/assets/protomotive-logo-2.png";

const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 100);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/10 blur-[120px] animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/10 blur-[100px] animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full bg-primary/5 blur-[80px] animate-float" style={{ animationDelay: "1.5s" }} />
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(hsl(204 66% 50% / 0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(204 66% 50% / 0.3) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 ${loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <img
            src={logo}
            alt="Protomotive Logo"
            className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        <h1
          className={`font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-wider mb-6 transition-all duration-1000 delay-300 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-foreground">Where Precision</span>
          <br />
          <span className="text-gradient">Meets Passion</span>
        </h1>

        <p
          className={`text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 font-body transition-all duration-1000 delay-500 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Premium car detailing, PPF, ceramic coating & complete auto care in DHA Phase 8, Lahore
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-700 ${
            loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="#booking"
            className="bg-gradient-cyan text-accent-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-sm tracking-wide hover:opacity-90 transition-opacity glow-cyan"
          >
            Book Appointment
          </a>
          <a
            href="#before-after"
            className="border border-primary/40 text-foreground px-8 py-3.5 rounded-lg font-semibold font-body text-sm tracking-wide hover:border-primary/70 hover:bg-primary/5 transition-all"
          >
            View Our Work
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-fade-up" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
