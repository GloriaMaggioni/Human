import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { carousel } from '../../models/carousel.model';
import { CarouselComponent } from '../carousel/carousel.component';
import {  RouterOutlet } from "@angular/router";
import { FirestoreService } from '../../services/firestore-service';
import { NewsCityService } from '../../services/news-city.service';
import { futureNewsCard } from '../../models/futureNews.model';
import { Paginator } from '../paginator/paginator';


@Component({
  selector: 'app-future-page',
  standalone:true,
  imports: [CarouselComponent, RouterOutlet, Paginator],
  templateUrl: './future-page.component.html',
  styleUrl: './future-page.component.css'
})
export class FuturePageComponent implements OnInit{
  characters : any[] = []

  private firestoreService = inject(FirestoreService);
  private cdr = inject(ChangeDetectorRef)
  
   newsCard : futureNewsCard[] = []
   private futureNewsService  = inject(NewsCityService)
   @Input() currentPage: number = 1;
    limit: number = 10; // numero di news da visualizzare per pagina
     offset = (this.currentPage - 1) * this.limit; // indica alla API da quale pagina partire





  ngOnInit(): void {
    this.prendiCharacters();
     this.loadNews(); 
   
  }

  // presi i dati dei personaggi per il carousel
  async prendiCharacters(){
    this.characters= await this.firestoreService.getCharacters('future');
    this.cdr.detectChanges();
  }

  // funzione per mostrare le news dalla chiamata API al server di Regione Lombardia
  loadNews(){   
    let offset = this.offset;
     console.log('Sto chiamando API con offset:', offset, 'limit:', this.limit);

    this.futureNewsService.getNewsEvents(this.limit,offset).subscribe({
      next: data =>{
        console.log('Ricevuto dall\'API:', data);
        this.newsCard = data;
        this.cdr.detectChanges();
    
      },
      error: err =>{ 
        console.error('Errore:', err)
      }
    })
   
  }

  //evento click per il cambio pagina con le news nuove
onChangePage(pageNumber : number){
   if( pageNumber < 1) return     // controllo per valori negativi: se false ferma tutto
   

   this.currentPage =  pageNumber;
   this.offset =  (this.currentPage - 1) * this.limit;
   this.loadNews();
}
 
prev(){
  this.offset = (this.currentPage - 1);
}

}
