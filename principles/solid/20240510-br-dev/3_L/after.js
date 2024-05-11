class BirdThatFly {
    fly() {
        console.log('I can fly.');
    }

    emitSound() {
        console.log('???');
    }
}

class BirdThatSwim {
    swim() {
        console.log('I can swim.');
    }

    emitSound() {
        console.log('???');
    }
}

class Duck extends BirdThatFly {
    emitSound() {
        console.log('Quack-quack!');
    }
}

class Penguin extends BirdThatSwim {
    emitSound() {
        console.log('Honk-honk!');
    }
}

function makeBirdFly(bird) {
    bird.fly();
}

function makeBirdSwim(bird) {
    bird.swim();
}

const duck = new Duck();
const penguin = new Penguin();

makeBirdFly(duck);
makeBirdSwim(penguin); // it works

const baseDuck = new BirdThatFly();
const basePenguin = new BirdThatSwim();

makeBirdFly(duck);
makeBirdSwim(penguin); // it still works
