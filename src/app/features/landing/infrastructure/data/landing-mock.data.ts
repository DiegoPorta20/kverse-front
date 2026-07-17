import { LandingContent } from '../../domain/models/landing-content.model';

/**
 * Datos de ejemplo para desarrollar la landing sin backend. Se reemplazarán por
 * la respuesta real de la API sin tocar presentación (solo cambia la
 * implementación del repositorio en infraestructura).
 *
 * Las imágenes usan un servicio de placeholders con semilla determinista; si no
 * hay red, el degradado de marca detrás de cada tarjeta mantiene el diseño.
 */
const img = (seed: string, w = 640, h = 800): string =>
  `https://picsum.photos/seed/kverse-${seed}/${w}/${h}`;

export const LANDING_MOCK_CONTENT: LandingContent = {
  heroSlides: [
    {
      id: 'hero-1',
      eyebrow: 'World Tour 2026',
      title: 'Vive el K-Pop, viste el K-Pop',
      subtitle:
        'Ropa y accesorios inspirados en tus grupos favoritos. Ediciones limitadas por cada evento y comeback.',
      imageUrl: img('hero-tour', 1600, 900),
      ctaLabel: 'Explorar catálogo',
      ctaLink: '/catalogo',
    },
    {
      id: 'hero-2',
      eyebrow: 'Nuevo Comeback',
      title: 'Drop BLACKPINK — Born Pink',
      subtitle: 'La cápsula más esperada del año ya está disponible.',
      imageUrl: img('hero-bp', 1600, 900),
      ctaLabel: 'Ver colección',
      ctaLink: '/colecciones/born-pink',
    },
  ],
  upcomingEvents: [
    {
      id: 'ev-1',
      name: 'BTS — Proof Live in Lima',
      slug: 'bts-proof-live-lima',
      groupName: 'BTS',
      bannerUrl: img('ev-bts', 900, 600),
      date: new Date('2026-08-22T20:00:00'),
    },
    {
      id: 'ev-2',
      name: 'Stray Kids — dominATE World Tour',
      slug: 'stray-kids-dominate-lima',
      groupName: 'Stray Kids',
      bannerUrl: img('ev-skz', 900, 600),
      date: new Date('2026-09-14T20:30:00'),
    },
    {
      id: 'ev-3',
      name: 'TWICE — Ready To Be en Lima',
      slug: 'twice-ready-to-be-lima',
      groupName: 'TWICE',
      bannerUrl: img('ev-twice', 900, 600),
      date: new Date('2026-10-05T20:00:00'),
    },
    {
      id: 'ev-4',
      name: 'SEVENTEEN — Follow Again',
      slug: 'seventeen-follow-again',
      groupName: 'SEVENTEEN',
      bannerUrl: img('ev-svt', 900, 600),
      date: new Date('2026-11-01T20:00:00'),
    },
  ],
  featuredGroups: [
    { id: 'g-1', name: 'BTS', slug: 'bts', imageUrl: img('g-bts', 500, 500), accentColor: '#7B2EFF', productCount: 128 },
    { id: 'g-2', name: 'BLACKPINK', slug: 'blackpink', imageUrl: img('g-bp', 500, 500), accentColor: '#FF5FA2', productCount: 96 },
    { id: 'g-3', name: 'Stray Kids', slug: 'stray-kids', imageUrl: img('g-skz', 500, 500), accentColor: '#B026FF', productCount: 74 },
    { id: 'g-4', name: 'SEVENTEEN', slug: 'seventeen', imageUrl: img('g-svt', 500, 500), accentColor: '#00D4FF', productCount: 63 },
    { id: 'g-5', name: 'TWICE', slug: 'twice', imageUrl: img('g-twice', 500, 500), accentColor: '#FF5FA2', productCount: 81 },
    { id: 'g-6', name: 'ATEEZ', slug: 'ateez', imageUrl: img('g-ateez', 500, 500), accentColor: '#00D4FF', productCount: 52 },
  ],
  featuredProducts: [
    { id: 'p-1', name: "Hoodie Oversize 'Proof'", slug: 'hoodie-proof', price: 149.9, salePrice: 119.9, imageUrl: img('p-hoodie'), groupName: 'BTS', isNew: false },
    { id: 'p-2', name: 'Polo Born Pink', slug: 'polo-born-pink', price: 79.9, salePrice: null, imageUrl: img('p-polo-bp'), groupName: 'BLACKPINK', isNew: false },
    { id: 'p-3', name: "Casaca Bomber 'MANIAC'", slug: 'casaca-maniac', price: 199.9, salePrice: 169.9, imageUrl: img('p-bomber'), groupName: 'Stray Kids', isNew: true },
    { id: 'p-4', name: 'Tote Bag Carat', slug: 'tote-bag-carat', price: 49.9, salePrice: null, imageUrl: img('p-tote'), groupName: 'SEVENTEEN', isNew: false },
    { id: 'p-5', name: 'Gorra Once', slug: 'gorra-once', price: 59.9, salePrice: 44.9, imageUrl: img('p-gorra'), groupName: 'TWICE', isNew: false },
    { id: 'p-6', name: 'Polera Treasure', slug: 'polera-treasure', price: 89.9, salePrice: null, imageUrl: img('p-polera'), groupName: 'ATEEZ', isNew: true },
  ],
  newArrivals: [
    { id: 'n-1', name: "Sudadera 'FML'", slug: 'sudadera-fml', price: 139.9, salePrice: null, imageUrl: img('n-sudadera'), groupName: 'SEVENTEEN', isNew: true },
    { id: 'n-2', name: 'Camiseta Lightstick', slug: 'camiseta-lightstick', price: 69.9, salePrice: null, imageUrl: img('n-tee'), groupName: 'BTS', isNew: true },
    { id: 'n-3', name: 'Chaqueta Denim Pink Venom', slug: 'chaqueta-pink-venom', price: 219.9, salePrice: 189.9, imageUrl: img('n-denim'), groupName: 'BLACKPINK', isNew: true },
    { id: 'n-4', name: 'Beanie 5-STAR', slug: 'beanie-5-star', price: 54.9, salePrice: null, imageUrl: img('n-beanie'), groupName: 'Stray Kids', isNew: true },
    { id: 'n-5', name: 'Polo Formula of Love', slug: 'polo-formula', price: 84.9, salePrice: null, imageUrl: img('n-polo'), groupName: 'TWICE', isNew: true },
    { id: 'n-6', name: 'Hoodie The World EP.FIN', slug: 'hoodie-the-world', price: 159.9, salePrice: 129.9, imageUrl: img('n-hoodie2'), groupName: 'ATEEZ', isNew: true },
  ],
};
