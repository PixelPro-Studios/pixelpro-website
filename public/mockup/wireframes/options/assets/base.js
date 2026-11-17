// PixelPro page prototype: shared behaviour
const ICONS = {
  whatsapp: '<path d="M19.1 4.9A9.9 9.9 0 0 0 3.4 16.8L2 22l5.3-1.4a9.9 9.9 0 0 0 4.7 1.2h.1A9.9 9.9 0 0 0 19.1 4.9Zm-7 15.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3a8.2 8.2 0 1 1 7 3.8Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.6.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.4a.5.5 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.8 11.9 11.9 0 0 0 4.6 4c1.7.7 2.3.8 3.2.7a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .2-1.3c-.1-.1-.3-.2-.5-.3Z" fill="currentColor" stroke="none"/>',
  arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  plus: '<path d="M12 5v14M5 12h14"/>',
  star: '<path d="m12 3 2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" fill="currentColor" stroke="none"/>',
  check: '<path d="m5 12.5 4.5 4.5L19 7.5"/>',
  mic: '<rect x="9" y="3" width="6" height="11" rx="3"/><path d="M6 11a6 6 0 0 0 12 0M12 17v4"/>',
  screen: '<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M9 20h6M12 16v4"/>',
  speaker: '<rect x="6" y="3" width="12" height="18" rx="2"/><circle cx="12" cy="14" r="3"/><circle cx="12" cy="7.5" r="1"/>',
  stage: '<path d="M3 15h18v4H3zM6 15V9h12v6"/>',
  camera: '<path d="M4 8h3l2-2.5h6L17 8h3v11H4z"/><circle cx="12" cy="13" r="3.5"/>',
  sparkle: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
  music: '<path d="M9 18V6l10-2v12"/><circle cx="7" cy="18" r="2"/><circle cx="17" cy="16" r="2"/>',
  gift: '<rect x="4" y="9" width="16" height="11" rx="1"/><path d="M3 9h18M12 9v11M12 9S10 4 7.5 5.5 9 9 12 9Zm0 0s2-5 4.5-3.5S15 9 12 9Z"/>',
  door: '<path d="M6 20V4h12v16M4 20h16M14 12h.01"/>',
  shield: '<path d="M12 3 5 6v6c0 4.5 3 7.5 7 9 4-1.5 7-4.5 7-9V6z"/><path d="m9 12 2 2 4-4"/>',
  bolt: '<path d="M13 3 5 14h6l-1 7 8-11h-6z"/>',
  coin: '<circle cx="12" cy="12" r="8"/><path d="M12 7v10M9.5 9.5c0-1 1.1-1.5 2.5-1.5s2.5.6 2.5 1.7c0 2.6-5 1.4-5 4.1 0 1.1 1.1 1.7 2.5 1.7s2.5-.5 2.5-1.5"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/>',
  bulb: '<path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0 0 12 3Z"/>',
  projector: '<rect x="3" y="8" width="18" height="9" rx="2"/><circle cx="15" cy="12.5" r="2.5"/><path d="M7 17v2M17 17v2"/>',
  people: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6M16 11a3 3 0 1 0 0-6M21 20c0-2.6-1.6-4.8-4-5.6"/>',
};
document.querySelectorAll("[data-i]").forEach((el) => {
  const n = el.dataset.i;
  el.outerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[n] || ""}</svg>`;
});

// WhatsApp: the floating button opens a preview of the message, one detail per line
const WA_NUMBER = "6588605489"; // from the live site
function waLink(text) { return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(text)}`; }
document.querySelectorAll(".wa").forEach((wa) => {
  const btn = wa.querySelector(".wa__btn"), bubble = wa.querySelector(".wa__bubble"), send = wa.querySelector(".wa__send");
  const sync = () => { send.href = waLink(bubble.textContent.trim()); };
  sync();
  btn.addEventListener("click", () => { wa.toggleAttribute("data-open"); btn.setAttribute("aria-expanded", wa.hasAttribute("data-open")); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") wa.removeAttribute("data-open"); });
  wa.setMessage = (t) => { bubble.textContent = t; sync(); };
});

// single-choice chip groups that swap one panel (data-group on the container, data-show on chips, data-panel on panels)
document.querySelectorAll("[data-group]").forEach((group) => {
  const scope = document.getElementById(group.dataset.group);
  const chips = group.querySelectorAll("[data-show]");
  chips.forEach((chip) => chip.addEventListener("click", () => {
    chips.forEach((c) => c.setAttribute("aria-selected", c === chip));
    scope.querySelectorAll("[data-panel]").forEach((p) => { p.hidden = p.dataset.panel !== chip.dataset.show; });
  }));
});

// carousels: arrow buttons step by one card
document.querySelectorAll("[data-carousel]").forEach((root) => {
  const track = root.querySelector(".track");
  const step = () => (track.querySelector(":scope > *")?.getBoundingClientRect().width || 300) + 20;
  root.querySelector("[data-prev]")?.addEventListener("click", () => track.scrollBy({ left: -step(), behavior: "smooth" }));
  root.querySelector("[data-next]")?.addEventListener("click", () => track.scrollBy({ left: step(), behavior: "smooth" }));
});

// review rotator: one quote at a time, cross-fade
document.querySelectorAll("[data-rotator]").forEach((root) => {
  const items = [...root.querySelectorAll("[data-item]")];
  const dots = root.querySelector(".dots");
  let i = 0;
  items.forEach((_, n) => { const b = document.createElement("button"); b.setAttribute("aria-label", `Review ${n + 1}`); b.addEventListener("click", () => show(n)); dots.append(b); });
  function show(n) { i = (n + items.length) % items.length; items.forEach((it, k) => it.classList.toggle("on", k === i)); [...dots.children].forEach((d, k) => d.setAttribute("aria-current", k === i)); }
  root.querySelector("[data-prev]")?.addEventListener("click", () => show(i - 1));
  root.querySelector("[data-next]")?.addEventListener("click", () => show(i + 1));
  show(0);
});

// sticky crossfade: the photo on the left follows whichever step is in the middle of the screen
document.querySelectorAll("[data-sticky]").forEach((root) => {
  const steps = [...root.querySelectorAll("[data-step]")];
  const pics = [...root.querySelectorAll("[data-pic]")];
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const k = e.target.dataset.step;
      steps.forEach((s) => s.classList.toggle("on", s.dataset.step === k));
      pics.forEach((p) => p.classList.toggle("on", p.dataset.pic === k));
    });
  }, { rootMargin: "-45% 0px -45% 0px" });
  steps.forEach((s) => io.observe(s));
});

