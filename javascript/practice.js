let foo = 42; // foo is now a number
foo = "bar"; // foo is now a string
foo = true; // foo is now a boolean

//Basic numbers
var x = 102; //integer value
var y = 102.7; //floating point value
var z = 13e4; //exponent value, output: 130000
var n = new Number(16); //integer value by number object
console.log(x + " " + y + " " + z + " " + n);

//BigInt
const a1 = BigInt(Number.MAX_SAFE_INTEGER);
const b1 = BigInt(Number.MIN_SAFE_INTEGER);
console.log(a1);
console.log(b1);

//string comparision
const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

//let allows you to declare block-level variables
let a2;
let name = "Simon";

//const allows you to declare variables whose values are never intended to change.
const Pi = 3.14; // Declare variable Pi
console.log(Pi); // 3.14

for (let i = 0; i < 5; i++) {
  // Will execute 5 times
}

//array
const a4 = ["dog", "cat", "hen"];
a4[100] = "fox";
console.log(a4.length); // 101
console.log(a4); // ['dog', 'cat', 'hen', empty × 97, 'fox']

//classes
class Person {
  constructor(name) {
    this.name = name;
  }
  sayHello() {
    return `Hello, I'm ${this.name}!`;
  }
}

const p = new Person("Maria");
console.log(p.sayHello());
