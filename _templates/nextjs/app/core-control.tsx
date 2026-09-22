"use client";

import { useEffect, useMemo, useState } from "react";
import { applyCoreState, loadCoreState, readCoreState, SuperCoreMode } from "../lib/core-mixer";
import { applyFontState, loadFontState, readFontState } from "../lib/font-mixer";
import { FONT_LIST } from "../lib/font-list";

export function CoreControl() {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState<SuperCoreMode>("dark");
  const [base, setBase] = useState("#0a1628");
  const [surface, setSurface] = useState("#00d4aa");
  const [accent, setAccent] = useState("#00d4aa");
  const [tint, setTint] = useState("#ff6b6b");
  const [primaryFont, setPrimaryFont] = useState("Inter");
  const [secondaryFont, setSecondaryFont] = useState("Merriweather");

  const palette = useMemo(
    () => ({ base, surface, accent, tint }),
    [base, surface, accent, tint]
  );

  useEffect(() => {
    const coreState = loadCoreState(readCoreState());
    setMode(coreState.mode);
    setBase(coreState.colors.base);
    setSurface(coreState.colors.surface);
    setAccent(coreState.colors.accent);
    setTint(coreState.colors.tint);

    const fontState = loadFontState(readFontState());
    setPrimaryFont(fontState.primary);
    setSecondaryFont(fontState.secondary);
  }, []);

  const saveToMemory = () => {
    const core = applyCoreState({ mode, colors: palette });
    const fonts = applyFontState({ primary: primaryFont, secondary: secondaryFont });
    console.log("[core-control] saved to memory", {
      keys: { core: "sc:coreState", fonts: "sc:fontState" },
      core,
      fonts
    });
  };

  const loadFromMemory = () => {
    const core = loadCoreState(readCoreState());
    const fonts = loadFontState(readFontState());
    setMode(core.mode);
    setBase(core.colors.base);
    setSurface(core.colors.surface);
    setAccent(core.colors.accent);
    setTint(core.colors.tint);
    setPrimaryFont(fonts.primary);
    setSecondaryFont(fonts.secondary);
    console.log("[core-control] loaded from memory", {
      keys: { core: "sc:coreState", fonts: "sc:fontState" },
      core,
      fonts
    });
  };

  const applyMode = (nextMode: SuperCoreMode) => {
    const core = applyCoreState({ mode: nextMode });
    setMode(core.mode);
  };

  const applyColor = (key: keyof typeof palette, value: string) => {
    const core = applyCoreState({ colors: { [key]: value } });
    setMode(core.mode);
    setBase(core.colors.base);
    setSurface(core.colors.surface);
    setAccent(core.colors.accent);
    setTint(core.colors.tint);
  };

  const applyFonts = (nextPrimary: string, nextSecondary: string) => {
    const fonts = applyFontState({ primary: nextPrimary, secondary: nextSecondary });
    setPrimaryFont(fonts.primary);
    setSecondaryFont(fonts.secondary);
  };

  return (
    <div className={`tc-wrap ${open ? "open" : ""}`}>
      <div className="tc-panel">
        <div className="tc-section">
          <p className="tc-label">Mode</p>
          <div className="tc-row">
            <button className={`tc-mode-btn ${mode === "dark" ? "active" : ""}`} type="button" onClick={() => applyMode("dark")}>Dark</button>
            <button className={`tc-mode-btn ${mode === "light" ? "active" : ""}`} type="button" onClick={() => applyMode("light")}>Light</button>
          </div>
        </div>

        <div className="tc-section">
          <p className="tc-label">Colors</p>
          <label className="tc-color-row"><input className="tc-swatch" type="color" value={base} onChange={(e) => applyColor("base", e.target.value)} /><span>Base</span></label>
          <label className="tc-color-row"><input className="tc-swatch" type="color" value={surface} onChange={(e) => applyColor("surface", e.target.value)} /><span>Surface</span></label>
          <label className="tc-color-row"><input className="tc-swatch" type="color" value={accent} onChange={(e) => applyColor("accent", e.target.value)} /><span>Accent</span></label>
          <label className="tc-color-row"><input className="tc-swatch" type="color" value={tint} onChange={(e) => applyColor("tint", e.target.value)} /><span>Tint</span></label>
        </div>

        <div className="tc-section">
          <label className="tc-label" htmlFor="sc-primary-font">Primary Font</label>
          <select id="sc-primary-font" className="tc-select" value={primaryFont} onChange={(e) => applyFonts(e.target.value, secondaryFont)}>
            {FONT_LIST.map((font) => <option key={font.value} value={font.value}>{font.label}</option>)}
          </select>
        </div>

        <div className="tc-section">
          <label className="tc-label" htmlFor="sc-secondary-font">Secondary Font</label>
          <select id="sc-secondary-font" className="tc-select" value={secondaryFont} onChange={(e) => applyFonts(primaryFont, e.target.value)}>
            {FONT_LIST.map((font) => <option key={font.value} value={font.value}>{font.label}</option>)}
          </select>
        </div>

        <div className="tc-memory-row">
          <button className="tc-sync-btn" type="button" onClick={saveToMemory}>Save</button>
          <button className="tc-sync-btn" type="button" onClick={loadFromMemory}>Load</button>
        </div>
      </div>

      <button className="tc-fab" type="button" title="Theme controls" aria-label="Theme controls" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle>
          <circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle>
          <circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle>
          <circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle>
          <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
        </svg>
      </button>
    </div>
  );
}
