import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { EventSummary } from '../../../domain/models/event-summary.model';
import { SectionHeadingComponent } from '../../../../../shared/ui/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../../shared/ui/directives/scroll-reveal.directive';

/**
 * Sección "Próximos Eventos": carrusel horizontal con scroll-snap (nativo, sin
 * dependencia extra). Cada tarjeta enlaza al catálogo del evento.
 */
@Component({
  selector: 'kv-upcoming-events-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, SectionHeadingComponent, ScrollRevealDirective],
  template: `
    <section id="eventos" class="mx-auto max-w-6xl px-4 py-16" kvScrollReveal>
      <kv-section-heading
        eyebrow="Agenda K-Pop"
        title="Próximos Eventos"
        subtitle="Conciertos, comebacks y fanmeetings. Consigue tu merch antes de que agote."
      />

      <div
        class="mt-8 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        @for (event of events(); track event.id) {
          <a
            class="group relative w-[85%] shrink-0 snap-start overflow-hidden rounded-3xl glass sm:w-[420px]"
            [href]="'#novedades'"
          >
            <div class="relative aspect-[16/10] overflow-hidden bg-brand-gradient">
              <img
                [src]="event.bannerUrl"
                [alt]="event.name"
                loading="lazy"
                class="h-full w-full object-cover opacity-85 transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-ink-950/90 via-ink-950/20 to-transparent"></div>
              <div class="absolute bottom-4 left-4 right-4">
                <span class="text-xs font-semibold uppercase tracking-wider text-aqua-400">
                  {{ event.groupName }}
                </span>
                <h3 class="mt-1 font-display text-xl font-bold text-white">
                  {{ event.name }}
                </h3>
                <p class="mt-1 text-sm text-content-secondary">
                  {{ event.date | date: "d 'de' MMMM, y" }}
                </p>
              </div>
            </div>
          </a>
        }
      </div>
    </section>
  `,
})
export class UpcomingEventsSectionComponent {
  readonly events = input.required<readonly EventSummary[]>();
}
