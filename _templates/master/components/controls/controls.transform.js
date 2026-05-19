"use strict";
(() => {
  // src/components/controls/controls.transform.ts
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function attr(name, value) {
    if (value === void 0 || value === null || value === false) return "";
    if (value === true) return ` ${name}`;
    return ` ${name}="${String(value).replaceAll('"', "&quot;")}"`;
  }
  function transformCheckbox(node) {
    return {
      html: `<label class="checkbox-label"><input class="checkbox" type="checkbox"${attr("name", node.attrs.name)}${attr("checked", hasAttr(node.attrs, "checked"))}${attr("disabled", hasAttr(node.attrs, "disabled"))}> ${node.innerHTML.trim()}</label>`
    };
  }
  function transformRadio(node) {
    return {
      html: `<label class="radio-label"><input class="radio" type="radio"${attr("name", node.attrs.name)}${attr("checked", hasAttr(node.attrs, "checked"))}${attr("disabled", hasAttr(node.attrs, "disabled"))}> ${node.innerHTML.trim()}</label>`
    };
  }
  function transformToggle(node) {
    const checked = hasAttr(node.attrs, "checked") ? " checked" : "";
    return {
      html: `<label class="toggle-row"><span class="toggle"><input type="checkbox"${checked}><span class="toggle-track"></span></span> ${node.innerHTML.trim()}</label>`
    };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.checkbox = transformCheckbox;
    window.SuperTransforms.radio = transformRadio;
    window.SuperTransforms.toggle = transformToggle;
  }
})();
