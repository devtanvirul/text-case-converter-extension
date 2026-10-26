const input = document.getElementById("input");
const output = document.getElementById("output");
const modesWrap = document.getElementById("modes");
const copyBtn = document.getElementById("copyBtn");
const clearBtn = document.getElementById("clearBtn");
const statusEl = document.getElementById("status");

let currentMode = "upper";

const converters = {
  upper: (t) => t.toUpperCase(),
  lower: (t) => t.toLowerCase(),
  capitalize: (t) =>
    t.replace(/\w\S*/g, (w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()),
  sentence: (t) =>
    t.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase()),
  title: (t) => {
    const minor = new Set([
      "a", "an", "the", "and", "but", "or", "nor", "for", "so", "yet",
      "at", "by", "in", "of", "on", "to", "up", "as", "is"
    ]);
    const words = t.split(" ");
    return words
      .map((w, i) => {
        if (w === "") return w;
        const lower = w.toLowerCase();
        if (i !== 0 && i !== words.length - 1 && minor.has(lower)) return lower;
        return lower.charAt(0).toUpperCase() + lower.slice(1);
      })
      .join(" ");
  },
  toggle: (t) =>
    t
      .split("")
      .map((ch) =>
        ch === ch.toUpperCase() ? ch.toLowerCase() : ch.toUpperCase()
      )
      .join(""),
};

function render() {
  const fn = converters[currentMode] || converters.upper;
  output.value = fn(input.value);
}

function setActiveMode(mode) {
  currentMode = mode;
  [...modesWrap.children].forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.mode === mode);
  });
  chrome.storage?.local?.set?.({ lastMode: mode });
  render();
}

modesWrap.addEventListener("click", (e) => {
  const btn = e.target.closest(".mode-btn");
  if (!btn) return;
  setActiveMode(btn.dataset.mode);
});

input.addEventListener("input", render);

copyBtn.addEventListener("click", async () => {
  if (!output.value) return;
  try {
    await navigator.clipboard.writeText(output.value);
    statusEl.textContent = "Copied!";
    setTimeout(() => (statusEl.textContent = ""), 1200);
  } catch (err) {
    statusEl.textContent = "Copy failed";
  }
});

clearBtn.addEventListener("click", () => {
  input.value = "";
  output.value = "";
  statusEl.textContent = "";
  input.focus();
});

// restore last used mode + draft text
chrome.storage?.local?.get?.(["lastMode", "lastText"], (data) => {
  const mode = data?.lastMode || "upper";
  if (data?.lastText) input.value = data.lastText;
  setActiveMode(mode);
});

input.addEventListener("input", () => {
  chrome.storage?.local?.set?.({ lastText: input.value });
});
