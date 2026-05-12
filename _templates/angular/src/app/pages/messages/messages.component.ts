import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
})
export class MessagesComponent {
  active = 0;

  threads = [
    { id: 0, name: 'Sam Lee',      initials: 'SL', color: '#10b981', last: 'Sounds great, let me check.',       time: '2m',  unread: 2 },
    { id: 1, name: 'Maya Chen',    initials: 'MC', color: '#8b5cf6', last: 'Can we reschedule to Friday?',       time: '1h',  unread: 0 },
    { id: 2, name: 'James Okafor', initials: 'JO', color: '#3b82f6', last: 'The bug is fixed in v1.2.4.',        time: '3h',  unread: 0 },
    { id: 3, name: 'Riley Torres', initials: 'RT', color: '#f59e0b', last: 'Thanks for the review!',             time: 'Wed', unread: 0 },
    { id: 4, name: 'Acme Support', initials: 'AS', color: '#6b7280', last: 'Your ticket has been resolved.',     time: 'Mon', unread: 0 },
  ];

  messages = [
    { from: 'them', text: 'Hey! Quick question about the deployment.',           time: '10:02 AM' },
    { from: 'me',   text: 'Sure, what\'s up?',                                   time: '10:03 AM' },
    { from: 'them', text: 'Should I push to staging first or straight to prod?', time: '10:04 AM' },
    { from: 'me',   text: 'Always staging first. Run the smoke tests, then prod.', time: '10:05 AM' },
    { from: 'them', text: 'Sounds great, let me check.',                          time: '10:07 AM' },
  ];
}
