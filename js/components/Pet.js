class Pet {
    constructor(vardas, spalva) {
        this.name = vardas;
        this.color = spalva;
        this.sound = 'Miau au hrm';
    }

    voice() {
        console.log(`${this.name}: ${this.sound}!`);
    }

    introduce(friendName) {
        console.log(`Hi ${friendName}, I am ${this.name}! My color is ${this.color} and I say ${this.sound}!`);
    }
}

export { Pet }