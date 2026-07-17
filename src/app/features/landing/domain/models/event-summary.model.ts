/** Vista resumida de un evento/concierto/comeback para "Próximos Eventos". */
export interface EventSummary {
  readonly id: string;
  readonly name: string;
  readonly slug: string;
  readonly groupName: string;
  readonly bannerUrl: string;
  readonly date: Date;
}
