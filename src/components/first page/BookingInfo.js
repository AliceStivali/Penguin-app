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
                ],
                //prezzo e varie opzioni per il volo
                price: {
                    grandTotal: 00, // prezzo totale con le tasse
                    total: 00, // prezzo del volo più vari servizi
                    base: 00, //prezzo base del volo
                    currency: "EUR", //valuta del booking
                    // servizi di volo obbligatori
                    fees: [
                      {
                        type: "SUPPLIER", //tipo di opzione
                        amount: 0 //costo
                      },
                      // li ho lasciati per avere un linea guida sulle varie servizi
                      {
                        type: "FORM_OF_PAYMENT",
                        amount: 0
                      },
                      {
                        type: TICKETING,
                        amount: 0
                      }
                    ],
                    // servizi di volo facoltativi
                    additionalServices: [
                      {
                        type: "CHECKED_BAGS",
                        amount: 0
                      },
                      {
                        type: "SEATS",
                        amount: 0
                      }
                    ]
                  },
                  //resoconto del prezzo per viaggiattore
                  travelerPricings: [
                    {
                      travelerId: 1, // uguale a quello nella sezione "travelers"
                      fareOption: "STANDARD", //dovrebbe essere la selezione della tipologia di offerta (tipo prime di edreams)
                      travelerType: "ADULT", // se è abbastanza grande per bere
                      //prezzo del volo da prendere dai dati del volo se c'è altrimenti possiamo toglierlo
                      price: {
                        currency: EUR,
                        total: 200.94,
                        base: 126,
                        taxes: [
                          {
                            "code": "YQ",
                            "amount": "0.94"
                          },
                          {
                            "code": "CJ",
                            "amount": "41.67"
                          },
                          {
                            "code": "FR",
                            "amount": "31.33"
                          }
                        ]
                      }
                    }]
              }]}
    })

    return ( <div>

    </div> );
}

export default BookingInfo;
