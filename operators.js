console.log(4 + 4);
console.log("bla" + "hoi");
console.log(4 + "234");
console.log("bla" - "hoi");
console.log(4 - "hoi");
console.log(4 * 4);
console.log(4 ** 4);
console.log(9 / 3);
console.log(16 % 3);

console.log(~4);

let newValue = 4 | 12;
console.log(newValue);

let ohNee = 2 >>> newValue;

//  0    0  0  0 0 1 0 0
//  0    0  0  0 1 0 0 0
// p/n  64 32 16 8 4 2 1

//  1   1   1  1  1 1 0 1 1
// -127

let andVariant = 4 && 8; // truthy? dan rechts pakken
console.log("andVariant:", andVariant);

let orVariant = 4 || 8; // links truthy? meteen dat linkerding pakken.
console.log("orVariant:", orVariant);

if (newValue > 4 && newValue < 12) {
}

doe({ location: null });
doe({ location: "Utrecht" });

function doe(config) {
  config.location = config.location ?? "Amsterdam";
  console.log("doe voor " + config.location);
}

let obj = { x: 24, y: "hoi" };
delete obj.y;
console.log(obj);

// null vs undefined?
// - het is allebei niks. er is iets niet. absence of something
// - undefined = default afwezig
// - null = altijd ingesteld

console.log(obj.hatseflats);

let returnValue = doe({});
console.log(returnValue);

// let element = document.querySelector('#sadjkfsdjkfdjkfdjkgf');
// console.log(element);
console.log("typeof undefined:", typeof undefined);
console.log("typeof null:", typeof null);

let element = document.querySelector("h1");
console.log(element.innerText);
element.innerText ||= "iets";

let value = 4 > 8 ? "ja" : "nee";

let arr1 = [2, 4, 6];
let arr2 = [7, 9, 15];

let alles = [...arr1, ...arr2];
console.log(alles);

let obj1 = { x: 24, y: "hoi", q: [] };
let obj2 = { x: 99, z: "fuck it" };
let combined = { ...obj1, ...obj2 };
// combined.q.push(422);
console.log(combined);

// how to clone an object
// 1. shallow: spreading { ...obj1, ...obj2 }
// 2. deep clone met library: _.cloneDeep()
// 3. zelf recursief loopen 🤢
// 4. deep clone: JSON.parse(JSON.stringify(obj))
// 5. structuredClone() native in JavaScript

structuredClone(obj);

let objectje = {
  tijs: "nee",
  tijs2: 3854,
  nu: new Date(),
  func: () => {},
  elem: document.querySelector("qq"),
};

function cloneDeep(obj) {
    return JSON.parse(JSON.stringify(obj));
}

let result = (4 ,8, 15,16,23,42); // evalueer links, return rechts
console.log(result);