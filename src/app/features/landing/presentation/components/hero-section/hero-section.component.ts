import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { DatePipe } from '@angular/common';

import { EventSummary } from '../../../domain/models/event-summary.model';
import { HeroSlide } from '../../../domain/models/landing-content.model';
import { KvButtonDirective } from '../../../../../shared/ui/button/button.directive';

/**
 * Hero de la landing: titular con degradado, CTA y una floating card que destaca
 * el próximo evento/concierto (banner principal, CLAUDE.md §1). Los glows y el
 * flotado dan la sensación premium/motion sin depender de datos remotos.
 */
@Component({
  selector: 'kv-hero-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [DatePipe, KvButtonDirective],
  template: `
    <section id="inicio" class="relative overflow-hidden px-4 pb-16 pt-32 sm:pt-40">
      <!-- Orbes de glow decorativos -->
      <div class="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-brand-500/25 blur-3xl"></div>
      <div class="pointer-events-none absolute right-0 top-48 h-80 w-80 rounded-full bg-aqua-400/20 blur-3xl"></div>

      <div class="relative mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">
        <div>
          <span class="text-gradient font-display text-sm font-semibold uppercase tracking-[0.3em]">
            {{ slide().eyebrow }}
          </span>
          <h1 class="mt-4 text-5xl font-extrabold leading-[1.05] sm:text-6xl">
            {{ slide().title }}
          </h1>
          <p class="mt-6 max-w-lg text-lg leading-relaxed text-content-secondary">
            {{ slide().subtitle }}
          </p>
          <div class="mt-9 flex flex-wrap gap-4">
            <a [kvButton]="'primary'" size="lg" href="#novedades">
              {{ slide().ctaLabel }}
            </a>
            <a [kvButton]="'ghost'" size="lg" href="#eventos">Ver eventos</a>
          </div>

          <dl class="mt-12 flex gap-8">
            <div>
              <dt class="font-display text-3xl font-bold text-white">+500</dt>
              <dd class="text-sm text-content-muted">Productos</dd>
            </div>
            <div>
              <dt class="font-display text-3xl font-bold text-white">+20</dt>
              <dd class="text-sm text-content-muted">Grupos</dd>
            </div>
            <div>
              <dt class="font-display text-3xl font-bold text-white">24-48h</dt>
              <dd class="text-sm text-content-muted">Envío</dd>
            </div>
          </dl>
        </div>

        <div class="relative">
          @if (nextEvent(); as event) {
            <div class="glass-strong animate-float overflow-hidden rounded-3xl shadow-card">
              <div class="relative aspect-[16/10] overflow-hidden bg-brand-gradient">
                <img
                  [src]="event.bannerUrl"
                  [alt]="event.name"
                  class="h-full w-full object-cover opacity-90"
                />
                <span class="absolute left-4 top-4 rounded-full bg-ink-950/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Próximo evento
                </span>
              </div>
              <div class="p-5">
                <span class="text-xs font-medium uppercase tracking-wider text-aqua-400">
                  {{ event.groupName }}
                </span>
                <h3 class="mt-1 font-display text-xl font-bold text-white">
                  {{ event.name }}
                </h3>
                <p class="mt-2 text-sm text-content-secondary">
                  {{ event.date | date: "d 'de' MMMM, y · HH:mm" }}
                </p>
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class HeroSectionComponent {
  readonly slide = input.required<HeroSlide>();
  readonly nextEvent = input<EventSummary | undefined>(undefined);
}
