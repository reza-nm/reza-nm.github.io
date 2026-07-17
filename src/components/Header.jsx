import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { siteName, navLinks } from "../data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Add a background/blur once the user scrolls past the hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Mobile nav links need special handling: the menu locks body scroll
  // (overflow: hidden), and that lock is still in effect at the exact
  // moment the browser tries to jump to the #anchor, so the page never
  // actually scrolls. We prevent the default jump, close the menu first,
  // unlock scroll, and then scroll to the target on the next frame.
  const handleNavClick = (event, href) => {
    event.preventDefault();
    setMenuOpen(false);
    document.body.style.overflow = "";
    requestAnimationFrame(() => {
      const target = document.querySelector(href);
      target?.scrollIntoView({ behavior: "smooth" });
    });
  };

  const showSolidBackground = scrolled || menuOpen;

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-colors ${
        showSolidBackground
          ? "border-hairline bg-paper/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tight text-inkdark"
        >
          {siteName}
        </a>

        <nav className="hidden items-center gap-8 text-sm text-inkdim md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-inkdark"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-inkdark px-5 py-2 text-sm font-medium text-paper transition-colors hover:bg-gold2 sm:inline-block"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline text-inkdark md:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-hairline bg-paper md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 text-sm text-inkdim">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(event) => handleNavClick(event, link.href)}
                  className="border-b border-hairline py-3 transition-colors hover:text-inkdark"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={(event) => handleNavClick(event, "#contact")}
                className="mt-4 rounded-full bg-inkdark px-5 py-2.5 text-center font-medium text-paper transition-colors hover:bg-gold2"
              >
                Get in touch
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
