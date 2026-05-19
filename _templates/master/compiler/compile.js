"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/compiler/compile.ts
var compile_exports = {};
__export(compile_exports, {
  compileHtml: () => compileHtml
});
module.exports = __toCommonJS(compile_exports);
var fs = __toESM(require("fs"));
var path = __toESM(require("path"));

// src/shared/icons.ts
var SuperIcons = {
  sparkles: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.3 1.3L3 12l5.8 1.9a2 2 0 0 1 1.3 1.3L12 21l1.9-5.8a2 2 0 0 1 1.3-1.3L21 12l-5.8-1.9a2 2 0 0 1-1.3-1.3Z"></path></svg>`,
  settings: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.38a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.51a2 2 0 0 1 1-1.72l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2Z"></path><circle cx="12" cy="12" r="3"></circle></svg>`,
  "layout-dashboard": `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>`,
  "clipboard-list": `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4"/><path d="M12 16h4"/><path d="M8 11h.01"/><path d="M8 16h.01"/></svg>`,
  "trending-up": `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>`,
  users: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
  folder: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"/></svg>`,
  link: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/></svg>`,
  user: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,
  "chevron-right": `<svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>`,
  layers: `<svg aria-hidden="true" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"/><path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"/><path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"/></svg>`
};
if (typeof window !== "undefined") window.SuperIcons = SuperIcons;

