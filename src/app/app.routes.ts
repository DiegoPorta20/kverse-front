import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    // Lazy loading a nivel de feature (CLAUDE.md §12): la landing se carga
    // como chunk independiente.
    loadComponent: () =>
      import(
        './features/landing/presentation/pages/landing-page/landing-page.component'
      ).then((m) => m.LandingPageComponent),
    title: 'KVerse — Moda inspirada en el K-Pop',
  },
  {
    path: '**',
    redirectTo: '',
  },
];
