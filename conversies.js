// ===
// geen var
// use strict

console.log(2 == "2");
console.log(2 === "2"); // types verschillen? false. geen conversie.

// 8 falsey: 0 null undefined '' NaN false 0n -0

let obj = { x: 24, toString() { return 'bla'; } };

let bla = 'hoi';
bla = 42;
bla = [];
bla = {};
bla = undefined;

console.log(obj.toString());

if (obj == "bla") {
  console.log("ja!");
} else {
  console.log("nope");
}

// localStorage: opslag in de browser. handig voor instellingen.
if (window.localStorage) {
  console.log("wordt WEL  ondersteund");
} else {
  console.log("wordt NIET ondersteund");
}

console.log(+'42');
console.log(~~'42');