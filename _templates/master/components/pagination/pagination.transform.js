"use strict";
(() => {
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
})();
