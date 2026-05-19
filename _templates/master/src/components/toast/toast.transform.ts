import type { TransformNode, TransformResult } from '../../types';

const VARIANTS = new Set(['success', 'warning', 'danger', 'info']);

export function transformToast(node: TransformNode): TransformResult {
  const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : 'info';
  return {
    html: `<div class="toast toast--${variant}"><span>${node.innerHTML.trim()}</span><button class="btn btn-ghost btn-xs" type="button">Dismiss</button></div>`,
  };
}

export function transformToastList(node: TransformNode): TransformResult {
  return { html: `<div class="toast-list">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.toast = transformToast;
  window.SuperTransforms['toast-list'] = transformToastList;
}
