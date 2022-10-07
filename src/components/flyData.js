export const data = {
    type: "flight-offer",
    id: "1",
    source: "GDS",
    instantTicketingRequired: false,
    nonHomogeneous: false,
    oneWay: false,
    lastTicketingDate: "2022-09-24",
    numberOfBookableSeats: 9,
    itineraries: [
        {
            duration: "PT19H40M",
            segments: [
                {
                    departure: {
                        iataCode: "SYD",
                        terminal: "1",
                        at: "2022-11-01T19:15:00",
                    },
                    arrival: {
                        iataCode: "SIN",
                        terminal: "1",
                        at: "2022-11-02T00:30:00",
                    },
                    carrierCode: "TR",
                    number: "13",
                    aircraft: {
                        code: "789",
                    },
                    operating: {
                        carrierCode: "TR",
                    },
                    duration: "PT8H15M",
                    id: "99",
                    numberOfStops: 0,
                    blacklistedInEU: false,
                },
                {
                    departure: {
                        iataCode: "SIN",
                        terminal: "1",
                        at: "2022-11-02T09:30:00",
                    },
                    arrival: {
                        iataCode: "BKK",
                        at: "2022-11-02T10:55:00",
                    },
                    carrierCode: "TR",
                    number: "606",
                    aircraft: {
                        code: "788",
                    },
                    operating: {
                        carrierCode: "TR",
                    },
                    duration: "PT2H25M",
                    id: "100",
                    numberOfStops: 0,
                    blacklistedInEU: false,
                },
            ],
        },
    ],
    price: {
        currency: "EUR",
        total: "291.20",
        base: "180.00",
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
        grandTotal: "291.20",
    },
    pricingOptions: {
        fareType: ["PUBLISHED"],
        includedCheckedBagsOnly: true,
    },
    validatingAirlineCodes: ["SQ"],
    travelerPricings: [
        {
            travelerId: "1",
            fareOption: "STANDARD",
            travelerType: "ADULT",
            price: {
                currency: "EUR",
                total: "291.20",
                base: "180.00",
            },
            fareDetailsBySegment: [
                {
                    segmentId: "99",
                    cabin: "ECONOMY",
                    fareBasis: "O2TR24",
                    class: "O",
                    includedCheckedBags: {
                        weight: 30,
                        weightUnit: "KG",
                    },
                },
                {
                    segmentId: "100",
                    cabin: "ECONOMY",
                    fareBasis: "O2TR24",
                    class: "O",
                    includedCheckedBags: {
                        weight: 30,
                        weightUnit: "KG",
                    },
                },
            ],
        },
    ],
};
