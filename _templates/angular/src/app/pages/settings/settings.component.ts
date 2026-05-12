import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './settings.component.html',
})
export class SettingsComponent {
  tab = 'profile';
  tabs = [
    { id: 'profile',       label: '👤 Profile' },
    { id: 'notifications', label: '🔔 Notifications' },
    { id: 'security',      label: '🔒 Security' },
    { id: 'billing',       label: '💳 Billing' },
  ];

  emailDigest    = true;
  projectAlerts  = true;
  marketing      = false;
}
