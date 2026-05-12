import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
})
export class PortfolioComponent {
  filter = 'all';
  filters = ['all', 'web app', 'mobile', 'design system', 'api'];

  projects = [
    { title: 'Client Portal v2',    cat: 'web app',       tags: ['Angular','Express','MongoDB'],        desc: 'B2B SaaS portal for a logistics company — dashboard, reporting, and document management.', color: '#8b5cf6', year: '2025' },
    { title: 'SuperCSS Library',    cat: 'design system', tags: ['CSS','Design Tokens','Open Source'],  desc: 'Attribute-driven CSS token system adopted by 800+ teams. Theme, palette, and mode switching.', color: '#ec4899', year: '2024' },
    { title: 'FlowMobile',          cat: 'mobile',        tags: ['Ionic','Angular','Firebase'],         desc: 'Cross-platform mobile app for field operations. Offline-first with real-time sync.',           color: '#f59e0b', year: '2024' },
    { title: 'DataPipe API',        cat: 'api',           tags: ['Node.js','Express','REST'],           desc: 'High-throughput data pipeline API handling 4M+ events/day for a fintech client.',              color: '#10b981', year: '2023' },
    { title: 'Acme Studio Platform',cat: 'web app',       tags: ['Angular','MEAN','SuperCSS'],          desc: 'The platform you\'re looking at. Template system, view library, project-to-any compiler.',    color: '#3b82f6', year: '2025' },
    { title: 'Onboard UI Kit',      cat: 'design system', tags: ['Figma','React','Components'],         desc: 'Component library for onboarding flows — 60+ components, 4 themes, shipped to 3 clients.',    color: '#ef4444', year: '2023' },
  ];

  get visible() { return this.filter === 'all' ? this.projects : this.projects.filter(p => p.cat === this.filter); }
}
