"use strict";
(() => {
  // src/components/input/input.transform.ts
  function hasAttr(attrs, name) {
    return Object.prototype.hasOwnProperty.call(attrs, name);
  }
  function attr(name, value) {
    if (value === void 0 || value === null || value === false) return "";
    if (value === true) return ` ${name}`;
    return ` ${name}="${String(value).replaceAll('"', "&quot;")}"`;
  }
  function transformInput(node) {
    const classes = ["input"];
    if (hasAttr(node.attrs, "error")) classes.push("input-error");
    return {
      html: `<input class="${classes.join(" ")}"${attr("type", node.attrs.type || "text")}${attr("id", node.attrs.id)}${attr("name", node.attrs.name)}${attr("placeholder", node.attrs.placeholder)}${attr("value", node.attrs.value)}${attr("disabled", hasAttr(node.attrs, "disabled"))}>`
    };
  }
  function transformTextarea(node) {
    return {
      html: `<textarea class="textarea"${attr("placeholder", node.attrs.placeholder)}${attr("rows", node.attrs.rows)}${attr("disabled", hasAttr(node.attrs, "disabled"))}></textarea>`
    };
  }
  function transformInputGroup(node) {
    const prefix = node.attrs.prefix ? `<span class="input-prefix">${node.attrs.prefix}</span>` : "";
    const suffix = node.attrs.suffix ? `<span class="input-suffix">${node.attrs.suffix}</span>` : "";
    return {
      html: `<div class="input-group">${prefix}<input class="input"${attr("type", node.attrs.type || "text")}${attr("placeholder", node.attrs.placeholder)}>${suffix}</div>`
    };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.input = transformInput;
    window.SuperTransforms.textarea = transformTextarea;
    window.SuperTransforms["input-group"] = transformInputGroup;
  }
})();
