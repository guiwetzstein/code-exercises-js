interface Vehicle {
    wheels: number;
    driveApparatus: string;
    ride(): void;
    getFuelStatus(level: number): string;
}

class Car implements Vehicle {
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

class Helicopter implements Vehicle {
    wheels: number; // XX
    driveApparatus: string; // XX
    pilotNumber: number;

    constructor(wheels: number, driveApparatus: string, pilotNumber: number) {
        this.wheels = wheels;
        this.driveApparatus = driveApparatus;
        this.pilotNumber = pilotNumber;
    }

    ride() { // XX
        console.log('Flying a helicopter');
    }

    getFuelStatus(level: number) {
        return level > 5 ? 'Fuel level is good' : 'Need to refuel';
    }
}
