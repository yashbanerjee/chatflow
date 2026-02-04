import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const IntegrationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="integrations" className="py-20 lg:py-32 gradient-subtle">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <span className="text-primary font-medium text-sm uppercase tracking-wider">
                Integrations
              </span>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-4 mb-6">
                Works Where You Already Sell
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                One-click integration with the platforms you already use. 
                No developers needed, no complex setup.
              </p>

              <div className="space-y-4">
                {/* Shopify */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-[#96bf48]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#96bf48">
                      <path d="M15.337 4.057c-.08-.096-.16-.136-.272-.136-.096 0-1.409.048-1.409.048s-.928-.912-1.04-1.024c-.096-.096-.288-.064-.352-.048-.016 0-.512.16-.896.272-.08-.24-.208-.528-.384-.816-.576-.912-1.408-1.392-2.416-1.392h-.112c-.112-.144-.256-.224-.384-.224-.944.016-1.872.704-2.64 1.936-.544.864-.96 1.952-1.072 2.8l-1.84.576c-.544.176-.56.192-.624.704-.048.368-.576 4.4-.576 4.4L14.497 11.7V5.014l.001-.054c-.032-.656-.176-.784-.224-.88-.048-.08-.128-.16-.256-.032l.016.009zm-2.256.496l-1.664.512c0-.016-.016-.032-.016-.048.096-.688.368-1.424.8-1.936.16-.192.384-.4.64-.528.16.272.256.528.24.784v.416c0 .32-.016.608-.064.8h.064zm-1.744-2.08c.208 0 .4.064.576.192-.24.128-.464.32-.672.56-.544.64-.96 1.632-1.12 2.592L9.225 5.65c.16-.496.432-1.12.816-1.6.144-.176.352-.368.592-.496.192-.064.4-.08.704-.08zm-.864 8.752l-.608 1.872s-.672-.352-1.488-.288c-1.2.08-1.2.816-1.2.992 0 1.072 1.408 1.488 1.408 2.528 0 1.024-.656 1.68-1.536 1.68-1.04 0-1.568-.656-1.568-.656l.288-.944s.56.48 1.024.48c.304 0 .432-.24.432-.416 0-1.168-1.312-1.12-1.312-2.384 0-1.232.88-2.416 2.656-2.416 1.024 0 1.584.304 1.584.304l-.68-.752z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">Shopify</h4>
                    <p className="text-sm text-muted-foreground">
                      Install from the Shopify App Store in seconds
                    </p>
                  </div>
                </div>

                {/* WordPress */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-[#21759b]/10 flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#21759b">
                      <path d="M12.158 12.786l-2.698 7.84c.806.236 1.657.365 2.54.365 1.047 0 2.051-.18 2.986-.516a.497.497 0 01-.044-.086l-2.784-7.603zm-6.47-4.353c-.068-.436-.12-.86-.12-1.182 0-.612.033-1.225.156-1.838C4.142 6.884 3.044 9.227 3.044 11.89c0 .668.062 1.327.181 1.965l3.463-9.422zM12.002 2.8c-.885 0-1.738.137-2.546.37l2.702 7.85 2.765-7.584c-.916-.41-1.913-.636-2.921-.636zm8.945 4.638c0 .46-.015.909-.088 1.32-.014.08-.037.172-.06.264-.015.074-.03.148-.047.22-.29 1.205-.88 2.534-1.653 3.785l-3.323 9.615a9.007 9.007 0 004.226-7.642c0-2.822-1.163-5.376-3.055-7.2l-.09.08c1.16.868 2.25 2.177 3.003 3.752a7.697 7.697 0 01.53 1.544l.11.053a.523.523 0 01.447.226z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-semibold">WordPress / WooCommerce</h4>
                    <p className="text-sm text-muted-foreground">
                      Simple plugin installation, works out of the box
                    </p>
                  </div>
                </div>

                {/* Custom */}
                <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <span className="text-xl">{"</>"}</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Custom Websites</h4>
                    <p className="text-sm text-muted-foreground">
                      Add one line of JavaScript to any website
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Visual */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-card rounded-2xl border border-border p-6 shadow-card">
                <div className="bg-muted rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <p className="text-muted-foreground">{"<!-- Add before </body> -->"}</p>
                  <p className="mt-2">
                    <span className="text-primary">{"<script"}</span>
                    <span className="text-foreground">{" src="}</span>
                    <span className="text-green-600">"https://cdn.chatflow.ai/widget.js"</span>
                    <span className="text-primary">{">"}</span>
                  </p>
                  <p>
                    <span className="text-primary">{"</script>"}</span>
                  </p>
                </div>
                <p className="text-center text-sm text-muted-foreground mt-4">
                  That's it. One line of code. ✨
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsSection;
