import { motion } from "framer-motion";
import { workingTogetherSection } from "../data/siteData";
import { iconMap } from "../lib/icons";

export default function WorkingTogether() {
  return (
    <section id="testimonials" className="border-b border-hairline bg-paper2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {workingTogetherSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {workingTogetherSection.title}
          </h2>
        </motion.div>

        <div className="mt-12 divide-y divide-hairline overflow-hidden rounded-xl border border-hairline bg-paper sm:grid sm:grid-cols-2 sm:divide-y-0 sm:divide-x lg:grid-cols-3">
          {workingTogetherSection.items.map((item, index) => {
            const Icon = iconMap[item.icon];
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.4, delay: (index % 3) * 0.06 }}
                className="flex items-start gap-4 p-6"
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
