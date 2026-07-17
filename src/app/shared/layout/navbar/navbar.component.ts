import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

interface NavLink {
  readonly label: string;
  readonly fragment: string;
}

/**
 * Barra de navegación superior flotante con glassmorphism (CLAUDE.md §8.1).
 * En móvil colapsa en un menú desplegable. Los enlaces navegan por secciones
 * (anchors) mientras el catálogo/grupos aún no tienen rutas propias.
 */
@Component({
  selector: 'kv-navbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RouterLink],
  template: `
    <header class="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        class="glass-strong mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-3"
      >
        <a routerLink="/" class="font-display text-xl font-extrabold tracking-tight">
          <span class="text-gradient">KVerse</span>
        </a>

        <ul class="hidden items-center gap-8 md:flex">
          @for (link of links; track link.fragment) {
            <li>
              <a
                [href]="'#' + link.fragment"
                class="text-sm font-medium text-content-secondary transition-colors hover:text-white"
              >
                {{ link.label }}
              </a>
            </li>
          }
        </ul>

        <div class="flex items-center gap-2">
          <button
            type="button"
            aria-label="Carrito"
            class="relative grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white transition-colors hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8">
              <path d="M6 6h15l-1.5 9h-12z" stroke-linejoin="round" />
              <circle cx="9" cy="20" r="1.4" />
              <circle cx="18" cy="20" r="1.4" />
              <path d="M6 6 5 3H3" stroke-linecap="round" />
            </svg>
            <span
              class="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-rose-400 px-1 text-[10px] font-bold text-ink-950"
            >
              0
            </span>
          </button>

          <button
            type="button"
            class="grid h-10 w-10 place-items-center rounded-full bg-white/5 text-white md:hidden"
            [attr.aria-expanded]="menuOpen()"
            aria-label="Menú"
            (click)="toggleMenu()"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round">
              @if (menuOpen()) {
                <path d="M6 6l12 12M18 6L6 18" />
              } @else {
                <path d="M4 7h16M4 12h16M4 17h16" />
              }
            </svg>
          </button>
        </div>
      </nav>

      @if (menuOpen()) {
        <div class="glass-strong mx-auto mt-2 max-w-6xl rounded-3xl p-2 md:hidden">
          @for (link of links; track link.fragment) {
            <a
              [href]="'#' + link.fragment"
              class="block rounded-2xl px-4 py-3 text-content-secondary transition-colors hover:bg-white/5 hover:text-white"
              (click)="closeMenu()"
            >
              {{ link.label }}
            </a>
          }
        </div>
      }
    </header>
  `,
})
export class NavbarComponent {
  protected readonly links: readonly NavLink[] = [
    { label: 'Inicio', fragment: 'inicio' },
    { label: 'Eventos', fragment: 'eventos' },
    { label: 'Grupos', fragment: 'grupos' },
    { label: 'Novedades', fragment: 'novedades' },
  ];

  protected readonly menuOpen = signal(false);

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }
}
