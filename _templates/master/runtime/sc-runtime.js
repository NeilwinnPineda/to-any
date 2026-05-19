const registry = new Map([
  ['SC-BUTTON',        window.SuperTransforms.button],
  ['SC-BADGE',         window.SuperTransforms.badge],
  ['SC-CHIP',          window.SuperTransforms.chip],
  ['SC-AVATAR',        window.SuperTransforms.avatar],
  ['SC-AVATAR-GROUP',  window.SuperTransforms['avatar-group']],
  ['SC-SKELETON',      window.SuperTransforms.skeleton],
  ['SC-SKELETON-CARD', window.SuperTransforms['skeleton-card']],
  ['SC-INPUT',         window.SuperTransforms.input],
  ['SC-TEXTAREA',      window.SuperTransforms.textarea],
  ['SC-INPUT-GROUP',   window.SuperTransforms['input-group']],
  ['SC-CHECKBOX',      window.SuperTransforms.checkbox],
  ['SC-RADIO',         window.SuperTransforms.radio],
  ['SC-TOGGLE',        window.SuperTransforms.toggle],
  ['SC-PROGRESS',      window.SuperTransforms.progress],
  ['SC-SPINNER',       window.SuperTransforms.spinner],
  ['SC-ALERT',         window.SuperTransforms.alert],
  ['SC-PAGINATION',    window.SuperTransforms.pagination],
  ['SC-TOAST-LIST',    window.SuperTransforms['toast-list']],
  ['SC-TOAST',         window.SuperTransforms.toast],
  ['SC-RATING',        window.SuperTransforms.rating],
  ['SC-NAVBAR',        window.SuperTransforms.navbar],
  ['SC-NAVBAR-BRAND',  window.SuperTransforms['navbar-brand']],
  ['SC-NAVBAR-LINKS',  window.SuperTransforms['navbar-links']],
  ['SC-NAVBAR-LINK',   window.SuperTransforms['navbar-link']],
  ['SC-NAVBAR-ACTIONS',window.SuperTransforms['navbar-actions']],
  ['SC-TABS-PILL',             window.SuperTransforms['tabs-pill']],
  ['SC-TABS',                  window.SuperTransforms.tabs],
  ['SC-TAB',                   window.SuperTransforms.tab],
  ['SC-SIDEBAR-NAV-SECTION',   window.SuperTransforms['sidebar-nav-section']],
  ['SC-SIDEBAR-NAV-ITEM-LABEL',window.SuperTransforms['sidebar-nav-item-label']],
  ['SC-SIDEBAR-NAV-BRAND',     window.SuperTransforms['sidebar-nav-brand']],
  ['SC-SIDEBAR-NAV-LABEL',     window.SuperTransforms['sidebar-nav-label']],
  ['SC-SIDEBAR-NAV-BADGE',     window.SuperTransforms['sidebar-nav-badge']],
  ['SC-SIDEBAR-NAV-ICON',      window.SuperTransforms['sidebar-nav-icon']],
  ['SC-SIDEBAR-NAV-ITEM',      window.SuperTransforms['sidebar-nav-item']],
  ['SC-SIDEBAR-NAV',           window.SuperTransforms['sidebar-nav']],
  ['SC-BREADCRUMB-ITEM',       window.SuperTransforms['breadcrumb-item']],
  ['SC-BREADCRUMB',            window.SuperTransforms.breadcrumb],
  ['SC-SITE-FOOTER-COL-LABEL', window.SuperTransforms['site-footer-col-label']],
  ['SC-SITE-FOOTER-BOTTOM',    window.SuperTransforms['site-footer-bottom']],
  ['SC-SITE-FOOTER-BRAND',     window.SuperTransforms['site-footer-brand']],
  ['SC-SITE-FOOTER-LINK',      window.SuperTransforms['site-footer-link']],
  ['SC-SITE-FOOTER-COL',       window.SuperTransforms['site-footer-col']],
  ['SC-SITE-FOOTER',           window.SuperTransforms['site-footer']],
  ['SC-ACCORDION-TRIGGER',     window.SuperTransforms['accordion-trigger']],
  ['SC-ACCORDION-CONTENT',     window.SuperTransforms['accordion-content']],
  ['SC-ACCORDION-ITEM',        window.SuperTransforms['accordion-item']],
  ['SC-ACCORDION',             window.SuperTransforms.accordion],
]);

function attrsFrom(element) {
  return [...element.attributes].reduce((attrs, current) => {
    attrs[current.name] = current.value;
    return attrs;
  }, {});
}

function toNodeAdapter(element) {
  return {
    tagName: element.tagName.toLowerCase(),
    attrs: attrsFrom(element),
    innerHTML: element.innerHTML,
  };
}

function replaceElement(element, html) {
  const template = document.createElement('template');
  template.innerHTML = html.trim();
  element.replaceWith(template.content);
}

function hydrateElement(element) {
  [...element.children].forEach(hydrateElement);

  const transform = registry.get(element.tagName);
  if (!transform) return;

  const result = transform(toNodeAdapter(element), {});
  replaceElement(element, result.html);
}

function hydrate(root = document.body) {
  if (root.nodeType !== Node.ELEMENT_NODE && root.nodeType !== Node.DOCUMENT_NODE) return;

  if (root.nodeType === Node.ELEMENT_NODE) {
    hydrateElement(root);
    return;
  }

  [...root.body.children].forEach(hydrateElement);
}

hydrate();
window.SuperRuntime = window.SuperRuntime || {};
window.SuperRuntime.hydrate = hydrate;

const observer = new MutationObserver((mutations) => {
  for (const mutation of mutations) {
    mutation.addedNodes.forEach((node) => {
      if (node.nodeType === Node.ELEMENT_NODE) hydrate(node);
    });
  }
});

observer.observe(document.body, { childList: true, subtree: true });
