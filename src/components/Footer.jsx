import { motion } from "framer-motion";
import {
  siteName,
  contactEmail,
  whatsappUrl,
  linkedinUrl,
  calendlyUrl,
  footer,
} from "../data/siteData";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <p className="font-display text-lg font-semibold">{siteName}</p>
            <p className="mt-2 max-w-xs text-sm text-creamdim">{footer.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-creamdim">
              {footer.getInTouchLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href={calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book a call (Calendly)
                </a>
              </li>
              <li>
                <a className="transition-colors hover:text-gold" href={`mailto:${contactEmail}`}>
                  {contactEmail}
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  className="transition-colors hover:text-gold"
                  href={linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-creamdim">
              {footer.exploreLabel}
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              {footer.exploreLinks.map((link) => (
                <li key={link.href}>
                  <a className="transition-colors hover:text-gold" href={link.href}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col gap-2 border-t border-hairlineDark pt-6 text-xs text-creamdim sm:flex-row sm:items-center sm:justify-between"
        >
          <span>© {footer.copyrightYear} {siteName}</span>
        </motion.div>
      </div>
    </footer>
  );
}
