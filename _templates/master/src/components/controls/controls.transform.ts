import type { TransformNode, TransformResult } from '../../types';

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

function attr(name: string, value: string | boolean | null | undefined): string {
  if (value === undefined || value === null || value === false) return '';
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', '&quot;')}"`;
}

export function transformCheckbox(node: TransformNode): TransformResult {
  return {
    html: `<label class="checkbox-label"><input class="checkbox" type="checkbox"${attr('name', node.attrs.name)}${attr('checked', hasAttr(node.attrs, 'checked'))}${attr('disabled', hasAttr(node.attrs, 'disabled'))}> ${node.innerHTML.trim()}</label>`,
  };
}

export function transformRadio(node: TransformNode): TransformResult {
  return {
    html: `<label class="radio-label"><input class="radio" type="radio"${attr('name', node.attrs.name)}${attr('checked', hasAttr(node.attrs, 'checked'))}${attr('disabled', hasAttr(node.attrs, 'disabled'))}> ${node.innerHTML.trim()}</label>`,
  };
}

export function transformToggle(node: TransformNode): TransformResult {
  const checked = hasAttr(node.attrs, 'checked') ? ' checked' : '';
  return {
    html: `<label class="toggle-row"><span class="toggle"><input type="checkbox"${checked}><span class="toggle-track"></span></span> ${node.innerHTML.trim()}</label>`,
  };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.checkbox = transformCheckbox;
  window.SuperTransforms.radio = transformRadio;
  window.SuperTransforms.toggle = transformToggle;
}
