import { Shield, Paintbrush, Droplets, Wrench, Sparkles, RotateCcw } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  { icon: Shield, title: "Paint Protection Film", desc: "Ultimate PPF defense against scratches, chips & UV damage" },
  { icon: Paintbrush, title: "Vinyl Wrapping", desc: "Transform your ride with premium vinyl in any color or finish" },
  { icon: Droplets, title: "Ceramic Coating", desc: "Long-lasting hydrophobic shine with nano-ceramic technology" },
  { icon: Wrench, title: "Oil Change & Maintenance", desc: "Full-service oil changes and preventive auto maintenance" },
  { icon: Sparkles, title: "Auto Detailing", desc: "Interior & exterior detailing to showroom perfection" },
  { icon: RotateCcw, title: "Complete Restoration", desc: "Full body restoration bringing classics back to life" },
];

const ServiceCard = ({ icon: Icon, title, desc, index }: { icon: typeof Shield; title: string; desc: string; index: number }) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`group relative p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-500 cursor-pointer ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 rounded-xl bg-gradient-cyan opacity-0 group-hover:opacity-[0.05] transition-opacity duration-500" />

      <div className="relative z-10">
        <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon size={22} className="text-accent-foreground" />
        </div>
        <h3 className="font-heading text-lg font-semibold mb-2 text-foreground">{title}</h3>
        <p className="text-sm text-muted-foreground font-body leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto font-heading">
            Premium auto care services tailored for every vehicle
          </p>
        </div>

        <div className="font-heading grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
