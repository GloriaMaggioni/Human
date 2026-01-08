 //categorie giuisto per il dataset per eventi naturalistici del sito della regione lombardia(da sistemare per il dataset giusto)
 export interface futureNewsCard {
    img: string
    tipologia: string,
    parchi?:string,
    titolo_evento: string,
    descrizione_evento: string,
    sito?: {
        url: string
    }
    localita: string,
    provincia: string,
    data: string,      //no formato ISO standard
    orario_evento: string ,
    località_del_ritiro : string ,
    iscrizioni_partecipanti?: string,
    info_e_prenotazioni?: string

 }