// ============================================================
// HEADER: mobile menu toggle + scroll-aware background
// ============================================================

const header = document.getElementById("site-header");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");
const mobileNavLinks = mobileMenu.querySelectorAll(".nav-link");

let menuOpen = false;

function setMenuOpen(open) {
  menuOpen = open;
  mobileMenu.classList.toggle("hidden", !open);
  menuIconOpen.classList.toggle("hidden", open);
  menuIconClose.classList.toggle("hidden", !open);
  menuToggle.setAttribute("aria-expanded", String(open));

  // Lock body scroll while the menu is open (matches original design),
  // but unlock it immediately when a link is clicked below so smooth-
  // scrolling to the target section actually works.
  document.body.style.overflow = open ? "hidden" : "";

  updateHeaderBackground();
}

function updateHeaderBackground() {
  const showSolid = window.scrollY > 8 || menuOpen;
  header.classList.toggle("bg-paper/90", showSolid);
  header.classList.toggle("backdrop-blur", showSolid);
  header.classList.toggle("border-hairline", showSolid);
  header.classList.toggle("border-transparent", !showSolid);
}

menuToggle.addEventListener("click", () => setMenuOpen(!menuOpen));

// Close the mobile menu when a nav link is tapped, and make sure the
// browser can actually scroll (overflow gets unlocked first).
mobileNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    setMenuOpen(false);
  });
});

window.addEventListener("scroll", updateHeaderBackground);
updateHeaderBackground();
