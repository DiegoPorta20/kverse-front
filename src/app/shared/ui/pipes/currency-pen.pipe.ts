import { Pipe, PipeTransform } from '@angular/core';

/**
 * Formatea un monto numérico como moneda peruana (S/). Centraliza el formato
 * para no repetir `Intl.NumberFormat` por toda la app.
 */
@Pipe({ name: 'currencyPen' })
export class CurrencyPenPipe implements PipeTransform {
  private readonly formatter = new Intl.NumberFormat('es-PE', {
    style: 'currency',
    currency: 'PEN',
    minimumFractionDigits: 2,
  });

  transform(value: number | null | undefined): string {
    if (value === null || value === undefined) {
      return '';
    }
    return this.formatter.format(value);
  }
}
