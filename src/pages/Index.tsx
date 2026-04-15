import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import BeforeAfter from "@/components/sections/BeforeAfter";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Gallery from "@/components/sections/Gallery";
import BookingForm from "@/components/sections/BookingForm";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import FloatingButtons from "@/components/FloatingButtons";
// import Pointer from "@/components/Pointer";
import { useEffect, useRef, useState} from "react";

import carBg from "@/assets/car.png";

const Index = () => {
  // const [pos, setPos] = useState({ x: 0, y: 0 });

  // useEffect(() => {
  //   const handleMove = (e) => {
  //     setPos({ x: e.clientX, y: e.clientY });
  //   };

  //   window.addEventListener("mousemove", handleMove);
  //   return () => window.removeEventListener("mousemove", handleMove);
  // }, []);



    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animRef = useRef<number>();
  


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

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      {/* Global Particle Canvas */}


        {/* <Pointer x={pos.x} y={pos.y} /> */}

         <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              to bottom,
              rgba(18, 38, 66, 0.85) 0%,
              rgba(3,8,15,0.7) 40%,
              rgba(3,8,15,0.95) 100%
            ),
            url(${carBg})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          filter: "brightness(1) contrast(1.1)",
        }}
      />

      <canvas 
        ref={canvasRef} 
        className="fixed inset-0 z-0 pointer-events-none" 
        style={{ opacity: 0.6 }}
      />


      
      <div className="relative z-10">
        <Navbar />
        <Hero />
        {/* <Stats /> */}
        <Services />
        <BeforeAfter />
        <WhyChooseUs />
        <Testimonials />
        <Gallery />
        <BookingForm />
        <Contact />
        <Footer />
        <FloatingButtons />
      </div>
    </div>
  );
};

export default Index;
