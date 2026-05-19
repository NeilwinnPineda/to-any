"use strict";
(() => {
  // src/components/tabs/tabs.transform.ts
  function transformTabs(node) {
    return { html: `<div class="tabs">${node.innerHTML.trim()}</div>` };
  }
  function transformTabsPill(node) {
    return { html: `<div class="tabs-pill">${node.innerHTML.trim()}</div>` };
  }
  function transformTab(node) {
    const active = Object.prototype.hasOwnProperty.call(node.attrs, "active");
    return {
      html: `<button class="tab${active ? " active" : ""}" type="button">${node.innerHTML.trim()}</button>`
    };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.tabs = transformTabs;
    window.SuperTransforms["tabs-pill"] = transformTabsPill;
    window.SuperTransforms.tab = transformTab;
  }
})();
