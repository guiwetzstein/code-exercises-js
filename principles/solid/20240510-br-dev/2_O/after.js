class Transport {
    constructor(carrier, volume) {
        this.carrier = carrier;
        this.volume = volume;
    }
    
    getMultiplier() {
        return 1;
    }

    calculateCost() {
        return this.volume * this.getMultiplier();
    }
}

class Truck extends Transport {
    constructor(volume) {
        super('truck', volume);
    }

    getMultiplier() {
        return 500;
    }
}

class Ship extends Transport {
    constructor(volume) {
        super('ship', volume);
    }

    getMultiplier() {
        return 300;
    }
}

class Plane extends Transport {
    constructor(volume) {
        super('plane', volume);
    }

    getMultiplier() {
        return 1000;
    }
}

const truck = new Truck(10);
const ship = new Ship(10);
const plane = new Plane(10);
console.log(truck.calculateCost());
console.log(ship.calculateCost());
console.log(plane.calculateCost());