interface IEngine {
    type: string;
    cylinderCapacity: string;
    getInfo(): string;
}

class Car {
    brand: string;
    model: string;
    engine: IEngine;

    constructor(brand: string, model: string, engine: IEngine) {
        this.brand = brand;
        this.model = model;
        this.engine = engine;
    }

    getInfo() {
        console.log(`
            Brand: ${this.brand}
            Model: ${this.model}
            Engine: ${this.engine.getInfo()}
        `);
    }
}

class VolksEngine implements IEngine {
    type: string = 'combustion';
    cylinderCapacity: string = '2.0';

    getInfo() {
        return `${this.type} ${this.cylinderCapacity}`
    }
}

class HondaEngine implements IEngine {
    type: string = 'combustion';
    cylinderCapacity: string = '1.5 Turbo';

    getInfo() {
        return `${this.type} ${this.cylinderCapacity}`
    }
}

const car = new Car('Volkswagen', 'Golf', new VolksEngine());
car.getInfo();
const car2 = new Car('Honda', 'Civic', new HondaEngine());
car2.getInfo();
