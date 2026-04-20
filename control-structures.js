
// let value = 'huh';
// switch (value) {
//     case 'what': func(); break;
//     case 42: func(); break;
//     case []: func(); break;
//     case {}: func(); break;
//     case 'what': func(); break;
//     default: func();
// }

let obj = { name: 'Tijs', age: 38 };
// for (let prop in obj) { // door object keys - 1996 
//     // reflection
//     console.log(prop, obj[prop]);
// }
// new Map().set('key','value')

for (let prop of Object.keys(obj)) { // door object keys - 1996 
    // reflection
    // if (prop === 'name') continue;

    console.log(prop, obj[prop]);
}
console.log('==========');

let lijstje = [4,8,15,16,23,42];
for (let item of lijstje) { // door array - 2015
    console.log(item);
}