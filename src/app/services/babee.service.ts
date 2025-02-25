import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Babee, BabeeList } from '../models/babee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BabeeService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BABEE_URL = this.#BACKEND_URL + '/babee';

  private readonly httpClient = inject(HttpClient);

  getBabeeList(): Observable<BabeeList> {
    return this.httpClient.get<BabeeList>(this.#BABEE_URL);
  }

  getBabeeById(id: number): Observable<Babee> {
    return this.httpClient.get<Babee>(this.#BABEE_URL + '/' + id);
  }

  addBabee(babee: Babee): Observable<Babee> {
    return this.httpClient.post<Babee>(this.#BABEE_URL, babee);
  }

  updateBabee(babee: Babee): Observable<Babee> {
    return this.httpClient.put<Babee>(this.#BABEE_URL + '/' + babee.id, babee);
  }

  deleteBabee(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.#BABEE_URL + '/' + id);
  }
}
