import type { TransformNode, TransformResult } from '../../types';

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

export function transformChip(node: TransformNode): TransformResult {
  const selected = hasAttr(node.attrs, 'selected');
  const button = hasAttr(node.attrs, 'button');
  const classes = ['chip'];
  if (selected) classes.push('chip--selected');
  if (button) classes.push('chip--button');
  const tag = button ? 'button' : 'span';
  const typeAttr = button ? ' type="button"' : '';
  return { html: `<${tag} class="${classes.join(' ')}"${typeAttr}>${node.innerHTML.trim()}</${tag}>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.chip = transformChip;
}
