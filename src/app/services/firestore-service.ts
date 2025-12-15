import { Injectable } from '@angular/core';
import { getDocs, collection,query, where } from 'firebase/firestore';
import { Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService {
  constructor(private firestore : Firestore){}

  async getCharacters(tipo: 'history'| 'future', city?: string){
     const collectionName = tipo === 'history'  ? 'historyCharacters' : 'futureCharacters'
     const collectionRef = collection(this.firestore, collectionName)

     //chiamata a firestore in base se city c\'è o no
     let charactersReturn;
     if(!city){
      charactersReturn = await getDocs(collectionRef);
     }else{
      const queryCall = query(collectionRef, where('city', '==', city));
      charactersReturn = await getDocs(queryCall)
     }

     //convertire i dati ricevuti in dati che possiamo usare
     return charactersReturn.docs.map((doc) => doc.data());
  }
  
}
