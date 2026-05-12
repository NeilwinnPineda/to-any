import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './dashboard.component.html',
})
export class DashboardComponent {
  metrics = [
    { label: 'Total Users',    value: '12,483', change: '+8.2%',  up: true,  icon: '👥', color: '#8b5cf6' },
    { label: 'Revenue',        value: '$48,290', change: '+12.1%', up: true,  icon: '💰', color: '#10b981' },
    { label: 'Active Projects',value: '1,847',   change: '-2.3%',  up: false, icon: '📁', color: '#f59e0b' },
    { label: 'Avg Response',   value: '142ms',   change: '-18ms',  up: true,  icon: '⚡', color: '#3b82f6' },
  ];

  users = [
    { id: 'usr_001', name: 'Alex Morgan',    email: 'alex@example.com',   plan: 'Pro',     joined: 'May 1, 2025',   planColor: '#8b5cf6' },
    { id: 'usr_002', name: 'Sam Lee',        email: 'sam@example.com',    plan: 'Team',    joined: 'Apr 28, 2025',  planColor: '#10b981' },
    { id: 'usr_003', name: 'Jordan Kim',     email: 'jordan@example.com', plan: 'Starter', joined: 'Apr 22, 2025',  planColor: '#6b7280' },
    { id: 'usr_004', name: 'Riley Torres',   email: 'riley@example.com',  plan: 'Pro',     joined: 'Apr 18, 2025',  planColor: '#8b5cf6' },
    { id: 'usr_005', name: 'Casey Williams', email: 'casey@example.com',  plan: 'Team',    joined: 'Apr 10, 2025',  planColor: '#10b981' },
  ];

  initials(name: string): string { return name.split(' ').map(n => n[0]).join(''); }
}
