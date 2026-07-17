import { motion } from "framer-motion";
import { problemSection } from "../data/siteData";
import { iconMap } from "../lib/icons";

export default function ProblemSection() {
  return (
    <section className="border-b border-hairline bg-paper2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {problemSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {problemSection.title}
          </h2>
          <p className="mt-3 max-w-xl text-base text-inkdim">
            {problemSection.subtitle}
          </p>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {problemSection.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: (index % 4) * 0.06 }}
                className="flex gap-4 rounded-xl border border-hairline bg-paper p-6"
              >
                <Icon className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold2" strokeWidth={1.5} />
                <div>
                  <h3 className="font-display text-base font-semibold text-inkdark">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-inkdim">
                    {item.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
