import { Component, inject } from '@angular/core';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  private router = inject(Router);

  submit(e: Event) {
    e.preventDefault();
    this.router.navigate(['/dashboard']);
  }
}
