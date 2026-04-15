import { useState, useRef, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import before1 from "@/assets/b2.png";
import after1 from "@/assets/a1.png";


const comparisons = [
  { label: "Ceramic Coating", before: "hsl(220 20% 15%)", after: "hsl(204 66% 30%)" },
  { label: "Paint Correction", before: before1, after: after1 },
  { label: "Interior Detailing", before: "hsl(220 15% 18%)", after: "hsl(197 70% 32%)" },
  { label: "Full Restoration", before: "hsl(220 25% 10%)", after: "hsl(204 66% 28%)" },
];

const ComparisonSlider = ({ label, before, after }: { label: string; before: string; after: string }) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current || !isDragging.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    setPosition((x / rect.width) * 100);
  }, []);

  const startDrag = () => { isDragging.current = true; };
  const stopDrag = () => { isDragging.current = false; };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative h-64 md:h-72 rounded-xl overflow-hidden cursor-col-resize border border-border"
        onMouseDown={startDrag}
        onMouseUp={stopDrag}
        onMouseLeave={stopDrag}
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchStart={startDrag}
        onTouchEnd={stopDrag}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Before */}
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: before }}>
          <img
            src={before}
            alt="Before"
            className="absolute inset-0 w-full h-full object-cover"
          />

          <span className="font-heading text-foreground/30 text-xl">BEFORE</span>
        </div>
        {/* After */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: after, clipPath: `inset(0 0 0 ${position}%)` }}
        >

          <img
  src={after}
  alt="After"
  className="absolute inset-0 w-full h-full object-cover"
  style={{ clipPath: `inset(0 0 0 ${position}%)` }}
/>


          <span className="font-heading text-foreground/60 text-xl">AFTER</span>
        </div>
        {/* Slider line */}
        <div className="absolute top-0 bottom-0 w-0.5 bg-foreground/80" style={{ left: `${position}%` }}>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-foreground/90 flex items-center justify-center shadow-lg">
            <span className="text-background text-xs font-bold">⇔</span>
          </div>
        </div>
      </div>
      <p className="text-center text-sm text-muted-foreground mt-3 font-body">{label}</p>
    </div>
  );
};

const BeforeAfter = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="before-after" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our Work <span className="text-gradient">Speaks</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-body">
            Drag the slider to reveal the transformation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {comparisons.map((comp) => (
            <ComparisonSlider key={comp.label} {...comp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeforeAfter;
