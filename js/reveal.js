// ============================================================
// SCROLL REVEAL: fades/slides elements with the "reveal" class
// into view the first time they enter the viewport.
// ============================================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // animate once, like the original
      }
    });
  },
  { threshold: 0.15, rootMargin: "0px 0px -10% 0px" }
);

revealElements.forEach((el) => observer.observe(el));
