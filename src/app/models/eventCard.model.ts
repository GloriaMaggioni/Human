// INTERFACCIA PER LA EVENT CARD CON I PARAMETRI DA PRENDERE

import { Interface } from "readline"

export interface EventCard {      // TODO: DA SISTEMARE LA STRUTTURA DEI DATI E INSERIRE I CAMPI CORRETTI
  id?: string                   // ? vedere se serve
  name?: string,
  type?: string,               // classe (es. evento, upSell, corso ,attrazione(es.sport),etc..)
  url?: string,                //vedere se serve
  info?: string,        
  classifications? : {   // tipo di evento(es. sport -Basket-NBA )
    name?: string        //sport
     genre?: {       
       name?: string,     // Basket
     },
     subgenre?: {
       name?: string      //NBA
     },
     type?: {              //! DA ELIMINARE POI: PROBABILMENTE NON SERVE
      name?: string      // group
     }
     subType?: {             //! DA ELIMINARE POI: PROBABILMENTE NON SERVE
       name?: string     //Team
     }
  },
  images?: {
    ratio?: string,        //! DA ELIMINARE POI: PROBABILMENTE NON SERVE
    url?: string
  },
  date?: {          // data evento
    start?: {
      dateTime?: string,
      localDate?: string,
      localTime?: string
    }
    status?:{
      code?: string,        //onsale
      timezone?: string      //America/Phoenix
    },
    
  },
  _embedded?: {
    venues?: 
      Array<{
          name?: string,
          city?: { name?: string };
          url?: string,
          country?: {countryCode?: string, name?: string},
          images?: {url?: string}
          location?: {latitudine?: string, longitudine?: string},         // ? vedere se serve
          postalCode?: string,
          state?: {name?: string, stateCode?: string}
          timeZone?: string

      }>;
    attractions?:           // artista/performer
      Array<{
        name?: string,
        url?: string,
        images?: string,              // ? vedere se serve
        classifications?:{
          name?: string,
          segment?:{name?: string},    // tipologia evento (es. sport) //SPORT
          subGenre?:{name?:string}    //NBA
          url?: string
        }
        externalLinks?: {
          facebook?: {url?: string},
          homepage?: {url?: string},
          instagram?: {url?: string},
          twitter?: {url?: string},
          wiki?: {url?: string}
        }
      }>;
    promoter?:            // organizzatore dell'evento
      Array<{
        name?: string,
        description?: string
      }>
    products?:          // prodotti(es tickets)
      Array<{
        classifications?: {
           id?: string,
           name?: string,
           url?: string,
           type?: string       // ? vedere se serve
        }
        
      }>
     

  }
 

  

}







