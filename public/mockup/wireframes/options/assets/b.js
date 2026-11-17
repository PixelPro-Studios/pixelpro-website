// Option B tools: LED wall visualiser, quote builder, CNY night board

// critically damped spring toward a target, no overshoot
function spring(from, to, onFrame, done) {
  let x = from, v = 0, last = performance.now();
  const k = 170, c = 2 * Math.sqrt(k); // damping ratio 1.0
  function step(now) {
    const dt = Math.min(0.032, (now - last) / 1000); last = now;
    const a = -k * (x - to) - c * v; v += a * dt; x += v * dt;
    onFrame(x);
    if (Math.abs(x - to) > 0.001 || Math.abs(v) > 0.001) requestAnimationFrame(step); else { onFrame(to); done && done(); }
  }
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) { onFrame(to); return; }
  requestAnimationFrame(step);
}

// ---------- LED wall visualiser ----------
document.querySelectorAll("[data-viz]").forEach((root) => {
  const S = 52, CX = 300, BASE = 262; // px per metre, wall centre x, wall bottom y
  const wall = root.querySelector(".wall"), frame = root.querySelector(".wall-frame"), dots = root.querySelector(".wall-dots");
  const label = root.querySelector(".wall-label"), sizeOut = root.querySelector("[data-out=size]"), areaOut = root.querySelector("[data-out=area]");
  const sky = root.querySelector(".sky"), room = root.querySelector(".room"), pitchOut = root.querySelector("[data-out=pitch]");
  const note = root.querySelector(".custom-note"), readout = root.querySelector(".viz__readout");
  const pattern = root.querySelector("#px");
  let w = 6, h = 4, curW = 6, curH = 4, io = "Indoor";
  function draw(W, H) {
    const pw = W * S, ph = H * S, x = CX - pw / 2, y = BASE - ph;
    for (const el of [wall, frame, dots]) { el.setAttribute("x", x); el.setAttribute("y", y); el.setAttribute("width", pw); el.setAttribute("height", ph); }
    label.setAttribute("x", CX); label.setAttribute("y", y + ph / 2 + 10);
    label.setAttribute("font-size", Math.max(16, Math.min(40, pw / 7)));
  }
  function setSize(nw, nh) {
    w = nw; h = nh;
    const fromW = curW, fromH = curH;
    spring(0, 1, (t) => { curW = fromW + (w - fromW) * t; curH = fromH + (h - fromH) * t; draw(curW, curH); });
    sizeOut.textContent = `${w} m × ${h} m`;
    areaOut.textContent = `${+(w * h).toFixed(1)} m² of screen`;
    note.hidden = true; readout.hidden = false;
    root.dispatchEvent(new CustomEvent("viz", { bubbles: true, detail: { size: `${w} m × ${h} m`, io } }));
  }
  root.querySelectorAll("[data-size]").forEach((chip) => chip.addEventListener("click", () => {
    root.querySelectorAll("[data-size]").forEach((c) => c.setAttribute("aria-pressed", c === chip));
    if (chip.dataset.size === "custom") {
      note.hidden = false; readout.hidden = true;
      root.dispatchEvent(new CustomEvent("viz", { bubbles: true, detail: { size: "Custom, let's discuss", io } }));
      return;
    }
    const [a, b] = chip.dataset.size.split("x").map(Number); setSize(a, b);
  }));
  root.querySelectorAll("[data-io]").forEach((chip) => chip.addEventListener("click", () => {
    root.querySelectorAll("[data-io]").forEach((c) => c.setAttribute("aria-pressed", c === chip));
    io = chip.dataset.io;
    const out = io === "Outdoor";
    sky.style.opacity = out ? 1 : 0; room.style.opacity = out ? 0 : 1;
    pitchOut.textContent = out ? "P3.9 outdoor LED wall" : "P2.5 indoor LED wall";
    // the dot grid is only a visual cue that outdoor panels have bigger pixels
    pattern.setAttribute("width", out ? 7 : 4.5); pattern.setAttribute("height", out ? 7 : 4.5);
    root.dispatchEvent(new CustomEvent("viz", { bubbles: true, detail: { size: sizeOut.textContent, io } }));
  }));
  draw(w, h);
});

// ---------- quote builder: every choice rewrites the WhatsApp message, one detail per line ----------
document.querySelectorAll("[data-builder]").forEach((root) => {
  const msg = root.querySelector(".phone__msg"), send = root.querySelector(".phone .btn");
  const intro = root.dataset.intro, lines = JSON.parse(root.dataset.lines);
  const state = {};
  root.querySelectorAll("[data-field]").forEach((el) => {
    const f = el.dataset.field;
    if (el.matches("input")) {
      const fmt = () => { if (el.type === "date" && el.value) return new Date(el.value).toLocaleDateString("en-SG", { day: "numeric", month: "long", year: "numeric" }); if (el.type === "range") return el.value + (el.dataset.suffix || ""); return el.value.trim(); };
      el.addEventListener("input", () => { state[f] = fmt(); const rv = root.querySelector(`[data-range-val="${f}"]`); if (rv) rv.textContent = el.value; render(); });
      if (el.type === "range") state[f] = fmt();
    } else {
      const multi = el.hasAttribute("data-multi");
      el.querySelectorAll("[data-value]").forEach((chip) => chip.addEventListener("click", () => {
        if (multi) chip.setAttribute("aria-pressed", chip.getAttribute("aria-pressed") !== "true");
        else el.querySelectorAll("[data-value]").forEach((c) => c.setAttribute("aria-pressed", c === chip));
        state[f] = [...el.querySelectorAll('[aria-pressed="true"]')].map((c) => c.dataset.value).join(", ");
        render();
      }));
      const pre = [...el.querySelectorAll('[aria-pressed="true"]')].map((c) => c.dataset.value).join(", ");
      if (pre) state[f] = pre;
    }
  });
  // the visualiser above can fill size and indoor/outdoor
  document.addEventListener("viz", (e) => { state.size = e.detail.size; state.io = e.detail.io; syncChips("size", e.detail.size); syncChips("io", e.detail.io); render(); });
  function syncChips(f, v) { root.querySelectorAll(`[data-field="${f}"] [data-value]`).forEach((c) => c.setAttribute("aria-pressed", c.dataset.value === v)); }
  function render() {
    const body = lines.map(([label, f]) => `${label}: ${state[f] || ""}`).join("\n");
    const extra = state.extras ? `\nAlso need: ${state.extras}` : "";
    const text = `${intro}\n${body}${extra}`;
    msg.textContent = text;
    send.href = window.PP.waLink(text);
    document.querySelector(".wa")?.setMessage?.(text);
  }
  render();
});

// ---------- CNY night board: each moment lights the gear it uses ----------
document.querySelectorAll("[data-board]").forEach((root) => {
  const copy = root.querySelector(".moment-copy");
  const chips = root.querySelectorAll("[data-moment]");
  function pick(chip) {
    chips.forEach((c) => c.setAttribute("aria-pressed", c === chip));
    const lit = chip.dataset.gear.split(" ");
    root.querySelectorAll(".g").forEach((g) => g.classList.toggle("lit", lit.includes(g.dataset.g)));
    copy.innerHTML = `<strong>${chip.textContent}</strong>${chip.dataset.copy}`;
  }
  chips.forEach((c) => c.addEventListener("click", () => pick(c)));
  pick(chips[0]);
});
