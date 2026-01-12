import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'stream';
import { NewsCityService } from '../../services/news-city.service';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator implements OnInit  {

@Input() currentPage: number = 1
 @Input() newsForPage = 10;
 @Input() totalPages : number = 20
// @Output() changePage = new EventEmitter<any>()


     pages: number[] = [];

     ngOnInit(): void {
      let pageCount: any = Math.ceil(this.totalPages / this.newsForPage)
        for(let i = this.currentPage; i <= this.totalPages; i++){  // mostra i numeri delle pagine dinamicamente
          this.pages.push(i)
        }
                  console.log(this.pages)
     }

}
