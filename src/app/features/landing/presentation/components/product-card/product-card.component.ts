import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

import { ProductSummary } from '../../../domain/models/product-summary.model';
import { CurrencyPenPipe } from '../../../../../shared/ui/pipes/currency-pen.pipe';

/**
 * Tarjeta de producto para grillas del catálogo/landing. Solo renderiza
 * (CLAUDE.md §5.2): recibe un {@link ProductSummary} y muestra imagen, badges,
 * grupo, nombre y precio (con oferta si aplica), con microinteracción al hover.
 */
@Component({
  selector: 'kv-product-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CurrencyPenPipe],
  template: `
    <article
      class="group relative flex flex-col overflow-hidden rounded-3xl glass transition-all duration-300 hover:-translate-y-1.5 hover:border-white/20 hover:shadow-[0_25px_60px_-20px_rgba(176,38,255,0.55)]"
    >
      <div class="relative aspect-[4/5] overflow-hidden bg-brand-gradient">
        <img
          [src]="product().imageUrl"
          [alt]="product().name"
          loading="lazy"
          class="h-full w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
        />

        <div class="absolute left-3 top-3 flex flex-col gap-1.5">
          @if (product().isNew) {
            <span class="rounded-full bg-aqua-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-950">
              Nuevo
            </span>
          }
          @if (hasDiscount()) {
            <span class="rounded-full bg-rose-400 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-ink-950">
              -{{ discountPercent() }}%
            </span>
          }
        </div>
      </div>

      <div class="flex flex-1 flex-col p-4">
        <span class="text-xs font-medium uppercase tracking-wider text-content-muted">
          {{ product().groupName }}
        </span>
        <h3 class="mt-1 line-clamp-2 font-display text-base font-semibold text-white">
          {{ product().name }}
        </h3>

        <div class="mt-3 flex items-baseline gap-2">
          @if (hasDiscount()) {
            <span class="font-display text-lg font-bold text-white">
              {{ product().salePrice | currencyPen }}
            </span>
            <span class="text-sm text-content-muted line-through">
              {{ product().price | currencyPen }}
            </span>
          } @else {
            <span class="font-display text-lg font-bold text-white">
              {{ product().price | currencyPen }}
            </span>
          }
        </div>
      </div>
    </article>
  `,
})
export class ProductCardComponent {
  readonly product = input.required<ProductSummary>();

  protected readonly hasDiscount = computed(() => {
    const p = this.product();
    return p.salePrice !== null && p.salePrice < p.price;
  });

  protected readonly discountPercent = computed(() => {
    const p = this.product();
    if (p.salePrice === null || p.price <= 0) {
      return 0;
    }
    return Math.round((1 - p.salePrice / p.price) * 100);
  });
}
