import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admin.component.html',
})
export class AdminComponent {
  users = [
    { name: 'Alex Morgan',    email: 'alex@example.com',   role: 'Admin', plan: 'Team',    joined: 'May 1, 2025',  status: 'Active'    },
    { name: 'Sam Lee',        email: 'sam@example.com',    role: 'User',  plan: 'Pro',     joined: 'Apr 28, 2025', status: 'Active'    },
    { name: 'Jordan Kim',     email: 'jordan@example.com', role: 'User',  plan: 'Starter', joined: 'Apr 22, 2025', status: 'Active'    },
    { name: 'Riley Torres',   email: 'riley@example.com',  role: 'User',  plan: 'Pro',     joined: 'Apr 18, 2025', status: 'Suspended' },
    { name: 'Casey Williams', email: 'casey@example.com',  role: 'User',  plan: 'Team',    joined: 'Apr 10, 2025', status: 'Active'    },
    { name: 'Dana Scott',     email: 'dana@example.com',   role: 'User',  plan: 'Starter', joined: 'Mar 30, 2025', status: 'Invited'   },
  ];

  stats = [
    { label: 'Total users',    value: '12,483' },
    { label: 'Active today',   value: '1,204'  },
    { label: 'Pro + Team',     value: '4,891'  },
    { label: 'MRR',            value: '$48,290' },
  ];

  initials(name: string)  { return name.split(' ').map(n => n[0]).join(''); }
  statusColor(s: string)  { return s === 'Active' ? '#10b981' : s === 'Suspended' ? '#ef4444' : '#f59e0b'; }
}
