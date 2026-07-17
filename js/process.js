// ============================================================
// PROCESS: the gold vertical line fills in as you scroll through
// the 6-step timeline.
// ============================================================

const processSection = document.getElementById("process");
const processLine = document.getElementById("process-line");

function updateProcessLine() {
  if (!processSection || !processLine) return;

  const rect = processSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Progress: 0 when the section's top just enters the viewport,
  // 1 when the section has fully scrolled past.
  const start = viewportHeight * 0.85;
  const end = -rect.height + viewportHeight * 0.4;
  const raw = (start - rect.top) / (start - end);
  const progress = Math.min(1, Math.max(0, raw));

  processLine.style.height = `${progress * 100}%`;
}

window.addEventListener("scroll", updateProcessLine);
window.addEventListener("resize", updateProcessLine);
updateProcessLine();
