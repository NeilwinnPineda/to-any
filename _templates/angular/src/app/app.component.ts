import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { ThemeControlComponent } from './components/theme-control/theme-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, CommonModule, ThemeControlComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private router = inject(Router);
  url = '';

  private authPaths  = ['/login', '/register', '/forgot-password', '/reset-password'];
  private appPaths   = ['/dashboard', '/profile', '/settings', '/notifications', '/messages', '/admin', '/analytics', '/onboarding'];

  constructor() {
    this.url = this.router.url;
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e: any) => { this.url = e.urlAfterRedirects; });
  }

  get isAuth(): boolean { return this.authPaths.some(p => this.url.startsWith(p)); }
  get isApp():  boolean { return this.appPaths.some(p => this.url.startsWith(p)); }
}
