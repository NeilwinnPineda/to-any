import type { TransformNode, TransformResult } from '../../types';

export function transformTabs(node: TransformNode): TransformResult {
  return { html: `<div class="tabs">${node.innerHTML.trim()}</div>` };
}

export function transformTabsPill(node: TransformNode): TransformResult {
  return { html: `<div class="tabs-pill">${node.innerHTML.trim()}</div>` };
}

export function transformTab(node: TransformNode): TransformResult {
  const active = Object.prototype.hasOwnProperty.call(node.attrs, 'active');
  return {
    html: `<button class="tab${active ? ' active' : ''}" type="button">${node.innerHTML.trim()}</button>`,
  };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.tabs = transformTabs;
  window.SuperTransforms['tabs-pill'] = transformTabsPill;
  window.SuperTransforms.tab = transformTab;
}
