const SuperTheme = {
  defaults: {
    theme:   "base",
    palette: "violet",
    mode:    "dark",
    density: "comfortable",
    radius:  "soft",
    motion:  "subtle",
  },

  init() {
    const saved = this._load();
    this.apply({ ...this.defaults, ...saved });
    this._syncUI();
  },

  apply(config) {
    const root = document.documentElement;
    root.dataset.theme   = config.theme;
    root.dataset.palette = config.palette;
    root.dataset.mode    = config.mode;
    root.dataset.density = config.density;
    root.dataset.radius  = config.radius;
    root.dataset.motion  = config.motion;
    this._save(config);
    document.dispatchEvent(new CustomEvent("supertheme:change", { detail: config }));
  },

  update(key, value) {
    const current = { ...this.defaults, ...this._load() };
    current[key] = value;
    this.apply(current);
  },

  get() {
    return { ...this.defaults, ...this._load() };
  },

  reset() {
    localStorage.removeItem("supercss-theme");
    this.apply(this.defaults);
    this._syncUI();
  },

  _save(config) {
    try { localStorage.setItem("supercss-theme", JSON.stringify(config)); } catch (_) {}
  },

  _load() {
    try { return JSON.parse(localStorage.getItem("supercss-theme") || "{}"); } catch (_) { return {}; }
  },

  _syncUI() {
    const config = this.get();
    document.querySelectorAll("[data-sc-control]").forEach((el) => {
      const key = el.dataset.scControl;
      if (config[key] !== undefined) el.value = config[key];
    });
  },
};

window.SuperTheme = SuperTheme;
document.addEventListener("DOMContentLoaded", () => SuperTheme.init());
