import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
  { value: "35%", label: "Average Increase in Conversion Rate" },
  { value: "4.2x", label: "Return on Investment" },
  { value: "68%", label: "Reduction in Cart Abandonment" },
  { value: "24/7", label: "Sales Coverage" },
];

const StatsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </p>
              <p className="text-sm sm:text-base text-background/70">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
