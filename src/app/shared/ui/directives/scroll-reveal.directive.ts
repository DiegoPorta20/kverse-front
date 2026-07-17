import { Directive, ElementRef, afterNextRender, inject, input } from '@angular/core';
import { gsap } from 'gsap';

/**
 * Revela el elemento con una animación sutil al entrar en el viewport
 * (scroll reveal, CLAUDE.md §8.1). Usa IntersectionObserver + GSAP.
 *
 * - Solo se ejecuta en navegador (`afterNextRender`), por lo que es seguro para
 *   un futuro SSR y no oculta contenido si no hay JS.
 * - Respeta `prefers-reduced-motion`: si está activo, no anima.
 *
 * Uso: <section kvScrollReveal>  o  <div [kvScrollReveal]="0.15"> (delay en s).
 */
@Directive({ selector: '[kvScrollReveal]' })
export class ScrollRevealDirective {
  private readonly host = inject<ElementRef<HTMLElement>>(ElementRef);

  // Acepta atributo suelto (`kvScrollReveal`) o con valor (`[kvScrollReveal]="0.2"`).
  // El atributo suelto llega como string vacío, por eso coercionamos a número.
  readonly delay = input(0, {
    alias: 'kvScrollReveal',
    transform: (value: number | string): number => {
      if (value === '' || value === null || value === undefined) {
        return 0;
      }
      const parsed = Number(value);
      return Number.isNaN(parsed) ? 0 : parsed;
    },
  });

  constructor() {
    afterNextRender(() => {
      const node = this.host.nativeElement;
      const prefersReduced = window.matchMedia(
        '(prefers-reduced-motion: reduce)',
      ).matches;

      if (prefersReduced) {
        return;
      }

      gsap.set(node, { opacity: 0, y: 32 });

      const observer = new IntersectionObserver(
        (entries, obs) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) {
              continue;
            }
            gsap.to(node, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              ease: 'power2.out',
              delay: this.delay(),
            });
            obs.unobserve(entry.target);
          }
        },
        { threshold: 0.15 },
      );

      observer.observe(node);
    });
  }
}
