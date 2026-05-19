import type { TransformNode, TransformResult } from '../../types';

const VARIANTS = new Set(['primary', 'success', 'warning', 'danger', 'muted']);

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

export function transformBadge(node: TransformNode): TransformResult {
  const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : 'primary';
  const dot = hasAttr(node.attrs, 'dot') ? ' badge-dot' : '';
  return { html: `<span class="badge badge-${variant}${dot}">${node.innerHTML.trim()}</span>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.badge = transformBadge;
}
