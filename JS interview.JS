//What is the difference between == and === in JavaScript?
// '==' checks for equality after type coercion
console.log(1 == "1"); // true
console.log(1 == true); // true

// '===' checks for strict equality without type coercion
console.log(1 === "1"); // false
console.log(1 === true); // false

//How would you check if a variable is an array in JavaScript?
// You can use the `Array.isArray()` method
let arr = [1, 2, 3];
console.log(Array.isArray(arr)); // true

let str = "hello";
console.log(Array.isArray(str)); // false

//How do you clone an object in JavaScript?
// You can use the spread operator
let obj = { a: 1, b: 2 };
let cloneObj = { ...obj };
console.log(cloneObj); // {a: 1, b: 2}

//What is a closure in JavaScript and how is it used?
// A closure is an inner function that has access to the outer function's variables
function outer() {
  let name = "John";
  function inner() {
    console.log(name);
  }
  return inner;
}
let innerFunc = outer();
innerFunc(); // outputs 'John'

//How do you handle errors in JavaScript?
// You can use try-catch blocks to handle errors
try {
  // code that might throw an error
} catch (error) {
  // handle the error
  console.log(error.message);
}
