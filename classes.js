
// class Ding {}

// class LivingBeing {
//     constructor() {
//         if (new.target === LivingBeing) {
//             throw new Error('Instantieer subclasses, niet deze');
//         }
//     }
// }

function LivingBeing() {
    console.log('ja hoor');
}

function dingesMixin() {
    return class {

    };
}


class Human extends dingesMixin() {
    // name;
    static nrOfHumans = 0;
    #bla = 14;
    _dinges = 14;

    // ding = new Ding();

    constructor(name) {
        super();
        this.name = name;
        
        Human.nrOfHumans++;
        console.log(`hier constructor, nu ${Human.nrOfHumans} mensen `);
    }

    speak() {
        console.log('alle komaan heeft Chrome dat niet?', this.name)
    }
}

// new LivingBeing();

let tijs = new Human('Tijs');
let tijs1 = new Human('Tijs');
let tijs2 = new Human('Tijs');
let tijs3 = new Human('Tijs');
let tijs4 = new Human('Tijs');
let tijs5 = new Human('Tijs');
tijs.speak();

// console.log(tijs.#bla);

// in java/C#  private int _getal;
// Reflection  typeof (Program).GetProperties(BindingFlags.NonPublic)

// highcharts
// (chart.options as any).labels.xAxis

// praktische use cases?
// - steeds minder en minder.
// - React: class => function-based API
// - Vue: class => function-based API
// - Angular: route guard/resolver, HTTP interceptor => functions

// backends
// - Express: geen classes
// - Nest.js - code lijkt op Angular
// - Next.js (React)
// - Nuxt.js (Vue)