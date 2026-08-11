// ============================================================
// FLOATING "REACH ME": appears after a little scroll, expands a
// quick-contact popover. Hides itself while #contact is on screen.
// ============================================================

const floatCta = document.getElementById("float-cta");
const floatBtn = document.getElementById("float-btn");
const floatPopover = document.getElementById("float-popover");
const floatClose = document.getElementById("float-popover-close");
const contactSection = document.getElementById("contact");

let visible = false;
let popoverOpen = false;

function setVisible(show) {
  if (show === visible) return;
  visible = show;
  floatCta.classList.toggle("is-visible", show);
}

function setPopover(open) {
  popoverOpen = open;
  floatPopover.classList.toggle("is-open", open);
  floatBtn.setAttribute("aria-expanded", String(open));
}

function contactOnScreen() {
  if (!contactSection) return false;
  const rect = contactSection.getBoundingClientRect();
  return rect.top <= window.innerHeight && rect.bottom >= 0;
}

function updateVisibility() {
  if (popoverOpen) {
    setVisible(true);
    return;
  }
  setVisible(window.scrollY > 8 && !contactOnScreen());
}

floatBtn.addEventListener("click", () => setPopover(!popoverOpen));
floatClose.addEventListener("click", () => setPopover(false));

// Close when tapping anywhere outside the button/popover, or on Escape.
document.addEventListener("click", (e) => {
  if (!popoverOpen) return;
  if (floatCta.contains(e.target) || floatPopover.contains(e.target)) return;
  setPopover(false);
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setPopover(false);
});

window.addEventListener("scroll", updateVisibility, { passive: true });
window.addEventListener("resize", updateVisibility);
updateVisibility();