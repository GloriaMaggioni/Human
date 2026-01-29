import { ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";
import { carousel } from '../../models/carousel.model';
import { CarouselComponent } from '../carousel/carousel.component';
import { FirestoreService } from '../../services/firestore-service';

@Component({
  selector: 'app-history-page',
  standalone:true,
  imports: [ RouterOutlet, CarouselComponent],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent implements OnInit{
   characters: any[]=[]
   private firestoreService =  inject(FirestoreService)
   private cdr = inject(ChangeDetectorRef)


 

  ngOnInit(): void {
       this.prendiCharacters()
  }
   async prendiCharacters(){
   this.characters = await this.firestoreService.getCharacters('history');
   this.cdr.detectChanges()
 
   
  }
  
   
   


  

}


