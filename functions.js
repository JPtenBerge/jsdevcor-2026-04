// Simple functions & (formal/optional) parameters

function brew(variant = brew.defaultVariant, ...toppings) {
    console.log(`Brewing ${variant}${toppings.length? ` with ${toppings.join(', ')}`: ''}`);
}

brew.defaultVariant = 'Coffee';

brew('Cappuccino', 'sugar');
brew()

function throwDice(sides = choose10Sides()) {
    console.log(`throwing ${sides}`);
}

throwDice();
throwDice();
throwDice();

function choose10Sides() {
    return Math.floor(Math.random() * 10);
}

// console.log(brew.length);
// console.log(brew.defaultVariant);





// Hoisting
function distance(p1, p2) {
    return Math.sqrt(pow2(p1.x - p2.x) + pow2(p1.y - p2.y));
    
    function pow2(val) {
        return val ** 2;
    }
}
console.log(distance({x: 1, y: 1}, {x:2, y: 2}));


// Props on functions

function times2(val, ...rest) {
    return val * 2;
}
function uniqueValues(cur, index, arr) {
    return arr.indexOf(cur) === index;
}

const someArray = [1, 2, 3, 3, 2, 1, 4];
const uniques = someArray.filter(uniqueValues);
const uniques2 = [...new Set(someArray)];
console.log(uniques);
console.log(uniques2);

// Arrow functions


// 1. No hoisting

const distance2 = (p1, p2) => {
  return Math.sqrt(pow2(p1.x - p2.x) + pow2(p1.y - p2.y));
  // Does not work!
  var pow2 = (val) => {
    return val ** 2;
  }
}

// console.log(distance2({ x: 1, y: 1 }, { x: 2, y: 2 }));

const times2ASecondTime = x => x * 2;
const createPerson = name => ({ name });
console.log(createPerson('Nico'))


const double = function (x) {
  return x + x;
};
console.log(double.name);

