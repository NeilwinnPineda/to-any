import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-theme-control',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './theme-control.component.html',
})
export class ThemeControlComponent {
  open = false;

  themes   = ['base', 'material', 'fluent', 'glass', 'brutalist'];
  palettes = ['violet', 'blue', 'emerald', 'amber', 'rose'];
  modes    = ['dark', 'light'];

  get html()    { return document.documentElement; }
  get theme()   { return this.html.getAttribute('data-theme')   ?? 'base';   }
  get palette() { return this.html.getAttribute('data-palette') ?? 'violet'; }
  get mode()    { return this.html.getAttribute('data-mode')    ?? 'dark';   }

  setTheme(t: string)   { this.html.setAttribute('data-theme',   t); }
  setPalette(p: string) { this.html.setAttribute('data-palette', p); }
  setMode(m: string)    { this.html.setAttribute('data-mode',    m); }
  toggleMode()          { this.setMode(this.mode === 'dark' ? 'light' : 'dark'); }
}
