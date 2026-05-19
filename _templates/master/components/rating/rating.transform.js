"use strict";
(() => {
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
})();
