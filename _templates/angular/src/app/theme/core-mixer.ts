export type SuperCoreMode = 'dark' | 'light';

export interface SuperCoreColors {
  base: string;
  surface: string;
  accent: string;
  tint: string;
}

export interface SuperCoreState {
  mode: SuperCoreMode;
  colors: SuperCoreColors;
}

interface SuperCoreStatePatch {
  mode?: SuperCoreMode;
  colors?: Partial<SuperCoreColors>;
}

interface Rgb {
  r: number;
  g: number;
  b: number;
}

const STORAGE_KEY = 'sc:coreState';

const DEFAULT_STATE: SuperCoreState = {
  mode: 'dark',
  colors: {
    base: '#0a1628',
    surface: '#00d4aa',
    accent: '#00d4aa',
    tint: '#ff6b6b',
  },
};

const SEMANTIC_COLORS = {
  success: '#2bb673',
  warning: '#d89a27',
  danger: '#dd5353',
  info: '#4e90df',
};

function root(): HTMLElement {
  return document.documentElement;
}

function normalizeMode(mode: unknown): SuperCoreMode {
  return mode === 'light' ? 'light' : 'dark';
}

function parseHex(value: string): Rgb {
  const hex = value.trim().replace(/^#/, '');
  const full = hex.length === 3
    ? hex.split('').map(part => part + part).join('')
    : hex.padEnd(6, '0').slice(0, 6);

  const parsed = Number.parseInt(full, 16);
  if (Number.isNaN(parsed)) return { r: 0, g: 0, b: 0 };

  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  };
}

function clampChannel(value: number): number {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function rgb(value: Rgb): string {
  return `rgb(${clampChannel(value.r)} ${clampChannel(value.g)} ${clampChannel(value.b)})`;
}

function rgba(value: Rgb, alpha: number): string {
  return `rgb(${clampChannel(value.r)} ${clampChannel(value.g)} ${clampChannel(value.b)} / ${alpha})`;
}

function mix(first: Rgb, second: Rgb, firstWeight: number): Rgb {
  const a = firstWeight / 100;
  const b = 1 - a;
  return {
    r: first.r * a + second.r * b,
    g: first.g * a + second.g * b,
    b: first.b * a + second.b * b,
  };
}

function deriveColorTokens(colors: SuperCoreColors, mode: SuperCoreMode): Record<string, string> {
  const base = parseHex(colors.base);
  const surfaceCore = parseHex(colors.surface);
  const accent = parseHex(colors.accent);
  const tint = parseHex(colors.tint);
  const white = { r: 255, g: 255, b: 255 };
  const black = { r: 0, g: 0, b: 0 };
  const canvasExtreme = mode === 'light' ? white : black;
  const textExtreme = mode === 'light' ? black : white;
  const inverseTextExtreme = mode === 'light' ? white : black;

  const bg = mix(base, canvasExtreme, mode === 'light' ? 15 : 34);
  const bgAlt = mix(mix(base, tint, 70), canvasExtreme, mode === 'light' ? 24 : 42);
  const surface = mix(surfaceCore, base, mode === 'light' ? 88 : 84);
  const surfaceRaised = mix(surface, mode === 'light' ? white : white, mode === 'light' ? 88 : 80);
  const surfaceSunken = mix(surface, mode === 'light' ? black : black, mode === 'light' ? 92 : 80);
  const surfaceOverlay = mix(surfaceCore, tint, 88);

  return {
    '--sc-color-bg': rgb(bg),
    '--sc-color-bg-alt': rgb(bgAlt),
    '--sc-color-surface': rgb(surface),
    '--sc-color-surface-raised': rgb(surfaceRaised),
    '--sc-color-surface-sunken': rgb(surfaceSunken),
    '--sc-color-surface-overlay': rgba(surfaceOverlay, mode === 'light' ? 0.84 : 0.88),
    '--sc-color-text': rgb(mix(base, textExtreme, mode === 'light' ? 10 : 5)),
    '--sc-color-text-muted': rgb(mix(base, textExtreme, mode === 'light' ? 42 : 40)),
    '--sc-color-text-inverse': rgb(mix(base, inverseTextExtreme, 15)),
    '--sc-color-border': rgb(mix(surface, base, 45)),
    '--sc-color-border-strong': rgb(mix(accent, surface, 35)),
    '--sc-color-accent': rgb(accent),
    '--sc-color-accent-hover': rgb(mix(accent, mode === 'light' ? black : white, 82)),
    '--sc-color-accent-active': rgb(mix(accent, mode === 'light' ? white : black, 82)),
    '--sc-color-accent-text': rgb(mix(accent, inverseTextExtreme, 5)),
    '--sc-color-success': rgb(mix(parseHex(SEMANTIC_COLORS.success), tint, 96)),
    '--sc-color-warning': rgb(mix(parseHex(SEMANTIC_COLORS.warning), base, 96)),
    '--sc-color-danger': rgb(mix(parseHex(SEMANTIC_COLORS.danger), accent, 96)),
    '--sc-color-info': rgb(mix(parseHex(SEMANTIC_COLORS.info), surfaceCore, 96)),
    '--sc-color-focus-ring': rgb(mix(accent, tint, 55)),
  };
}

function writeState(state: SuperCoreState): void {
  const html = root();
  html.style.setProperty('--sc-base', state.colors.base);
  html.style.setProperty('--sc-surface', state.colors.surface);
  html.style.setProperty('--sc-accent', state.colors.accent);
  html.style.setProperty('--sc-tint', state.colors.tint);

  for (const [token, value] of Object.entries(deriveColorTokens(state.colors, state.mode))) {
    html.style.setProperty(token, value);
  }
}

function saveState(state: SuperCoreState): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

export function readCoreState(): SuperCoreState {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return DEFAULT_STATE;

  try {
    const saved = JSON.parse(raw) as Partial<SuperCoreState>;
    return {
      mode: normalizeMode(saved.mode),
      colors: {
        ...DEFAULT_STATE.colors,
        ...saved.colors,
      },
    };
  } catch {
    return DEFAULT_STATE;
  }
}

export function applyCoreState(nextState: SuperCoreStatePatch): SuperCoreState {
  const current = readCoreState();
  const next = {
    mode: normalizeMode(nextState.mode ?? current.mode),
    colors: {
      ...current.colors,
      ...nextState.colors,
    },
  };

  writeState(next);
  saveState(next);
  return next;
}

export function loadCoreState(state: SuperCoreState): SuperCoreState {
  writeState(state);
  return state;
}

export function applyCoreColors(colors: Partial<SuperCoreColors>): SuperCoreState {
  return applyCoreState({ colors });
}

export function applyCoreMode(mode: SuperCoreMode): SuperCoreState {
  return applyCoreState({ mode });
}

export function bootCoreState(): SuperCoreState {
  return applyCoreState(readCoreState());
}
