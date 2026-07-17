import { motion } from "framer-motion";
import { TriangleAlert, WandSparkles, TrendingUp, ExternalLink } from "lucide-react";
import { caseStudiesSection } from "../data/siteData";

export default function CaseStudies() {
  return (
    <section id="work" className="border-b border-hairline bg-paper py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {caseStudiesSection.eyebrow}
          </p>
          <h2 className="mt-4 max-w-xl font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {caseStudiesSection.title}
          </h2>
          <p className="mt-3 max-w-xl text-sm text-inkdim">
            {caseStudiesSection.subtitle}
          </p>
        </motion.div>

        <div className="mt-14 space-y-14">
          {caseStudiesSection.items.map((item, index) => (
            <motion.article
              key={item.industry}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5 }}
              className={`grid items-start gap-8 rounded-xl border border-hairline bg-paper2/60 p-7 sm:p-9 md:grid-cols-[0.85fr_1.15fr] ${
                index % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                {/* Website screenshot/mockup — set item.image in siteData.js to change it */}
                {item.image && (
                  <img
                    src={item.image}
                    alt={`${item.industry} website preview`}
                    className="mb-5 aspect-[4/3] w-full rounded-lg border border-hairline object-cover"
                  />
                )}

                <span
                  className="inline-flex items-center rounded-full px-3 py-1 text-xs font-medium text-paper"
                  style={{ backgroundColor: item.accent }}
                >
                  {item.tag}
                </span>
                <h3 className="mt-4 font-display text-2xl font-semibold text-inkdark">
                  {item.industry}
                </h3>

                {/* Visit-website button — set item.websiteUrl in siteData.js. Leave it "" to hide this button. */}
                {item.websiteUrl && (
                  <a
                    href={item.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 rounded-full border border-hairline bg-paper px-5 py-2.5 text-sm font-medium text-inkdark transition-colors hover:border-gold hover:text-gold2"
                  >
                    Visit website
                    <ExternalLink className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                )}
              </div>

              <div className="space-y-5">
                <div className="flex gap-3">
                  <TriangleAlert className="mt-0.5 h-5 w-5 flex-shrink-0 text-coral" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-inkdim">
                      The problem
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-inkdim">{item.problem}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <WandSparkles className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold2" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-inkdim">
                      Design improvements
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-inkdim">{item.redesign}</p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <TrendingUp className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" strokeWidth={1.5} />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-inkdim">
                      Expected business impact
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-inkdim">{item.impact}</p>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
