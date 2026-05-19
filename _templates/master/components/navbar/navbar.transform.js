"use strict";
(() => {
  // src/components/navbar/navbar.transform.ts
  function transformNavbar(node) {
    const label = node.attrs.label || "Navigation";
    return { html: `<nav class="navbar" aria-label="${label}">${node.innerHTML.trim()}</nav>` };
  }
  function transformNavbarBrand(node) {
    const href = node.attrs.href || "#";
    const label = node.attrs.label || "";
    const mark = node.attrs.mark || "&#9670;";
    return {
      html: `<a class="navbar__brand" href="${href}"${label ? ` aria-label="${label}"` : ""}><span class="navbar__mark">${mark}</span><span>${node.innerHTML.trim()}</span></a>`
    };
  }
  function transformNavbarLinks(node) {
    return { html: `<div class="navbar__links">${node.innerHTML.trim()}</div>` };
  }
  function transformNavbarLink(node) {
    const active = Object.prototype.hasOwnProperty.call(node.attrs, "active");
    const href = node.attrs.href || "#";
    return {
      html: `<a class="navbar__link${active ? " is-active" : ""}" href="${href}">${node.innerHTML.trim()}</a>`
    };
  }
  function transformNavbarActions(node) {
    return { html: `<div class="navbar__actions">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.navbar = transformNavbar;
    window.SuperTransforms["navbar-brand"] = transformNavbarBrand;
    window.SuperTransforms["navbar-links"] = transformNavbarLinks;
    window.SuperTransforms["navbar-link"] = transformNavbarLink;
    window.SuperTransforms["navbar-actions"] = transformNavbarActions;
  }
})();
