import { EventSummary } from './event-summary.model';
import { GroupSummary } from './group-summary.model';
import { ProductSummary } from './product-summary.model';

/** Slide del hero dinámico (banner principal de la landing). */
export interface HeroSlide {
  readonly id: string;
  readonly eyebrow: string;
  readonly title: string;
  readonly subtitle: string;
  readonly imageUrl: string;
  readonly ctaLabel: string;
  readonly ctaLink: string;
}

/**
 * Contenido completo de la landing. Es el agregado que el caso de uso entrega a
 * la capa de presentación; su origen (mock hoy, API mañana) es indiferente aquí.
 */
export interface LandingContent {
  readonly heroSlides: readonly HeroSlide[];
  readonly upcomingEvents: readonly EventSummary[];
  readonly featuredGroups: readonly GroupSummary[];
  readonly featuredProducts: readonly ProductSummary[];
  readonly newArrivals: readonly ProductSummary[];
}
