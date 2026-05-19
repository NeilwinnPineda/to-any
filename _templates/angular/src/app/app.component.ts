import { Component } from '@angular/core';
import { ComponentsComponent } from './pages/components/components.component';
import { CoreControlComponent } from './components/core-control/core-control.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ComponentsComponent, CoreControlComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.inline.css',
})
export class AppComponent {}
