import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

const PRODUCTS: Record<string, { name: string; price: number; rating: number; reviews: number; badge: string | null; desc: string; specs: string[] }> = {
  'prd_001': { name: 'Starter Kit',              price: 49,  rating: 4.9, reviews: 312, badge: 'Best seller', desc: 'Full Acme Studio starter kit: compiler, SuperCSS, mock data, view library, and 3 months support.',                       specs: ['Angular 17+', 'Express 4', 'SuperCSS 2.0', 'MongoDB connector', 'View library (40 pages)', '3 months support'] },
  'prd_002': { name: 'View Library Pro',          price: 29,  rating: 4.8, reviews: 198, badge: 'Sale',        desc: 'All 40 page definitions with Angular AND React implementations, content files, and the full view-map.',                  specs: ['40 page definitions', '13 layouts', '23 section blocks', 'Angular + React', 'Content JSON files', 'Route map'] },
  'prd_003': { name: 'SuperCSS Premium Themes',   price: 19,  rating: 4.7, reviews: 87,  badge: null,          desc: '10 additional SuperCSS themes beyond the 5 defaults: cyberpunk, editorial, corporate, pastel, and more.',               specs: ['10 premium themes', 'Dark + light variants', 'Custom palettes', 'CSS-only', 'No build step', 'Lifetime updates'] },
  'prd_004': { name: 'MEAN Stack Template',       price: 39,  rating: 5.0, reviews: 44,  badge: 'New',         desc: 'Full MEAN stack: Angular 17 standalone, Express 4 API, MongoDB connector, SuperCSS, wired together.',                  specs: ['Angular 17 standalone', 'Express 4 REST API', 'MongoDB + Mongoose', 'JWT auth scaffold', 'SuperCSS wired', 'Docker-ready'] },
  'prd_005': { name: 'MERN Stack Template',       price: 39,  rating: 4.9, reviews: 31,  badge: 'New',         desc: 'Full MERN stack: React 18 + Vite, Express 4 API, MongoDB connector, SuperCSS, ready to ship.',                         specs: ['React 18 + Vite', 'Express 4 REST API', 'MongoDB + Mongoose', 'JWT auth scaffold', 'SuperCSS wired', 'Docker-ready'] },
  'prd_006': { name: 'Team License',              price: 199, rating: 4.9, reviews: 156, badge: 'Most popular', desc: 'Annual team license for all Acme Studio products. Priority support, early access, private community.',               specs: ['Unlimited projects', 'All current + future products', 'Priority support', 'Early access', 'Private Discord', 'Annual billing'] },
};

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  private route = inject(ActivatedRoute);
  id      = this.route.snapshot.paramMap.get('id') ?? 'prd_001';
  product = PRODUCTS[this.id] ?? PRODUCTS['prd_001'];
  qty     = 1;
  tab     = 'description';
  added   = false;

  inc() { this.qty++; }
  dec() { if (this.qty > 1) this.qty--; }
  stars(n: number) { return Array(Math.round(n)).fill(0); }
  addToCart() { this.added = true; setTimeout(() => this.added = false, 2000); }
}
