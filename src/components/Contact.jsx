import { motion } from "framer-motion";
import { Clock } from "lucide-react";
import { contactSection } from "../data/siteData";
import { contactIconMap } from "./ContactIcons";

export default function Contact() {
  return (
    <section id="contact" className="bg-forest py-24 text-cream">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-hairlineDark bg-forest2 px-6 py-14 text-center sm:px-12"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {contactSection.eyebrow}
          </p>
          <h2 className="mx-auto mt-4 max-w-xl font-display text-3xl font-medium tracking-tight sm:text-4xl">
            {contactSection.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-creamdim">
            {contactSection.body}
          </p>

          <div className="mx-auto mt-10 grid max-w-2xl gap-3 sm:grid-cols-2 sm:gap-4">
            {contactSection.methods.map((method, index) => {
              const Icon = contactIconMap[method.icon];
              const isExternal = method.href.startsWith("http");
              return (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.4, delay: 0.06 * index }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-3 rounded-xl border border-hairlineDark bg-forest px-5 py-4 text-left transition-colors hover:border-gold"
                >
                  <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gold/15 text-gold">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-sm font-medium text-cream">
                      {method.label}
                    </span>
                    <span className="block text-xs text-creamdim">{method.sub}</span>
                  </span>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8 flex items-center justify-center gap-2 text-xs text-creamdim"
          >
            <Clock className="h-3.5 w-3.5 text-gold" />
            <span>{contactSection.responseNote}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
