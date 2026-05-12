import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  stats = [
    { value: '2,000+', label: 'Teams building' },
    { value: '98%',    label: 'Uptime SLA' },
    { value: '< 5min', label: 'Avg setup time' },
    { value: '6',      label: 'Target stacks' },
  ];

  features = [
    { icon: '⚡', title: 'Instant setup',        desc: 'Go from zero to deployed in under 5 minutes. No config files, no boilerplate.' },
    { icon: '🔲', title: 'Any stack',             desc: 'Angular, React, Next.js — pick your target and compile. Same intent, any output.' },
    { icon: '🎨', title: 'Design system',         desc: 'SuperCSS ships with every project. Themes, palettes, and components out of the box.' },
    { icon: '🗄️', title: 'Mock data ready',       desc: 'Start building UI without a backend. Real data shapes, realistic content.' },
    { icon: '🛡️', title: 'Auth patterns',         desc: 'JWT and session patterns ready to wire up. Add authentication in minutes.' },
    { icon: '🔄', title: 'Live reload everything', desc: 'Frontend and API both hot-reload. No manual restarts, no lost context.' },
  ];

  testimonials = [
    { quote: 'We went from a blank repo to a deployed staging environment in under two hours. Never experienced that before.', author: 'Priya Nair', role: 'Engineering Manager', company: 'Fintech Startup' },
    { quote: 'SuperCSS changed how our design team works with developers. One attribute change, done. No more CSS debates.', author: 'Tom Eriksson', role: 'Lead Designer', company: 'Agency Partner' },
    { quote: 'The view library alone saved our team three weeks. Every page we needed was already defined and mapped.', author: 'Chioma Eze', role: 'Product Lead', company: 'SaaS Co' },
  ];
}
