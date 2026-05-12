import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faq.component.html',
})
export class FaqComponent {
  faqs = [
    { q: 'What stacks does project-to-any support?',            a: 'Currently: Angular (17+), Express + Node, and the MEAN stack. React, Next.js, Ionic, WordPress, and static HTML are planned.',  open: true  },
    { q: 'Do I need to know CSS to use SuperCSS?',              a: 'No. SuperCSS works through data attributes on the html element. Switch themes, palettes, and modes with one attribute change — no CSS writing required.', open: false },
    { q: 'Is the mock data compatible with real databases?',    a: 'Yes. The same sample records exist across SQL, MongoDB, Firestore, Redis, and JSON with identical IDs. Swap the data source and your UI works unchanged.', open: false },
    { q: 'How does the view library work with Angular?',        a: 'Each page definition maps to an Angular standalone component. Run the compiler with --target angular and it generates components, wires the router, and links content.', open: false },
    { q: 'Can I use project-to-any for client work?',           a: 'Yes. The team license covers unlimited client projects. Each project runs independently and owns its own manifest.',         open: false },
    { q: 'Is there a free tier?',                               a: 'Yes. The starter tier is free forever and includes the view library, SuperCSS base, and mock data layer.',                  open: false },
    { q: 'Can I self-host?',                                    a: 'Yes. Every template generates fully portable output with no runtime dependency on Acme Studio. Host anywhere — Vercel, Railway, Render, or your own VPS.', open: false },
    { q: 'What happens if I need help?',                        a: 'We offer community Discord support for all users, email support on Pro, and dedicated Slack support on Team. Response < 4h during business hours.', open: false },
  ];

  toggle(i: number) { this.faqs[i].open = !this.faqs[i].open; }
}
