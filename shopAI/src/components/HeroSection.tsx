import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-subtle" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              Now with Shopify & WordPress Integration
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-balance mb-6"
          >
            Turn Every Visitor Into a{" "}
            <span className="text-primary">Paying Customer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 text-balance"
          >
            AI-powered shopping assistant that understands your customers, 
            recommends products, and drives sales 24/7 — even while you sleep.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="hero" size="xl">
              Start Free 14-Day Trial
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="hero-outline" size="xl">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 text-sm text-muted-foreground"
          >
            No credit card required • Setup in under 5 minutes • Cancel anytime
          </motion.p>
        </div>

        {/* Hero Image/Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-16 lg:mt-20 relative"
        >
          <div className="relative mx-auto max-w-5xl">
            {/* Browser mockup */}
            <div className="rounded-xl overflow-hidden shadow-2xl border border-border bg-card">
              {/* Browser header */}
              <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-destructive/60" />
                  <div className="w-3 h-3 rounded-full bg-primary/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/60" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-background rounded-md px-4 py-1.5 text-xs text-muted-foreground max-w-md mx-auto">
                    yourstore.com
                  </div>
                </div>
              </div>
              {/* Content area */}
              <div className="bg-gradient-to-br from-background to-muted/30 p-8 sm:p-12 min-h-[300px] sm:min-h-[400px] flex items-center justify-center">
                {/* Chat widget mockup */}
                <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 w-72 sm:w-80">
                  <div className="bg-card rounded-2xl shadow-2xl border border-border overflow-hidden animate-float">
                    <div className="gradient-hero p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                        <span className="text-primary-foreground text-lg">🤖</span>
                      </div>
                      <div>
                        <p className="text-primary-foreground font-medium text-sm">ChatFlow Assistant</p>
                        <p className="text-primary-foreground/70 text-xs">Online • Typically replies instantly</p>
                      </div>
                    </div>
                    <div className="p-4 space-y-3">
                      <div className="bg-muted rounded-xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm">Hey! 👋 Looking for the perfect gift? I can help you find exactly what you need!</p>
                      </div>
                      <div className="bg-primary text-primary-foreground rounded-xl rounded-tr-sm p-3 max-w-[80%] ml-auto">
                        <p className="text-sm">Yes! I need a birthday gift for my wife</p>
                      </div>
                      <div className="bg-muted rounded-xl rounded-tl-sm p-3 max-w-[80%]">
                        <p className="text-sm">Great! What are her interests? I'll find personalized recommendations ✨</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
