import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-onboarding',
  standalone: true,
  imports: [],
  templateUrl: './onboarding.component.html',
})
export class OnboardingComponent {
  private router = inject(Router);
  step = 1;
  next() { if (this.step < 4) this.step++; else this.router.navigate(['/dashboard']); }
  back() { if (this.step > 1) this.step--; }
}
