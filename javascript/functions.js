function add(x, y) {
  const total = x + y;
  return total;
}

var x = add(1, 2);
console.log(x);

function updateBrand(obj) {
  // Mutating the object is visible outside the function
  obj.brand = "Toyota";
  // Try to reassign the parameter, but this won't affect
  // the variable's value outside the function
  obj = null;
}

const car = {
  brand: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(car.brand); // Honda

// Pass object reference to the function
updateBrand(car);

// updateBrand mutates car
console.log(car.brand); // Toyota

//Padded zeros
// This function returns a string padded with leading zeros
function padZeros(num, totalLen) {
  let numStr = num.toString(); // Initialize return value as string
  const numZeros = totalLen - numStr.length; // Calculate no. of zeros
  for (let i = 1; i <= numZeros; i++) {
    numStr = `0${numStr}`;
  }
  return numStr;
}

let result;
result = padZeros(42, 4); // returns "0042"
console.log(result);
result = padZeros(42, 2); // returns "42"
console.log(result);
result = padZeros(5, 4); // returns "0005"
console.log(result);