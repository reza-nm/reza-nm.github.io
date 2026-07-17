 Project structure

```
index.html        ← the entire page, one file, sections marked with HTML comments
css/
  style.css        ← custom animations only (marquee, glow, reveal-on-scroll)
js/
  header.js        ← mobile menu open/close + scroll-aware header background
  faq.js           ← FAQ accordion (click to expand/collapse)
  process.js       ← gold progress line on the "How it works" timeline
  reveal.js        ← fade-in-on-scroll for sections (IntersectionObserver)
```

Styling uses the **Tailwind CDN build** (loaded via `<script>` in `index.html`,
no compiler needed) with a small inline config for the site's custom colors and
fonts — that config block is right under the Tailwind `<script>` tag.

 How to edit things

- **Any text, heading, or paragraph:** open `index.html`, find the section (they're
  marked with big `<!-- ===== SECTION NAME ===== -->` comments), and edit the text
  directly.
- **A case study image:** find the case study's `<article>` block and change the
  `src="..."` on its `<img>` tag to your own screenshot URL.
- **A case study's "Visit website" link:** change the `href="https://example.com"`
  on that case study's `<a>` button. Delete the whole `<a>` tag to hide the button.
- **A color:** edit the hex values in the `tailwind.config` script block near the
  top of `index.html` — every element using that color name updates at once.
- **Add/remove a FAQ:** copy one `.faq-item` block in the FAQ section and edit the
  question/answer text — `js/faq.js` will automatically pick it up, no JS changes needed.
- **Add/remove an industry in the marquee:** edit the list of `<span>` tags in the
  marquee section — remember there are two identical copies (for the seamless loop),
  so edit both.

## Stack

Plain HTML + Tailwind CDN (utility classes, no build) + vanilla JS (no framework, no dependencies).
