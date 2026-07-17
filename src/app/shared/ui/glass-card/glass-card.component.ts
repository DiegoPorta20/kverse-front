import { ChangeDetectionStrategy, Component, computed, input } from '@angular/core';

/**
 * Contenedor con glassmorphism reutilizable (CLAUDE.md §8.1). Proyecta su
 * contenido y opcionalmente añade elevación al hacer hover (floating card).
 */
@Component({
  selector: 'kv-glass-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div [class]="classes()">
      <ng-content />
    </div>
  `,
})
export class GlassCardComponent {
  /** Añade hover con elevación y glow (tarjetas navegables). */
  readonly interactive = input(false);

  protected readonly classes = computed(() => {
    const base = 'glass rounded-3xl overflow-hidden';
    const hover = this.interactive()
      ? 'transition-all duration-300 ease-out hover:-translate-y-1.5 ' +
        'hover:shadow-[0_25px_60px_-20px_rgba(176,38,255,0.55)] hover:border-white/20'
      : '';
    return `${base} ${hover}`;
  });
}
