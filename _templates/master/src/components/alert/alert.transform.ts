import type { TransformNode, TransformResult } from '../../types';

const VARIANTS = new Set(['info', 'success', 'warning', 'error']);

export function transformAlert(node: TransformNode): TransformResult {
  const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : 'info';
  return { html: `<div class="alert alert-${variant}">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.alert = transformAlert;
}
