class Transport {
    constructor(carrier, volume) {
        this.carrier = carrier;
        this.volume = volume;
    }
    
    calculateCost() {
        if (this.carrier === 'truck') {
            return this.volume * 500;
        } else if (this.carrier === 'ship') {
            return this.volume * 300;
        } // ....
    }
}

const carrier1 = new Transport('truck', 10);
const carrier2 = new Transport('ship', 10);
console.log(carrier1.calculateCost());
console.log(carrier2.calculateCost());