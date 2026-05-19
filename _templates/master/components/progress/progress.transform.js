"use strict";
(() => {
  // src/components/progress/progress.transform.ts
  var SIZES = /* @__PURE__ */ new Set(["sm", "lg"]);
  function transformProgress(node) {
    const value = parseInt(node.attrs.value) || 0;
    const label = node.innerHTML.trim() || node.attrs.label || "";
    return {
      html: `<div><div class="progress-label"><span>${label}</span><span>${value}%</span></div><div class="progress"><div class="progress-bar" style="width:${value}%"></div></div></div>`
    };
  }
  function transformSpinner(node) {
    const size = SIZES.has(node.attrs.size) ? node.attrs.size : null;
    const classes = ["spinner"];
    if (size) classes.push(`spinner--${size}`);
    const label = node.innerHTML.trim();
    if (label) {
      return {
        html: `<div class="loading-inline" role="status" aria-live="polite"><div class="${classes.join(" ")}"></div><span class="muted-text">${label}</span></div>`
      };
    }
    return { html: `<div class="${classes.join(" ")}" role="status" aria-label="Loading"></div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.progress = transformProgress;
    window.SuperTransforms.spinner = transformSpinner;
  }
})();
