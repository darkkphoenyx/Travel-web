const ItineraryData = {
    title: "Explore Kathmandu - Chitwan - Pokhara",
    sub_title: "Travel Itinerary",
    itinerary: [
        {
            id: "1",
            day: "Monday",
            program: "Arrival in Kathmandu",
            overnight: "Mandala Boutique Hotel (MBH)",
            meals: "-/-/WD",
            transfer: "Airport"
        },
        {
            id: "2",
            day: "Tuesday",
            program: "Drive Kathmandu - Soti Khola",
            overnight: "Lodge",
            meals: "B/L/D",
            transfer: "Drive"
        },
        {
            id: "3",
            day: "Wednesday",
            program: "Drive Soti Khola - Chitwan",
            overnight: "Kasara",
            meals: "B/L/D",
            transfer: "Drive"
        },
        {
            id: "4",
            day: "Thursday",
            program: "Chitwan Activities",
            overnight: "Kasara",
            meals: "B/L/D",
            transfer: "Activities"
        },
        {
            id: "5",
            day: "Saturday",
            program: "Drive Chitwan – Pokhara",
            overnight: "Hotel Asia (HA)",
            meals: "B/L/-",
            transfer: "Drive"
        },
        {
            id: "6",
            day: "Sunday",
            program: "Pokhara (Free Day)",
            overnight: "Hotel Asia (HA)",
            meals: "B/-/-",
            transfer: "Free Day"
        },
        {
            id: "7",
            day: "Monday",
            program: "Pokhara (Free Day)",
            overnight: "Hotel Asia (HA)",
            meals: "B/-/-",
            transfer: "Free Day"
        },
        {
            id: "8",
            day: "Tuesday",
            program: "Flight Pokhara – Kathmandu",
            overnight: "Mandala Boutique Hotel (MBH)",
            meals: "B/-/-",
            transfer: "Flight"
        },
        {
            id: "9",
            day: "Wednesday",
            program: "Kathmandu (Free Day)",
            overnight: "Mandala Boutique Hotel (MBH)",
            meals: "B/-/-",
            transfer: "Free Day"
        },
        {
            id: "10",
            day: "Thursday",
            program: "Kathmandu (Free Day)",
            overnight: "Mandala Boutique Hotel (MBH)",
            meals: "B/-/-",
            transfer: "Free Day"
        },
        {
            id: "11",
            day: "Friday",
            program: "Departure",
            overnight: "-",
            meals: "B/-/-",
            transfer: "-"
        }
    ],
    inclusions: [
        "4 nights stay in Mandala Boutique Hotel in Kathmandu",
        "1 night in Hotel Asia in Pokhara",
        "2 nights in Kasara Resort or a similar category hotel",
        "Full board (Breakfast, lunch, and dinner) for 4 nights",
        "Private tourist standard car from Beshishar to Chitwan, Chitwan to Pokhara",
        "Local jeep from Sotikhola to Beshishar",
        "Welcome dinner",
        "Lunch on the way from Chitwan to Pokhara",
        "Domestic airfare (Pokhara - Kathmandu)",
        "All government taxes and service charges"
    ],
    exclusions: [
        "International airfare, Nepal visa, and health insurance",
        "All lunch and dinner in Kathmandu and Pokhara",
        "Beverages like beer, coke, and mineral water",
        "Personal expenses like tips for drivers, porters, and guides",
        "Sightseeing, entry fees, and extra activities in Kathmandu, Pokhara, and throughout the trek",
        "Excess baggage charges for domestic flights",
        "Expenses beyond the itinerary due to unforeseen conditions",
        "Personal travel and rescue insurance",
        "Helicopter rescue charges",
        "Extra costs due to delay or cancellation of flights to/from Pokhara"
    ],
    notes: {
        baggage: {
            normal_baggage: "10 kg",
            handbag: "5 kg",
            excess_baggage_cost: "$1.5 per kg"
        },
        kasara_resort: {
            accommodation: "Deluxe Room",
            amenities: [
                "Tea/coffee maker in the room",
                "Breakfast, lunch, and dinner"
            ],
            activities: [
                "Tharu cultural dance program",
                "Wildlife activities (canoeing, jungle walk, crocodile breeding center visit, Tharu village tour, bird watching, cycling)",
                "Jeep safari inside the national park"
            ],
            extra_costs: [
                "Spa facilities",
                "Personal expenses like bar and laundry"
            ]
        }
    }
};
export default ItineraryData;
