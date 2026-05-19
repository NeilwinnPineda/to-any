"use strict";
(() => {
  // src/components/alert/alert.transform.ts
  var VARIANTS = /* @__PURE__ */ new Set(["info", "success", "warning", "error"]);
  function transformAlert(node) {
    const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : "info";
    return { html: `<div class="alert alert-${variant}">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.alert = transformAlert;
  }
})();
