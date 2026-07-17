import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Pie de página de la tienda. Incluye marca, navegación secundaria, redes y una
 * nota del canal de compra por WhatsApp (checkout del MVP).
 */
@Component({
  selector: 'kv-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="mt-24 border-t border-white/10 px-4 py-14">
      <div class="mx-auto grid max-w-6xl gap-10 md:grid-cols-4">
        <div class="md:col-span-2">
          <span class="text-gradient font-display text-2xl font-extrabold">KVerse</span>
          <p class="mt-3 max-w-sm text-sm leading-relaxed text-content-secondary">
            Ropa y accesorios inspirados en el universo K-Pop. Ediciones limitadas
            por cada evento, concierto y comeback. Envíos a todo el Perú.
          </p>
          <p class="mt-4 text-sm text-content-muted">
            Compra por WhatsApp · Pago contra entrega
          </p>
        </div>

        <div>
          <h3 class="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Explorar
          </h3>
          <ul class="mt-4 space-y-2 text-sm text-content-secondary">
            <li><a href="#grupos" class="transition-colors hover:text-white">Grupos</a></li>
            <li><a href="#eventos" class="transition-colors hover:text-white">Eventos</a></li>
            <li><a href="#novedades" class="transition-colors hover:text-white">Novedades</a></li>
          </ul>
        </div>

        <div>
          <h3 class="font-display text-sm font-semibold uppercase tracking-widest text-white">
            Síguenos
          </h3>
          <ul class="mt-4 space-y-2 text-sm text-content-secondary">
            <li><a href="#" class="transition-colors hover:text-white">Instagram</a></li>
            <li><a href="#" class="transition-colors hover:text-white">TikTok</a></li>
            <li><a href="#" class="transition-colors hover:text-white">Facebook</a></li>
          </ul>
        </div>
      </div>

      <div class="mx-auto mt-10 max-w-6xl border-t border-white/5 pt-6 text-xs text-content-muted">
        © {{ year }} KVerse. Hecho para el fandom. No vendemos mercancía oficial.
      </div>
    </footer>
  `,
})
export class FooterComponent {
  protected readonly year = new Date().getFullYear();
}
