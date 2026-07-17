import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

import { GetLandingContentUseCase } from '../../../application/use-cases/get-landing-content.use-case';
import { LandingRepository } from '../../../domain/repositories/landing.repository';
import { LandingState } from '../../state/landing.state';
import { MockLandingRepository } from '../../../infrastructure/repositories/mock-landing.repository';

import { HeroSectionComponent } from '../../components/hero-section/hero-section.component';
import { UpcomingEventsSectionComponent } from '../../components/upcoming-events/upcoming-events-section.component';
import { FeaturedGroupsSectionComponent } from '../../components/featured-groups/featured-groups-section.component';
import { ProductShowcaseSectionComponent } from '../../components/product-showcase/product-showcase-section.component';
import { SkeletonComponent } from '../../../../../shared/ui/skeleton/skeleton.component';
import { KvButtonDirective } from '../../../../../shared/ui/button/button.directive';

/**
 * Página de la landing. Orquesta el estado (carga vía Use Case) y compone las
 * secciones. Muestra skeletons durante la carga (CLAUDE.md §8.1) y un estado de
 * error con reintento. No contiene lógica de negocio.
 *
 * El binding del puerto {@link LandingRepository} a la implementación mock vive
 * aquí; cambiar a HTTP será sustituir esta clase por `HttpLandingRepository`.
 */
@Component({
  selector: 'kv-landing-page',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    LandingState,
    GetLandingContentUseCase,
    { provide: LandingRepository, useClass: MockLandingRepository },
  ],
  imports: [
    HeroSectionComponent,
    UpcomingEventsSectionComponent,
    FeaturedGroupsSectionComponent,
    ProductShowcaseSectionComponent,
    SkeletonComponent,
    KvButtonDirective,
  ],
  template: `
    @if (state.loading()) {
      <div class="mx-auto max-w-6xl px-4 pt-36">
        <div class="grid gap-10 lg:grid-cols-2">
          <div class="space-y-4">
            <kv-skeleton class="h-6 w-40 rounded-full" />
            <kv-skeleton class="h-20 w-full rounded-2xl" />
            <kv-skeleton class="h-12 w-3/4 rounded-2xl" />
          </div>
          <kv-skeleton class="h-72 w-full rounded-3xl" />
        </div>
        <div class="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          @for (i of skeletonSlots; track i) {
            <kv-skeleton class="aspect-[4/5] w-full rounded-3xl" />
          }
        </div>
      </div>
    } @else if (state.error()) {
      <div class="mx-auto flex max-w-md flex-col items-center px-4 pt-48 text-center">
        <p class="text-lg text-content-secondary">{{ state.error() }}</p>
        <button [kvButton]="'primary'" class="mt-6" (click)="state.load()">
          Reintentar
        </button>
      </div>
    } @else {
      @if (state.heroSlides()[0]; as slide) {
        <kv-hero-section [slide]="slide" [nextEvent]="state.upcomingEvents()[0]" />
      }

      <kv-upcoming-events-section [events]="state.upcomingEvents()" />

      <kv-featured-groups-section [groups]="state.featuredGroups()" />

      <kv-product-showcase-section
        sectionId="destacados"
        eyebrow="Lo más querido"
        title="Productos Destacados"
        subtitle="Selección del staff con lo más pedido del fandom."
        [products]="state.featuredProducts()"
      />

      <kv-product-showcase-section
        sectionId="novedades"
        eyebrow="Recién llegado"
        title="Novedades"
        subtitle="Los últimos drops inspirados en cada comeback."
        [products]="state.newArrivals()"
      />
    }
  `,
})
export class LandingPageComponent {
  protected readonly state = inject(LandingState);
  protected readonly skeletonSlots = Array.from({ length: 8 }, (_, i) => i);

  constructor() {
    this.state.load();
  }
}
