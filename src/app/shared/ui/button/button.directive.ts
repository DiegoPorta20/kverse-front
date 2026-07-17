import { Directive, computed, input } from '@angular/core';

export type KvButtonVariant = 'primary' | 'ghost' | 'outline';
export type KvButtonSize = 'md' | 'lg';

/**
 * Botón del sistema de diseño KVerse. Se aplica como directiva sobre elementos
 * nativos (`<button kvButton>` / `<a kvButton>`) para preservar la semántica y
 * la accesibilidad, añadiendo solo el estilo de marca (glow, degradado, hover).
 */
@Directive({
  selector: '[kvButton]',
  host: {
    '[class]': 'classes()',
  },
})
export class KvButtonDirective {
  readonly variant = input<KvButtonVariant>('primary', { alias: 'kvButton' });
  readonly size = input<KvButtonSize>('md');

  private readonly base =
    'inline-flex items-center justify-center gap-2 rounded-full font-display font-semibold ' +
    'cursor-pointer select-none transition-all duration-300 ease-out ' +
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 ' +
    'disabled:opacity-50 disabled:pointer-events-none';

  protected readonly classes = computed(() => {
    const size =
      this.size() === 'lg' ? 'text-base px-8 py-3.5' : 'text-sm px-6 py-3';

    const variant: Record<KvButtonVariant, string> = {
      primary:
        'text-white bg-brand-gradient shadow-[0_0_24px_-6px_rgba(176,38,255,0.6)] ' +
        'hover:shadow-[0_0_38px_-4px_rgba(176,38,255,0.85)] hover:-translate-y-0.5 animate-gradient',
      ghost:
        'text-white/90 bg-white/5 hover:bg-white/10 border border-white/10 hover:-translate-y-0.5',
      outline:
        'text-white border border-brand-500/60 hover:border-brand-500 ' +
        'hover:bg-brand-500/10 hover:-translate-y-0.5',
    };

    return `${this.base} ${size} ${variant[this.variant()]}`;
  });
}
