Getting started

```bash
npm install
npm run dev
```
To build for production:

```bash
npm run build
```

The output goes to `dist/`, which you can deploy anywhere static (Vercel, Netlify, etc).

 Project structure

```
src/
  data/
    siteData.js        ← ALL editable text/links/content lives here
  lib/
    icons.js            ← maps string keys ("smartphone", "zap"...) to lucide icons
    utils.js            ← small className helper (cn)
  components/
    ui/
      accordion.jsx      ← shadcn/ui Accordion (used by FAQ)
    Header.jsx           ← sticky nav + mobile menu
    Hero.jsx             ← top banner with parallax + floating cards
    IndustriesMarquee.jsx← scrolling "Industries I design for" strip
    ProblemSection.jsx   ← "Why Most Small Business Websites Fail"
    SolutionSection.jsx  ← "I Build Websites That Actually Bring You Clients"
    StandardsSection.jsx ← "Built on a few simple standards, every time."
    CaseStudies.jsx      ← case study cards
    Process.jsx          ← 6-step process timeline
    Contact.jsx          ← "Let's talk" contact methods
    WorkingTogether.jsx  ← "What You Can Expect"
    ContactIcons.jsx     ← small brand SVGs (WhatsApp, LinkedIn, etc.)
    FAQ.jsx              ← accordion FAQ
    Footer.jsx           ← site footer
  App.jsx                ← assembles all sections in order
  main.jsx               ← React entry point
  index.css              ← Tailwind directives
tailwind.config.js       ← all custom colors + fonts live here
```

How to make common edits

- **Change any text, link, or list item:** edit `src/data/siteData.js`. Nothing
  else needs to change.
- **Change a color:** edit the `colors` block in `tailwind.config.js` — every
  component already uses these named colors (`bg-forest`, `text-gold2`, etc.),
  so one edit updates the whole site.
- **Add/remove a FAQ, case study, process step, etc.:** just add/remove an
  object in the matching array in `siteData.js`.
- **Add a new section:** create a new file in `src/components/`, add its data
  to `siteData.js` if needed, then drop `<YourSection />` into `App.jsx` in the
  right spot.

## Stack

Vite + React + Tailwind CSS + Framer Motion + shadcn/ui (Accordion) + lucide-react icons.
