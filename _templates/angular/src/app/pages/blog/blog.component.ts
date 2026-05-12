import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './blog.component.html',
})
export class BlogComponent {
  posts = [
    { slug: 'introducing-view-library',  cat: 'Changelog',   date: 'May 10, 2025',  readTime: '6 min', title: 'Introducing the View Library: 40 frontend views, ready to compile',        excerpt: 'We just shipped the largest update to project-to-any since launch. Here\'s what\'s in the view library and how to use it.', featured: true,  author: 'Maya Chen',   initials: 'MC', color: '#8b5cf6' },
    { slug: 'supercss-material-theme',   cat: 'Engineering', date: 'Apr 28, 2025',  readTime: '9 min', title: 'Material Design 3 tokens in SuperCSS: how we fetched and mapped them',      excerpt: 'MD3 ships its tokens in JS modules, not CSS files. Here\'s how we extracted them from the CDN and mapped them to --sc-* variables.', featured: false, author: 'Daniel Park',  initials: 'DP', color: '#10b981' },
    { slug: 'why-json-not-code',         cat: 'Product',     date: 'Apr 15, 2025',  readTime: '7 min', title: 'Why we describe views in JSON, not code',                                    excerpt: 'The project-to-any compiler is built on a simple idea: intent should be separate from implementation. Here\'s why that matters.', featured: false, author: 'James Okafor', initials: 'JO', color: '#3b82f6' },
    { slug: 'attribute-driven-css',      cat: 'Design',      date: 'Mar 30, 2025',  readTime: '5 min', title: 'Attribute-driven CSS: building themes without JavaScript',                   excerpt: 'data-theme, data-palette, data-mode — switching the entire look of an app with one HTML attribute and pure CSS.', featured: false, author: 'Sofia Reyes',  initials: 'SR', color: '#ec4899' },
    { slug: 'mean-stack-tutorial',       cat: 'Tutorials',   date: 'Mar 12, 2025',  readTime: '12 min',title: 'Building a full MEAN stack app in 20 minutes with Acme Studio',              excerpt: 'Angular 17, Express 4, MongoDB — connected and running. Follow along and you\'ll have a working stack before your coffee cools.', featured: true,  author: 'Amara Diallo', initials: 'AD', color: '#f59e0b' },
  ];

  catColor(cat: string): string {
    const map: any = { Changelog: '#8b5cf6', Engineering: '#3b82f6', Product: '#10b981', Design: '#ec4899', Tutorials: '#f59e0b' };
    return map[cat] || 'var(--color-primary)';
  }
}
