import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './checkout.component.html',
})
export class CheckoutComponent {
  private router = inject(Router);
  placed = false;
  submit(e: Event) { e.preventDefault(); this.placed = true; }
}
