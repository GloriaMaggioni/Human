import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection } from '@angular/fire/firestore';
import { History_Characters, Future_Characters } from '../components/carousel/characters.model';

@Injectable({
  providedIn: 'root'
})
export class UploadCharactersService {

  constructor(private firestore : Firestore){}
  async uploadCharacters(){
      const historyCollection = collection(this.firestore, 'historyCharacters');
      const futureCollection = collection(this.firestore, 'futureCharacters');

     const historyPromises =  History_Characters.map( ( character) =>{
          addDoc(historyCollection, character)
      });
      await Promise.all(historyPromises);
      console.log('HistoryCharacters caricati');


     const futurePromises = Future_Characters.map( (character) => {
         addDoc(futureCollection, character)
      });
      await Promise.all(futurePromises);
      console.log('FutureCharacters caricati')

     


  }
}
