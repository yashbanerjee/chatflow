import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "ChatFlow paid for itself in the first week. Our conversion rate jumped 40% and customer satisfaction is through the roof.",
    author: "Sarah Chen",
    role: "Founder, Luxe Accessories",
    avatar: "SC",
  },
  {
    quote: "Setup took 5 minutes. Within a day, the AI was making better product recommendations than our support team.",
    author: "Marcus Johnson",
    role: "CEO, Urban Outfitters Co",
    avatar: "MJ",
  },
  {
    quote: "The real-time analytics showed us exactly where customers were dropping off. We fixed those issues and doubled our revenue.",
    author: "Elena Rodriguez",
    role: "E-commerce Director, StyleHub",
    avatar: "ER",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Testimonials
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Loved by E-commerce Brands
          </motion.h2>
        </div>

        {/* Testimonials grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-2xl border border-border p-6 lg:p-8"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-hero flex items-center justify-center">
                  <span className="text-primary-foreground text-sm font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-sm">{testimonial.author}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
