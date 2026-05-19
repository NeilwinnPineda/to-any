"use strict";
(() => {
  // src/components/breadcrumb/breadcrumb.transform.ts
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function transformBreadcrumb(node) {
    const chevron = hasAttr(node.attrs, "chevron");
    const label = node.attrs.label || "Breadcrumb";
    return {
      html: `<nav class="breadcrumb" aria-label="${label}"><ol class="breadcrumb__list${chevron ? " breadcrumb__list--chevron" : ""}">${node.innerHTML.trim()}</ol></nav>`
    };
  }
  function transformBreadcrumbItem(node) {
    const current = hasAttr(node.attrs, "current");
    const home = hasAttr(node.attrs, "home");
    const href = node.attrs.href || "#";
    const inner = node.innerHTML.trim();
    let content;
    if (current) {
      content = `<span class="breadcrumb__current" aria-current="page">${inner}</span>`;
    } else {
      content = `<a class="breadcrumb__link${home ? " breadcrumb__home" : ""}" href="${href}">${inner}</a>`;
    }
    return { html: `<li class="breadcrumb__item">${content}</li>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.breadcrumb = transformBreadcrumb;
    window.SuperTransforms["breadcrumb-item"] = transformBreadcrumbItem;
  }
})();
