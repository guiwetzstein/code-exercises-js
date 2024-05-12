class Car {
    brand: string;
    model: string;
    engine: VolksEngine;

    constructor(brand: string, model: string) {
        this.brand = brand;
        this.model = model;
        this.engine = new VolksEngine();
    }

    getInfo() {
        console.log(`
            Brand: ${this.brand}
            Model: ${this.model}
            Engine: ${this.engine.getInfo()}
        `);
    }
}

class VolksEngine {
    type: string = 'combustion';
    cylinderCapacity: string = '2.0';

    getInfo() {
        return `${this.type} ${this.cylinderCapacity}`
    }
}

const car = new Car('Volkswagen', 'Golf');
car.getInfo();
