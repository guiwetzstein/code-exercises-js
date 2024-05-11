/**
 * DATA
 */

const GOOD_CLIMATE = [
    'sunny',
    'cloudy',
    'drizzle',
    'rainy',
    'snowy',
    'windy',
    'foggy',
    'stormy',
    'hail',
    'thunderstorm',
    'sleet',
]

const BAD_CLIMATE = [
    'tornado',
    'hurricane',
    'blizzard',
    'sandstorm',
    'volcanic ash',
    'flood',
    'earthquake',
    'wildfire',
    'avalanche',
    'tsunami',
    'meteor shower',
]

const CLIMATES_LIST = [
    ...GOOD_CLIMATE,
    ...BAD_CLIMATE,
]

const TODAYS_CLIMATE = CLIMATES_LIST[Math.floor(Math.random() * CLIMATES_LIST.length)];

/**
 * CODE
 */


class LogMove {
    static log(model, km) {
        console.log(`The car ${model} moved ${km}km already. Today's climate: ${TODAYS_CLIMATE}.`);
    }
}


class LogError {
    static log(error) {
        console.error(`Error: ${error}`);
    } 
}

class Car {
    constructor(model, km) {
        this.model = model;
        this.km = km;
    }

    drive(km) {
        if (BAD_CLIMATE.includes(TODAYS_CLIMATE)) {
            LogError.log(`The weather is too bad to drive (${TODAYS_CLIMATE}).`);
            return;
        }
        this.km += km;
        LogMove.log(this.model, this.km);
    }
}

const car1 = new Car('Fusca', 0);
car1.drive(10);

console.log('end');