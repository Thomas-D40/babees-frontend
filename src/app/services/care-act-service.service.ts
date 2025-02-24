import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CareActList } from '../models/babee.model';

@Injectable({
  providedIn: 'root'
})
export class CareActServiceService {

    readonly #BACKEND_URL = "http://localhost:3000";
    readonly #BASE_URL = this.#BACKEND_URL + "/care-act";
  
    private readonly httpClient = inject(HttpClient);

      getCareActByBabeeId(babeeId: number) : Observable<CareActList> {
        const params = new HttpParams().set("babeeId", babeeId);
    
        return this.httpClient.get<CareActList>(this.#BASE_URL, {params});
      }
    
      getCareActByBabeeIdAndDate(babeeId: number, date: Date): Observable<CareActList>  {
        const params = new HttpParams()
          .set("babeeId", babeeId)
          .set("date", date.toISOString());
    
        return this.httpClient.get<CareActList>(this.#BASE_URL, {params});
      }
}
