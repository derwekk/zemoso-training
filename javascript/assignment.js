function checkEven(n, boolCheckEven) {
  if (boolCheckEven(n)) console.log("Even");
  else console.log("Odd");
}

function boolCheckEven(n) {
  if (n % 2 == 0) return true;
  else return false;
}

even(8, boolCheckEven);


//assignment 2
let getInitials = (firstName, lastName) => firstName[0] + lastName[0];

console.log(getInitials("Derek", "Allen"));
