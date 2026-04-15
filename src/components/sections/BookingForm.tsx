import { useState } from "react";
import { CalendarIcon, Send } from "lucide-react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { toast } from "sonner";

const services = [
  "Paint Protection Film (PPF)",
  "Vinyl Wrapping",
  "Ceramic Coating",
  "Oil Change & Maintenance",
  "Auto Detailing",
  "Complete Restoration",
];

const BookingForm = () => {
  const { ref, isVisible } = useScrollAnimation();
  const [date, setDate] = useState<Date>();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [carModel, setCarModel] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'd like to book an appointment.\nName: ${name}\nPhone: ${phone}\nCar: ${carModel}\nService: ${service}\nDate: ${date ? format(date, "PPP") : "Flexible"}`;
    const waUrl = `https://wa.me/923005005666?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  return (
    <section id="booking" className="py-24 bg-card/50">
      <div className="container mx-auto px-4">
        <div ref={ref} className={`text-center mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Book an <span className="text-gradient">Appointment</span>
          </h2>
          <p className="text-muted-foreground font-body max-w-md mx-auto">
            Fill in your details and we'll get back to you via WhatsApp
          </p>
        </div>

        <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-5">
          <Input
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12 font-body"
          />
          <Input
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12 font-body"
          />
          <Input
            placeholder="Car Model (e.g. Toyota Corolla 2023)"
            value={carModel}
            onChange={(e) => setCarModel(e.target.value)}
            required
            className="bg-secondary border-border text-foreground placeholder:text-muted-foreground h-12 font-body"
          />

          <Select value={service} onValueChange={setService} required>
            <SelectTrigger className="bg-secondary border-border text-foreground h-12 font-body">
              <SelectValue placeholder="Select Service" />
            </SelectTrigger>
            <SelectContent className="bg-card border-border">
              {services.map((s) => (
                <SelectItem key={s} value={s} className="font-body">{s}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={cn(
                  "w-full justify-start text-left font-body bg-secondary border-border h-12",
                  !date && "text-muted-foreground"
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {date ? format(date, "PPP") : "Preferred Date"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0 bg-card border-border" align="start">
              <Calendar
                mode="single"
                selected={date}
                onSelect={setDate}
                disabled={(d) => d < new Date()}
                initialFocus
                className={cn("p-3 pointer-events-auto")}
              />
            </PopoverContent>
          </Popover>

          <Button
            type="submit"
            className="w-full h-12 bg-gradient-cyan text-accent-foreground font-semibold font-body text-sm tracking-wide hover:opacity-90 transition-opacity glow-cyan"
          >
            <Send size={16} className="mr-2" />
            Schedule My Visit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default BookingForm;
