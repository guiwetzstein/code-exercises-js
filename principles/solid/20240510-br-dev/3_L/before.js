class Bird {
    fly() {
        console.log('I can fly.');
    }

    emitSound() {
        console.log('???');
    }
}

class Duck extends Bird {
    emitSound() {
        console.log('Quack-quack!');
    }
}

class Penguin extends Bird {
    fly() {
        throw new Error('I can\'t fly.');
    }

    swim() {
        console.log('I can swim.');
    }

    emitSound() {
        console.log('Honk-honk!');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdFly(penguin); // it breaks, but it's a different behavior than the parent class

const baseDuck = new Bird();
const basePenguin = new Bird();

makeBirdFly(duck);
makeBirdFly(penguin); // it works, but penguin should not fly
