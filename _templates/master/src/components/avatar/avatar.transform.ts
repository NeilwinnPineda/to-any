import type { TransformNode, TransformResult } from '../../types';

const SIZES = new Set(['xs', 'sm', 'lg', 'xl', '2xl']);
const COLORS = new Set(['accent', 'success', 'muted']);

export function transformAvatar(node: TransformNode): TransformResult {
  const size = SIZES.has(node.attrs.size) ? node.attrs.size : null;
  const color = COLORS.has(node.attrs.color) ? node.attrs.color : null;
  const classes = ['avatar'];
  if (size) classes.push(`avatar-${size}`);
  if (color) classes.push(`avatar--${color}`);
  return { html: `<span class="${classes.join(' ')}">${node.innerHTML.trim()}</span>` };
}

export function transformAvatarGroup(node: TransformNode): TransformResult {
  return { html: `<div class="avatar-group">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.avatar = transformAvatar;
  window.SuperTransforms['avatar-group'] = transformAvatarGroup;
}
