import { Component } from '@angular/core';
import content from '../../../../../shared/content/content.json';
import { CommonModule } from '@angular/common';
import {
  LucideAngularModule, LUCIDE_ICONS, LucideIconProvider,
  House, LayoutDashboard, Menu, ChevronDown, ChevronRight, ArrowRight,
  Plus, Pencil, Trash2, Copy, Download, Share2, ExternalLink,
  Check, X, CircleAlert, TriangleAlert, Info, CircleCheckBig,
  Search, Bell, Settings, User, Lock, Eye,
  FileText, Code, Folder, Tag, LogOut, Layers,
  Sparkles, ClipboardList, TrendingUp, Users, Link, PenLine,
  Image, Video, SquareDashed,
} from 'lucide-angular';

const ICONS = {
  House, LayoutDashboard, Menu, ChevronDown, ChevronRight, ArrowRight,
  Plus, Pencil, Trash2, Copy, Download, Share2, ExternalLink,
  Check, X, CircleAlert, TriangleAlert, Info, CircleCheckBig,
  Search, Bell, Settings, User, Lock, Eye,
  FileText, Code, Folder, Tag, LogOut, Layers,
  Sparkles, ClipboardList, TrendingUp, Users, Link, PenLine,
  Image, Video, SquareDashed,
};

@Component({
  selector: 'app-components',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  providers: [{ provide: LUCIDE_ICONS, multi: true, useValue: new LucideIconProvider(ICONS) }],
  templateUrl: './components.component.html',
  styleUrl: './components.component.inline.css',
})
export class ComponentsComponent {
  readonly content = content;
  progress = 68;
  openAccordion: string | null = null;
  activeTab = 'preview';
  activePillTab = 'all';
  showModal = false;
  showDangerModal = false;
  showDropdown = false;
  showFormDropdown = false;
  formDropdownValue = 'Viewer';
  checked = false;
  toggled = true;
  rating = 4;
  copied = false;
  toasts = [
    { id: 'success', text: 'Saved successfully', tone: 'success' },
    { id: 'warn', text: 'Storage nearing limit', tone: 'warning' },
    { id: 'error', text: 'Network request failed', tone: 'danger' },
    { id: 'info', text: 'New release available', tone: 'info' },
  ];

  setRating(value: number): void {
    this.rating = value;
  }

  toggleDropdown(): void {
    this.showDropdown = !this.showDropdown;
  }

  closeDropdown(): void {
    this.showDropdown = false;
  }

  copySnippet(text: string): void {
    navigator.clipboard?.writeText(text);
    this.copied = true;
    setTimeout(() => (this.copied = false), 1200);
  }

  dismissToast(id: string): void {
    this.toasts = this.toasts.filter(t => t.id !== id);
  }

  toggleAccordion(id: string): void {
    this.openAccordion = this.openAccordion === id ? null : id;
  }
}
