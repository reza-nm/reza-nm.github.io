import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { processSection } from "../data/siteData";

export default function Process() {
  const timelineRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.6"],
  });

  // Gold progress line height grows from 0% to 100% as the timeline scrolls into view.
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="border-b border-hairline bg-paper2 py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {processSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {processSection.title}
          </h2>
        </motion.div>

        <div ref={timelineRef} className="relative mt-14">
          <div className="absolute left-[18px] top-2 bottom-2 hidden w-px bg-hairline sm:block" />
          <motion.div
            className="absolute left-[18px] top-2 hidden w-px bg-gold sm:block"
            style={{ height: lineHeight }}
          />

          <ol className="space-y-10">
            {processSection.steps.map((step, index) => (
              <motion.li
                key={step.n}
                initial={{ opacity: 0, x: -14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-15%" }}
                transition={{ duration: 0.5, delay: (index % 3) * 0.06 }}
                className="relative flex gap-6 sm:gap-8"
              >
                <span className="relative z-10 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border border-hairline bg-paper text-xs font-semibold text-gold2">
                  {step.n}
                </span>
                <div className="-mt-1">
                  <h3 className="font-display text-lg font-semibold text-inkdark">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-inkdim">
                    {step.body}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
