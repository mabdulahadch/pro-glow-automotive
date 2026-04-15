import { Instagram } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import img1 from "@/assets/img1.jpeg";
import img2 from "@/assets/img2.jpeg"
import img3 from "@/assets/img3.jpeg"
import img4 from "@/assets/img4.png"
import img5 from "@/assets/img5.png"
import img6 from "@/assets/img6.jpeg"
import img7 from "@/assets/img7.jpeg"

const galleryItems = [
  { h: "h-64", bg: img3 },
  { h: "h-80", bg: img2 },

  { h: "h-80", bg: img1 },
  { h: "h-64", bg: img4 },

  { h: "h-64", bg: img7 },
  { h: "h-80", bg: img6 },

  { h: "h-64", bg: img2 },
  { h: "h-80", bg: img5 },
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

              <img
                src={item.bg}
                alt={`Protomotive work ${i + 1}`}
                className="absolute inset-0 w-full h-full object-cover"
              />

 <div className="absolute inset-0 bg-black/20" />

              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-gradient-cyan opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-accent-foreground" />
              </div>


              {/* <div className="absolute inset-0 flex items-center justify-center font-heading text-foreground/10 text-sm">
                PROTOMOTIVE
              </div>
              <div className="absolute inset-0 bg-gradient-cyan opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                <Instagram size={32} className="text-accent-foreground" />
              </div> */}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
