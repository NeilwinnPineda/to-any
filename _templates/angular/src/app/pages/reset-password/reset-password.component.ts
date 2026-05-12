import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './reset-password.component.html',
})
export class ResetPasswordComponent {
  private router = inject(Router);
  submit(e: Event) { e.preventDefault(); this.router.navigate(['/login']); }
}
