import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './services.component.html',
})
export class ServicesComponent {
  services = [
    { icon: '⚙️', title: 'Template Compiler',     desc: 'Define your project once. Compile to Angular, React, Next.js, or static HTML. Same intent, any target.', tags: ['compiler', 'multi-target', 'codegen'] },
    { icon: '🎨', title: 'SuperCSS Design System', desc: 'A fully attribute-driven CSS token system. Switch themes, palettes, and modes with a single HTML attribute.', tags: ['css', 'design-tokens', 'theming'] },
    { icon: '🗄️', title: 'Mock Data Layer',        desc: 'Realistic sample data across SQL, MongoDB, Firestore, Redis, and JSON. Same IDs, same shapes, any DB.', tags: ['mock-data', 'api', 'database'] },
    { icon: '📐', title: 'View Library',            desc: '40+ page definitions, 13 layouts, 23 reusable sections. Fully mapped to routes and content. Just add your data.', tags: ['views', 'layouts', 'frontend'] },
    { icon: '🔌', title: 'Connectors',              desc: 'Opt-in database, auth, and API connectors. Wire up MongoDB, JWT auth, or an external API in minutes.', tags: ['connectors', 'auth', 'api'] },
    { icon: '📄', title: 'Content Generator',       desc: 'JSON placeholder files → TypeScript as const exports. Type-safe content, zero manual copy-paste.', tags: ['content', 'typescript', 'codegen'] },
  ];
}
