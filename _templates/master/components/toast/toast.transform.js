"use strict";
(() => {
  // src/components/toast/toast.transform.ts
  var VARIANTS = /* @__PURE__ */ new Set(["success", "warning", "danger", "info"]);
  function transformToast(node) {
    const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : "info";
    return {
      html: `<div class="toast toast--${variant}"><span>${node.innerHTML.trim()}</span><button class="btn btn-ghost btn-xs" type="button">Dismiss</button></div>`
    };
  }
  function transformToastList(node) {
    return { html: `<div class="toast-list">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.toast = transformToast;
    window.SuperTransforms["toast-list"] = transformToastList;
  }
})();
