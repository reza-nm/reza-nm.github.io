import { motion } from "framer-motion";
import { faqSection } from "../data/siteData";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./ui/accordion";

export default function FAQ() {
  return (
    <section id="faq" className="border-b border-hairline bg-paper2 py-24">
      <div className="mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-gold2">
            {faqSection.eyebrow}
          </p>
          <h2 className="mt-4 text-center font-display text-3xl font-medium tracking-tight text-inkdark sm:text-4xl">
            {faqSection.title}
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Accordion type="single" collapsible className="mt-10">
            {faqSection.items.map((item, index) => (
              <AccordionItem key={item.q} value={`item-${index}`} className="border-hairline">
                <AccordionTrigger className="font-display text-base font-medium text-inkdark hover:text-gold2">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm leading-relaxed text-inkdim">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
