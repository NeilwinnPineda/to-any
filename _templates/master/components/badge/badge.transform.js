"use strict";
(() => {
  // src/components/badge/badge.transform.ts
  var VARIANTS = /* @__PURE__ */ new Set(["primary", "success", "warning", "danger", "muted"]);
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function transformBadge(node) {
    const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : "primary";
    const dot = hasAttr(node.attrs, "dot") ? " badge-dot" : "";
    return { html: `<span class="badge badge-${variant}${dot}">${node.innerHTML.trim()}</span>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.badge = transformBadge;
  }
})();
