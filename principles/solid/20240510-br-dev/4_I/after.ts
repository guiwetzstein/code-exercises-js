interface Vehicle {
    getFuelStatus(level: number): string;
}

interface LandVehicle extends Vehicle {
    wheels: number;
    driveApparatus: string;
    ride(): void;
}

interface AerialVehicle extends Vehicle {
    pilotNumber: number;
    fly(): void;
}

class Car implements LandVehicle {
    wheels: number;
    driveApparatus: string;

    constructor(wheels: number, driveApparatus: string) {
        this.wheels = wheels;
        this.driveApparatus = driveApparatus;
    }

    ride() {
        console.log('Riding a car');
    }

    getFuelStatus(level: number) {
        return level > 5 ? 'Fuel level is good' : 'Need to refuel';
    }
}

const car = new Car(4, 'hydraulic');
console.log(car.getFuelStatus(100));
console.log(car.getFuelStatus(4));

class Helicopter implements AerialVehicle {
    pilotNumber: number;

    constructor(pilotNumber: number) {
        this.pilotNumber = pilotNumber;
    }

    fly() {
        console.log('Flying a helicopter');
    }

    getFuelStatus(level: number) {
        return level > 50 ? 'Fuel level is good' : 'Need to refuel';
    }
}

const helicopter = new Helicopter(2);
console.log(helicopter.getFuelStatus(500));
console.log(helicopter.getFuelStatus(40));