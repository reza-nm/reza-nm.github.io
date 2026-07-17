import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { solutionSection } from "../data/siteData";

export default function SolutionSection() {
  return (
    <section id="solution" className="border-b border-hairline bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-start">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
              {solutionSection.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
              {solutionSection.title}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-inkdim">
              {solutionSection.body}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-xl border border-hairline bg-paper2 p-7"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-inkdim">
              {solutionSection.whatYouGetLabel}
            </p>
            <ul className="mt-4 space-y-4">
              {solutionSection.whatYouGet.map((benefit) => (
                <li key={benefit} className="flex gap-3 text-sm text-inkdark">
                  <CheckCircle2
                    className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold2"
                    strokeWidth={1.5}
                  />
                  <span className="leading-relaxed">{benefit}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
