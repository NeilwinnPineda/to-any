import type { TransformNode, TransformResult } from '../../types';
import { SuperIcons } from '../../shared/icons';

const VARIANTS = new Set(['primary', 'secondary', 'ghost', 'danger']);
const SIZES = new Set(['xs', 'sm', 'lg']);

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

function attr(name: string, value: string | boolean | null | undefined): string {
  if (value === undefined || value === null || value === false) return '';
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', '&quot;')}"`;
}

export function transformButton(node: TransformNode): TransformResult {
  const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : null;
  const size = SIZES.has(node.attrs.size) ? node.attrs.size : null;
  const icon = node.attrs.icon && SuperIcons[node.attrs.icon] ? SuperIcons[node.attrs.icon].trim() : '';
  const iconOnly = hasAttr(node.attrs, 'icon-only');
  const label = node.attrs.label || node.attrs['aria-label'];
  const href = node.attrs.href;
  const type = node.attrs.type || 'button';
  const classes = ['btn'];

  if (variant) classes.push(`btn-${variant}`);
  if (size) classes.push(`btn-${size}`);
  if (iconOnly) classes.push('btn-icon');

  const content = [icon, iconOnly ? '' : node.innerHTML.trim()].filter(Boolean).join('');

  if (href) {
    return {
      html: `<a class="${classes.join(' ')}"${attr('href', href)}${attr('aria-label', iconOnly ? label : null)}>${content}</a>`,
    };
  }

  return {
    html: `<button class="${classes.join(' ')}"${attr('type', type)}${attr('disabled', hasAttr(node.attrs, 'disabled'))}${attr('aria-label', iconOnly ? label : null)}>${content}</button>`,
  };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.button = transformButton;
}
