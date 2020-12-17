// OBJEKTAS
// - parametru rinkinys
// - funkcionalumo rinkinys

/*

Animal.js (params: name, color, sound; methods: voice(), introduce();)
    Pet.js (paveldi is Animal.js)
        Dog.js (paveldi is Pet.js)
        Cat.js (paveldi is Pet.js)
        Hamster.js (paveldi is Pet.js; params: canEatTillDeath)

    Bird.js (paveldi is Animal.js; params: wingsCount, canFly; methods: flyAway();)
        Chicken.js (viska paveldi is Bird.js)
        Parrot.js (viska paveldi is Bird.js)
        Eagle.js (viska paveldi is Bird.js)
        Dragonfly.js (viska paveldi is Bird.js; params: imposter=true;)


    Fish.js (paveldi is Animal.js; params: canSwim; methods: swimAway();)
        Goldfish.js (viska paveldi is Fish.js; params: grantsWishes; methods: makeWish();)
        Nemo.js (viska paveldi is Fish.js)

*/

import { Dog } from './components/Dog.js';
import { Cat } from './components/Cat.js';
import { Hamster } from './components/Hamster.js';

const toris = new Dog('Toris', 'brown');

console.log(`${toris.name} is ${toris.color}`);


toris.voice();

const murkis = new Cat('Murkis', 'golden');

murkis.voice();

const kukulis = new Hamster('Kukulis', 'yellow')
kukulis.voice();

kukulis.introduce('Egle');