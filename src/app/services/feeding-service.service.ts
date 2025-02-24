import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FeedingList } from '../models/babee.model';

@Injectable({
  providedIn: 'root'
})
export class FeedingServiceService {

    readonly #BACKEND_URL = "http://localhost:3000";
    readonly #BASE_URL = this.#BACKEND_URL + "/feeding";
  
    private readonly httpClient = inject(HttpClient);

    getFeedingByBabeeId(babeeId: number) : Observable<FeedingList> {
      const params = new HttpParams().set("babeeId", babeeId);
  
      return this.httpClient.get<FeedingList>(this.#BASE_URL, {params});
    }
  
    getFeedingByBabeeIdAndDate(babeeId: number, date: Date): Observable<FeedingList> {
      const params = new HttpParams()
        .set("babeeId", babeeId)
        .set("date", date.toISOString());
  
      return this.httpClient.get<FeedingList>(this.#BASE_URL, {params});
    }   
}
