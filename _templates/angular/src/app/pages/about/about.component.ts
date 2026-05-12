import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './about.component.html',
})
export class AboutComponent {
  stats = [
    { value: '2019',   label: 'Founded' },
    { value: '2,000+', label: 'Teams' },
    { value: '42',     label: 'Countries' },
    { value: '6',      label: 'Stack targets' },
  ];

  team = [
    { initials: 'MC', name: 'Maya Chen',     role: 'Co-founder & CEO',   bio: 'Former engineering lead at two YC startups. Loves developer tooling and bad puns.',  color: '#8b5cf6' },
    { initials: 'JO', name: 'James Okafor',  role: 'Co-founder & CTO',   bio: 'Full-stack engineer obsessed with architecture. Builds compilers for fun.',          color: '#3b82f6' },
    { initials: 'SR', name: 'Sofia Reyes',   role: 'Head of Design',     bio: 'Design systems enthusiast. Believes good UX is invisible. Built SuperCSS.',          color: '#ec4899' },
    { initials: 'DP', name: 'Daniel Park',   role: 'Lead Engineer',      bio: 'Open-source contributor. Angular specialist. Maintains three npm packages.',          color: '#10b981' },
    { initials: 'AD', name: 'Amara Diallo',  role: 'Developer Advocate', bio: 'Writes tutorials, builds demos, runs workshops. Makes hard things feel easy.',        color: '#f59e0b' },
    { initials: 'LW', name: 'Lucas Webb',    role: 'Infrastructure',     bio: 'Keeps everything running. Kubernetes whisperer. Rarely seen without a terminal.',    color: '#ef4444' },
  ];

  timeline = [
    { year: '2019', title: 'Founded',              desc: 'Maya and James quit their jobs and started building with one folding table in a SF co-working space.' },
    { year: '2020', title: 'First product shipped', desc: 'Launched the first template compiler to 50 beta users. Got 4-star reviews and one very detailed bug report.' },
    { year: '2021', title: 'Seed round closed',     desc: '$2.4M raised. Hired first five team members. Moved into a real office (with chairs).' },
    { year: '2022', title: 'SuperCSS open-sourced', desc: 'Released the design token system publicly. 800 GitHub stars in the first week.' },
    { year: '2024', title: 'Series A',              desc: '$11M raised. Built multi-target compiler, added React and Next.js support.' },
    { year: '2025', title: 'Public beta',           desc: 'Opened the platform to everyone. View library, production project system, and project-to-any compiler.' },
  ];
}
