import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { HttpParams } from '@angular/common/http';
import { Places } from '../../models/places';

@Component({
  selector: 'app-spazi-culturali',
  imports: [],
  templateUrl: './spazi-culturali.html',
  styleUrl: './spazi-culturali.css',
})
export class SpaziCulturali implements OnInit {
  private placesService = inject(NewsService);
  private cdr = inject(ChangeDetectorRef);

  private baseUrl : string = 'https://api.geoapify.com/v2/places?';
  private apiKey : string = 'apiKey=d1ad74eafd3e488bb42a007edabf7856';
  private categories : string = '&categories=entertainment.culture,entertainment.museum';
   private endpointApi : string = `${this.baseUrl}${this.apiKey}${this.categories}` ; 
 // ? con endPoint errore 400: bad request-> 'filter[0] does not match any of the allowed types'
  // latitudine e longitudine
  public latitude: number = 0;
  public longitude : number = 0;

  @Input() currentPage: number = 1  ;   
  @Input() limit: number = 30 ;           // indica le newsPerPage     
  @Input() offset: number = (this.currentPage - 1) * this.limit;
  @Input() totalNews : number = 0;     // numero totale di news di default


     place : Places[] = []   // vedere se va bene questo model o se crearne uno nuovo

ngOnInit(): void {
  this.getUserPosition()
  this.cdr.detectChanges()
  
}


  // calcolo della position dell'user


  getUserPosition(){
    if(typeof navigator !== 'undefined' && navigator.geolocation){
      navigator.geolocation.getCurrentPosition((position : GeolocationPosition) => {
         if(position){
           this.latitude = position.coords.latitude;
           this.longitude = position.coords.longitude;
         }else {
             alert("Posizione dell'utente non disponibile");
         }

        let param = new HttpParams()
          .set('filter', `circle:${this.longitude},${this.latitude},5000`)

        this.getPlaces(param);
    
        })
    }
  }


 // chiamata API
   getPlaces(param : HttpParams){
        this.placesService.fetchData((this.endpointApi + '&' + param),this.limit,this.offset).subscribe({
          next: (data : any) => {
            this.place = data;
           this.cdr.detectChanges()    
            console.log('Dati da getPlaces', data)
          },
          error: (error : any) => {
            console.error('Errore nel calcolo posizione utente', error)
            alert('Errore nel calcolo posizione utente', )
          }
          
        })
      }

 

}


/*

url completo

https://api.geoapify.com/v2/places?apikey=d1ad74eafd3e488bb42a007edabf7856&categories=entertainment.culture,entertainment.museum

*/