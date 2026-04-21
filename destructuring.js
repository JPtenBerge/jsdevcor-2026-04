let human = {
  name: "Tijs",
  age: 25,
  favorieteDingen: ["Honkbal", "Gamen", "Cricket"],
};
let {
  nameq,
  age: ageq,
  favorieteDingen: [meestFavoDing],
} = human;
console.log(meestFavoDing);

let lijstje = [4, 8, 15, 16, 23, 42];
let [, , derde, vierde, ...rest] = lijstje;
console.log(derde, vierde, rest);

console.log(human.name);
console.log(ageq);

// waar wordt dit gebruikt?
// React

// const [value, setValue] = useState();

let prop = "product.title";
let [mainProp, subProp] = prop.split(".");

let monitor = { product: { title: "Monitor " } };
monitor["product.title👻🌈🤢🤢🧨 (*&^%$##$%^&*()_(^&%@#$%ET^&"] = 14;

monitor["product"]["title"];
// monitor[splits[0]][splits[1]]
monitor[mainProp][subProp];

console.log(monitor);

let dateString = "2026-05-28";
let regex = /^([0-9]{4})-([0-9]{2})-([0-9]{2})$/;
let [, jaar, maand, dag] = dateString.match(regex);
// let matches = dateString.match(regex);
console.log(jaar, maand, dag);
// console.log(matches);

let products = [
  { name: "q", price: 14 },
  { name: "w", price: 14 },
  { name: "e", price: 14 },
];
for (let { name, price } of products) {
  console.log(name, price);
}

const getLocation = ({
  city = "Veenendaal",
  country = "Belgie",
} = locationInfo = {}) => {
  console.log("locatie bepalen voor", city, country);
};
getLocation();
getLocation({});
getLocation({ city: "Utrecht" });
getLocation({ country: "Netherlands" });


import { test, expect } from '@playwright/test';

test('has title', async (context) => {
    const { page, dinges } = context;

  await context.page.goto('https://playwright.dev/');

  // Expect a title "to contain" a substring.
  await expect(context.page).toHaveTitle(/Playwright/);
});


