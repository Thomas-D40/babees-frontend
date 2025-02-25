import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SleepingList } from '../models/babee.model';
import { getStartAndEndOfDay } from '../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class SleepingService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BASE_URL = this.#BACKEND_URL + '/sleeping';

  private readonly httpClient = inject(HttpClient);

  getSleepingByBabeeId(babeeId: number): Observable<SleepingList> {
    const params = new HttpParams().set('babeeId', babeeId);

    return this.httpClient.get<SleepingList>(this.#BASE_URL, { params });
  }

  getSleepingByBabeeIdAndDate(
    babeeId: number,
    date: Date
  ): Observable<SleepingList> {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(date);
    const params = new HttpParams()
      .set('babeeId', babeeId)
      .set('date_gte', startOfDay)
      .set('date_lte', endOfDay);

    return this.httpClient.get<SleepingList>(this.#BASE_URL, { params });
  }
}
