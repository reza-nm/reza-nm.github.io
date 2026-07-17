// ─────────────────────────────────────────────────────────────
// SITE DATA
// All editable copy, links, and content lives here so you can
// update the website without touching any component code.
// ─────────────────────────────────────────────────────────────

export const siteName = "Reza Narimani";
export const contactEmail = "namireza.com@gmail.com";
export const whatsappUrl = "https://wa.me/989396006241";
export const linkedinUrl = "https://linkedin.com/in/rezanarimani";
export const calendlyUrl = "https://calendly.com/rezana/30min";

// Header nav links
export const navLinks = [
  { href: "#work", label: "Case Studies" },
  { href: "#process", label: "How it works" },
  { href: "#testimonials", label: "What to expect" },
  { href: "#faq", label: "FAQ" },
];

// Hero section content
export const hero = {
  eyebrow: "",
  title: "Stop Losing Clients Because of Your Website.",
  subtitle:
    "Turn your website into a client magnet and make it your hardest-working employee.",
  body: "I create clear, professional, and conversion-focused websites for small local businesses and personal brands — so you get more inquiries, bookings, and sales, without the stress.",
  primaryCta: { label: "Get in touch", href: "#contact" },
  secondaryCta: { label: "View Similar Case Studies", href: "#work" },
};

// Marquee of industries
export const industries = [
  "Dental Clinics",
  "Business Coaches",
  "Content Creators",
  "Yoga Studios",
  "Law Practices",
  "Home Renovation",
];

// "Why Most Small Business Websites Fail" section
export const problemSection = {
  eyebrow: "Sound familiar?",
  title: "Why Most Small Business Websites Fail",
  subtitle:
    "They look decent… but they're quietly costing you customers every day.",
  items: [
    {
      title: "Broken or Poor Mobile Experience",
      body: "Most of your customers browse on phones, but your site is slow, hard to read, or frustrating to use.",
      icon: "smartphone",
    },
    {
      title: "Visitors Leave Confused",
      body: "People don't instantly understand what you offer or how you can help them.",
      icon: "circleQuestion",
    },
    {
      title: "Your Value Is Not Clear",
      body: "Your strengths, experience, and personality are buried, so visitors don't see why they should choose you.",
      icon: "gem",
    },
    {
      title: "No Trust or Credibility",
      body: "Outdated design and lack of social proof make your business look less professional.",
      icon: "shieldAlert",
    },
    {
      title: "No Clear Next Step",
      body: "Visitors don't know what to do next, so they just leave.",
      icon: "mousePointerClick",
    },
  ],
};

// "I Build Websites That Actually Bring You Clients" section
export const solutionSection = {
  eyebrow: "Here's the fix",
  title: "I Build Websites That Actually Bring You Clients",
  body: "I don't just make pretty websites. I design websites that clearly communicate your value, build trust, and turn visitors into real customers.",
  whatYouGetLabel: "What you get",
  whatYouGet: [
    "A modern website that perfectly represents your brand",
    "Clear messaging that speaks directly to your ideal clients",
    "Mobile-friendly design that works great on phones",
    "Strong calls-to-action that encourage people to contact you",
    "A site you'll be proud to share",
  ],
};

// "Built on a few simple standards, every time." section
export const standardsSection = {
  eyebrow: "What you can expect from the work",
  title: "Built on a few simple standards, every time.",
  items: [
    {
      title: "Mobile-First Design",
      body: "Every page is designed for an exceptional mobile experience first.",
      icon: "smartphone",
      accent: "gold2",
    },
    {
      title: "Performance Focused",
      body: "Fast-loading pages built with modern web technologies.",
      icon: "zap",
      accent: "sage",
    },
    {
      title: "Conversion-Oriented",
      body: "Every section has a clear business goal and CTA.",
      icon: "target",
      accent: "coral",
    },
    {
      title: "SEO Foundations",
      body: "Semantic HTML, accessibility, and technical SEO built in from day one.",
      icon: "searchCheck",
      accent: "gold2",
    },
  ],
};

// Case studies section
export const caseStudiesSection = {
  eyebrow: "Case studies",
  title: "Redesign case studies, across a few different industries.",
  subtitle:
    "These redesigns are built to show how I think through the design problems.",
  items: [
    {
      industry: "Dental Clinic",
      tag: "Local service business",
      accent: "#C99A2E",
      // Screenshot / mockup of the redesigned site. Swap this URL for your own image anytime.
      image:
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?q=80&w=1200&auto=format&fit=crop",
      // Set to "" (empty string) to hide the "Visit website" button for a case study.
      websiteUrl: "https://example.com",
      problem:
        "The website had poor mobile usability, weak visual hierarchy, and unclear calls-to-action.",
      redesign:
        "Improved spacing, typography, mobile navigation, trust signals, and a clear appointment CTA.",
      impact:
        "A smoother user journey designed to encourage more appointment requests.",
    },
    {
      industry: "LinkedIn Content Creator",
      tag: "Personal brand",
      accent: "#7E9C8B",
      image:
        "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=1200&auto=format&fit=crop",
      websiteUrl: "https://example.com",
      problem:
        "The personal site felt generic and didn't reflect the creator's voice, making it hard for visitors to connect or take the next step.",
      redesign:
        "A bolder, personality-led layout with clearer positioning, a content showcase, and a simple way to start a conversation.",
      impact:
        "A page designed to turn casual visitors into followers and warm leads.",
    },
    {
      industry: "Business Coach",
      tag: "Personal brand / services",
      accent: "#D9683F",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop",
      websiteUrl: "https://example.com",
      problem:
        "The site buried the offer beneath long paragraphs, with no clear path to booking a call.",
      redesign:
        "A focused, benefit-led structure with a single clear call-to-action and simplified messaging throughout.",
      impact:
        "A page built to reduce hesitation and guide visitors straight toward booking a call.",
    },
    {
      industry: "Home Renovation Business",
      tag: "Local service business",
      accent: "#C9A35E",
      image:
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
      websiteUrl: "https://example.com",
      problem:
        "Visitors couldn't tell what services were offered or how to request a quote without scrolling through unclear sections.",
      redesign:
        "A simplified service breakdown, before/after-style visuals, and a streamlined quote request flow.",
      impact:
        "A clearer path designed to help serious leads reach out with less friction.",
    },
  ],
};

