// ============================================================
// PROCESS: the gold line fills in as you scroll through the
// 3-step process. Vertical rail on mobile (#process-line),
// horizontal track on desktop (#process-line-h).
// ============================================================

const processSection = document.getElementById("process");
const processLine = document.getElementById("process-line");
const processLineH = document.getElementById("process-line-h");

function updateProcessLines() {
  if (!processSection) return;

  const rect = processSection.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Progress: 0 when the section's top just enters the viewport,
  // 1 when the section has fully scrolled past.
  const start = viewportHeight * 0.85;
  const end = -rect.height + viewportHeight * 0.4;
  const raw = (start - rect.top) / (start - end);
  const progress = Math.min(1, Math.max(0, raw));

  if (processLine) processLine.style.height = `${progress * 100}%`;
  if (processLineH) processLineH.style.width = `${progress * 100}%`;
}

window.addEventListener("scroll", updateProcessLines, { passive: true });
window.addEventListener("resize", updateProcessLines);
updateProcessLines();