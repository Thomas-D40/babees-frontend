import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivityList } from '../models/babee.model';
import { getStartAndEndOfDay } from '../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BASE_URL = this.#BACKEND_URL + '/activity';

  private readonly httpClient = inject(HttpClient);

  getActivitiesByBabeeId(babeeId: number): Observable<ActivityList> {
    const params = new HttpParams().set('babeeId', babeeId);

    return this.httpClient.get<ActivityList>(this.#BASE_URL, { params });
  }

  getActivitiesByBabeeIdAndDate(
    babeeId: number,
    date: Date
  ): Observable<ActivityList> {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(date);
    const params = new HttpParams()
      .set('babeeId', babeeId)
      .set('date_gte', startOfDay)
      .set('date_lte', endOfDay);

    return this.httpClient.get<ActivityList>(this.#BASE_URL, { params });
  }
}
