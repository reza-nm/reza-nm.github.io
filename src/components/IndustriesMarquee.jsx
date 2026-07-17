import { industries } from "../data/siteData";

export default function IndustriesMarquee() {
  // Duplicate the list so the CSS animation can loop seamlessly at -50%.
  const loopedIndustries = [...industries, ...industries];

  return (
    <section className="overflow-hidden border-b border-hairline bg-paper py-10">
      <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-inkdim">
        Industries I design for
      </p>

      <div className="relative mt-6 w-full overflow-hidden">
        <div className="flex w-max animate-marquee items-center gap-12">
          {loopedIndustries.map((industry, index) => (
            <span
              key={`${industry}-${index}`}
              className="whitespace-nowrap font-display text-base text-inkdim/70"
            >
              {industry}
            </span>
          ))}
        </div>

        {/* Fade edges so items scroll in/out smoothly rather than clipping hard */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-paper to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-paper to-transparent" />
      </div>
    </section>
  );
}
