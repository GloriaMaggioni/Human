import { Component } from '@angular/core';
import { CarouselComponent } from '../../carousel/carousel.component';
import { carousel } from '../../carousel/carousel.model';
@Component({
  selector: 'app-lecco',
  imports: [CarouselComponent],
  templateUrl: './lecco.component.html',
  styleUrl: './lecco.component.css'
})
export class LeccoComponent {
   carousel :  carousel [] = [
    { 
      img :'/assets/charactersImages/AntonioStoppani.jpg', 
      cit: '"La natura è un libro aperto per chi sa leggerlo"', 
      name: 'Andrea Stoppani ', 
      bornDate: 1824,
      deathDate:  1891,
      profession: 'Geologo, naturalista e scrittore',
      background: '/assets/charactersImages/AntonioStoppani.jpg'
    },
     {
      img :'/assets/charactersImages/CarloMauri.jpg', 
      cit: '"L\'avventura è scuola di vita"', 
      name: 'Carlo Mauri', 
      bornDate: 1930,
      deathDate:  1982,
      profession: 'Alpinista, esploratore e scrittore',
      background: '/assets/charactersImages/CarloMauri.jpg'
    },
     { 
      img :'/assets/charactersImages/GiuseppeParini.jpg', 
      cit: '"Ben folle è quegli che a rischio de la vita onor si merca."', 
      name: 'Giuseppe Parini', 
      bornDate: 1729,
      deathDate:  1799,
      profession: 'Poeta',
      background: '/assets/charactersImages/GiuseppeParini.jpg'
    }
  ]

}
