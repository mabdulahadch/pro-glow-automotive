import { MessageCircle } from "lucide-react";

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp */}
      <a
        href="https://wa.me/923005005666?text=Hi, I'd like to book an appointment."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} className="text-white" />
      </a>

      {/* Pulsing Book Now - desktop only */}
      <a
        href="#booking"
        className="fixed bottom-6 left-6 z-50 hidden md:flex items-center gap-2 bg-gradient-cyan text-accent-foreground px-5 py-3 rounded-full font-semibold font-body text-sm animate-pulse-glow hover:scale-105 transition-transform shadow-lg"
      >
        Book Now
      </a>
    </>
  );
};

export default FloatingButtons;
