import { Routes } from '@angular/router';

export const routes: Routes = [
  // ── Marketing pages ──────────────────────────────────────────────────────
  { path: '',            loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent) },
  { path: 'about',       loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent) },
  { path: 'services',    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent) },
  { path: 'pricing',     loadComponent: () => import('./pages/pricing/pricing.component').then(m => m.PricingComponent) },
  { path: 'blog',        loadComponent: () => import('./pages/blog/blog.component').then(m => m.BlogComponent) },
  { path: 'blog/:slug',  loadComponent: () => import('./pages/blog-post/blog-post.component').then(m => m.BlogPostComponent) },
  { path: 'faq',         loadComponent: () => import('./pages/faq/faq.component').then(m => m.FaqComponent) },
  { path: 'products',    loadComponent: () => import('./pages/products/products.component').then(m => m.ProductsComponent) },
  { path: 'products/:id',loadComponent: () => import('./pages/product-detail/product-detail.component').then(m => m.ProductDetailComponent) },
  { path: 'contact',     loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: 'portfolio',   loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent) },
  { path: 'search',      loadComponent: () => import('./pages/search/search.component').then(m => m.SearchComponent) },
  { path: 'terms',       loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent) },
  { path: 'privacy',     loadComponent: () => import('./pages/privacy/privacy.component').then(m => m.PrivacyComponent) },
  { path: 'cart',        loadComponent: () => import('./pages/cart/cart.component').then(m => m.CartComponent) },
  { path: 'checkout',    loadComponent: () => import('./pages/checkout/checkout.component').then(m => m.CheckoutComponent) },

  // ── Auth pages ────────────────────────────────────────────────────────────
  { path: 'login',           loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent) },
  { path: 'register',        loadComponent: () => import('./pages/register/register.component').then(m => m.RegisterComponent) },
  { path: 'forgot-password', loadComponent: () => import('./pages/forgot-password/forgot-password.component').then(m => m.ForgotPasswordComponent) },
  { path: 'reset-password',  loadComponent: () => import('./pages/reset-password/reset-password.component').then(m => m.ResetPasswordComponent) },

  // ── App pages ─────────────────────────────────────────────────────────────
  { path: 'dashboard',     loadComponent: () => import('./pages/dashboard/dashboard.component').then(m => m.DashboardComponent) },
  { path: 'profile',       loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent) },
  { path: 'settings',      loadComponent: () => import('./pages/settings/settings.component').then(m => m.SettingsComponent) },
  { path: 'notifications', loadComponent: () => import('./pages/notifications/notifications.component').then(m => m.NotificationsComponent) },
  { path: 'messages',      loadComponent: () => import('./pages/messages/messages.component').then(m => m.MessagesComponent) },
  { path: 'onboarding',    loadComponent: () => import('./pages/onboarding/onboarding.component').then(m => m.OnboardingComponent) },
  { path: 'analytics',     loadComponent: () => import('./pages/analytics/analytics.component').then(m => m.AnalyticsComponent) },
  { path: 'admin',         loadComponent: () => import('./pages/admin/admin.component').then(m => m.AdminComponent) },

  // ── Dev / System ─────────────────────────────────────────────────────────
  { path: 'components', loadComponent: () => import('./pages/components/components.component').then(m => m.ComponentsComponent) },

  // ── Error pages ───────────────────────────────────────────────────────────
  { path: '404', loadComponent: () => import('./pages/error-404/error-404.component').then(m => m.Error404Component) },
  { path: '500', loadComponent: () => import('./pages/error-500/error-500.component').then(m => m.Error500Component) },
  { path: '**',  redirectTo: '404' },
];
