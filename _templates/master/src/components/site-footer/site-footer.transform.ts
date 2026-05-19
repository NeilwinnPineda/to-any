import type { TransformNode, TransformResult } from '../../types';

export function transformSiteFooter(node: TransformNode): TransformResult {
  return { html: `<footer class="site-footer">${node.innerHTML.trim()}</footer>` };
}

export function transformSiteFooterBrand(node: TransformNode): TransformResult {
  return { html: `<div class="site-footer__brand">${node.innerHTML.trim()}</div>` };
}

export function transformSiteFooterCol(node: TransformNode): TransformResult {
  return { html: `<div class="site-footer__col">${node.innerHTML.trim()}</div>` };
}

export function transformSiteFooterColLabel(node: TransformNode): TransformResult {
  return { html: `<span class="site-footer__col-label">${node.innerHTML.trim()}</span>` };
}

export function transformSiteFooterLink(node: TransformNode): TransformResult {
  const href = node.attrs.href || '#';
  return { html: `<a class="site-footer__link" href="${href}">${node.innerHTML.trim()}</a>` };
}

export function transformSiteFooterBottom(node: TransformNode): TransformResult {
  return { html: `<div class="site-footer__bottom">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms['site-footer'] = transformSiteFooter;
  window.SuperTransforms['site-footer-brand'] = transformSiteFooterBrand;
  window.SuperTransforms['site-footer-col'] = transformSiteFooterCol;
  window.SuperTransforms['site-footer-col-label'] = transformSiteFooterColLabel;
  window.SuperTransforms['site-footer-link'] = transformSiteFooterLink;
  window.SuperTransforms['site-footer-bottom'] = transformSiteFooterBottom;
}
