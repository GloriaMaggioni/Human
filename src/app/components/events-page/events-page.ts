import { Component, inject, Input, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import { EventCard } from '../../models/eventCard.model';
import { NewsService } from '../../services/news.service';
import { Paginator } from '../paginator/paginator';
import { ChangeDetectorRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { filter } from 'rxjs';



@Component({
  selector: 'app-events-page',
  standalone: true,
  imports: [MatButtonModule, MatSidenavModule,Paginator, DatePipe ],
  templateUrl: './events-page.html',
  styleUrl: './events-page.css'
})

export class EventsPage implements OnInit{
 private cdr = inject(ChangeDetectorRef);
 private  callApi = inject(NewsService);

 @Input() currentPage : number = 1;
 @Input() limit : number = 20;
 @Input() offset : number = (this.currentPage - 1) * this.limit;
 @Input() totalEvents : number = 0;     // numero eventi di default
  
  private apiUrl = 'https://app.ticketmaster.com/discovery/v2/events.json?apikey=6p0QSvZIxwHJjEGXdbtGTlu1zMpv2K9n';
  cards: EventCard[] = [];   // immagazzina i dati per gli events

selectedIndex: number = 0;        // tab scelta categoria 
filter : string = ''       

 el : any = null;
 isOpen = false;



  ngOnInit(): void {
    this.getEvents()
   
  }
 tabs = [         // array dei tabs
    { label: 'All' , filter: ''},
    { label: 'Art & Theater', filter: '?classificationName=Arts & Theatre' },
    { label: 'Museum/ Exhibits', filter: '?classificationName=Miscellaneous' },
    { label: 'Readings', filter: '?classificationName=Arts & Theatre' },  // stesso di Art & Theater
    { label: 'Plays', filter: '?classificationName=Theatre' },  // genre specifico
    { label: 'Book', filter: '?classificationName=Lectures' },   // genre specifico 
    { label: 'Multimedia', filter: '?classificationName=Film' }
  ];

  buttonSelected(index: number) {    // indica quale tab è stato selezionato
    this.selectedIndex = index;
      this.filter = this.tabs?.[index].filter
    this.getEvents();
    console.log('filtro:', this.tabs?.[index].filter)
  }

 


  

  getEvents(){
    this.callApi.fetchData((this.apiUrl + filter), this.limit, this.offset).subscribe(
      {
        next: data =>{
          this.cards = data._embedded?.events || [];
          this.totalEvents = this.cards.length;   
           this.cdr.detectChanges();
          console.log('Primo evento', this.cards)
        },
        error: err => console.error('Errore nella chiamata:', err)
      }
    )
    
    
  }

  openDetails(index : number){
    this.el = this.cards[index];
    this.isOpen= true
  }

  closeDetails(){
    this.isOpen= false
     this.el = null;
  }

  // metodo per il cambio pagina con il paginator
  onChangePage(pageNumber: number) {
    if(pageNumber < 1) return;

    this.currentPage = pageNumber;
    this.offset = (this.currentPage - 1) * this.limit;
    this.getEvents()
  }
  
}

  

 



