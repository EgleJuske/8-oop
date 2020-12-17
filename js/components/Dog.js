import { Pet } from './Pet.js';

class Dog extends Pet {
   constructor(vardas, spalva) {
    super(vardas, spalva);
    this.sound = 'Au au';
   }

   voice() {
       console.log(`${this.name}: ${this.sound}!`);
   }
}

export { Dog }