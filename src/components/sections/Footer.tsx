import { Instagram } from "lucide-react";
import logo from "@/assets/Vector1.png";
import logo1 from "@/assets/logo1.png";

const Footer = () => {
  return (
    <footer className="border-t border-primary/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {/* Logo */}
          <div>
            <div className="flex items-center gap-2">
              <img src={logo} alt="Protomotive" className="h-10 mb-4" />
              <img src={logo1} alt="Protomotive" className="h-10 mb-4" />
            </div>
            <p className="text-sm text-muted-foreground font-heading">
              Premium car detailing & auto care centre in DHA Phase 8, Lahore.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {["Services", "Gallery", "Reviews", "Contact", "Booking"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-xs text-muted-foreground hover:text-foreground transition-colors font-heading"
                >
                  {link === "Booking" ? "Book Appointment" : link}
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-heading text-xs font-semibold uppercase tracking-widest mb-4 text-foreground">Follow Us</h4>
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/protomotive.pk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <Instagram size={18} className="text-muted-foreground" />
              </a>
              <a
                href="https://wa.me/923005005666"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-secondary border border-border flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-muted-foreground">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="currentColor"/>
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.955 9.955 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a8 8 0 01-4.243-1.214l-.301-.18-2.868.852.852-2.868-.18-.301A8 8 0 1112 20z" fill="currentColor"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center">
          <p className="text-xs text-muted-foreground font-body">
            © {new Date().getFullYear()} Protomotive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
