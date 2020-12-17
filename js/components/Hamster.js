import { Pet } from './Pet.js';

class Hamster extends Pet {
    constructor(vardas, spalva) {
        super(vardas, spalva);
        this.sound = 'Hrm hrm';
    }
}

export { Hamster }