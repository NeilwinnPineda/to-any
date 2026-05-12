import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './login.component.html',
})
export class LoginComponent {
  private router = inject(Router);

  submit(e: Event) {
    e.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}
