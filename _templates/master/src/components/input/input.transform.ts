import type { TransformNode, TransformResult } from '../../types';

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

function attr(name: string, value: string | boolean | null | undefined): string {
  if (value === undefined || value === null || value === false) return '';
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', '&quot;')}"`;
}

export function transformInput(node: TransformNode): TransformResult {
  const classes = ['input'];
  if (hasAttr(node.attrs, 'error')) classes.push('input-error');
  return {
    html: `<input class="${classes.join(' ')}"${attr('type', node.attrs.type || 'text')}${attr('id', node.attrs.id)}${attr('name', node.attrs.name)}${attr('placeholder', node.attrs.placeholder)}${attr('value', node.attrs.value)}${attr('disabled', hasAttr(node.attrs, 'disabled'))}>`,
  };
}

export function transformTextarea(node: TransformNode): TransformResult {
  return {
    html: `<textarea class="textarea"${attr('placeholder', node.attrs.placeholder)}${attr('rows', node.attrs.rows)}${attr('disabled', hasAttr(node.attrs, 'disabled'))}></textarea>`,
  };
}

export function transformInputGroup(node: TransformNode): TransformResult {
  const prefix = node.attrs.prefix ? `<span class="input-prefix">${node.attrs.prefix}</span>` : '';
  const suffix = node.attrs.suffix ? `<span class="input-suffix">${node.attrs.suffix}</span>` : '';
  return {
    html: `<div class="input-group">${prefix}<input class="input"${attr('type', node.attrs.type || 'text')}${attr('placeholder', node.attrs.placeholder)}>${suffix}</div>`,
  };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.input = transformInput;
  window.SuperTransforms.textarea = transformTextarea;
  window.SuperTransforms['input-group'] = transformInputGroup;
}
