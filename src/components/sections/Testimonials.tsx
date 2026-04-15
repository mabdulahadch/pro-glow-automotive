import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const reviews = [
  { name: "Ahmed Fazeell", text: "Classy English Environmental Workshop, Nice Team, Great Job", rating: 5 },
  { name: "Ali Raza", text: "Best PPF and ceramic coating service in Lahore. My car looks brand new!", rating: 5 },
  { name: "Hassan M.", text: "Incredible attention to detail. The vinyl wrap exceeded my expectations.", rating: 5 },
  { name: "Usman K.", text: "Professional team, premium products, and outstanding results every time.", rating: 5 },
  { name: "Bilal S.", text: "Got my car detailed here. The transformation was unreal. Highly recommended!", rating: 5 },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reviews.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Reviews</span>
          </h2>
          <div className="inline-flex items-center gap-2 bg-secondary px-4 py-1.5 rounded-full text-xs text-muted-foreground font-body">
            <span className="text-primary">★</span> Google Reviews
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="relative overflow-hidden" style={{ minHeight: 200 }}>
            {reviews.map((review, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex flex-col items-center justify-center text-center transition-all duration-700 px-6 ${
                  i === current ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                }`}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} size={18} className="fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-lg md:text-xl text-foreground font-body italic mb-6 leading-relaxed">
                  "{review.text}"
                </p>
                <p className="text-sm text-muted-foreground font-body font-medium">— {review.name}</p>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
                }`}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
