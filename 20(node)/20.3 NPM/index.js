//var generateName = require('sillyname');

import superheroes from "superheroes";
import generateName from "sillyName"

const name = superheroes.random();
console.log(`I am ${name}!`);


var sillyName = generateName();
console.log(`my name is ${sillyName}!`);

