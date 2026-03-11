export interface Places { 
   features : Array<{
     properties : {
        name: string,
        address_line1? : string,   // mostra nome del posto (es. Museo d'Arte Contemporanea)
        address_line2? : string,   // mostra la via completa (es. Viale Elisa Ancona, 6, 20851 Lissone MB, Italy)
        housenumber: string,       // mostra numero civico
        formatted: string,         // mostra la via completa con nome edificio : address_line1 + address_line2 (es.Museo d'Arte Contemporanea, Viale Elisa Ancona, 6, 20851 Lissone MB, Italy)
        country?: string,
        country_code?: string,
        city?: string,            //'Lissone'
        lat: number,   // valore obbligatorio
        lon: number,   // valore obbligatorio
        contact?: {
            email?: string,
            phone?: string
        }
        opening_hours?: string,
        postcode?: string,
        state?: string,
        state_code?: string      //'Lombardia'
        street?: string         // mostra solo il nome  della via
        building?: {
            type?: string
        }
        datasource?: {
            sourcename?: string,
            url?: string
        }
        website: string
     }

   }>
}
