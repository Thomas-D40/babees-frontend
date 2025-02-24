import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InformationList } from '../models/babee.model';

@Injectable({
  providedIn: 'root'
})
export class InformationServiceService {

    readonly #BACKEND_URL = "http://localhost:3000";
    readonly #BASE_URL = this.#BACKEND_URL + "/information";
  
    private readonly httpClient = inject(HttpClient);

    getInformationByBabeeId(babeeId: number) : Observable<InformationList> {
      const params = new HttpParams().set("babeeId", babeeId);
  
      return this.httpClient.get<InformationList>(this.#BASE_URL, {params});
    }
  
    getInformationByBabeeIdAndDate(babeeId: number, date: Date) : Observable<InformationList> {
      const params = new HttpParams()
        .set("babeeId", babeeId)
        .set("date", date.toISOString());
  
      return this.httpClient.get<InformationList>(this.#BASE_URL, {params});
    }  
}
