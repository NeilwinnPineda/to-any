import { FONT_LIST } from './font-list';

const STORAGE_KEY = 'sc:fontState';
const LINK_ID     = 'sc-google-fonts';

export interface FontState {
  primary:   string;
  secondary: string;
}

const DEFAULT_FONTS: FontState = {
  primary:   'Inter',
  secondary: 'Merriweather',
};

function buildGoogleFontsUrl(fonts: string[]): string {
  const unique = [...new Set(fonts)].filter(f => FONT_LIST.some(o => o.value === f));
  const families = unique.map(f => `family=${encodeURIComponent(f)}:wght@400;500;600;700`).join('&');
  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

function injectFontLink(fonts: string[]): void {
  let link = document.getElementById(LINK_ID) as HTMLLinkElement | null;
  if (!link) {
    link = document.createElement('link');
    link.id  = LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = buildGoogleFontsUrl(fonts);
}

function writeFontState(state: FontState): void {
  const html = document.documentElement;
  html.style.setProperty('--sc-font-primary',   `'${state.primary}', sans-serif`);
  html.style.setProperty('--sc-font-secondary',  `'${state.secondary}', serif`);
  injectFontLink([state.primary, state.secondary]);
}

function saveFontState(state: FontState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function readFontState(): FontState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_FONTS;
  try {
    const saved = JSON.parse(raw) as Partial<FontState>;
    return {
      primary:   saved.primary   ?? DEFAULT_FONTS.primary,
      secondary: saved.secondary ?? DEFAULT_FONTS.secondary,
    };
  } catch {
    return DEFAULT_FONTS;
  }
}

export function applyFontState(state: FontState): FontState {
  writeFontState(state);
  saveFontState(state);
  return state;
}

export function loadFontState(state: FontState): FontState {
  writeFontState(state);
  return state;
}

export function bootFontState(): FontState {
  return applyFontState(readFontState());
}
