import * as fs from 'fs';
import * as path from 'path';
import type { TransformFn } from '../types';
import { transformButton } from '../components/button/button.transform';
import { transformBadge } from '../components/badge/badge.transform';
import { transformChip } from '../components/chip/chip.transform';
import { transformAvatar, transformAvatarGroup } from '../components/avatar/avatar.transform';
import { transformSkeleton, transformSkeletonCard } from '../components/skeleton/skeleton.transform';
import { transformInput, transformTextarea, transformInputGroup } from '../components/input/input.transform';
import { transformCheckbox, transformRadio, transformToggle } from '../components/controls/controls.transform';
import { transformProgress, transformSpinner } from '../components/progress/progress.transform';
import { transformAlert } from '../components/alert/alert.transform';
import { transformPagination } from '../components/pagination/pagination.transform';
import { transformToast, transformToastList } from '../components/toast/toast.transform';
import { transformRating } from '../components/rating/rating.transform';
import { transformNavbar, transformNavbarBrand, transformNavbarLinks, transformNavbarLink, transformNavbarActions } from '../components/navbar/navbar.transform';
import { transformTabs, transformTabsPill, transformTab } from '../components/tabs/tabs.transform';
import {
  transformSidebarNav, transformSidebarNavBrand, transformSidebarNavSection,
  transformSidebarNavLabel, transformSidebarNavItem, transformSidebarNavIcon,
  transformSidebarNavItemLabel, transformSidebarNavBadge,
} from '../components/sidebar-nav/sidebar-nav.transform';
import { transformBreadcrumb, transformBreadcrumbItem } from '../components/breadcrumb/breadcrumb.transform';
import { transformSiteFooter, transformSiteFooterBrand, transformSiteFooterCol, transformSiteFooterColLabel, transformSiteFooterLink, transformSiteFooterBottom } from '../components/site-footer/site-footer.transform';
import { transformAccordion, transformAccordionItem, transformAccordionTrigger, transformAccordionContent } from '../components/accordion/accordion.transform';

const ROOT = path.resolve(__dirname, '..');
const DEFAULT_INPUT = path.join(ROOT, 'pages', 'index.html');
const DEFAULT_OUTPUT = path.join(ROOT, 'pages', 'index.compiled.html');
const CONTENT_FILE = path.resolve(ROOT, '..', '..', '..', 'shared', 'content', 'content.json');

function loadContent(): Record<string, unknown> {
  try { return JSON.parse(fs.readFileSync(CONTENT_FILE, 'utf8')); }
  catch { return {}; }
}

function injectContent(html: string, content: Record<string, unknown>): string {
  return html.replace(/\{\{content\.([^}]+)\}\}/g, (_match, path: string) => {
    const value = path.split('.').reduce<unknown>((obj, key) => {
      if (obj && typeof obj === 'object') return (obj as Record<string, unknown>)[key];
      return undefined;
    }, content);
    return value != null ? String(value) : '';
  });
}

