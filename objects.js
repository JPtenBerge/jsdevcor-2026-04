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


const person = {
  _firstName: 'Albert',
  get firstName() {
    return this._firstName;
  },
  set firstName(val) {
    if(val.length < 2) {
      throw new RangeError(`FirstName should have at least 2 characters, was ${val.length}, received: ${JSON.stringify(val)}`)
    }
    this._firstName = val;
  },

  surname: 'Einstein',
  get fullName() {
    return `${this.firstName} ${this.surname}`;
  },
  // BAD PRACTICE!!
  set fullName(val) {
    const nameParts = val.split(' ');
    this.firstName = nameParts[0];
    this.surname = nameParts.slice(1).join(' ');
  },

  changeName(firstName, surname) {
    this.firstName = firstName;
    this.surname = surname;
  }
}

console.log(person.fullName);
person.firstName = 'Nico';
console.log(person.fullName);
person.fullName = 'Gert Jan Timmerman';
console.log(person.firstName); // !!! 
// person.firstName = 'a';


const stringAllToLowercase = {
  _val: '',
  set val(newVal) {
    this._val = newVal.toLowerCase();
  },
  get val() {
    return this._val;
  }
}

stringAllToLowercase.val = 'AlL CAPS!!';

console.log(stringAllToLowercase.val)


const washCar = {
  title: 'Wash car',
  due: new Date(2026, 3, 25),
}

const stringified = JSON.stringify(washCar);
const parsed = JSON.parse(stringified);

console.log(typeof parsed.due);
