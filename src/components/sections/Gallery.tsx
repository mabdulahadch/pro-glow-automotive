import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const galleryItems = [
  { h: "h-64", bg: "hsl(204 40% 18%)" },
  { h: "h-80", bg: "hsl(210 30% 14%)" },
  { h: "h-56", bg: "hsl(197 50% 20%)" },
  { h: "h-72", bg: "hsl(220 25% 12%)" },
  { h: "h-60", bg: "hsl(204 45% 16%)" },
  { h: "h-76", bg: "hsl(215 35% 15%)" },
  { h: "h-68", bg: "hsl(200 40% 18%)" },
  { h: "h-52", bg: "hsl(204 50% 22%)" },
];

const Gallery = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="gallery" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-muted-foreground font-body">
            Follow us{" "}
            <a
              href="https://www.instagram.com/protomotive.pk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              @protomotive.pk
            </a>
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 max-w-6xl mx-auto">
          {galleryItems.map((item, i) => (
            <a
              key={i}
              href="https://www.instagram.com/protomotive.pk"
              target="_blank"
              rel="noopener noreferrer"
              className={`group block mb-4 break-inside-avoid rounded-xl overflow-hidden relative ${item.h} transition-all duration-500 ${
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
              style={{ background: item.bg, transitionDelay: `${i * 80}ms` }}
            >
              <div className="absolute inset-0 flex items-center justify-center font-heading text-foreground/10 text-sm">
                PROTOMOTIVE
              </div>
              <div className="absolute inset-0 bg-gradient-cyan opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-accent-foreground" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
