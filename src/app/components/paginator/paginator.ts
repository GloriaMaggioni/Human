import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NewsCityService } from '../../services/news-city.service';


@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator implements OnInit  {

@Input() currentPage: number = 1
 @Input() newsForPage = 10;   //numero news per pagina
 @Input() totalPages : number = 20;  // numero tot di pagine
  @Output() changePage :  EventEmitter<any> = new EventEmitter()
 


     pages: number[] = [];

     ngOnInit(): void {
      const totalPages: number = Math.ceil(this.totalPages / this.newsForPage)   // pagine tot servite per mostrare le news
      this.numberPage()
     
       
     }

     numberPage() {
       for(let i = this.currentPage; i <= this.totalPages; i++){  // mostra i numeri delle pagine dinamicamente
          this.pages.push(i)
        }
          console.log(this.pages)
     }


     //metodo che emette il numero della pagina con event emitter

     changePageClick(pageNumber: number){
      this.changePage.emit(pageNumber)
     }

    prev(){
      
         this.changePage.emit(this.currentPage - 1)   
          console.log('paginacorrente', this.currentPage)
       

    }
    next(){
      this.changePage.emit(this.currentPage + 1)     
      console.log('paginacorrente', this.currentPage)
    
    
    }
  
  
   
   }
  
