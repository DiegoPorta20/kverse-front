/** Vista resumida de un grupo K-Pop para las secciones de la landing. */
export interface GroupSummary {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly imageUrl: string;
  /** Color de acento (hex) para el theming dinámico de la tarjeta del grupo. */
  readonly accentColor: string;
  readonly productCount: number;
}
