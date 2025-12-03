import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';


 export interface carouselImg {
  id: number,
  img: string,
  cit: string,
  name: string,
  bornDate: number;
  deathDate: number,
  profession: string
 }
@Component({
  selector: 'app-milano',
  imports: [],
  templateUrl: './milano.component.html',
  styleUrl: './milano.component.css'
})
export class MilanoComponent implements OnInit, OnDestroy {

 carouselImg :  carouselImg [] = [
    { 
      id: 1,
      img :'/assets/charactersImages/AdaNegri.jpg', 
      cit: '"Io scrivo per dare una voce a chi non ne ha"', 
      name: 'Ada Negri ', 
      bornDate: 1870,
      deathDate:  1945,
      profession: 'Poetessa e scrittrice, prima donna ammessa all’Accademia D’Italia'
    },
     {
      id: 2,
      img :'/assets/charactersImages/ClaraMattei.jpg', 
      cit: '"Io scrivo per dare una voce a chi non ne ha"', 
      name: 'Clara Mattei ', 
      bornDate: 1870,
      deathDate:  1945,
      profession: 'Poetessa e scrittrice, prima donna ammessa all’Accademia D’Italia'
    },
     { 
      id: 3,
      img :'/assets/charactersImages/CristinaTrivulzio.jpg', 
      cit: '"Io scrivo per dare una voce a chi non ne ha"', 
      name: 'Cristina Trivulzio', 
      bornDate: 1870,
      deathDate:  1945,
      profession: 'Poetessa e scrittrice, prima donna ammessa all’Accademia D’Italia'
    }
  ]

  currentId : number= 0;
  private intervalId : any;
  //ascolta i cambiamenti
  constructor(private cdr: ChangeDetectorRef){}


// prende l'elemento corrente
  get currentImg(): carouselImg{
   return this.carouselImg[this.currentId]
  }
  ngOnInit(): void{
    this.start()
  }
  start(): void {
    this.intervalId = setInterval( () => {
      this.nextImg();
      this.cdr.detectChanges()

    }, 3000)
  }

  stop(): void {
    if(this.intervalId){
      clearInterval(this.intervalId)
    }
  }

  nextImg(): void {
    if(this.currentId < this.carouselImg.length - 1){
      this.currentId++;
    } else {
      this.currentId = 0;
    }
  }

  // ritorna all'inizio
  prevImg(): void {
    if(this.currentId > 0){
      this.currentId--;
    } else {
      this.currentId = this.carouselImg.length -1;
    }
    this.cdr.detectChanges();
    console.log('Cambiato a:', this.currentImg.name);
  }

  ngOnDestroy(): void {
    this.stop()
  }

}
