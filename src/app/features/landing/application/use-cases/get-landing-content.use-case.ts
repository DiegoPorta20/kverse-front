import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { LandingContent } from '../../domain/models/landing-content.model';
import { LandingRepository } from '../../domain/repositories/landing.repository';

/**
 * Caso de uso: obtener el contenido de la landing. Hoy es una fachada delgada
 * sobre el repositorio (lectura), pero mantiene el punto único de entrada a la
 * lógica de aplicación y permitirá añadir orquestación (caché, composición de
 * varias fuentes) sin tocar la presentación (CLAUDE.md §4.8).
 *
 * Se provee en el scope del feature (no en 'root') porque depende del puerto
 * `LandingRepository`, cuyo binding vive en el injector del feature. Así el
 * caso de uso y su repositorio se resuelven en el mismo injector.
 */
@Injectable()
export class GetLandingContentUseCase {
  private readonly repository = inject(LandingRepository);

  execute(): Observable<LandingContent> {
    return this.repository.getContent();
  }
}
