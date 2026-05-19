import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  applyCoreColors,
  applyCoreMode,
  applyCoreState,
  loadCoreState,
  readCoreState,
  SuperCoreColors,
  SuperCoreMode,
} from '../../theme/core-mixer';
import { applyFontState, loadFontState, readFontState, FontState } from '../../theme/font-mixer';
import { FONT_LIST, FontOption } from '../../theme/font-list';

@Component({
  selector: 'app-core-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './core-control.component.html',
  styleUrl: './core-control.component.inline.css',
})
export class CoreControlComponent {
  open = false;

  colorMode: SuperCoreMode = 'dark';
  baseColor    = '#0a1628';
  surfaceColor = '#00d4aa';
  accentColor  = '#00d4aa';
  tintColor    = '#ff6b6b';

  primaryFont   = 'Inter';
  secondaryFont = 'Merriweather';
  fonts: FontOption[] = FONT_LIST;

  constructor() {
    this.syncStoredState();
  }

  toggle() { this.open = !this.open; }

  syncStoredState() {
    this.loadFromMemory();
  }

  saveToMemory() {
    const coreState = applyCoreState({
      mode: this.colorMode,
      colors: {
        base: this.baseColor,
        surface: this.surfaceColor,
        accent: this.accentColor,
        tint: this.tintColor,
      },
    });
    const fontState = applyFontState({
      primary: this.primaryFont,
      secondary: this.secondaryFont,
    });

    this.syncColors(coreState);
    this.syncFonts(fontState);

    fetch('http://localhost:3001/theme', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ core: coreState, fonts: fontState }),
    }).catch(() => {});

    console.log('[core-control] saved to memory', {
      keys: { core: 'sc:coreState', fonts: 'sc:fontState' },
      core: coreState,
      fonts: fontState,
    });
  }

  loadFromMemory() {
    fetch('http://localhost:3001/theme')
      .then(r => r.json())
      .then(state => {
        if (state.core)  this.syncColors(applyCoreState(state.core));
        if (state.fonts) this.syncFonts(applyFontState(state.fonts));
        console.log('[core-control] loaded from server', state);
      })
      .catch(() => {
        try {
          const coreState = loadCoreState(readCoreState());
          this.syncColors(coreState);
        } catch {}
        try {
          const fontState = loadFontState(readFontState());
          this.syncFonts(fontState);
        } catch {}
        console.log('[core-control] loaded from localStorage (server unavailable)');
      });
  }

  setMode(mode: SuperCoreMode)  { this.syncColors(applyCoreMode(mode)); }
  setBase(e: Event)             { this.syncColors(applyCoreColors({ base:    (e.target as HTMLInputElement).value })); }
  setSurface(e: Event)          { this.syncColors(applyCoreColors({ surface: (e.target as HTMLInputElement).value })); }
  setAccent(e: Event)           { this.syncColors(applyCoreColors({ accent:  (e.target as HTMLInputElement).value })); }
  setTint(e: Event)             { this.syncColors(applyCoreColors({ tint:    (e.target as HTMLInputElement).value })); }

  setPrimaryFont(e: Event) {
    this.syncFonts(applyFontState({ primary: (e.target as HTMLSelectElement).value, secondary: this.secondaryFont }));
  }
  setSecondaryFont(e: Event) {
    this.syncFonts(applyFontState({ primary: this.primaryFont, secondary: (e.target as HTMLSelectElement).value }));
  }

  private syncColors(state: { mode: SuperCoreMode; colors: SuperCoreColors }) {
    this.colorMode    = state.mode;
    this.baseColor    = state.colors.base;
    this.surfaceColor = state.colors.surface;
    this.accentColor  = state.colors.accent;
    this.tintColor    = state.colors.tint;
  }

  private syncFonts(state: FontState) {
    this.primaryFont   = state.primary;
    this.secondaryFont = state.secondary;
  }
}
