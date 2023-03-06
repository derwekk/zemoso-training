/*
Refactor the following function into a one-liner:
const printName = (name) => {
                     return “Hi” + name;
           }
*/
printName = (name2) => console.log("Hi " + name2);
printName("Derek");

/*
Rewrite the following code using template literals
const printBill = (name, bill) => {
                     return “Hi “ + name + “, please pay: “ + bill; 
*/
const printBill = (name, bill) => {
  return "Hi + ${name} +  please pay: ${bill}";
};

/*
Modify the following code such that the object properties are destructured and logged.
const person = {
                      name: “Noam Chomsky”,
                      age: 92
            }
           
           let name = person.name;
           let age = person.age;
           console.log(name);
           console.log(age);
*/

const person = {
  name1: "Noam Chomsky",
  age: 92,
};

const { name1 = "Default value", age } = person;
console.log(name1);
console.log(age);
