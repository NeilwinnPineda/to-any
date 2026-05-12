import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  products = [
    { id: 'prd_001', name: 'Starter Kit',             price: '$49',     badge: 'Best seller', rating: 4.9, reviews: 312, inStock: true,  category: 'bundles',   desc: 'Full Acme Studio starter kit: compiler, SuperCSS, mock data, view library, and 3 months support.' },
    { id: 'prd_002', name: 'View Library Pro',         price: '$29',     badge: 'Sale',        rating: 4.8, reviews: 198, inStock: true,  category: 'add-ons',   desc: 'All 40 page definitions with Angular AND React implementations, content files, and the full view-map.' },
    { id: 'prd_003', name: 'SuperCSS Premium Themes',  price: '$19',     badge: null,          rating: 4.7, reviews: 87,  inStock: true,  category: 'design',    desc: '10 additional SuperCSS themes beyond the 5 defaults: cyberpunk, editorial, corporate, pastel, and more.' },
    { id: 'prd_004', name: 'MEAN Stack Template',      price: '$39',     badge: 'New',         rating: 5.0, reviews: 44,  inStock: true,  category: 'templates', desc: 'Full MEAN stack: Angular 17 standalone, Express 4 API, MongoDB connector, SuperCSS, wired together.' },
    { id: 'prd_005', name: 'MERN Stack Template',      price: '$39',     badge: 'New',         rating: 4.9, reviews: 31,  inStock: false, category: 'templates', desc: 'Full MERN stack: React 18 + Vite, Express 4 API, MongoDB connector, SuperCSS, ready to ship.' },
    { id: 'prd_006', name: 'Team License',             price: '$199/yr', badge: 'Most popular', rating: 4.9, reviews: 156, inStock: true,  category: 'licenses',  desc: 'Annual team license for all Acme Studio products. Priority support, early access, private community.' },
  ];

  stars(n: number): number[] { return Array(Math.round(n)).fill(0); }
}
