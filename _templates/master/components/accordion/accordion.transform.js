"use strict";
(() => {
  // src/components/accordion/accordion.transform.ts
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function transformAccordion(node) {
    return { html: `<div class="accordion">${node.innerHTML.trim()}</div>` };
  }
  function transformAccordionItem(node) {
    const open = hasAttr(node.attrs, "open");
    return { html: `<div class="accordion-item">${node.innerHTML.trim()}</div>` };
  }
  function transformAccordionTrigger(node) {
    const open = hasAttr(node.attrs, "open");
    return {
      html: `<button class="accordion-trigger${open ? " is-open" : ""}" type="button"><span class="accordion-trigger__label">${node.innerHTML.trim()}</span></button>`
    };
  }
  function transformAccordionContent(node) {
    return { html: `<div class="accordion-content">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.accordion = transformAccordion;
    window.SuperTransforms["accordion-item"] = transformAccordionItem;
    window.SuperTransforms["accordion-trigger"] = transformAccordionTrigger;
    window.SuperTransforms["accordion-content"] = transformAccordionContent;
  }
})();
