const CORE_STORAGE_KEY = 'sc:coreState';
const FONT_STORAGE_KEY = 'sc:fontState';
const FONT_LINK_ID = 'sc-google-fonts';

const DEFAULT_CORE_STATE = {
  mode: 'dark',
  colors: {
    base: '#0a1628',
    surface: '#00d4aa',
    accent: '#00d4aa',
    tint: '#ff6b6b',
  },
};

const DEFAULT_FONT_STATE = {
  primary: 'Inter',
  secondary: 'Merriweather',
};

const SEMANTIC_COLORS = {
  success: '#2bb673',
  warning: '#d89a27',
  danger: '#dd5353',
  info: '#4e90df',
};

const FONT_LIST = [
  { label: 'Inter', value: 'Inter' },
  { label: 'Roboto', value: 'Roboto' },
  { label: 'Open Sans', value: 'Open Sans' },
  { label: 'Lato', value: 'Lato' },
  { label: 'Poppins', value: 'Poppins' },
  { label: 'Nunito', value: 'Nunito' },
  { label: 'Montserrat', value: 'Montserrat' },
  { label: 'DM Sans', value: 'DM Sans' },
  { label: 'Plus Jakarta Sans', value: 'Plus Jakarta Sans' },
  { label: 'Outfit', value: 'Outfit' },
  { label: 'Manrope', value: 'Manrope' },
  { label: 'Space Grotesk', value: 'Space Grotesk' },
  { label: 'Merriweather', value: 'Merriweather' },
  { label: 'Playfair Display', value: 'Playfair Display' },
  { label: 'Lora', value: 'Lora' },
  { label: 'Crimson Pro', value: 'Crimson Pro' },
  { label: 'EB Garamond', value: 'EB Garamond' },
  { label: 'JetBrains Mono', value: 'JetBrains Mono' },
  { label: 'Fira Code', value: 'Fira Code' },
  { label: 'Source Code Pro', value: 'Source Code Pro' },
];

function normalizeMode(mode) {
  return mode === 'light' ? 'light' : 'dark';
}

