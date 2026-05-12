import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-analytics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './analytics.component.html',
})
export class AnalyticsComponent {
  range = '30d';
  ranges = ['7d', '30d', '90d'];

  kpis = [
    { label: 'Page Views',      value: '248,391', change: '+14.2%', up: true,  icon: '👁️' },
    { label: 'Unique Visitors', value: '64,102',  change: '+9.7%',  up: true,  icon: '👤' },
    { label: 'Avg Session',     value: '3m 42s',  change: '+0.4%',  up: true,  icon: '⏱️' },
    { label: 'Bounce Rate',     value: '38.2%',   change: '-2.1%',  up: true,  icon: '↩️' },
  ];

  topPages = [
    { path: '/',          views: 48201, pct: 100 },
    { path: '/pricing',   views: 31445, pct: 65  },
    { path: '/blog',      views: 22310, pct: 46  },
    { path: '/products',  views: 18990, pct: 39  },
    { path: '/about',     views: 12033, pct: 25  },
    { path: '/register',  views: 9821,  pct: 20  },
  ];

  bars   = [55, 68, 72, 48, 89, 104, 92, 118, 130, 112, 145, 138];
  months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  maxBar = 138;
}
