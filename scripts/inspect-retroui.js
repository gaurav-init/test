// scripts/inspect-retroui.js
// Visits retroui.dev, captures a full-page screenshot + structural summary
// (sections, headings, dominant colors, button shapes) for design reference.

const { chromium } = require("playwright");
const fs = require("fs");
const path = require("path");

(async () => {
  const outDir = path.join(__dirname, "..", "_retroui_ref");
  fs.mkdirSync(outDir, { recursive: true });

  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();

  console.log("→ loading https://retroui.dev/ ...");
  await page.goto("https://retroui.dev/", {
    waitUntil: "networkidle",
    timeout: 60_000,
  });

  // Let any lazy-loaded content settle.
  await page.waitForTimeout(2000);

  // Screenshots
  await page.screenshot({
    path: path.join(outDir, "retroui-landing-full.png"),
    fullPage: true,
  });
  await page.screenshot({
    path: path.join(outDir, "retroui-landing-viewport.png"),
    fullPage: false,
  });

  // Structural snapshot
  const snapshot = await page.evaluate(() => {
    const summarize = (el) => ({
      tag: el.tagName.toLowerCase(),
      id: el.id || null,
      classes: el.className && typeof el.className === "string"
        ? el.className.split(/\s+/).filter(Boolean).slice(0, 6)
        : [],
      text: (el.innerText || "").trim().slice(0, 140),
    });

    const headings = Array.from(document.querySelectorAll("h1, h2, h3")).slice(0, 25).map(summarize);
    const sections = Array.from(document.querySelectorAll("section, header, footer, main > div"))
      .slice(0, 25)
      .map((s) => {
        const cs = getComputedStyle(s);
        return {
          tag: s.tagName.toLowerCase(),
          id: s.id || null,
          classes: (typeof s.className === "string" ? s.className : "").split(/\s+/).filter(Boolean).slice(0, 5),
          background: cs.backgroundColor,
          color: cs.color,
          padding: cs.padding,
          firstChildText: (s.innerText || "").trim().slice(0, 120),
        };
      });

    const buttons = Array.from(document.querySelectorAll("a, button"))
      .slice(0, 12)
      .map((b) => {
        const cs = getComputedStyle(b);
        return {
          text: (b.innerText || "").trim().slice(0, 40),
          background: cs.backgroundColor,
          color: cs.color,
          border: cs.border,
          borderRadius: cs.borderRadius,
          boxShadow: cs.boxShadow,
          padding: cs.padding,
          fontFamily: cs.fontFamily,
          fontWeight: cs.fontWeight,
        };
      });

    const bodyStyles = (() => {
      const cs = getComputedStyle(document.body);
      return {
        background: cs.backgroundColor,
        color: cs.color,
        fontFamily: cs.fontFamily,
      };
    })();

    return { bodyStyles, headings, sections, buttons };
  });

  fs.writeFileSync(
    path.join(outDir, "retroui-structure.json"),
    JSON.stringify(snapshot, null, 2)
  );

  await browser.close();
  console.log("✓ saved to", outDir);
})();
