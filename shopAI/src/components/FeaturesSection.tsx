import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { 
  MessageSquare, 
  ShoppingBag, 
  Sparkles, 
  TrendingUp, 
  Zap, 
  BarChart3 
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Natural Conversations",
    description: "Friendly AI persona that engages customers like a real shopping assistant, building trust and rapport.",
  },
  {
    icon: ShoppingBag,
    title: "Smart Shopping Assistant",
    description: "Understands customer lifestyles and personalities to provide truly personalized shopping experiences.",
  },
  {
    icon: Sparkles,
    title: "Personalized Recommendations",
    description: "AI analyzes browsing behavior to suggest products customers will love, increasing basket size.",
  },
  {
    icon: TrendingUp,
    title: "Instant Upselling & Cross-Selling",
    description: "Automatically identifies opportunities to grow sales — even while you sleep.",
  },
  {
    icon: Zap,
    title: "Quick Checkouts",
    description: "Streamlined purchase flow promotes faster checkouts, perfect for impulse buying.",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics",
    description: "Behavior analysis and reporting gives you actionable insights to optimize your store.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            className="text-primary font-medium text-sm uppercase tracking-wider"
          >
            Features
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6"
          >
            Everything You Need to Sell More
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Powerful AI capabilities designed to convert browsers into buyers 
            and maximize every customer interaction.
          </motion.p>
        </div>

        {/* Features grid */}
        <div ref={ref} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-card transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl gradient-hero flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