// service index: the hovered row's photo follows the pointer (desktop only; hidden on touch by CSS)
document.querySelectorAll("[data-index]").forEach((root) => {
  const pic = root.querySelector(".index__pic"), img = pic.querySelector("img");
  let x = 0, y = 0, px = 0, py = 0, raf = 0;
  const loop = () => { px += (x - px) * 0.18; py += (y - py) * 0.18; pic.style.left = px + "px"; pic.style.top = py + "px"; raf = requestAnimationFrame(loop); };
  root.querySelectorAll("a[data-img]").forEach((a) => {
    a.addEventListener("pointerenter", (e) => { img.src = a.dataset.img; img.alt = a.dataset.alt || ""; px = x = e.clientX; py = y = e.clientY; pic.classList.add("on"); if (!raf) loop(); });
    a.addEventListener("pointermove", (e) => { x = e.clientX + 170; y = e.clientY; });
    a.addEventListener("pointerleave", () => { pic.classList.remove("on"); cancelAnimationFrame(raf); raf = 0; });
  });
});

// days until a date, for the CNY countdown
document.querySelectorAll("[data-until]").forEach((el) => {
  const d = Math.ceil((new Date(el.dataset.until + "T00:00:00+08:00") - Date.now()) / 864e5);
  el.textContent = Math.max(d, 0);
});

window.PP = { waLink };
