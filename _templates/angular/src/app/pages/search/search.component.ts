import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './search.component.html',
})
export class SearchComponent {
  filter = 'all';
  filters = ['all', 'blog', 'products', 'docs'];

  results = [
    { type: 'blog',    title: 'Attribute-driven CSS: building themes without JavaScript', path: '/blog/attribute-driven-css', excerpt: 'Switch the entire look of an app with one HTML attribute and pure CSS.' },
    { type: 'product', title: 'Starter Kit',                                              path: '/products/prd_001',         excerpt: 'Full Acme Studio starter kit: compiler, SuperCSS, mock data, view library.' },
    { type: 'blog',    title: 'Why we describe views in JSON, not code',                  path: '/blog/why-json-not-code',    excerpt: 'Intent should be separate from implementation. Here\'s why that matters.' },
    { type: 'product', title: 'View Library Pro',                                         path: '/products/prd_002',         excerpt: 'All 40 page definitions with Angular AND React implementations.' },
    { type: 'docs',    title: 'Getting started with SuperCSS',                            path: '/docs',                     excerpt: 'Add data-theme and data-palette to your html element to activate the design system.' },
    { type: 'blog',    title: 'Building a full MEAN stack app in 20 minutes',             path: '/blog/mean-stack-tutorial',  excerpt: 'Angular 17, Express 4, MongoDB — connected and running in minutes.' },
  ];

  get visible() { return this.filter === 'all' ? this.results : this.results.filter(r => r.type === this.filter); }
  typeColor(t: string) { return t === 'blog' ? '#8b5cf6' : t === 'product' ? '#10b981' : '#3b82f6'; }
}
