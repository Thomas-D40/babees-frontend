import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationList, Informations } from '../models/babee.model';
import { getStartAndEndOfDay } from '../utils/app.utils';

@Injectable({
  providedIn: 'root',
})
export class InformationService {
  readonly #BACKEND_URL = 'http://localhost:3000';
  readonly #BASE_URL = this.#BACKEND_URL + '/information';

  private readonly httpClient = inject(HttpClient);

  getInformationByBabeeId(babeeId: number): Observable<InformationList> {
    const params = new HttpParams().set('babeeId', babeeId);

    return this.httpClient.get<InformationList>(this.#BASE_URL, { params });
  }

  getInformationByBabeeIdAndDate(
    babeeId: number,
    date: Date
  ): Observable<InformationList> {
    const { startOfDay, endOfDay } = getStartAndEndOfDay(date);
    const params = new HttpParams()
      .set('babeeId', babeeId)
      .set('date_gte', startOfDay)
      .set('date_lte', endOfDay);

    return this.httpClient.get<InformationList>(this.#BASE_URL, { params });
  }

  createInformation(information: Informations): Observable<Informations> {
    return this.httpClient.post<Informations>(this.#BASE_URL, information);
  }

  deleteInformation(id: number): Observable<void> {
    return this.httpClient.delete<void>(this.#BASE_URL + '/' + id);
  }
}
