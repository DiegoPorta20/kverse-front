import { ChangeDetectionStrategy, Component, input } from '@angular/core';

/**
 * Bloque de carga con efecto shimmer (skeleton loading, CLAUDE.md §8.1).
 * `class` permite ajustar tamaño/forma con utilidades Tailwind desde el padre.
 */
@Component({
  selector: 'kv-skeleton',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<div class="kv-skeleton" [class]="extraClass()"></div>`,
  styles: [
    `
      .kv-skeleton {
        position: relative;
        overflow: hidden;
        background: rgba(255, 255, 255, 0.06);
        border-radius: 0.75rem;
      }
      .kv-skeleton::after {
        content: '';
        position: absolute;
        inset: 0;
        transform: translateX(-100%);
        background: linear-gradient(
          90deg,
          transparent,
          rgba(255, 255, 255, 0.09),
          transparent
        );
        animation: kv-shimmer 1.4s infinite;
      }
      @keyframes kv-shimmer {
        100% {
          transform: translateX(100%);
        }
      }
      @media (prefers-reduced-motion: reduce) {
        .kv-skeleton::after {
          animation: none;
        }
      }
    `,
  ],
})
export class SkeletonComponent {
  /** Utilidades Tailwind para tamaño/forma (ej. "h-64 w-full rounded-3xl"). */
  readonly extraClass = input<string>('h-40 w-full', { alias: 'class' });
}