const TRANSFORMS = new Map<string, TransformFn>([
  ['sc-button',                transformButton],
  ['sc-badge',                 transformBadge],
  ['sc-chip',                  transformChip],
  ['sc-avatar',                transformAvatar],
  ['sc-avatar-group',          transformAvatarGroup],
  ['sc-skeleton',              transformSkeleton],
  ['sc-skeleton-card',         transformSkeletonCard],
  ['sc-input',                 transformInput],
  ['sc-textarea',              transformTextarea],
  ['sc-input-group',           transformInputGroup],
  ['sc-checkbox',              transformCheckbox],
  ['sc-radio',                 transformRadio],
  ['sc-toggle',                transformToggle],
  ['sc-progress',              transformProgress],
  ['sc-spinner',               transformSpinner],
  ['sc-alert',                 transformAlert],
  ['sc-pagination',            transformPagination],
  ['sc-toast-list',            transformToastList],
  ['sc-toast',                 transformToast],
  ['sc-rating',                transformRating],
  ['sc-navbar',                transformNavbar],
  ['sc-navbar-brand',          transformNavbarBrand],
  ['sc-navbar-links',          transformNavbarLinks],
  ['sc-navbar-link',           transformNavbarLink],
  ['sc-navbar-actions',        transformNavbarActions],
  ['sc-tabs-pill',             transformTabsPill],
  ['sc-tabs',                  transformTabs],
  ['sc-tab',                   transformTab],
  ['sc-sidebar-nav-section',   transformSidebarNavSection],
  ['sc-sidebar-nav-item-label',transformSidebarNavItemLabel],
  ['sc-sidebar-nav-brand',     transformSidebarNavBrand],
  ['sc-sidebar-nav-label',     transformSidebarNavLabel],
  ['sc-sidebar-nav-badge',     transformSidebarNavBadge],
  ['sc-sidebar-nav-icon',      transformSidebarNavIcon],
  ['sc-sidebar-nav-item',      transformSidebarNavItem],
  ['sc-sidebar-nav',           transformSidebarNav],
  ['sc-breadcrumb-item',       transformBreadcrumbItem],
  ['sc-breadcrumb',            transformBreadcrumb],
  ['sc-site-footer-col-label', transformSiteFooterColLabel],
  ['sc-site-footer-bottom',    transformSiteFooterBottom],
  ['sc-site-footer-brand',     transformSiteFooterBrand],
  ['sc-site-footer-link',      transformSiteFooterLink],
  ['sc-site-footer-col',       transformSiteFooterCol],
  ['sc-site-footer',           transformSiteFooter],
  ['sc-accordion-trigger',     transformAccordionTrigger],
  ['sc-accordion-content',     transformAccordionContent],
  ['sc-accordion-item',        transformAccordionItem],
  ['sc-accordion',             transformAccordion],
]);

function parseAttrs(source: string): Record<string, string> {
  const attrs: Record<string, string> = {};
  const pattern = /([^\s=]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s"'=<>`]+)))?/g;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(source)) !== null) {
    const [, name, doubleQuoted, singleQuoted, unquoted] = match;
    attrs[name] = doubleQuoted ?? singleQuoted ?? unquoted ?? '';
  }
  return attrs;
}

function compileTag(html: string, tagName: string, transform: TransformFn): string {
  const paired = new RegExp(`<${tagName}\\b([^>]*)>([\\s\\S]*?)<\\/${tagName}>`, 'gi');
  const selfClosing = new RegExp(`<${tagName}\\b([^>]*)\\/>`, 'gi');

  let next = html.replace(paired, (_full, rawAttrs: string, innerHTML: string) =>
    transform({ tagName, attrs: parseAttrs(rawAttrs), innerHTML }).html
  );

  next = next.replace(selfClosing, (_full, rawAttrs: string) =>
    transform({ tagName, attrs: parseAttrs(rawAttrs), innerHTML: '' }).html
  );

  return next;
}

function stripRuntimeScripts(html: string): string {
  return html
    .replace(/\s*<script src="\.\.\/shared\/icons\.js" defer><\/script>/g, '')
    .replace(/\s*<script src="\.\.\/components\/(?!core-control\/core-control\.js)[^"]+\.transform\.js" defer><\/script>/g, '')
    .replace(/\s*<script src="\.\.\/runtime\/sc-runtime\.js" defer><\/script>/g, '');
}

export function compileHtml(inputHtml: string): string {
  let html = inputHtml;
  const orderedTransforms = [...TRANSFORMS].sort((a, b) => b[0].length - a[0].length);
  for (const [tagName, transform] of orderedTransforms) {
    html = compileTag(html, tagName, transform);
  }
  return stripRuntimeScripts(html);
}

function main(): void {
  const input = process.argv[2] ? path.resolve(process.argv[2]) : DEFAULT_INPUT;
  const output = process.argv[3] ? path.resolve(process.argv[3]) : DEFAULT_OUTPUT;
  const source = injectContent(fs.readFileSync(input, 'utf8'), loadContent());
  const compiled = compileHtml(source);
  fs.mkdirSync(path.dirname(output), { recursive: true });
  fs.writeFileSync(output, compiled);
  console.log(`Compiled ${path.relative(ROOT, input)} -> ${path.relative(ROOT, output)}`);
}

main();
