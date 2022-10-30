import { useState } from "react";

function BookingInfo() {
    const [bookingInfo, setBookingInfo] = useState({
        // dati del volo
        data: {
            type: flight-order,
            id: null, // da prendere dal api del volo o da creare
            queuingOfficeId: null, // da prendere dal api del volo o da creare
            associatedRecords: [
              {
                reference: null, // da prendere dal api del volo o da creare
                creationDateTime: null,  // da impostare appena entra in questa pagina
                originSystemCode: "1A", // da prendere dal api del volo o da creare
                flightOfferId: 1  // se impostiamo un login è da gestire altrimenti rimane 1 oppure lo togliamo
              }
            ],
            //dati del cliente
            travelers: [
              {
                id: 0, // numero che incrementa in base al numero dei clienti
                dateOfBirth: null, //data di nascita da prendere da un input e da verificare se sia impostata senza errore
                // nome e cognome del viaggiatore
                name: {
                  firstName: "",
                  lastName: ""
                },
                // informazioni per contattare il viaggiatore
                contact: {
                    // numero di telefono
                  phones: [
                    {
                      countryCallingCode: 00, //nella libreria del autocomplete c'è proprio un esempio su questo codice, non dovrebbe essere cosi complicato da implementare
                      number: 000000000
                    }
                  ],
                  email: "" //email del viaggiatore
                },
                //documenti del viaggiatore
                documents: [
                  {
                    documentType: "", //tipo del documento, penso che un bel select sia la scelta migliore
                    number: 01234567, //ID del documento se non è troppo difficile da verificare lo facciamo
                    expiryDate: null, //data di scadenza del documento
                    issuanceCountry: "", //nazione del documento
                    nationality: "", //nazione del viaggiatore
                  }
                ]
              }]}
    })

    return ( <div>

    </div> );
}

export default BookingInfo;
