import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-notifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './notifications.component.html',
})
export class NotificationsComponent {
  notifs = [
    { icon: '📦', title: 'View Library Pro shipped',       body: 'Your order has been processed and the download link is ready.', time: '2 min ago', unread: true  },
    { icon: '👤', title: 'Sam Lee joined your team',       body: 'Sam accepted the invitation and is now on the Acme Studio workspace.', time: '1 hr ago', unread: true  },
    { icon: '✅', title: 'Deployment successful',          body: 'Project "client-portal-v2" deployed to production without errors.', time: '3 hr ago', unread: true  },
    { icon: '💬', title: 'New comment on dashboard.ts',    body: 'James Okafor left a comment: "This chart needs error boundaries."', time: '5 hr ago', unread: false },
    { icon: '⚡', title: 'API rate limit warning',          body: 'You\'ve used 80% of your monthly API quota. Upgrade for unlimited access.', time: 'Yesterday', unread: false },
    { icon: '🎉', title: 'Milestone: 1,000 users',         body: 'Your project crossed 1,000 registered users. Congratulations!', time: '2 days ago', unread: false },
    { icon: '🔒', title: 'New login from San Francisco',   body: 'We noticed a new sign-in from Chrome on macOS. Was this you?', time: '3 days ago', unread: false },
    { icon: '📝', title: 'Blog post published',            body: '"Attribute-driven CSS" went live and has 84 views so far.', time: '4 days ago', unread: false },
  ];
}
