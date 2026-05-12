import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-error-500',
  standalone: true,
  imports: [RouterLink],
  template: `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:var(--bg-base);text-align:center;padding:2rem">
      <div>
        <div style="font-size:6rem;font-weight:900;line-height:1;color:var(--border-default);letter-spacing:-0.04em">500</div>
        <h1 style="font-size:1.5rem;font-weight:700;margin:1rem 0 0.5rem">Server error</h1>
        <p style="color:var(--text-secondary);margin-bottom:2rem;max-width:360px">
          Something went wrong on our end. We're on it — please try again in a moment.
        </p>
        <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
          <a routerLink="/"        class="btn btn-primary">← Back to home</a>
          <a routerLink="/contact" class="btn btn-ghost">Contact support</a>
        </div>
      </div>
    </div>
  `,
})
export class Error500Component {}
