import { Observable } from 'rxjs';

import { LandingContent } from '../models/landing-content.model';

/**
 * Puerto (interfaz) del repositorio de la landing. La capa de aplicación depende
 * de esta abstracción, no de una implementación concreta (DIP, CLAUDE.md §4.4).
 *
 * Se declara como `abstract class` para poder usarla como token de inyección de
 * Angular sin necesidad de un InjectionToken adicional.
 */
export abstract class LandingRepository {
  abstract getContent(): Observable<LandingContent>;
}
