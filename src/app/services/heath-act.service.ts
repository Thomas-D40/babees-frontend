import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HealthActList } from '../models/babee.model';
import { getStartAndEndOfDay } from '../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class HeathActService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BASE_URL = this.#BACKEND_URL + '/heathAct';

  private readonly httpClient = inject(HttpClient);

  getHeathActByBabeeId(babeeId: number): Observable<HealthActList> {
    const params = new HttpParams().set('babeeId', babeeId);

    return this.httpClient.get<HealthActList>(this.#BASE_URL, { params });
  }

  getHeathActByBabeeIdAndDate(
    babeeId: number,
    date: Date
  ): Observable<HealthActList> {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(date);
    const params = new HttpParams()
      .set('babeeId', babeeId)
      .set('date_gte', startOfDay)
      .set('date_lte', endOfDay);

    return this.httpClient.get<HealthActList>(this.#BASE_URL, { params });
  }
}
