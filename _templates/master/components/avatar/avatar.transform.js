"use strict";
(() => {
  // src/components/avatar/avatar.transform.ts
  var SIZES = /* @__PURE__ */ new Set(["xs", "sm", "lg", "xl", "2xl"]);
  var COLORS = /* @__PURE__ */ new Set(["accent", "success", "muted"]);
  function transformAvatar(node) {
    const size = SIZES.has(node.attrs.size) ? node.attrs.size : null;
    const color = COLORS.has(node.attrs.color) ? node.attrs.color : null;
    const classes = ["avatar"];
    if (size) classes.push(`avatar-${size}`);
    if (color) classes.push(`avatar--${color}`);
    return { html: `<span class="${classes.join(" ")}">${node.innerHTML.trim()}</span>` };
  }
  function transformAvatarGroup(node) {
    return { html: `<div class="avatar-group">${node.innerHTML.trim()}</div>` };
  }
  if (typeof window !== "undefined") {
    window.SuperTransforms = window.SuperTransforms || {};
    window.SuperTransforms.avatar = transformAvatar;
    window.SuperTransforms["avatar-group"] = transformAvatarGroup;
  }
})();
