"use strict";
(() => {
  // src/components/skeleton/skeleton.transform.ts
  function transformSkeleton(node) {
    const type = node.attrs.type;
    if (type === "block") return { html: `<div class="skeleton skeleton-block"></div>` };
    const width = node.attrs.width === "short" ? " skeleton-line--short" : node.attrs.width === "wide" ? " skeleton-line--wide" : "";
    return { html: `<div class="skeleton skeleton-line${width}"></div>` };
  }
  function transformSkeletonCard(node) {
    return {
      html: `<div class="skeleton-card"><div class="skeleton skeleton-avatar"></div><div class="skeleton-copy"><div class="skeleton skeleton-line skeleton-line--wide"></div><div class="skeleton skeleton-line skeleton-line--short"></div></div></div>`
    };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.skeleton = transformSkeleton;
    window.SuperTransforms["skeleton-card"] = transformSkeletonCard;
  }
})();
