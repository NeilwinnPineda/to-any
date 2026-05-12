import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  items = [
    { id: 'prd_001', name: 'Starter Kit',        price: 49, qty: 1 },
    { id: 'prd_004', name: 'MEAN Stack Template', price: 39, qty: 1 },
  ];

  inc(i: number) { this.items[i].qty++; }
  dec(i: number) { if (this.items[i].qty > 1) this.items[i].qty--; }
  remove(i: number) { this.items.splice(i, 1); }

  get subtotal() { return this.items.reduce((s, it) => s + it.price * it.qty, 0); }
  get tax()      { return Math.round(this.subtotal * 0.08); }
  get total()    { return this.subtotal + this.tax; }
}
