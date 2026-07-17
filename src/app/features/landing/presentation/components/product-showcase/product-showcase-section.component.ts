import { ChangeDetectionStrategy, Component, input } from '@angular/core';

import { ProductSummary } from '../../../domain/models/product-summary.model';
import { ProductCardComponent } from '../product-card/product-card.component';
import { SectionHeadingComponent } from '../../../../../shared/ui/section-heading/section-heading.component';
import { ScrollRevealDirective } from '../../../../../shared/ui/directives/scroll-reveal.directive';

/**
 * Sección reutilizable de grilla de productos (se usa para "Destacados" y
 * "Novedades"). Recibe el encabezado y la lista; solo renderiza.
 */
@Component({
  selector: 'kv-product-showcase-section',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [ProductCardComponent, SectionHeadingComponent, ScrollRevealDirective],
  template: `
    <section [id]="sectionId()" class="mx-auto max-w-6xl px-4 py-16" kvScrollReveal>
      <kv-section-heading
        [eyebrow]="eyebrow()"
        [title]="title()"
        [subtitle]="subtitle()"
      />

      <div class="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        @for (product of products(); track product.id) {
          <kv-product-card [product]="product" />
        }
      </div>
    </section>
  `,
})
export class ProductShowcaseSectionComponent {
  readonly sectionId = input.required<string>();
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
  readonly products = input.required<readonly ProductSummary[]>();
}
