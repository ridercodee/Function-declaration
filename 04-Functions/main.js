// getters and setters method in function
class Flightplan { 

    #internalDepartureTime = null;

  constructor(callsign= '', departure = '', destination = '') {
   this.callsign = callsign;
   this.departure = departure;
   this.destination = destination;
  }

print () { 
  let info = `${this.callsign} departs from ${this.departure}`  + 
      `and lands at ${thgis.destination}`;
      console.log(info);
  }

  get departureTime () { 
    return this.#internalDepartureTime.toLocaleString();
  }

  set departureTime (date) { 
    if (!date) { 
      throw new Error('Date cannot be null');
    }

    this.#internalDepartureTime = date;
  }

}

const berlintoParis = new Flightplan('FR5639', 'Berlin', 'Paris');
berlintoParis.departureTime = new Date(2024, 1, 1, 18, 0);
console.log(berlintoParis.departureTime);