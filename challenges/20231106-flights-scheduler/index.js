class Flight {
    /**
     * Creates a new flight
     * @param {string} origin - flight origin
     * @param {string} destination 
     * @param {string} departureTime 
     * @param {string} arrivalTime 
     */
    constructor(origin, destination, departureTime, arrivalTime) {
        this.origin = origin;
        this.destination = destination;
        this.departureTime = departureTime;
        this.arrivalTime = arrivalTime;
    }
}

/**
 * I've created this Scheduler class because of SOLID's Single Responsability principle.
 * Flight class shouldn't handle any scheduling logic and of course should not handle more than one flight.
 */
class Scheduler {
    constructor(flights) {
        this.flights = flights;
    }

    /**
     * 
     * @param {array} flights 
     * @returns 
     */
    canScheduleFlights(flights) {
        // No more than 1000 flights allowed
        if (!flights || flights.length > 1000) {
            return false;
        }
    
        // Origins cannot be repeated
        const origins = flights.map((flight) => {
            return flight.origin;
        });
        if (origins.length !== (new Set(origins)).size) {
            return false;
        }
    
        // Destinations cannot be repeated
        const destinations = flights.map((flight) => {
            return flight.destination;
        });
        if (destinations.length !== (new Set(destinations)).size) {
            return false;
        }
    
        let timeCheck = null;
        for (const flight of flights) {
            if (flight.origin === flight.destination) {
                return false;
            }
    
            const depart = new Date(`August 19, 2023 ${flight.departureTime}:30`);
            const arrival = new Date(`August 19, 2023 ${flight.arrivalTime}:30`);
    
            if (depart.getTime() >= arrival.getTime()) {
                return false;
            }
            
            if (timeCheck && depart.getTime() <= timeCheck) {
                return false;
            }
            timeCheck = arrival.getTime();
        }
    
        return true;
    }
}

const f1 = new Flight("NYC", "LAX", "08:00", "11:00");
const f2 = new Flight("LAX", "CHI", "12:00", "15:00");
const f3 = new Flight("CHI", "MIA", "16:00", "19:00");
const f4 = new Flight("MIA", "NYC", "20:00", "22:00");
const f5 = new Flight("NYC", "ATL", "08:30", "11:30");

const testFlights = [f1, f2, f3, f4];

const scheduler = new Scheduler(testFlights);

console.log(scheduler.canScheduleFlights(testFlights));
