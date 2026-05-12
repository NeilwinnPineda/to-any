import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './pricing.component.html',
})
export class PricingComponent {
  annual = false;

  tiers = [
    {
      name: 'Starter', monthly: '$0', annual: '$0', desc: 'Everything you need to design and prototype.',
      features: ['SuperCSS full design system', 'View library (40 pages, 23 sections)', 'Mock data layer (JSON)', 'Angular template', 'Community support'],
      cta: 'Start for free', href: '/register', highlight: false, badge: null,
    },
    {
      name: 'Pro', monthly: '$19/mo', annual: '$15/mo', desc: 'For individual developers shipping real projects.',
      features: ['Everything in Starter', 'Compiler — Angular + React', 'All 5 mock DB formats', 'Premium themes (5)', 'Express + MEAN template', 'Email support < 24h'],
      cta: 'Start Pro trial', href: '/register', highlight: true, badge: 'Most popular',
    },
    {
      name: 'Team', monthly: '$49/mo', annual: '$39/mo', desc: 'For teams that ship multiple projects.',
      features: ['Everything in Pro', 'All compiler targets', 'Unlimited projects', 'All 10 premium themes', 'Slack support < 4h', 'Early access + team license'],
      cta: 'Start Team trial', href: '/register', highlight: false, badge: 'Best value',
    },
  ];

  price(tier: any): string { return this.annual ? tier.annual : tier.monthly; }
}
