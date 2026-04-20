let lijstje = [4, 8, 15, 16, 23, 42];

// lijstje.splice(3, 2);

// RxJS/signals
// lijstje = lijstje.filter(x => x !== 16);

lijstje.length = 0;
// lijstje.length = 6;
lijstje.push(108);

console.log("echte length:", lijstje.length);

// lijstje['999'] = 108;
// lijstje['-5'] = 4848;

// lijstje.push() // toevoegen aan eind van array
// lijstje.unshift() // toevoegen aan begin van array
// lijstje.shift() // verwijderen eerste element
// lijstje.pop() // verwijderen laatste element

console.log(lijstje);

for (let i = 0; i < lijstje.length; i++) {
  console.log(lijstje[i]);
}

// een array in JS is eigenlijk geen array.
// het is gewoon een object met een hoop
// ingebouwde array-like functies/properties.

let obj = { name: "Tijs", age: 54 };
console.log(obj.name);
console.log(obj["name"]);

// puzzel
let obj2 = {
  x: 24,
  y: "hoi",
};
console.log(obj2);
console.log([, , ,].length);

