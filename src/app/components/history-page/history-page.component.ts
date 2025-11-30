import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from "@angular/router";

@Component({
  selector: 'app-history-page',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './history-page.component.html',
  styleUrl: './history-page.component.css'
})
export class HistoryPageComponent {

  cityCard = [
    {
      link: 'milan',
      img: '/assets/images/AldaMerini.jpg',
  
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    },
     {
      img: '/assets/images/AldaMerini.jpg',
      link: 'milan',
      label:'Milano'
    }
  ]
  

}
