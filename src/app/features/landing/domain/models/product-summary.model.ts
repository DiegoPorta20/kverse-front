/**
 * Vista resumida de un producto para tarjetas del catálogo/landing.
 * (Modelo de dominio del front, sin acoplarse al DTO de la API — CLAUDE.md §4.9).
 */
export interface ProductSummary {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly price: number;
  readonly salePrice: number | null;
  readonly imageUrl: string;
  readonly groupName: string;
  readonly isNew: boolean;
}
