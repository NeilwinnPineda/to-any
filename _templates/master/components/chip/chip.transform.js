"use strict";
(() => {
  // src/components/chip/chip.transform.ts
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function transformChip(node) {
    const selected = hasAttr(node.attrs, "selected");
    const button = hasAttr(node.attrs, "button");
    const classes = ["chip"];
    if (selected) classes.push("chip--selected");
    if (button) classes.push("chip--button");
    const tag = button ? "button" : "span";
    const typeAttr = button ? ' type="button"' : "";
    return { html: `<${tag} class="${classes.join(" ")}"${typeAttr}>${node.innerHTML.trim()}</${tag}>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.chip = transformChip;
  }
})();
