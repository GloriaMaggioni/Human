import { ChangeDetectorRef, Component, inject, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage, NgStyle } from '@angular/common';
import { carousel } from '../../carousel/carousel.model';
import { CarouselComponent } from '../../carousel/carousel.component';
import { FirestoreService } from '../../../services/firestore-service';


@Component({
  selector: 'app-milano',
  standalone:true,
  imports: [CarouselComponent],
  templateUrl: './milano.component.html',
  styleUrl: './milano.component.css'
})
export class MilanoComponent implements OnInit {
 characters : any[] = []
 private firestoreService = inject(FirestoreService)
 private cdr = inject(ChangeDetectorRef)

 //DA RIVEDERE POI IN BASE AL FILTRO DELLA CITTA: ADD FILTRO CITTA OLTRE A QUELLO DELLA PAGINA
  ngOnInit(): void {
    this.prendiCharacters()
  }

  async prendiCharacters(){
    this.characters = await this.firestoreService.getCharacters('history');
    this.cdr.detectChanges()
  }



}
