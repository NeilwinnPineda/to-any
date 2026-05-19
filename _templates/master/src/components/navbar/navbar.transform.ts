import type { TransformNode, TransformResult } from '../../types';

export function transformNavbar(node: TransformNode): TransformResult {
  const label = node.attrs.label || 'Navigation';
  return { html: `<nav class="navbar" aria-label="${label}">${node.innerHTML.trim()}</nav>` };
}

export function transformNavbarBrand(node: TransformNode): TransformResult {
  const href = node.attrs.href || '#';
  const label = node.attrs.label || '';
  const mark = node.attrs.mark || '&#9670;';
  return {
    html: `<a class="navbar__brand" href="${href}"${label ? ` aria-label="${label}"` : ''}><span class="navbar__mark">${mark}</span><span>${node.innerHTML.trim()}</span></a>`,
  };
}

export function transformNavbarLinks(node: TransformNode): TransformResult {
  return { html: `<div class="navbar__links">${node.innerHTML.trim()}</div>` };
}

export function transformNavbarLink(node: TransformNode): TransformResult {
  const active = Object.prototype.hasOwnProperty.call(node.attrs, 'active');
  const href = node.attrs.href || '#';
  return {
    html: `<a class="navbar__link${active ? ' is-active' : ''}" href="${href}">${node.innerHTML.trim()}</a>`,
  };
}

export function transformNavbarActions(node: TransformNode): TransformResult {
  return { html: `<div class="navbar__actions">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.navbar = transformNavbar;
  window.SuperTransforms['navbar-brand'] = transformNavbarBrand;
  window.SuperTransforms['navbar-links'] = transformNavbarLinks;
  window.SuperTransforms['navbar-link'] = transformNavbarLink;
  window.SuperTransforms['navbar-actions'] = transformNavbarActions;
}
