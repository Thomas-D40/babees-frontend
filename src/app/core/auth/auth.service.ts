import { Injectable, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly #isLoggedIn = signal(false);
  readonly isLoggedIn = this.#isLoggedIn.asReadonly();
  readonly #isAdmin = signal(false);
  readonly isAdmin = this.#isAdmin.asReadonly();

  login(name: string, password: string): Observable<boolean> {
    const isLoggedIn = name === 'Pikachu' && password === 'pikachu';

    this.#isLoggedIn.set(isLoggedIn);

    if (name === 'Pikachu') {
      this.#isAdmin.set(true);
    }

    return of(isLoggedIn).pipe(delay(500));
  }
}
