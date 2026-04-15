import { Users, Award, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const features = [
  { icon: Users, title: "Expert Team", desc: "Trained professionals with years of premium auto care experience" },
  { icon: Award, title: "Premium Products", desc: "We use only the finest detailing & protection products" },
  { icon: MapPin, title: "DHA Phase 8", desc: "Conveniently located in the heart of DHA, Lahore" },
  { icon: Clock, title: "10AM – 9PM Daily", desc: "Open 7 days a week for your convenience" },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-gradient">Choose Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {features.map((feat, i) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className={`text-center p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${i * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-full bg-gradient-cyan flex items-center justify-center mx-auto mb-4">
                  <Icon size={24} className="text-accent-foreground" />
                </div>
                <h3 className="font-heading text-sm font-semibold mb-2 text-foreground">{feat.title}</h3>
                <p className="text-xs text-muted-foreground font-body leading-relaxed">{feat.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
