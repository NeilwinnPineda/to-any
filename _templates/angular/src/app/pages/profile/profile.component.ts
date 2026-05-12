import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './profile.component.html',
})
export class ProfileComponent {
  saved = false;
  save(e: Event) { e.preventDefault(); this.saved = true; setTimeout(() => this.saved = false, 2000); }
}
