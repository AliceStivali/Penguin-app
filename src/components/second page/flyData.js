const data = {
  type: "flight-offer",
  id: "1",
  source: "GDS",
  instantTicketingRequired: false,
  nonHomogeneous: false,
  oneWay: false,
  lastTicketingDate: "2022-10-26",
  numberOfBookableSeats: 9,
  itineraries: [
    {
      duration: "PT9H40M",
      segments: [
        {
          departure: {
            iataCode: "SYD",
            terminal: "1",
            at: "2022-11-01T10:30:00",
          },
          arrival: {
            iataCode: "BKK",
            at: "2022-11-01T16:10:00",
          },
          carrierCode: "QF",
          number: "23",
          aircraft: {
            code: "333",
          },
          operating: {
            carrierCode: "QF",
          },
          duration: "PT9H40M",
          id: "1",
          numberOfStops: 0,
          blacklistedInEU: false,
        },
      ],
    },
  ],
  price: {
    currency: "EUR",
    total: "587.76",
    base: "516.00",
    fees: [
      {
        amount: "0.00",
        type: "SUPPLIER",
      },
      {
        amount: "0.00",
        type: "TICKETING",
      },
    ],
    grandTotal: "587.76",
  },
  pricingOptions: {
    fareType: ["PUBLISHED"],
    includedCheckedBagsOnly: true,
  },
  validatingAirlineCodes: ["QF"],
  travelerPricings: [
    {
      travelerId: "1",
      fareOption: "STANDARD",
      travelerType: "ADULT",
      price: {
        currency: "EUR",
        total: "587.76",
        base: "516.00",
      },
      fareDetailsBySegment: [
        {
          segmentId: "1",
          cabin: "ECONOMY",
          fareBasis: "SLATDO",
          class: "S",
          includedCheckedBags: {
            weight: 30,
            weightUnit: "KG",
          },
        },
      ],
    },
  ],
};

export default data;