// src/components/button/button.transform.ts
var VARIANTS = /* @__PURE__ */ new Set(["primary", "secondary", "ghost", "danger"]);
var SIZES = /* @__PURE__ */ new Set(["xs", "sm", "lg"]);
function hasAttr(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function attr(name, value) {
  if (value === void 0 || value === null || value === false) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', "&quot;")}"`;
}
function transformButton(node) {
  const variant = VARIANTS.has(node.attrs.variant) ? node.attrs.variant : null;
  const size = SIZES.has(node.attrs.size) ? node.attrs.size : null;
  const icon = node.attrs.icon && SuperIcons[node.attrs.icon] ? SuperIcons[node.attrs.icon].trim() : "";
  const iconOnly = hasAttr(node.attrs, "icon-only");
  const label = node.attrs.label || node.attrs["aria-label"];
  const href = node.attrs.href;
  const type = node.attrs.type || "button";
  const classes = ["btn"];
  if (variant) classes.push(`btn-${variant}`);
  if (size) classes.push(`btn-${size}`);
  if (iconOnly) classes.push("btn-icon");
  const content = [icon, iconOnly ? "" : node.innerHTML.trim()].filter(Boolean).join("");
  if (href) {
    return {
      html: `<a class="${classes.join(" ")}"${attr("href", href)}${attr("aria-label", iconOnly ? label : null)}>${content}</a>`
    };
  }
  return {
    html: `<button class="${classes.join(" ")}"${attr("type", type)}${attr("disabled", hasAttr(node.attrs, "disabled"))}${attr("aria-label", iconOnly ? label : null)}>${content}</button>`
  };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.button = transformButton;
}

// src/components/badge/badge.transform.ts
var VARIANTS2 = /* @__PURE__ */ new Set(["primary", "success", "warning", "danger", "muted"]);
function hasAttr2(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function transformBadge(node) {
  const variant = VARIANTS2.has(node.attrs.variant) ? node.attrs.variant : "primary";
  const dot = hasAttr2(node.attrs, "dot") ? " badge-dot" : "";
  return { html: `<span class="badge badge-${variant}${dot}">${node.innerHTML.trim()}</span>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.badge = transformBadge;
}

// src/components/chip/chip.transform.ts
function hasAttr3(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function transformChip(node) {
  const selected = hasAttr3(node.attrs, "selected");
  const button = hasAttr3(node.attrs, "button");
  const classes = ["chip"];
  if (selected) classes.push("chip--selected");
  if (button) classes.push("chip--button");
  const tag = button ? "button" : "span";
  const typeAttr = button ? ' type="button"' : "";
  return { html: `<${tag} class="${classes.join(" ")}"${typeAttr}>${node.innerHTML.trim()}</${tag}>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.chip = transformChip;
}

// src/components/avatar/avatar.transform.ts
var SIZES2 = /* @__PURE__ */ new Set(["xs", "sm", "lg", "xl", "2xl"]);
var COLORS = /* @__PURE__ */ new Set(["accent", "success", "muted"]);
function transformAvatar(node) {
  const size = SIZES2.has(node.attrs.size) ? node.attrs.size : null;
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

// src/components/skeleton/skeleton.transform.ts
function transformSkeleton(node) {
  const type = node.attrs.type;
  if (type === "block") return { html: `<div class="skeleton skeleton-block"></div>` };
  const width = node.attrs.width === "short" ? " skeleton-line--short" : node.attrs.width === "wide" ? " skeleton-line--wide" : "";
  return { html: `<div class="skeleton skeleton-line${width}"></div>` };
}
function transformSkeletonCard(node) {
  return {
    html: `<div class="skeleton-card"><div class="skeleton skeleton-avatar"></div><div class="skeleton-copy"><div class="skeleton skeleton-line skeleton-line--wide"></div><div class="skeleton skeleton-line skeleton-line--short"></div></div></div>`
  };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.skeleton = transformSkeleton;
  window.SuperTransforms["skeleton-card"] = transformSkeletonCard;
}

// src/components/input/input.transform.ts
function hasAttr4(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function attr2(name, value) {
  if (value === void 0 || value === null || value === false) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', "&quot;")}"`;
}
function transformInput(node) {
  const classes = ["input"];
  if (hasAttr4(node.attrs, "error")) classes.push("input-error");
  return {
    html: `<input class="${classes.join(" ")}"${attr2("type", node.attrs.type || "text")}${attr2("id", node.attrs.id)}${attr2("name", node.attrs.name)}${attr2("placeholder", node.attrs.placeholder)}${attr2("value", node.attrs.value)}${attr2("disabled", hasAttr4(node.attrs, "disabled"))}>`
  };
}
function transformTextarea(node) {
  return {
    html: `<textarea class="textarea"${attr2("placeholder", node.attrs.placeholder)}${attr2("rows", node.attrs.rows)}${attr2("disabled", hasAttr4(node.attrs, "disabled"))}></textarea>`
  };
}
function transformInputGroup(node) {
  const prefix = node.attrs.prefix ? `<span class="input-prefix">${node.attrs.prefix}</span>` : "";
  const suffix = node.attrs.suffix ? `<span class="input-suffix">${node.attrs.suffix}</span>` : "";
  return {
    html: `<div class="input-group">${prefix}<input class="input"${attr2("type", node.attrs.type || "text")}${attr2("placeholder", node.attrs.placeholder)}>${suffix}</div>`
  };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.input = transformInput;
  window.SuperTransforms.textarea = transformTextarea;
  window.SuperTransforms["input-group"] = transformInputGroup;
}

// src/components/controls/controls.transform.ts
function hasAttr5(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function attr3(name, value) {
  if (value === void 0 || value === null || value === false) return "";
  if (value === true) return ` ${name}`;
  return ` ${name}="${String(value).replaceAll('"', "&quot;")}"`;
}
function transformCheckbox(node) {
  return {
    html: `<label class="checkbox-label"><input class="checkbox" type="checkbox"${attr3("name", node.attrs.name)}${attr3("checked", hasAttr5(node.attrs, "checked"))}${attr3("disabled", hasAttr5(node.attrs, "disabled"))}> ${node.innerHTML.trim()}</label>`
  };
}
function transformRadio(node) {
  return {
    html: `<label class="radio-label"><input class="radio" type="radio"${attr3("name", node.attrs.name)}${attr3("checked", hasAttr5(node.attrs, "checked"))}${attr3("disabled", hasAttr5(node.attrs, "disabled"))}> ${node.innerHTML.trim()}</label>`
  };
}
function transformToggle(node) {
  const checked = hasAttr5(node.attrs, "checked") ? " checked" : "";
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

// src/components/progress/progress.transform.ts
var SIZES3 = /* @__PURE__ */ new Set(["sm", "lg"]);
function transformProgress(node) {
  const value = parseInt(node.attrs.value) || 0;
  const label = node.innerHTML.trim() || node.attrs.label || "";
  return {
    html: `<div><div class="progress-label"><span>${label}</span><span>${value}%</span></div><div class="progress"><div class="progress-bar" style="width:${value}%"></div></div></div>`
  };
}
function transformSpinner(node) {
  const size = SIZES3.has(node.attrs.size) ? node.attrs.size : null;
  const classes = ["spinner"];
  if (size) classes.push(`spinner--${size}`);
  const label = node.innerHTML.trim();
  if (label) {
    return {
      html: `<div class="loading-inline" role="status" aria-live="polite"><div class="${classes.join(" ")}"></div><span class="muted-text">${label}</span></div>`
    };
  }
  return { html: `<div class="${classes.join(" ")}" role="status" aria-label="Loading"></div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.progress = transformProgress;
  window.SuperTransforms.spinner = transformSpinner;
}

// src/components/alert/alert.transform.ts
var VARIANTS3 = /* @__PURE__ */ new Set(["info", "success", "warning", "error"]);
function transformAlert(node) {
  const variant = VARIANTS3.has(node.attrs.variant) ? node.attrs.variant : "info";
  return { html: `<div class="alert alert-${variant}">${node.innerHTML.trim()}</div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.alert = transformAlert;
}

// src/components/pagination/pagination.transform.ts
function transformPagination(node) {
  const pages = parseInt(node.attrs.pages) || 3;
  const active = parseInt(node.attrs.active) || 1;
  const label = node.attrs.label || "Pagination";
  const pageButtons = Array.from({ length: pages }, (_, i) => {
    const n = i + 1;
    const isActive = n === active;
    return `<button class="pagination__button${isActive ? " is-active" : ""}" type="button"${isActive ? ' aria-current="page"' : ""}>${n}</button>`;
  }).join("");
  return {
    html: `<nav class="pagination" aria-label="${label}"><button class="pagination__button" type="button">Prev</button><div class="pagination__pages">${pageButtons}</div><button class="pagination__button" type="button">Next</button></nav>`
  };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.pagination = transformPagination;
}

// src/components/toast/toast.transform.ts
var VARIANTS4 = /* @__PURE__ */ new Set(["success", "warning", "danger", "info"]);
function transformToast(node) {
  const variant = VARIANTS4.has(node.attrs.variant) ? node.attrs.variant : "info";
  return {
    html: `<div class="toast toast--${variant}"><span>${node.innerHTML.trim()}</span><button class="btn btn-ghost btn-xs" type="button">Dismiss</button></div>`
  };
}
function transformToastList(node) {
  return { html: `<div class="toast-list">${node.innerHTML.trim()}</div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.toast = transformToast;
  window.SuperTransforms["toast-list"] = transformToastList;
}

// src/components/rating/rating.transform.ts
function transformRating(node) {
  const value = parseInt(node.attrs.value) || 0;
  const max = parseInt(node.attrs.max) || 5;
  const stars = Array.from(
    { length: max },
    (_, i) => `<button class="rating-star${i < value ? " is-active" : ""}" type="button">&#9733;</button>`
  ).join("");
  return { html: `<div class="rating">${stars}<span class="rating-value">${value}/${max}</span></div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.rating = transformRating;
}

// src/components/navbar/navbar.transform.ts
function transformNavbar(node) {
  const label = node.attrs.label || "Navigation";
  return { html: `<nav class="navbar" aria-label="${label}">${node.innerHTML.trim()}</nav>` };
}
function transformNavbarBrand(node) {
  const href = node.attrs.href || "#";
  const label = node.attrs.label || "";
  const mark = node.attrs.mark || "&#9670;";
  return {
    html: `<a class="navbar__brand" href="${href}"${label ? ` aria-label="${label}"` : ""}><span class="navbar__mark">${mark}</span><span>${node.innerHTML.trim()}</span></a>`
  };
}
function transformNavbarLinks(node) {
  return { html: `<div class="navbar__links">${node.innerHTML.trim()}</div>` };
}
function transformNavbarLink(node) {
  const active = Object.prototype.hasOwnProperty.call(node.attrs, "active");
  const href = node.attrs.href || "#";
  return {
    html: `<a class="navbar__link${active ? " is-active" : ""}" href="${href}">${node.innerHTML.trim()}</a>`
  };
}
function transformNavbarActions(node) {
  return { html: `<div class="navbar__actions">${node.innerHTML.trim()}</div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.navbar = transformNavbar;
  window.SuperTransforms["navbar-brand"] = transformNavbarBrand;
  window.SuperTransforms["navbar-links"] = transformNavbarLinks;
  window.SuperTransforms["navbar-link"] = transformNavbarLink;
  window.SuperTransforms["navbar-actions"] = transformNavbarActions;
}

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

// src/components/sidebar-nav/sidebar-nav.transform.ts
function hasAttr6(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function transformSidebarNav(node) {
  const right = hasAttr6(node.attrs, "right");
  return {
    html: `<div class="sidebar-nav${right ? " sidebar-nav--right" : ""}">${node.innerHTML.trim()}</div>`
  };
}
function transformSidebarNavBrand(node) {
  return { html: `<div class="sidebar-nav__brand">${node.innerHTML.trim()}</div>` };
}
function transformSidebarNavSection(node) {
  const bottom = hasAttr6(node.attrs, "bottom");
  return {
    html: `<div class="sidebar-nav__section${bottom ? " sidebar-nav__section--bottom" : ""}">${node.innerHTML.trim()}</div>`
  };
}
function transformSidebarNavLabel(node) {
  return { html: `<span class="sidebar-nav__section-label">${node.innerHTML.trim()}</span>` };
}
function transformSidebarNavItem(node) {
  const active = hasAttr6(node.attrs, "active");
  const href = node.attrs.href || "#";
  return {
    html: `<a class="sidebar-nav__item${active ? " is-active" : ""}" href="${href}">${node.innerHTML.trim()}</a>`
  };
}
function transformSidebarNavIcon(node) {
  const svg = node.attrs.icon && SuperIcons[node.attrs.icon] ? SuperIcons[node.attrs.icon].trim() : node.innerHTML.trim();
  return { html: `<span class="sidebar-nav__icon">${svg}</span>` };
}
function transformSidebarNavItemLabel(node) {
  return { html: `<span class="sidebar-nav__label">${node.innerHTML.trim()}</span>` };
}
function transformSidebarNavBadge(node) {
  return { html: `<span class="sidebar-nav__badge">${node.innerHTML.trim()}</span>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms["sidebar-nav"] = transformSidebarNav;
  window.SuperTransforms["sidebar-nav-brand"] = transformSidebarNavBrand;
  window.SuperTransforms["sidebar-nav-section"] = transformSidebarNavSection;
  window.SuperTransforms["sidebar-nav-label"] = transformSidebarNavLabel;
  window.SuperTransforms["sidebar-nav-item"] = transformSidebarNavItem;
  window.SuperTransforms["sidebar-nav-icon"] = transformSidebarNavIcon;
  window.SuperTransforms["sidebar-nav-item-label"] = transformSidebarNavItemLabel;
  window.SuperTransforms["sidebar-nav-badge"] = transformSidebarNavBadge;
}

// src/components/breadcrumb/breadcrumb.transform.ts
function hasAttr7(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function transformBreadcrumb(node) {
  const chevron = hasAttr7(node.attrs, "chevron");
  const label = node.attrs.label || "Breadcrumb";
  return {
    html: `<nav class="breadcrumb" aria-label="${label}"><ol class="breadcrumb__list${chevron ? " breadcrumb__list--chevron" : ""}">${node.innerHTML.trim()}</ol></nav>`
  };
}
function transformBreadcrumbItem(node) {
  const current = hasAttr7(node.attrs, "current");
  const home = hasAttr7(node.attrs, "home");
  const href = node.attrs.href || "#";
  const inner = node.innerHTML.trim();
  let content;
  if (current) {
    content = `<span class="breadcrumb__current" aria-current="page">${inner}</span>`;
  } else {
    content = `<a class="breadcrumb__link${home ? " breadcrumb__home" : ""}" href="${href}">${inner}</a>`;
  }
  return { html: `<li class="breadcrumb__item">${content}</li>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms.breadcrumb = transformBreadcrumb;
  window.SuperTransforms["breadcrumb-item"] = transformBreadcrumbItem;
}

// src/components/site-footer/site-footer.transform.ts
function transformSiteFooter(node) {
  return { html: `<footer class="site-footer">${node.innerHTML.trim()}</footer>` };
}
function transformSiteFooterBrand(node) {
  return { html: `<div class="site-footer__brand">${node.innerHTML.trim()}</div>` };
}
function transformSiteFooterCol(node) {
  return { html: `<div class="site-footer__col">${node.innerHTML.trim()}</div>` };
}
function transformSiteFooterColLabel(node) {
  return { html: `<span class="site-footer__col-label">${node.innerHTML.trim()}</span>` };
}
function transformSiteFooterLink(node) {
  const href = node.attrs.href || "#";
  return { html: `<a class="site-footer__link" href="${href}">${node.innerHTML.trim()}</a>` };
}
function transformSiteFooterBottom(node) {
  return { html: `<div class="site-footer__bottom">${node.innerHTML.trim()}</div>` };
}
if (typeof window !== "undefined") {
  window.SuperTransforms = window.SuperTransforms || {};
  window.SuperTransforms["site-footer"] = transformSiteFooter;
  window.SuperTransforms["site-footer-brand"] = transformSiteFooterBrand;
  window.SuperTransforms["site-footer-col"] = transformSiteFooterCol;
  window.SuperTransforms["site-footer-col-label"] = transformSiteFooterColLabel;
  window.SuperTransforms["site-footer-link"] = transformSiteFooterLink;
  window.SuperTransforms["site-footer-bottom"] = transformSiteFooterBottom;
}

// src/components/accordion/accordion.transform.ts
function hasAttr8(attrs, name) {
  return Object.prototype.hasOwnProperty.call(attrs, name);
}
function transformAccordion(node) {
  return { html: `<div class="accordion">${node.innerHTML.trim()}</div>` };
}
function transformAccordionItem(node) {
  const open = hasAttr8(node.attrs, "open");
  return { html: `<div class="accordion-item">${node.innerHTML.trim()}</div>` };
}
function transformAccordionTrigger(node) {
  const open = hasAttr8(node.attrs, "open");
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

// src/compiler/compile.ts
var ROOT = path.resolve(__dirname, "..");
var DEFAULT_INPUT = path.join(ROOT, "pages", "index.html");
var DEFAULT_OUTPUT = path.join(ROOT, "pages", "index.compiled.html");
var CONTENT_FILE = path.resolve(ROOT, "..", "..", "..", "shared", "content", "content.json");
function loadContent() {
  try {
    return JSON.parse(fs.readFileSync(CONTENT_FILE, "utf8"));
  } catch {
    return {};
  }
}
function injectContent(html, content) {
  return html.replace(/\{\{content\.([^}]+)\}\}/g, (_match, path2) => {
    const value = path2.split(".").reduce((obj, key) => {
      if (obj && typeof obj === "object") return obj[key];
      return void 0;
    }, content);
    return value != null ? String(value) : "";
  });
}
var TRANSFORMS = /* @__PURE__ */ new Map([
  ["sc-button", transformButton],
  ["sc-badge", transformBadge],
  ["sc-chip", transformChip],
  ["sc-avatar", transformAvatar],
  ["sc-avatar-group", transformAvatarGroup],
  ["sc-skeleton", transformSkeleton],
  ["sc-skeleton-card", transformSkeletonCard],
  ["sc-input", transformInput],
  ["sc-textarea", transformTextarea],
  ["sc-input-group", transformInputGroup],
  ["sc-checkbox", transformCheckbox],
  ["sc-radio", transformRadio],
  ["sc-toggle", transformToggle],
  ["sc-progress", transformProgress],
  ["sc-spinner", transformSpinner],
  ["sc-alert", transformAlert],
  ["sc-pagination", transformPagination],
  ["sc-toast-list", transformToastList],
  ["sc-toast", transformToast],
  ["sc-rating", transformRating],
  ["sc-navbar", transformNavbar],
  ["sc-navbar-brand", transformNavbarBrand],
  ["sc-navbar-links", transformNavbarLinks],
  ["sc-navbar-link", transformNavbarLink],
  ["sc-navbar-actions", transformNavbarActions],
  ["sc-tabs-pill", transformTabsPill],
  ["sc-tabs", transformTabs],
  ["sc-tab", transformTab],
  ["sc-sidebar-nav-section", transformSidebarNavSection],
  ["sc-sidebar-nav-item-label", transformSidebarNavItemLabel],
  ["sc-sidebar-nav-brand", transformSidebarNavBrand],
  ["sc-sidebar-nav-label", transformSidebarNavLabel],
  ["sc-sidebar-nav-badge", transformSidebarNavBadge],
  ["sc-sidebar-nav-icon", transformSidebarNavIcon],
  ["sc-sidebar-nav-item", transformSidebarNavItem],
  ["sc-sidebar-nav", transformSidebarNav],
  ["sc-breadcrumb-item", transformBreadcrumbItem],
  ["sc-breadcrumb", transformBreadcrumb],
  ["sc-site-footer-col-label", transformSiteFooterColLabel],
  ["sc-site-footer-bottom", transformSiteFooterBottom],
  ["sc-site-footer-brand", transformSiteFooterBrand],
  ["sc-site-footer-link", transformSiteFooterLink],
  ["sc-site-footer-col", transformSiteFooterCol],
  ["sc-site-footer", transformSiteFooter],
  ["sc-accordion-trigger", transformAccordionTrigger],
  ["sc-accordion-content", transformAccordionContent],
  ["sc-accordion-item", transformAccordionItem],
  ["sc-accordion", transformAccordion]
]);
function parseAttrs(source) {
  const attrs = {};
  const pattern = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match;
  while ((match = pattern.exec(source)) !== null) {
    const [, name, doubleQuoted, singleQuoted, unquoted] = match;
    attrs[name] = doubleQuoted ?? singleQuoted ?? unquoted ?? "";
  }
  return attrs;
}
function compileTag(html, tagName, transform) {
  const paired = new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`, "gi");
  const selfClosing = new RegExp(`<${tagName}\\b([^>]*)\\/>`, "gi");
  let next = html.replace(
    paired,
    (_full, rawAttrs, innerHTML) => transform({ tagName, attrs: parseAttrs(rawAttrs), innerHTML }).html
  );
  next = next.replace(
    selfClosing,
    (_full, rawAttrs) => transform({ tagName, attrs: parseAttrs(rawAttrs), innerHTML: "" }).html
  );
  return next;
}
function stripRuntimeScripts(html) {
  return html.replace(/\s*<script src="\.\.\/shared\/icons\.js" defer><\/script>/g, "").replace(/\s*<script src="\.\.\/components\/(?!core-control\/core-control\.js)[^"]+\.transform\.js" defer><\/script>/g, "").replace(/\s*<script src="\.\.\/runtime\/sc-runtime\.js" defer><\/script>/g, "");
}
function compileHtml(inputHtml) {
  let html = inputHtml;
  const orderedTransforms = [...TRANSFORMS].sort((a, b) => b[0].length - a[0].length);
  for (const [tagName, transform] of orderedTransforms) {
    html = compileTag(html, tagName, transform);
  }
  return stripRuntimeScripts(html);
}
function main() {
  const input = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_INPUT;
  const output = process.argv[3] ? path.resolve(process.argv[3]) : DEFAULT_OUTPUT;
  const source = injectContent(fs.readFileSync(input, "utf8"), loadContent());
  const compiled = compileHtml(source);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, compiled);
  console.log(`Compiled ${path.relative(ROOT, input)} -> ${path.relative(ROOT, output)}`);
}
main();
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  compileHtml
});
