import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedingList } from '../models/babee.model';
import { getStartAndEndOfDay } from '../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class FeedingService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BASE_URL = this.#BACKEND_URL + '/feeding';

  private readonly httpClient = inject(HttpClient);

  getFeedingByBabeeId(babeeId: number): Observable<FeedingList> {
    const params = new HttpParams().set('babeeId', babeeId);

    return this.httpClient.get<FeedingList>(this.#BASE_URL, { params });
  }

  getFeedingByBabeeIdAndDate(
    babeeId: number,
    date: Date
  ): Observable<FeedingList> {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(date);
    const params = new HttpParams()
      .set('babeeId', babeeId)
      .set('date_gte', startOfDay)
      .set('date_lte', endOfDay);

    return this.httpClient.get<FeedingList>(this.#BASE_URL, { params });
  }
}
