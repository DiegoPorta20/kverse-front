import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { GroupSummary } from '../../../domain/models/group-summary.model';
import { SectionHeadingComponent } from '../../../../../shared/ui/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../../shared/ui/directives/scroll-reveal.directive';

/**
 * Sección "Grupos" destacados. Cada tarjeta usa el color de acento del grupo
 * para un glow dinámico (theming por grupo, CLAUDE.md §8.1).
 */
@Component({
  selector: 'kv-featured-groups-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [SectionHeadingComponent, ScrollRevealDirective],
  template: `
    <section id="grupos" class="mx-auto max-w-6xl px-4 py-16" kvScrollReveal>
      <kv-section-heading
        eyebrow="Tu bias, tu estilo"
        title="Explora por Grupo"
        subtitle="Encuentra merch inspirada en tus artistas favoritos."
      />

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
        @for (group of groups(); track group.id) {
          <a
            class="group relative flex flex-col items-center rounded-3xl glass p-5 text-center transition-all duration-300 hover:-translate-y-1.5"
            [style.--accent]="group.accentColor"
            [href]="'#novedades'"
          >
            <span
              class="pointer-events-none absolute inset-x-6 -top-2 h-16 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-70"
              [style.background]="group.accentColor"
            ></span>
            <div
              class="relative h-20 w-20 overflow-hidden rounded-full ring-2 ring-white/10 transition-all duration-300 group-hover:ring-[color:var(--accent)]"
            >
              <img
                [src]="group.imageUrl"
                [alt]="group.name"
                loading="lazy"
                class="h-full w-full object-cover"
              />
            </div>
            <h3 class="relative mt-3 font-display text-sm font-semibold text-white">
              {{ group.name }}
            </h3>
            <span class="relative text-xs text-content-muted">
              {{ group.productCount }} productos
            </span>
          </a>
        }
      </div>
    </section>
  `,
})
export class FeaturedGroupsSectionComponent {
  readonly groups = input.required<readonly GroupSummary[]>();
}
