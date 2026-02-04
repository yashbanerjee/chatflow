import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { UserPlus, Upload, Rocket } from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "Sign Up in Seconds",
    description: "Create your account with just an email. No complex onboarding or technical knowledge required.",
  },
  {
    icon: Upload,
    step: "02",
    title: "Upload Your Products",
    description: "Connect your Shopify or WordPress store, or upload your product catalog. We'll do the rest.",
  },
  {
    icon: Rocket,
    step: "03",
    title: "Go Live & Start Selling",
    description: "Add one line of code and your AI assistant is live, engaging customers 24/7.",
  },
];

const HowItWorksSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            How It Works
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            From Sign Up to Selling in Minutes
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We've made it ridiculously simple. Three steps is all it takes 
            to have an AI sales assistant working for you.
          </motion.p>
        </div>

        {/* Steps */}
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="relative text-center lg:text-left"
              >
                {/* Connector line (hidden on mobile) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-px bg-gradient-to-r from-border to-transparent -translate-x-8" />
                )}

                {/* Step number */}
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-card border border-border shadow-card mb-6">
                  <span className="font-display text-3xl font-bold text-primary">
                    {step.step}
                  </span>
                </div>

                <h3 className="font-display text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
