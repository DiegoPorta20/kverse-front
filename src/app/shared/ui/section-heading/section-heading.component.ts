import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Encabezado de sección del sistema de diseño: eyebrow (etiqueta pequeña con
 * degradado), título y subtítulo opcional. Unifica el ritmo tipográfico de la
 * landing y del catálogo.
 */
@Component({
  selector: 'kv-section-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="max-w-2xl">
      @if (eyebrow()) {
        <span
          class="text-gradient font-display text-xs font-semibold uppercase tracking-[0.25em]"
        >
          {{ eyebrow() }}
        </span>
      }
      <h2 class="mt-2 text-3xl font-bold text-white sm:text-4xl">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-3 text-base leading-relaxed text-content-secondary">
          {{ subtitle() }}
        </p>
      }
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly eyebrow = input<string>('');
  readonly title = input.required<string>();
  readonly subtitle = input<string>('');
}
