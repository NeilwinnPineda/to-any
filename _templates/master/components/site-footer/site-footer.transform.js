"use strict";
(() => {
  // src/components/site-footer/site-footer.transform.ts
  function transformSiteFooter(node) {
    return { html: `<footer class="site-footer">${node.innerHTML.trim()}</footer>` };
  }
  function transformSiteFooterBrand(node) {
    return { html: `<div class="site-footer__brand">${node.innerHTML.trim()}</div>` };
  }
  function transformSiteFooterCol(node) {
    return { html: `<div class="site-footer__col">${node.innerHTML.trim()}</div>` };
  }
  function transformSiteFooterColLabel(node) {
    return { html: `<span class="site-footer__col-label">${node.innerHTML.trim()}</span>` };
  }
  function transformSiteFooterLink(node) {
    const href = node.attrs.href || "#";
    return { html: `<a class="site-footer__link" href="${href}">${node.innerHTML.trim()}</a>` };
  }
  function transformSiteFooterBottom(node) {
    return { html: `<div class="site-footer__bottom">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms["site-footer"] = transformSiteFooter;
    window.SuperTransforms["site-footer-brand"] = transformSiteFooterBrand;
    window.SuperTransforms["site-footer-col"] = transformSiteFooterCol;
    window.SuperTransforms["site-footer-col-label"] = transformSiteFooterColLabel;
    window.SuperTransforms["site-footer-link"] = transformSiteFooterLink;
    window.SuperTransforms["site-footer-bottom"] = transformSiteFooterBottom;
  }
})();
