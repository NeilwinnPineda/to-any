import type { TransformNode, TransformResult } from '../../types';
import { SuperIcons } from '../../shared/icons';

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

export function transformSidebarNav(node: TransformNode): TransformResult {
  const right = hasAttr(node.attrs, 'right');
  return {
    html: `<div class="sidebar-nav${right ? ' sidebar-nav--right' : ''}">${node.innerHTML.trim()}</div>`,
  };
}

export function transformSidebarNavBrand(node: TransformNode): TransformResult {
  return { html: `<div class="sidebar-nav__brand">${node.innerHTML.trim()}</div>` };
}

export function transformSidebarNavSection(node: TransformNode): TransformResult {
  const bottom = hasAttr(node.attrs, 'bottom');
  return {
    html: `<div class="sidebar-nav__section${bottom ? ' sidebar-nav__section--bottom' : ''}">${node.innerHTML.trim()}</div>`,
  };
}

export function transformSidebarNavLabel(node: TransformNode): TransformResult {
  return { html: `<span class="sidebar-nav__section-label">${node.innerHTML.trim()}</span>` };
}

export function transformSidebarNavItem(node: TransformNode): TransformResult {
  const active = hasAttr(node.attrs, 'active');
  const href = node.attrs.href || '#';
  return {
    html: `<a class="sidebar-nav__item${active ? ' is-active' : ''}" href="${href}">${node.innerHTML.trim()}</a>`,
  };
}

export function transformSidebarNavIcon(node: TransformNode): TransformResult {
  const svg = node.attrs.icon && SuperIcons[node.attrs.icon]
    ? SuperIcons[node.attrs.icon].trim()
    : node.innerHTML.trim();
  return { html: `<span class="sidebar-nav__icon">${svg}</span>` };
}

export function transformSidebarNavItemLabel(node: TransformNode): TransformResult {
  return { html: `<span class="sidebar-nav__label">${node.innerHTML.trim()}</span>` };
}

export function transformSidebarNavBadge(node: TransformNode): TransformResult {
  return { html: `<span class="sidebar-nav__badge">${node.innerHTML.trim()}</span>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms['sidebar-nav'] = transformSidebarNav;
  window.SuperTransforms['sidebar-nav-brand'] = transformSidebarNavBrand;
  window.SuperTransforms['sidebar-nav-section'] = transformSidebarNavSection;
  window.SuperTransforms['sidebar-nav-label'] = transformSidebarNavLabel;
  window.SuperTransforms['sidebar-nav-item'] = transformSidebarNavItem;
  window.SuperTransforms['sidebar-nav-icon'] = transformSidebarNavIcon;
  window.SuperTransforms['sidebar-nav-item-label'] = transformSidebarNavItemLabel;
  window.SuperTransforms['sidebar-nav-badge'] = transformSidebarNavBadge;
}
