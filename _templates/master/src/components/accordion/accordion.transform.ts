import type { TransformNode, TransformResult } from '../../types';

function hasAttr(attrs: Record<string, string>, name: string): boolean {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}

export function transformAccordion(node: TransformNode): TransformResult {
  return { html: `<div class="accordion">${node.innerHTML.trim()}</div>` };
}

export function transformAccordionItem(node: TransformNode): TransformResult {
  const open = hasAttr(node.attrs, 'open');
  return { html: `<div class="accordion-item">${node.innerHTML.trim()}</div>` };
}

export function transformAccordionTrigger(node: TransformNode): TransformResult {
  const open = hasAttr(node.attrs, 'open');
  return {
    html: `<button class="accordion-trigger${open ? ' is-open' : ''}" type="button"><span class="accordion-trigger__label">${node.innerHTML.trim()}</span></button>`,
  };
}

export function transformAccordionContent(node: TransformNode): TransformResult {
  return { html: `<div class="accordion-content">${node.innerHTML.trim()}</div>` };
}

if (typeof window !== 'undefined') {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.accordion = transformAccordion;
  window.SuperTransforms['accordion-item'] = transformAccordionItem;
  window.SuperTransforms['accordion-trigger'] = transformAccordionTrigger;
  window.SuperTransforms['accordion-content'] = transformAccordionContent;
}
