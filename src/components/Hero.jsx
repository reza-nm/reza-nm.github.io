import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { MessageCircle, Star, CheckCircle2 } from "lucide-react";
import { hero } from "../data/siteData";

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // As the hero scrolls out of view: fade the glow, drift content down, fade it out.
  const glowOpacity = useTransform(scrollYProgress, [0, 1], [1, 0.25]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate overflow-hidden bg-forest text-cream"
    >
      {/* Ambient background glow — two soft blurred blobs that drift slowly */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 blur-2xl will-change-transform"
        style={{ opacity: glowOpacity }}
      >
        <motion.div
          className="absolute -left-16 -top-16 h-72 w-72 rounded-full bg-gold/35"
          animate={{ x: [0, 24, 0], y: [0, 30, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-10 bottom-0 h-72 w-72 rounded-full bg-[#7E9C8B]/30"
          animate={{ x: [0, -20, 0], y: [0, -24, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>

      {/* Gradient overlay to keep text readable over the glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-forest/10 via-forest/50 to-forest"
      />

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative mx-auto max-w-6xl px-6 pt-14 pb-24 md:pt-16 md:pb-28"
      >
        <div className="grid gap-16 md:grid-cols-[1.05fr_1fr] md:items-center">
          {/* Left column: headline, subheadline, body copy, CTAs */}
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 break-words font-display text-[2rem] font-medium leading-[1.15] tracking-tight sm:text-4xl md:text-[3rem]"
            >
              {hero.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 max-w-md font-display text-lg leading-snug text-gold sm:text-xl"
            >
              {hero.subtitle}
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-5 max-w-md text-base leading-relaxed text-creamdim"
            >
              {hero.body}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-9 flex flex-wrap items-center gap-4"
            >
              <a
                href={hero.primaryCta.href}
                className="rounded-full bg-gold px-7 py-3 font-medium text-forest transition-colors hover:bg-gold2"
              >
                {hero.primaryCta.label}
              </a>
              <a
                href={hero.secondaryCta.href}
                className="rounded-full border border-hairlineDark px-7 py-3 font-medium text-cream transition-colors hover:border-gold hover:text-gold"
              >
                {hero.secondaryCta.label}
              </a>
            </motion.div>
          </div>

          {/* Right column: illustrative "app/website mockup" card with floating notification chips */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="relative rounded-2xl border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-xl">
              <div className="flex items-center gap-1.5 pb-3">
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              </div>

              <div className="flex items-center gap-3 rounded-xl bg-forest2/70 p-4">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gold text-forest">
                  <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none">
                    <circle cx="9" cy="9.5" r="1.2" fill="currentColor" />
                    <circle cx="15" cy="9.5" r="1.2" fill="currentColor" />
                    <path
                      d="M8 14c1 1.3 2.4 2 4 2s3-0.7 4-2"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                </span>
                <div>
                  <div className="h-2.5 w-28 rounded-full bg-cream/70" />
                  <div className="mt-2 h-2 w-20 rounded-full bg-white/20" />
                </div>
              </div>

              <div className="mt-3 h-9 w-full rounded-lg bg-white/10" />
            </div>
            <div className="mx-auto -mt-1 h-3 w-[88%] rounded-b-xl bg-white/10" />

            {/* Floating notification: new inquiry */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 0.7 }}
              className="absolute -right-3 top-2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg sm:right-0"
            >
              <MessageCircle className="h-4 w-4 flex-shrink-0 text-gold" />
              <div>
                <p className="text-[11px] font-medium text-cream">New inquiry</p>
                <p className="text-[10px] text-creamdim">"Can I book a visit?"</p>
              </div>
            </motion.div>

            {/* Floating notification: builds trust fast */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: -10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1 }}
              className="absolute -left-4 top-1/2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg"
            >
              <Star className="h-4 w-4 flex-shrink-0 fill-current text-gold" strokeWidth={0} />
              <div>
                <p className="text-[11px] font-medium text-cream">Builds trust fast</p>
                <p className="text-[10px] text-creamdim">clear, professional design</p>
              </div>
            </motion.div>

            {/* Floating notification: booking confirmed */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85, x: 10 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.45, delay: 1.3 }}
              className="absolute -right-2 bottom-2 flex items-center gap-2 rounded-xl border border-white/15 bg-forest2/95 px-3 py-2 shadow-lg sm:right-2"
            >
              <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-gold" />
              <div>
                <p className="text-[11px] font-medium text-cream">Booking confirmed</p>
                <p className="text-[10px] text-creamdim">for Thursday, 3 PM</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
