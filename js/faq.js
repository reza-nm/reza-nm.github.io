// ============================================================
// FAQ: simple accordion — click a question to open/close it.
// Only one answer is open at a time (matches the original design).
// ============================================================

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const trigger = item.querySelector(".faq-trigger");
  const panel = item.querySelector(".faq-panel");
  const chevron = item.querySelector(".faq-chevron");

  trigger.addEventListener("click", () => {
    const isOpen = !panel.classList.contains("hidden");

    // Close every other open item first (accordion behavior).
    faqItems.forEach((otherItem) => {
      if (otherItem === item) return;
      otherItem.querySelector(".faq-panel").classList.add("hidden");
      otherItem.querySelector(".faq-chevron").style.transform = "rotate(0deg)";
    });

    // Toggle this one.
    panel.classList.toggle("hidden", isOpen);
    chevron.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
  });
});
