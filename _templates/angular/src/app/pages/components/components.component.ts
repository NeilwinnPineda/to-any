import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './components.component.html',
})
export class ComponentsComponent {
  progress = 68;
  activeTab = 'preview';
  activePillTab = 'all';
  showModal = false;
  checked = false;
  toggled = true;
}
