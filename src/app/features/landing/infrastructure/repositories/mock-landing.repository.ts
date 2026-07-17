import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { LandingContent } from '../../domain/models/landing-content.model';
import { LandingRepository } from '../../domain/repositories/landing.repository';
import { LANDING_MOCK_CONTENT } from '../data/landing-mock.data';

/**
 * Implementación de {@link LandingRepository} basada en datos mock. Simula la
 * latencia de red para poder ver los skeleton loaders. Se sustituirá por una
 * `HttpLandingRepository` cuando el backend exponga los endpoints, sin tocar
 * dominio, aplicación ni presentación.
 */
@Injectable()
export class MockLandingRepository extends LandingRepository {
  getContent(): Observable<LandingContent> {
    return of(LANDING_MOCK_CONTENT).pipe(delay(900));
  }
}
