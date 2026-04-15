import { Phone, MapPin, Clock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Contact = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Find <span className="text-gradient">Us</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-border h-80 lg:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.5!2d74.4089!3d31.4697!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDI4JzEwLjkiTiA3NMKwMjQnMzIuMCJF!5e0!3m2!1sen!2s!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Protomotive Location"
            />
          </div>

          {/* Contact info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                <Phone size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1 text-foreground">Call Us</h3>
                <a href="tel:+923005005666" className="text-primary hover:underline font-body text-lg">
                  0300-5005666
                </a>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                <MapPin size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1 text-foreground">Address</h3>
                <p className="text-muted-foreground font-body">Plot 413, DHA Phase 8, Lahore, Pakistan</p>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-gradient-cyan flex items-center justify-center shrink-0">
                <Clock size={20} className="text-accent-foreground" />
              </div>
              <div>
                <h3 className="font-heading text-sm font-semibold mb-1 text-foreground">Working Hours</h3>
                <table className="text-sm text-muted-foreground font-body">
                  <tbody>
                    <tr><td className="pr-4 py-0.5">Monday – Sunday</td><td>10:00 AM – 9:00 PM</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
