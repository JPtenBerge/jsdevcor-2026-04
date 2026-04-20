console.log('wow!');

const x = 14;
let y = 28;
var z = 42;

const obj = { baseUrl: 'https://blabla...'};
obj.hatseflats = 'wow!';

// console.log(x);

// x = 234567;

console.log(x);
console.log(obj);

let getal = 14.2;
let afgerond = (getal * 6).toFixed(2);

console.log(getal * 6);
console.log('afgerond:', Math.round(getal * 6));
console.log('afgerond met 2 decs:', afgerond * 1);
console.log('afgerond met 2 decs:', parseInt(afgerond));
console.log('afgerond met 2 decs:', parseFloat(afgerond));
console.log('afgerond met 2 decs:', +afgerond);
console.log('afgerond met 2 decs:', Number(afgerond));
console.log('afgerond met 2 decs:', ~~afgerond);
console.log(0.1 + 0.2);
console.log(0.3 - 0.2);

console.log('isnan bla', Number.isNaN('bla'));
console.log('isnan NaN', Number.isNaN(NaN));

console.log('typeof NaN', typeof NaN);

console.log('7 / bla', 7 / 'bla');
console.log('NaN == NaN', NaN == NaN);

if (isNaN(7 / 'bla')) {
    console.log('hey dat is nan');
}
else {
    console.log('geen nan')
}

let text = 'hoi🎉🌈👍';
console.log([...text].length);
