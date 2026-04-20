// computed property names
let suffix = "name";

let tijs = {
  ["first" + suffix]: "Tijs",
  ["last" + suffix]: "Van Kampen",
  age: 25,
  age: 956,
};
console.log(tijs);

// factory functions

function createPerson(overrides) {
  return {
    name: "Tijs",
    age: 25,
    ...overrides,
  };
}
let tijs2 = createPerson({ name: "Koen" });
console.log(tijs2);
