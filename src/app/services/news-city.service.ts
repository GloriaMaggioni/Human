import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Response } from 'express';
import { map, Observable } from 'rxjs';
import { futureNewsCard } from '../models/futureNews.model';

@Injectable({
  providedIn: 'root',
})
export class NewsCityService {
 
private http = inject(HttpClient);
    
     
     //API della Regione Lombardia
      private futureApiUrl = 'https://www.dati.lombardia.it/resource/uzy5-pr9h.json';   // dataset per Eventi culturali 199 elementi max (FUTURE PAGE)
      private historyApiUrl = 'https://www.dati.lombardia.it/resource/h3my-i92n.json';  // dataset per Luoghi culturali da visitare (HISTORY PAGE)

    // Chiamata API per FuturePage
      getNewsEvents(limit: number, offset:number = 0): Observable<any>{   // limit -->  quanti el mostrare per pagina
        const params = new HttpParams()
           .set('$limit', limit.toString())
           .set('$offset', offset.toString())
         
          return this.http.get<any[]>(this.futureApiUrl, {params})
       
      }
  
    // Chiamata Api per HistoryPage
  
}

   

        

