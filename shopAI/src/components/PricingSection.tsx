import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: 45,
    users: "300",
    description: "Perfect for small stores just getting started",
    features: [
      "Up to 300 monthly conversations",
      "AI product recommendations",
      "Basic analytics dashboard",
      "Shopify & WordPress integration",
      "Email support",
    ],
    popular: false,
  },
  {
    name: "Growth",
    price: 85,
    users: "1,000",
    description: "For growing businesses ready to scale",
    features: [
      "Up to 1,000 monthly conversations",
      "Advanced upselling & cross-selling",
      "Real-time behavior analytics",
      "Custom AI persona training",
      "Priority support",
      "A/B testing",
    ],
    popular: true,
  },
  {
    name: "Scale",
    price: 125,
    users: "3,000",
    description: "For high-volume stores maximizing revenue",
    features: [
      "Up to 3,000 monthly conversations",
      "Everything in Growth",
      "Advanced reporting & insights",
      "Dedicated success manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="pricing" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Pricing
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Simple, Transparent Pricing
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Choose the plan that fits your business. All plans include a 14-day free trial.
          </motion.p>
        </div>

        {/* Pricing cards */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.popular
                  ? "bg-foreground text-background border-2 border-primary shadow-glow"
                  : "bg-card border border-border"
              }`}
            >
              {plan.popular && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full gradient-hero text-primary-foreground text-xs font-semibold">
                  Most Popular
                </span>
              )}

              <div className="mb-6">
                <h3 className="font-display text-xl font-semibold mb-2">
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="mb-6">
                <span className="font-display text-4xl font-bold">${plan.price}</span>
                <span className={`text-sm ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  /month
                </span>
                <p className={`text-sm mt-1 ${plan.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  Up to {plan.users} users
                </p>
              </div>

              <Button
                variant={plan.popular ? "hero" : "hero-outline"}
                className="w-full mb-6"
                size="lg"
              >
                Start Free Trial
              </Button>

              <ul className="space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check className={`w-4 h-4 mt-0.5 shrink-0 ${plan.popular ? "text-primary" : "text-primary"}`} />
                    <span className={plan.popular ? "text-background/90" : "text-muted-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* ROI note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-muted-foreground mt-12"
        >
          Average customer sees 4.2x ROI within the first month • 
          <a href="#" className="text-primary hover:underline ml-1">Calculate your potential revenue →</a>
        </motion.p>
      </div>
    </section>
  );
};

export default PricingSection;
