import { Component, inject } from '@angular/core';
import { RouterLink, ActivatedRoute } from '@angular/router';

const POSTS: Record<string, { title: string; author: string; role: string; date: string; cat: string; color: string }> = {
  'introducing-view-library':  { title: 'Introducing the View Library: 40 frontend views, ready to compile', author: 'Maya Chen',   role: 'Co-founder & CEO',   date: 'May 10, 2025',  cat: 'Changelog',   color: '#8b5cf6' },
  'supercss-material-theme':   { title: 'Material Design 3 tokens in SuperCSS: how we fetched and mapped them', author: 'Daniel Park',  role: 'Lead Engineer',      date: 'Apr 28, 2025',  cat: 'Engineering', color: '#3b82f6' },
  'why-json-not-code':         { title: 'Why we describe views in JSON, not code',                            author: 'James Okafor', role: 'Co-founder & CTO',   date: 'Apr 15, 2025',  cat: 'Product',     color: '#10b981' },
  'attribute-driven-css':      { title: 'Attribute-driven CSS: building themes without JavaScript',           author: 'Sofia Reyes',  role: 'Head of Design',     date: 'Mar 30, 2025',  cat: 'Design',      color: '#ec4899' },
  'mean-stack-tutorial':       { title: 'Building a full MEAN stack app in 20 minutes with Acme Studio',     author: 'Amara Diallo', role: 'Developer Advocate', date: 'Mar 12, 2025',  cat: 'Tutorials',   color: '#f59e0b' },
};

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './blog-post.component.html',
})
export class BlogPostComponent {
  private route = inject(ActivatedRoute);
  slug = this.route.snapshot.paramMap.get('slug') ?? '';
  post = POSTS[this.slug] ?? { title: 'Post not found', author: '', role: '', date: '', cat: '', color: 'var(--color-primary)' };
  initials(name: string) { return name.split(' ').map(w => w[0]).join(''); }
}
