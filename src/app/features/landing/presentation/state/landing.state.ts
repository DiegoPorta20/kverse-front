import { Injectable, computed, inject, signal } from '@angular/core';

import { GetLandingContentUseCase } from '../../application/use-cases/get-landing-content.use-case';
import { LandingContent } from '../../domain/models/landing-content.model';

/**
 * Fachada de estado (signals) de la landing. No contiene lógica de negocio:
 * coordina la llamada al caso de uso y expone signals reactivos a los
 * componentes (CLAUDE.md §5.3).
 */
@Injectable()
export class LandingState {
  private readonly getLandingContent = inject(GetLandingContentUseCase);

  private readonly _content = signal<LandingContent | null>(null);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly heroSlides = computed(() => this._content()?.heroSlides ?? []);
  readonly upcomingEvents = computed(() => this._content()?.upcomingEvents ?? []);
  readonly featuredGroups = computed(() => this._content()?.featuredGroups ?? []);
  readonly featuredProducts = computed(() => this._content()?.featuredProducts ?? []);
  readonly newArrivals = computed(() => this._content()?.newArrivals ?? []);

  load(): void {
    this._loading.set(true);
    this._error.set(null);

    this.getLandingContent.execute().subscribe({
      next: (content) => {
        this._content.set(content);
        this._loading.set(false);
      },
      error: () => {
        this._error.set('No pudimos cargar el contenido. Intenta nuevamente.');
        this._loading.set(false);
      },
    });
  }
}
