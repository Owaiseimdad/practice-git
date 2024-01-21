import { add, multiply } from "./add.js";

const age = 24;
const name = "Owaise";

function myName(name) {
  console.log(`Get: ${name}`);
}

myName("PSPS");

console.log(add(1, 2, 3));
console.log(multiply(2, 2, 3, 5));