function readJson(key, fallback) {
  const raw = localStorage.getItem(key);
  if (!raw) return fallback;

  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function parseHex(value) {
  const hex = String(value).trim().replace(/^#/, '');
  const full = hex.length === 3
    ? hex.split('').map((part) => part + part).join('')
    : hex.padEnd(6, '0').slice(0, 6);
  const parsed = Number.parseInt(full, 16);

  if (Number.isNaN(parsed)) return { r: 0, g: 0, b: 0 };
  return {
    r: (parsed >> 16) & 255,
    g: (parsed >> 8) & 255,
    b: parsed & 255,
  };
}

function clampChannel(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function rgb(value) {
  return `rgb(${clampChannel(value.r)} ${clampChannel(value.g)} ${clampChannel(value.b)})`;
}

function rgba(value, alpha) {
  return `rgb(${clampChannel(value.r)} ${clampChannel(value.g)} ${clampChannel(value.b)} / ${alpha})`;
}

function mix(first, second, firstWeight) {
  const a = firstWeight / 100;
  const b = 1 - a;
  return {
    r: first.r * a + second.r * b,
    g: first.g * a + second.g * b,
    b: first.b * a + second.b * b,
  };
}

function deriveColorTokens(colors, mode) {
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
  const surfaceRaised = mix(surface, white, mode === 'light' ? 88 : 80);
  const surfaceSunken = mix(surface, black, mode === 'light' ? 92 : 80);
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

function readCoreState() {
  const saved = readJson(CORE_STORAGE_KEY, DEFAULT_CORE_STATE);
  return {
    mode: normalizeMode(saved.mode),
    colors: {
      ...DEFAULT_CORE_STATE.colors,
      ...saved.colors,
    },
  };
}

function applyCoreVisualState(state) {
  const html = document.documentElement;
  html.style.setProperty('--sc-base', state.colors.base);
  html.style.setProperty('--sc-surface', state.colors.surface);
  html.style.setProperty('--sc-accent', state.colors.accent);
  html.style.setProperty('--sc-tint', state.colors.tint);

  for (const [token, value] of Object.entries(deriveColorTokens(state.colors, state.mode))) {
    html.style.setProperty(token, value);
  }
}

function saveCoreState(state) {
  localStorage.setItem(CORE_STORAGE_KEY, JSON.stringify(state));
}

function writeCoreState(state) {
  applyCoreVisualState(state);
  saveCoreState(state);
}

function applyCoreState(patch) {
  const current = readCoreState();
  const next = {
    mode: normalizeMode(patch.mode ?? current.mode),
    colors: {
      ...current.colors,
      ...patch.colors,
    },
  };

  writeCoreState(next);
  return next;
}

function readFontState() {
  const saved = readJson(FONT_STORAGE_KEY, DEFAULT_FONT_STATE);
  return {
    primary: saved.primary ?? DEFAULT_FONT_STATE.primary,
    secondary: saved.secondary ?? DEFAULT_FONT_STATE.secondary,
  };
}

function buildGoogleFontsUrl(fonts) {
  const allowed = new Set(FONT_LIST.map((font) => font.value));
  const families = [...new Set(fonts)]
    .filter((font) => allowed.has(font))
    .map((font) => `family=${encodeURIComponent(font)}:wght@400;500;600;700`)
    .join('&');

  return `https://fonts.googleapis.com/css2?${families}&display=swap`;
}

function applyFontVisualState(state) {
  const html = document.documentElement;
  html.style.setProperty('--sc-font-primary', `'${state.primary}', sans-serif`);
  html.style.setProperty('--sc-font-secondary', `'${state.secondary}', serif`);

  let link = document.getElementById(FONT_LINK_ID);
  if (!link) {
    link = document.createElement('link');
    link.id = FONT_LINK_ID;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }
  link.href = buildGoogleFontsUrl([state.primary, state.secondary]);
}

function saveFontState(state) {
  localStorage.setItem(FONT_STORAGE_KEY, JSON.stringify(state));
}

function writeFontState(state) {
  applyFontVisualState(state);
  saveFontState(state);
}

function applyFontState(state) {
  writeFontState(state);
  return state;
}

class ScCoreControl extends HTMLElement {
  connectedCallback() {
    this.render();
    this.bind();
    this.syncStoredState();
    window.addEventListener('storage', this.handleStorageSync);
  }

  disconnectedCallback() {
    window.removeEventListener('storage', this.handleStorageSync);
  }

  render() {
    this.innerHTML = `
      <div class="tc-wrap">
        <div class="tc-panel">
          <div class="tc-section">
            <p class="tc-label">Mode</p>
            <div class="tc-row">
              <button class="tc-mode-btn" type="button" data-mode="dark">Dark</button>
              <button class="tc-mode-btn" type="button" data-mode="light">Light</button>
            </div>
          </div>

          <div class="tc-section">
            <p class="tc-label">Colors</p>
            <label class="tc-color-row"><input type="color" data-color="base" class="tc-swatch"><span>Base</span></label>
            <label class="tc-color-row"><input type="color" data-color="surface" class="tc-swatch"><span>Surface</span></label>
            <label class="tc-color-row"><input type="color" data-color="accent" class="tc-swatch"><span>Accent</span></label>
            <label class="tc-color-row"><input type="color" data-color="tint" class="tc-swatch"><span>Tint</span></label>
          </div>

          <div class="tc-section">
            <label class="tc-label" for="sc-primary-font">Primary Font</label>
            <select id="sc-primary-font" class="tc-select" data-font="primary"></select>
          </div>

          <div class="tc-section">
            <label class="tc-label" for="sc-secondary-font">Secondary Font</label>
            <select id="sc-secondary-font" class="tc-select" data-font="secondary"></select>
          </div>

          <div class="tc-memory-row">
            <button class="tc-sync-btn" type="button" data-save-memory>Save</button>
            <button class="tc-sync-btn" type="button" data-load-memory>Load</button>
          </div>
        </div>

        <button class="tc-fab" type="button" title="Theme controls" aria-label="Theme controls" aria-expanded="false">
          <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
            <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
            <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
            <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
          </svg>
        </button>
      </div>
    `;

    this.querySelectorAll('[data-font]').forEach((select) => {
      select.innerHTML = FONT_LIST
        .map((font) => `<option value="${font.value}">${font.label}</option>`)
        .join('');
    });
  }

  bind() {
    this.wrap = this.querySelector('.tc-wrap');
    this.fab = this.querySelector('.tc-fab');
    this.handleStorageSync = (event) => {
      if (event.key === CORE_STORAGE_KEY || event.key === FONT_STORAGE_KEY) this.loadFromMemory();
    };
    this.fab.addEventListener('click', () => this.toggle());
    this.querySelector('[data-save-memory]').addEventListener('click', () => this.saveToMemory());
    this.querySelector('[data-load-memory]').addEventListener('click', () => this.loadFromMemory());

    this.querySelectorAll('[data-mode]').forEach((button) => {
      button.addEventListener('click', () => this.syncCore(applyCoreState({ mode: button.dataset.mode })));
    });

    this.querySelectorAll('[data-color]').forEach((input) => {
      input.addEventListener('input', () => {
        this.syncCore(applyCoreState({ colors: { [input.dataset.color]: input.value } }));
      });
    });

    this.querySelectorAll('[data-font]').forEach((select) => {
      select.addEventListener('change', () => {
        const current = readFontState();
        this.syncFonts(applyFontState({ ...current, [select.dataset.font]: select.value }));
      });
    });
  }

  toggle() {
    const open = !this.wrap.classList.contains('open');
    this.wrap.classList.toggle('open', open);
    this.fab.setAttribute('aria-expanded', String(open));
  }

  syncStoredState() {
    this.loadFromMemory();
  }

  saveToMemory() {
    const colors = {};
    this.querySelectorAll('[data-color]').forEach((input) => {
      colors[input.dataset.color] = input.value;
    });

    const activeMode = this.querySelector('[data-mode].active')?.dataset.mode || readCoreState().mode;
    const coreState = applyCoreState({ mode: activeMode, colors });
    const fontState = applyFontState({
      primary: this.querySelector('[data-font="primary"]').value,
      secondary: this.querySelector('[data-font="secondary"]').value,
    });

    fetch('http://localhost:3001/theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ core: coreState, fonts: fontState }),
    }).catch(() => {});

    console.log('[core-control] saved to memory', {
      keys: { core: CORE_STORAGE_KEY, fonts: FONT_STORAGE_KEY },
      core: coreState,
      fonts: fontState,
    });
  }

  loadFromMemory() {
    fetch('http://localhost:3001/theme')
      .then((r) => r.json())
      .then((state) => {
        if (state.core)  this.syncCore(applyCoreState(state.core));
        if (state.fonts) this.syncFonts(applyFontState(state.fonts));
        console.log('[core-control] loaded from server', state);
      })
      .catch(() => {
        const coreState = readCoreState();
        const fontState = readFontState();
        applyCoreVisualState(coreState);
        applyFontVisualState(fontState);
        this.syncCore(coreState);
        this.syncFonts(fontState);
        console.log('[core-control] loaded from localStorage (server unavailable)', { core: coreState, fonts: fontState });
      });
  }

  syncCore(state) {
    this.querySelectorAll('[data-mode]').forEach((button) => {
      button.classList.toggle('active', button.dataset.mode === state.mode);
    });

    this.querySelectorAll('[data-color]').forEach((input) => {
      input.value = state.colors[input.dataset.color];
    });
  }

  syncFonts(state) {
    this.querySelector('[data-font="primary"]').value = state.primary;
    this.querySelector('[data-font="secondary"]').value = state.secondary;
  }
}

customElements.define('sc-core-control', ScCoreControl);
