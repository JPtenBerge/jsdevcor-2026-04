// formatter: Prettier  oxc  Biome

// let x = '<script>alert("hoi");</script>' + bla + 'qq';
// let y = "hoi " + bla + "";

// let z = `hoi 

// ${y}

// dfsdfds`;

// regular expressions.

// '."/
let emailaddress = "ik@jp.nl";
let regex = /^[a-zA-Z.-]+@[a-z-]+\.nl$/;


if (regex.test(emailaddress)) {
  console.log("email is geldig!", emailaddress);
} else {
  console.log("email is NIET geldig!", emailaddress);
}
