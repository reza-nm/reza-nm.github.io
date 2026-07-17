import { motion } from "framer-motion";
import { standardsSection } from "../data/siteData";
import { iconMap, accentTextClass } from "../lib/icons";

export default function StandardsSection() {
  return (
    <section className="border-b border-hairline bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {standardsSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {standardsSection.title}
          </h2>
        </motion.div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {standardsSection.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.45, delay: 0.07 * index }}
                className={`flex flex-col justify-between rounded-xl border border-hairline bg-paper2/70 p-6 ${
                  index === 0 ? "sm:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <Icon className={`h-6 w-6 ${accentTextClass[item.accent]}`} strokeWidth={1.5} />
                <div className="mt-5">
                  <h3 className="font-display text-lg font-semibold text-inkdark">
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