// "My Simple 6-Step Process" section
export const processSection = {
  eyebrow: "How it works",
  title: "My Simple 6-Step Process",
  steps: [
    {
      n: "01",
      title: "Discovery Call",
      body: "We discuss your goals and vision.",
    },
    { n: "02", title: "Proposal", body: "Clear scope and fixed price." },
    {
      n: "03",
      title: "Content & Strategy",
      body: "I guide you on what we need.",
    },
    { n: "04", title: "Custom Design", body: "Tailored to your brand." },
    {
      n: "05",
      title: "Development & Testing",
      body: "Fast, secure, and mobile-ready.",
    },
    {
      n: "06",
      title: "Launch & Support",
      body: "Go live with revisions and training.",
    },
  ],
};

// "What You Can Expect" (working-together) section
export const workingTogetherSection = {
  eyebrow: "Working together",
  title: "What You Can Expect",
  items: [
    {
      title: "Transparent Communication",
      body: "You'll always know where things stand — no vague updates, no disappearing acts.",
      icon: "messageSquare",
    },
    {
      title: "No Hidden Costs",
      body: "One fixed price, agreed before any work starts. What we agree on is what you pay.",
      icon: "ban",
    },
    {
      title: "Weekly Progress Updates",
      body: "Short, regular check-ins so you're never left wondering what's happening.",
      icon: "calendarClock",
    },
    {
      title: "Direct Collaboration",
      body: "You work directly with me — no account managers, no middlemen.",
      icon: "users",
    },
    {
      title: "Conversion-Focused Decisions",
      body: "Every design choice is made to help visitors take action, not just to look nice.",
      icon: "target",
    },
    {
      title: "Modern Development Standards",
      body: "Clean, accessible, well-structured code built to last — not a drag-and-drop template.",
      icon: "codeXml",
    },
  ],
};

// Contact / "Let's talk" section
export const contactSection = {
  eyebrow: "Let's talk",
  title: "Start a conversation, no commitment needed.",
  body: "Pick whichever way is easiest for you. I'll get back to you personally.",
  responseNote: "Usually replies within 24 hours.",
  methods: [
    { label: "Book a call", sub: "Calendly", href: calendlyUrl, icon: "calendar" },
    { label: "Message me", sub: "WhatsApp", href: whatsappUrl, icon: "whatsapp" },
    {
      label: "Send an email",
      sub: contactEmail,
      href: `mailto:${contactEmail}`,
      icon: "mail",
    },
    { label: "Connect", sub: "LinkedIn", href: linkedinUrl, icon: "linkedin" },
  ],
};

// FAQ section
export const faqSection = {
  eyebrow: "FAQ",
  title: "Frequently Asked Questions",
  items: [
    {
      q: "Who do you work with?",
      a: "Small business owners and personal brands who already have customers, but whose website isn't helping them get more — shops, studios, clinics, trades, and local services.",
    },
    {
      q: "How long does it take to build a website?",
      a: "Most small-business sites take 2–3 weeks from our first chat to launch day. Bigger projects usually take 4–6 weeks.",
    },
    {
      q: "What if I don't have content ready?",
      a: "That's completely normal. I'll guide you with a simple questionnaire and write the copy for you, based on the basics you share about your business.",
    },
    {
      q: "Do you redesign existing websites?",
      a: "Yes — if the foundation is solid, we can redesign on top of it. I'll always tell you honestly whether that's realistic, or whether a fresh start will save you money in the long run.",
    },
    {
      q: "How much does it cost?",
      a: "One fixed price, agreed before any work starts, so you always know the number before you commit. Most projects fall between $900–$2,200 depending on size.",
    },
    {
      q: "Will my website be mobile friendly?",
      a: "Always. Every site I build is designed mobile-first, since most of your visitors will be browsing on their phones.",
    },
    {
      q: "Do you provide support after launch?",
      a: "Yes. Two weeks of support and two rounds of revisions are included with every project, plus simple monthly support after that if you'd like it.",
    },
  ],
};

// Footer content
export const footer = {
  tagline:
    "Web designer building clear, conversion-focused websites for small businesses and personal brands.",
  getInTouchLabel: "Get in touch",
  exploreLabel: "Explore",
  exploreLinks: [
    { href: "#work", label: "Case studies" },
    { href: "#process", label: "How it works" },
    { href: "#testimonials", label: "What to expect" },
    { href: "#faq", label: "FAQ" },
  ],
  copyrightYear: 2026,
};