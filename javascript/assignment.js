function even(n, checkEven) {
  if (checkEven(n)) console.log("Even");
  else console.log("Odd");
}

function checkEven(n) {
  if (n % 2 == 0) return true;
  else return false;
}

even(8, checkEven);


//assignment 2
let x = (firstName, lastName) => firstName[0] + lastName[0];

console.log(x("Derek", "Allen"));
