import { useScrollAnimation, useCountUp } from "@/hooks/useScrollAnimation";

const stats = [
  { value: 1055, suffix: "+", label: "Jobs Done" },
  { value: 15300, suffix: "+", label: "Happy Followers" },
  { value: 5, suffix: "+", label: "Years in Business" },
];

const StatItem = ({ value, suffix, label, isVisible }: { value: number; suffix: string; label: string; isVisible: boolean }) => {
  const count = useCountUp(value, 2000, isVisible);
  return (
    <div className="text-center px-6 py-8">
      <div className="font-heading text-4xl md:text-5xl font-bold text-gradient mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-muted-foreground text-sm uppercase tracking-widest font-body">{label}</div>
    </div>
  );
};

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="py-16 border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
