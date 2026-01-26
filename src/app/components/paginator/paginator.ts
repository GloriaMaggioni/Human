import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { NewsCityService } from '../../services/news-city.service';


@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator implements OnInit, OnChanges  {


   @Input() currentPage : any;
   @Input() totalPages: number = 0;
   @Input() newsPerPage!: number;
   @Input() totalNews: any;

   @Output() changePage : EventEmitter<any> = new EventEmitter()     // evento per cambiare la pagina al click
  
    pages : number[] = [];    // array per immagazzinare il numero delle pagine 





  ngOnInit(): void {
   
    this.paginatorLength()
  }


  ngOnChanges(changes: SimpleChanges){
    if(changes['totalNews'] || changes['newsPerPage']){
       this.paginatorLength()
    }
  
  }

   // aumentare/diminuire la lunghezza del paginator dinamicamente
    paginatorLength(){ 
      if(this.totalNews > 0) {
      this.totalPages = Math.ceil(this.totalNews / this.newsPerPage)    // calcolo del totale delle pagine
   }       
      let start = 1;      
      let end = this.totalPages                                             // dove finisce il paginator
       this.pages = Array.from({length: end - start + 1}, (_, i) => i + 1)  // calcolo della lunghezza dell'array delle news
       console.log('questo è totalPages:', this.totalPages)
       console.log('questo è pages:', this.pages)
      }


    // evento click (verso il padre)
     changePageClick(pageNumber: number){    
       this.changePage.emit(pageNumber)       
     }

      // TODO: METTERE CONTROLLO PER DISABILITARE I BUTTTONS
      prev(){
      this.changePage.emit(this.currentPage - 1)   
      console.log('paginacorrente', this.currentPage)
       

    }
    next(){
      this.changePage.emit(this.currentPage + 1)     
      console.log('paginacorrente', this.currentPage)
    
    
    }
    
}
