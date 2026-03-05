import { inject, Injectable, Injector, OnInit, runInInjectionContext } from '@angular/core';
import { getDocs, collection,query, where } from '@angular/fire/firestore';
 import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FirestoreService  {
   private firestore : Firestore =  inject (Firestore) ;
   private injector = inject(Injector);
 

 
// chiamo dei dati 
  async getCharacters(tipo: 'history'| 'future', city?: string) {
    //ricreao il injection context
    return runInInjectionContext(this.injector, async () =>{
      const collectionName = tipo === 'history'  ? 'historyCharacters' : 'futureCharacters'
     const collectionRef = collection(this.firestore, collectionName)

     //chiamata a firestore in base se city c'è o no
     let charactersReturn;
     if(!city){
      charactersReturn = await getDocs(collectionRef);
     }else{
      const queryCall = query(collectionRef, where('city', '==', city));
      charactersReturn = await getDocs(queryCall)
     }

     //convertire i dati ricevuti in dati che possiamo usare
     return charactersReturn.docs.map((doc) => doc.data());

    })
     
  }



  
}
